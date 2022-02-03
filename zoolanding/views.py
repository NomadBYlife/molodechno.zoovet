from django.shortcuts import render


from zoolanding.models import Services


def mainview(request):
    services = Services.objects.all()

    context = {'services': services}
    return render(request, 'index.html', context)


def conf_policy(request):
    return render(request, 'conf-policy.html')
