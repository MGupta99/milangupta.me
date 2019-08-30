from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('media/<path:path>/', views.image, name='image')
]
