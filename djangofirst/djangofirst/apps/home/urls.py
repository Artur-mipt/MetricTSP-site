from django.urls import path
from rest_framework import routers
from . import views
from .api import LeadViewSet, TaskViewSet

router = routers.DefaultRouter()
# router.register('', LeadViewSet, 'home')
router.register('', TaskViewSet, 'home')


urlpatterns = router.urls