from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User

class Article(models.Model):
   title = models.CharField(_('title'), max_length=128)
   created_at = models.DateTimeField(_('created at'), auto_now_add=True)
   announce_text = models.TextField(_('announce'), max_length=512, blank=True)
   text = models.TextField(_('text'), max_length=4096)

   def __str__(self):
       return self.title

   @property
   def announce(self):
       return self.announce_text or self.text[:512].rsplit(' ', 1)[0]

   class Meta:
       ordering = ['-created_at']
       verbose_name = _('article')
       verbose_name_plural = _('articles')


class Lead(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField(max_length=100,
							  unique=True)
	message = models.CharField(max_length=500,
							   blank=True)
	created_at = models.DateTimeField(auto_now_add=True)


class Task(models.Model):
	edge1 = models.CharField(max_length=100)
	edge2 = models.CharField(max_length=100)
	edge3 = models.CharField(max_length=100)
	edge4 = models.CharField(max_length=100)
	edge5 = models.CharField(max_length=100)
	edge6 = models.CharField(max_length=100)
	answer = models.CharField(max_length=300)
	created_at = models.DateTimeField(auto_now_add=True)
