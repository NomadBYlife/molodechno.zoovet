from django import views
from django.shortcuts import render

# Create your views here.
from django import views
from django.views.generic import ListView

# def mainview(request):
#     return render(request, 'index.html')
from zoolanding.models import Action


def conf_policy(request):
    return render(request, 'conf-policy.html')


class MainView(views.View):

    def get(self, request, *args, **kwargs):
        action_all = Action.objects.all()
        context = {
            'action': action_all[0],
            'action_sec': action_all[1]
        }
        return render(request, 'index.html', context)
