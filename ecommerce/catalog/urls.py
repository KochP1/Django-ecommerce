from django.urls import path
from . views import ListGames, ListGamesByCompany

urlpatterns = [
    path('games/', ListGames.as_view(), name='games'),
    path('games/<int:pk>/', ListGamesByCompany.as_view(), name='games_by_company'),
]
