import datetime
from datetime import timezone
from django import views
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .bot import send_text
from .configurations import USER_ID
from .forms import ContactForm
from django.core.mail import send_mail
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
                contact = Contact.objects.filter(phone=form.cleaned_data['phone']).first()
                if contact:
                    if not contact.complete:
                        contact.created = datetime.datetime.now(tz=timezone.utc)
                        contact.user_name = form.cleaned_data['user_name']
                        contact.message = form.cleaned_data['message']
                        contact.form_name = form_name
                        contact.save()
                        return HttpResponse(form.errors)
                    else:
                        contact.created = datetime.datetime.now(tz=timezone.utc)
                        contact.user_name = form.cleaned_data['user_name']
                        contact.message = form.cleaned_data['message']
                        contact.complete = False
                        contact.form_name = form_name
                        contact.save()
                        send_mail(
                                subject=contact.form_name,
                                message=f'Повторная заявка {contact.user_name} Номер телефона: {contact.phone}.'
                                        f' {contact.message}',
                                from_email="Zoovet molo",

                                recipient_list=['antonio.troitski@gmail.com'],  # email куда отправляем письма
                                fail_silently=False,
                            )
                        text = f'Повторная заявка\n' \
                               f'{contact.form_name}\n' \
                               f'Заявка от {contact.user_name}\n' \
                               f'Номер телефона: \n{contact.phone}: \n' \
                               f'Сообщение: \n' \
                               f'{contact.message}'
                        send_text(USER_ID, text)
                else:
                    contact = Contact.objects.create(phone=form.cleaned_data['phone'],
                                                     form_name=form_name,
                                                     message=form.cleaned_data['message'],
                                                     user_name=form.cleaned_data['user_name'],
                                                     created=datetime.datetime.now(tz=timezone.utc),
                                                     complete=False
                                                     )
                    send_mail(
                        subject=contact.form_name,
                        message=f'Новая заявка {contact.user_name} Номер телефона: {contact.phone}. {contact.message}',
                        from_email="Zoovet molo",
                        recipient_list=['antonio.troitski@gmail.com'],  # email куда отправляем письма
                        fail_silently=False,
                    )
                    text = f'Новая заявка\n' \
                           f'{contact.form_name}\n' \
                           f'Заявка от {contact.user_name}\n' \
                           f'Номер телефона: \n{contact.phone}: \n' \
                           f'Сообщение: \n' \
                           f'{contact.message}'
                    send_text(USER_ID, text)
                return redirect('/')
            else:
                return HttpResponse(form.errors['user_tel'])
