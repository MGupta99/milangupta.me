# Generated by Django 2.2.4 on 2019-08-29 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='description',
            field=models.TextField(max_length=1000),
        ),
    ]
