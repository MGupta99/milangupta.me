# Generated by Django 2.2.4 on 2019-08-29 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0007_auto_20190829_1651'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='priority',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
