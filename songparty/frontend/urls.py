from django.urls import path
from . import views as frontend

urlpatterns = [
   path('',frontend.index)
]