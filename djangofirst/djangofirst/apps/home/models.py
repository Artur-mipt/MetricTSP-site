from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


class Task(models.Model):
	owner = models.ForeignKey(User,
	 	related_name="task",
	 	on_delete=models.CASCADE,
	 	null=True)

	image = models.ImageField(upload_to='images')
	edge1 = models.CharField(max_length=100)
	edge2 = models.CharField(max_length=100)
	edge3 = models.CharField(max_length=100)
	edge4 = models.CharField(max_length=100)
	edge5 = models.CharField(max_length=100)
	edge6 = models.CharField(max_length=100)
	answer = models.CharField(max_length=300)
	created_at = models.DateTimeField(auto_now_add=True)
