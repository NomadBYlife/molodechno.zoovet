from django import views
from django.http import HttpResponse
from django.shortcuts import render, redirect

from viber_bot.views import send_text
from .forms import ContactForm
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from zoolanding.models import Services, Action, TitleAction, DifferenceFromOtherClinics, Info, Directions, Review, \
    Contact


def conf_policy(request):
    return render(request, 'conf-policy.html')


class MainView(views.View):

    def get(self, request, *args, **kwargs):

        try:
            title_action = TitleAction.objects.get(published=True)
        except Exception as ex:
            print(ex)
            title_action = None

        action_all = Action.objects.filter(title_action=title_action, published=True)[0:2]
        services = Services.objects.filter(published=True)
        differences = DifferenceFromOtherClinics.objects.filter(published=True)[0:6]
        info = Info.objects.filter(published=True)[0:1]
        directions = Directions.objects.filter(published=True)
        review = Review.objects.filter(published=True)
        context = {
            'action': action_all,
            'services': services,
            'differences': differences,
            'info': info,
            'directions': directions,
            'title_action': title_action,
            'review': review,
        }
        return render(request, 'index.html', context)


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            phone_number = form.cleaned_data['phone']
            form_name = form.cleaned_data['form_name']
            updated_values = {
                'form_name': form_name,
                'message': form.cleaned_data['message'],
                'user_name': form.cleaned_data['user_name'],
                'complete': False
            }
            if form.cleaned_data['user_name']:
                Contact.objects.update_or_create(phone=phone_number,
                                                 defaults=updated_values)
                return redirect('zoolanding:home')
            elif form.cleaned_data['message']:
                Contact.objects.update_or_create(phone=phone_number,
                                                 defaults=updated_values)
                return redirect('zoolanding:home')
            else:
                Contact.objects.update_or_create(phone=phone_number,
                                                 defaults=updated_values)
                return redirect('zoolanding:home')
        else:
            return HttpResponse(form.errors['user_tel'])


#  signal:
@receiver(post_save, sender=Contact)
def my_handler(sender, **kwargs):
    name = kwargs['instance']
    mine = Contact.objects.get(phone=name)
    # sending text message to viber bot:
    id = '/fBignHGy9gqVEOoEKNuog=='  # viber id
    text = f'{mine.form_name}\n' \
           f'Заявка от {mine.user_name}\n' \
           f'Номер телефона: \n{mine.phone}: \n' \
           f'Сообщение: \n' \
           f'{mine.message}'

    send_text(id, text)
    # sending email:
    send_mail(
        subject=mine.form_name,
        message=f'Заявка от {mine.user_name}, с номером телефона: {mine.phone}: {mine.message}',
        from_email='FROM EMAIL',
        recipient_list=['TO EMAIL LIST'],
        fail_silently=False,
    )
