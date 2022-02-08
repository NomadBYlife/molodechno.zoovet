from django import views
from django.shortcuts import render
from zoolanding.models import Services, Action, Info, Directions


def conf_policy(request):
    return render(request, 'conf-policy.html')


class MainView(views.View):

    def get(self, request, *args, **kwargs):
        action_all = Action.objects.filter(published=True)[0:2]
        services = Services.objects.filter(published=True)
        info = Info.objects.all
        directions = Directions.objects.filter(published=True)
        context = {
            'action': action_all,
            'services': services,
            'info': info,
            'directions': directions,
        }
        return render(request, 'index.html', context)

