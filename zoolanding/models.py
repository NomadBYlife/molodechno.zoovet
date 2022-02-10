from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from ckeditor.fields import RichTextField


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
    title = models.CharField(max_length=100, verbose_name='название акции')
    image = RichTextUploadingField(blank=True, null=True, verbose_name='картинка', config_name='custom')
    description = RichTextUploadingField(verbose_name='описание акции')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')
    class Meta:
        verbose_name = 'акция'
        verbose_name_plural = 'акции'

    def __str__(self):
        return self.title

