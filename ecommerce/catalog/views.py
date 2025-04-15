from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . models import Game
from . serializers import GameSerializer, ListGamesSerializer

# Create your views here.

class ListGames(APIView):
    allowed_methods = ['GET', 'POST', 'HEAD', 'OPTIONS']

    def get(self, request):
        games = Game.objects.all()
        serializer = ListGamesSerializer(games, many = True, read_only = True)
        return Response(serializer.data, status= status.HTTP_200_OK)
    
    def post(self, request):
        serializer = GameSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status= status.HTTP_201_CREATED)
    
class ListGamesByCompany(APIView):
    allowed_methods = ['GET', 'HEAD', 'OPTIONS']

    def get(self, request, pk):
        games = Game.objects.filter(Company_name = pk).all()
        serializer = ListGamesSerializer(games, many = True, read_only = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
