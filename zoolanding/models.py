from django.db import models
from ckeditor.fields import RichTextField
from django.utils.safestring import mark_safe
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator

class MaxSizeValidator(MaxValueValidator):
    """Image validation for maximum size"""
    message = _('Картинка не должна превышать размера %(limit_value)s MB.')

    def __call__(self, value):
        cleaned = self.clean(value.size)
        params = {'limit_value': self.limit_value, 'show_value': cleaned, 'value': value}
        if self.compare(cleaned, self.limit_value * 1024 * 1024):
            raise ValidationError(self.message, code=self.code, params=params)


class Info(models.Model):
    city = models.CharField(verbose_name='Город', max_length=100)
    address = models.CharField(verbose_name='Адрес магазина', max_length=100)
    phone = models.CharField(verbose_name='Номер телефона', max_length=100)
    time_work1 = models.CharField(verbose_name='Время работы (будни)', max_length=100)
    time_work2 = models.CharField(verbose_name='Время работы (выходыне)', max_length=100)

    class Meta:
        verbose_name = 'Информация о нас'
        verbose_name_plural = 'Информация о нас'

    def __str__(self):
        return self.city


class Directions(models.Model):
    name_directions = models.CharField(verbose_name='Название услуги', max_length=250)
    description = RichTextField(verbose_name='Описание услуги')
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True, null=True, verbose_name='Картинка', validators=[MaxSizeValidator(1)])
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Наши основные направления'
        verbose_name_plural = 'Наши основные направления'
        ordering = ['name_directions']

    def __str__(self):
        return self.name_directions

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return mark_safe(f'<img src="{self.image.url}" width="auto", height="100px">')


class Services(models.Model):
    name_services = models.CharField('Название услуги', max_length=250)
    description = RichTextField('Описание услуги')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Категория услуг'
        verbose_name_plural = 'Категории услуг'
        ordering = ['name_services']

    def __str__(self):
        return self.name_services


class Description(models.Model):
    name_of_service = models.CharField('Наименование услуги', max_length=250)
    price = models.DecimalField('Стоимость, бел. руб.', max_digits=5, decimal_places=2)
    service = models.ForeignKey('Services', on_delete=models.CASCADE, related_name='Service',
                                verbose_name='Категория услуг')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Наименование услуги'
        verbose_name_plural = 'Наименование услуг'
        ordering = ['name_of_service', 'price']

    def __str__(self):
        return self.name_of_service


class Action(models.Model):
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True, null=True, verbose_name='картинка', validators=[MaxSizeValidator(1)])
    description = RichTextField(verbose_name='описание акции')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'акция'
        verbose_name_plural = 'акции'

    def __str__(self):
        return self.description[0:50]

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return mark_safe(f'<img src="{self.image.url}" width="auto", height="100px">')
