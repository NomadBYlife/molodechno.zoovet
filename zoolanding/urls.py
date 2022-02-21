from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from zoolanding.views import conf_policy, MainView, contact_view
app_name = 'zoolanding'
urlpatterns = [
    path('', MainView.as_view(), name='home'),  # main page
    path('contact/', contact_view, name='contact'),  # forms
    ]

