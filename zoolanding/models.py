from django.db import models
from ckeditor.fields import RichTextField
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator



class Services(models.Model):
    name_services = models.CharField('Название услуги', max_length=250)
    description = models.TextField('Описание услуги')

    class Meta:
        verbose_name = 'Услугу'
        verbose_name_plural = 'Услуги'
        ordering = ['name_services']

    def __str__(self):
        return self.name_services


class Description(models.Model):
    name_of_service = models.CharField('Наименование услуги', max_length=250)
    price = models.DecimalField('Стоимость, бел. руб.', max_digits=5, decimal_places=2)
    service = models.ForeignKey('Services', on_delete=models.CASCADE, related_name='Service')

    class Meta:
        verbose_name = 'Наименование услуги'
        verbose_name_plural = 'Наименование услуг'
        ordering = ['name_of_service', 'price']

    def __str__(self):
        return f'{self.name_of_service} - {self.price}'





class MaxSizeValidator(MaxValueValidator):
    message = _('The file exceed the maximum size of %(limit_value)s KB.')

    def __call__(self, value):
        # get the file size as cleaned value
        cleaned = self.clean(value.size)
        params = {'limit_value': self.limit_value, 'show_value': cleaned, 'value': value}
        if self.compare(cleaned, self.limit_value * 1024 * 1024):
            raise ValidationError(self.message, code=self.code, params=params)


class Action(models.Model):
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True, null=True, verbose_name='картинка',
                             validators=[MaxSizeValidator(1)])
    description = RichTextField(verbose_name='описание')

    class Meta:
        verbose_name = 'акция'
        verbose_name_plural = 'акции'

    def __str__(self):
        return f'{self.description[:50]}'
