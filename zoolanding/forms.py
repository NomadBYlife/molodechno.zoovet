from django import forms
from zoolanding.models import Review
from .models import Contact


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'


class ReviewAdminChoiceForm(forms.ModelForm):
    def __init__(self,*args, **kwargs):
        super().__init__(*args, **kwargs)
        sorted_choice = sorted(Review.REVIEW_CHOICES, key=lambda x: x[1])
        self.fields['raiting'].choices = sorted_choice
