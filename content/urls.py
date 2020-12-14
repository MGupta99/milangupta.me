from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('toastedpeanuts', views.toastedpeanuts, name='toastedpeanuts'),
    path('media/<path:path>/', views.image, name='image')
]
