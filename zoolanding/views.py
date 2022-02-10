from django import views
from django.shortcuts import render
from zoolanding.models import Services, Action, DifferenceFromOtherClinics


def conf_policy(request):
    return render(request, 'conf-policy.html')


class MainView(views.View):

    def get(self, request, *args, **kwargs):
        action_all = Action.objects.filter(published=True)[0:2]
        services = Services.objects.filter(published=True)
        differences = DifferenceFromOtherClinics.objects.all()
        context = {
            'action': action_all,
            'services': services,
            'differences': differences,
        }
        return render(request, 'index.html', context)

