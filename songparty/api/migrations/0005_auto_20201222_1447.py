# Generated by Django 3.1.3 on 2020-12-22 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_room_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
