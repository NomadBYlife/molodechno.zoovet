from django import views
from django.shortcuts import render
from zoolanding.models import Services, Action


def conf_policy(request):
    return render(request, 'conf-policy.html')


class MainView(views.View):

    def get(self, request, *args, **kwargs):
        action_all = Action.objects.all()
        services = Services.objects.all()
        context = {
            'action': action_all[0],
            'action_sec': action_all[1],
            'services': services,
        }
        return render(request, 'index.html', context)

