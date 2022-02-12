
from django import views
from django.shortcuts import render
from zoolanding.models import Services, Action, TitleAction, DifferenceFromOtherClinics, Info, Directions


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
        info = Info.objects.filter(published=True)
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
