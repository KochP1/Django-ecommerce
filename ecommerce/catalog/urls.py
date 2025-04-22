from django.urls import path
from . views import ListGames, ListGamesByCompany, ListConsoles, ListConsolesByCompany

urlpatterns = [
    path('games/', ListGames.as_view(), name='games'),
    path('games/<int:pk>/', ListGamesByCompany.as_view(), name='games_by_company'),
    path('consoles/', ListConsoles.as_view(), name='consoles'),
    path('consoles/<int:pk>/', ListConsolesByCompany.as_view(), name='consoles_by_company'),
]
