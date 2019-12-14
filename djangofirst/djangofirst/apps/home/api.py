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
	permission_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = TaskSerializer

	def get_queryset(self):
		return self.request.user.task.all()

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)