import datetime
from datetime import timezone

from django import views
from django.http import HttpResponse
from django.shortcuts import render, redirect
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

    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            form = ContactForm(request.POST)
            if form.is_valid():
                form_name = form.cleaned_data['form_name']
                updated_values = {
                    'form_name': form_name,
                    'message': form.cleaned_data['message'],
                    'user_name': form.cleaned_data['user_name'],
                    'created': datetime.datetime.now(tz=timezone.utc),
                    'complete': False
                }
                Contact.objects.update_or_create(phone=form.cleaned_data['phone'], defaults=updated_values)
                return redirect('/')
            else:
                return HttpResponse(form.errors['user_tel'])


@receiver(post_save, sender=Contact)
def my_handler(sender, **kwargs):
    name = kwargs['instance']
    mine = Contact.objects.get(phone=name)
    send_mail(
        subject=mine.form_name,
        message=f'Новая заявка {mine.user_name} Номер телефона: {mine.phone}. {mine.message}',
        from_email="Zoovet molo",
        recipient_list=['antonio.troitski@gmail.com'],
        fail_silently=False,
    )


