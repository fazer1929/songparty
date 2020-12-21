from django.urls import path
from . import views as api

urlpatterns = [
    path('rooms/',api.RoomView.as_view(),name="main")
]