from django import views
from django.http import HttpResponse
from django.shortcuts import render, redirect

from .forms import ContactForm
from .models import Services, Action, TitleAction, DifferenceFromOtherClinics, Info, Directions, Contact


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
        context = {
            'action': action_all,
            'services': services,
            'differences': differences,
            'info': info,
            'directions': directions,
            'title_action': title_action,
        }
        return render(request, 'index.html', context)


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        print(form.data)
        if form.is_valid():
            updated_values = {'complete': False}
            phone_number = form.cleaned_data['phone']
            form_name = form.cleaned_data['form_name']
            if form.cleaned_data['user_name']:
                print(form_name, 'with name')
                Contact.objects.update_or_create(user_name=form.cleaned_data['user_name'],
                                                 phone=phone_number,
                                                 form_name=form_name,
                                                 defaults=updated_values)
                return redirect('home')
            elif form.cleaned_data['message']:
                print(form_name, 'message')
                Contact.objects.update_or_create(message=form.cleaned_data['message'],
                                                 phone=phone_number,
                                                 form_name=form_name,
                                                 defaults=updated_values)
                return redirect('home')
            else:
                print(form_name, 'just phone')
                Contact.objects.update_or_create(phone=phone_number,
                                                 form_name=form_name,
                                                 defaults=updated_values)
                return redirect('home')
        else:
            print('wrong input')
            print(form.errors)
            return HttpResponse(form.errors['user_tel'])
