from django.urls import path, include
from rest_framework import routers
from . import views
from .api import TaskViewSet

router = routers.DefaultRouter()
router.register('', TaskViewSet, 'home')


urlpatterns = router.urls