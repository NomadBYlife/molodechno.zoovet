from django.urls import path
from .views import privet

app_name = 'viber_bot'
urlpatterns = [
    path('', privet),
]
