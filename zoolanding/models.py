from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from ckeditor.fields import RichTextField


class Info(models.Model):
    city = models.CharField(verbose_name='Город', max_length=100, blank=True, null=True)
    address = models.CharField(verbose_name='Адрес магазина', max_length=100, blank=True, null=True)
    phone = models.CharField(verbose_name='Номер телефона', max_length=100, blank=True, null=True)
    time_work1 = models.CharField(verbose_name='Время работы (будни)', max_length=100, blank=True, null=True)
    time_work2 = models.CharField(verbose_name='Время работы (выходыне)', max_length=100, blank=True, null=True)
    weekend = models.CharField(verbose_name='выходные', blank=True, null=True, max_length=100)
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Информация о нас'
        verbose_name_plural = 'Информация о нас'

    def __str__(self):
        return self.city


class Directions(models.Model):
    name_directions = models.CharField(verbose_name='направление', max_length=250)
    image = RichTextUploadingField(blank=True, null=True, verbose_name='картинка', config_name='custom')
    description = RichTextField(verbose_name='описание направления')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Наши основные направления'
        verbose_name_plural = 'Наши основные направления'
        ordering = ['name_directions']

    def __str__(self):
        return self.name_directions


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
    price = models.CharField(max_length=13, verbose_name='Стоимость, бел. руб.')
    service = models.ForeignKey('Services', on_delete=models.CASCADE, related_name='Service',
                                verbose_name='Категория услуг')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name = 'Наименование услуги'
        verbose_name_plural = 'Наименование услуг'
        ordering = ['name_of_service', 'price']

    def __str__(self):
        return self.name_of_service


class TitleAction(models.Model):
    title = RichTextUploadingField(verbose_name='Заголовок Акций')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')

    class Meta:
        verbose_name_plural = 'Заголовки Акций'
        verbose_name = 'Заголовок Акций'

    def __str__(self):
        return self.title


class Action(models.Model):
    title = models.CharField(max_length=100, verbose_name='название акции')
    image = RichTextUploadingField(blank=True, null=True, verbose_name='картинка', config_name='custom')
    description = RichTextUploadingField(verbose_name='описание акции')
    published = models.BooleanField(default=True, verbose_name='Опубликовано')
    title_action = models.ForeignKey('TitleAction', on_delete=models.SET_NULL,
                                     verbose_name='Заголовок Акций',
                                     blank=True, null=True)

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
        verbose_name = 'Наше отличие'
        verbose_name_plural = 'Наши отличия'

    def __str__(self):
        return self.title


class Review(models.Model):
    REVIEW_CHOICES = {
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),

    }
    title = models.CharField('короткое название', max_length=250)
    author = models.CharField('автор коментария', max_length=100)
    city = models.CharField('город', max_length=100)
    data = models.DateField('дата добавления')
    raiting = models.PositiveIntegerField('оценка', choices=REVIEW_CHOICES)
    content = models.TextField('содержание отзыва')
    published = models.BooleanField('опубликовано', default=True)
    image = RichTextUploadingField(blank=True, null=True, verbose_name='картинка', config_name='custom')
    # image = models.ImageField(upload_to="photo_review/%Y/%m/%d/", blank=True, null=True, verbose_name='фото автора')

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):
        return f'отзыв {self.id} от {self.author}'