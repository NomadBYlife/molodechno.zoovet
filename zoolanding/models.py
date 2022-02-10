from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from ckeditor.fields import RichTextField


class Info(models.Model):
    city = models.CharField(verbose_name='Город', max_length=100)
    address = models.CharField(verbose_name='Адрес магазина', max_length=100)
    phone = models.CharField(verbose_name='Номер телефона', max_length=100)
    time_work1 = models.CharField(verbose_name='Время работы (будни)', max_length=100)
    time_work2 = models.CharField(verbose_name='Время работы (выходыне)', max_length=100)
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

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
  
    title = models.CharField(max_length=100, verbose_name='название акции')
    image = RichTextUploadingField(blank=True, null=True, verbose_name='картинка', config_name='custom')
    description = RichTextUploadingField(verbose_name='описание акции')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Акция'
        verbose_name_plural = 'Акции'

    def __str__(self):
        return self.title

      
class DifferenceFromOtherClinics(models.Model):
    title = models.CharField('Название отличия', max_length=100)
    description = models.TextField('Описание')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Отличие от других клиник'
        verbose_name_plural = 'Отличия от других клиник'

    def __str__(self):
        return self.title
