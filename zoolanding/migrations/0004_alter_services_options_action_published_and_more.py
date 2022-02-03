# Generated by Django 4.0.2 on 2022-02-03 19:22

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('zoolanding', '0003_services_alter_action_description_description'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='services',
            options={'ordering': ['name_services'], 'verbose_name': 'Категория услуг', 'verbose_name_plural': 'Категории услуг'},
        ),
        migrations.AddField(
            model_name='action',
            name='published',
            field=models.BooleanField(default=False, verbose_name='Опубликовано'),
        ),
        migrations.AddField(
            model_name='description',
            name='published',
            field=models.BooleanField(default=False, verbose_name='Опубликовано'),
        ),
        migrations.AddField(
            model_name='services',
            name='published',
            field=models.BooleanField(default=False, verbose_name='Опубликовано'),
        ),
        migrations.AlterField(
            model_name='action',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='описание акции'),
        ),
        migrations.AlterField(
            model_name='description',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Service', to='zoolanding.services', verbose_name='Категория услуг'),
        ),
        migrations.AlterField(
            model_name='services',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Описание услуги'),
        ),
    ]
