# Generated by Django 2.2.6 on 2019-12-09 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128, verbose_name='title')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('announce_text', models.TextField(blank=True, max_length=512, verbose_name='announce')),
                ('text', models.TextField(max_length=4096, verbose_name='text')),
            ],
            options={
                'verbose_name': 'article',
                'verbose_name_plural': 'articles',
                'ordering': ['-created_at'],
            },
        ),
    ]
