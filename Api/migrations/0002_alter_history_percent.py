# Generated by Django 4.2.7 on 2023-11-04 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='percent',
            field=models.FloatField(default=0),
        ),
    ]
