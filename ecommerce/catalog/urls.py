from django.urls import path
from . views import ListGames

urlpatterns = [
    path('games/', ListGames.as_view(), name='games'),
]
