# Generated by Django 4.2.7 on 2023-11-03 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_name', models.CharField(max_length=255)),
                ('percent', models.IntegerField(default=0)),
                ('book_id', models.CharField(max_length=255)),
            ],
        ),
    ]
