from home.models import Lead, Task
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer, TaskSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
	queryset = Lead.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = LeadSerializer


# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = TaskSerializer