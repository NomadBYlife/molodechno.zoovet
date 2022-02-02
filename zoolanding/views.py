from django.shortcuts import render

# Create your views here.


def mainview(request):
    return render(request, 'index.html')


def conf_policy(request):
    return render(request, 'conf-policy.html')