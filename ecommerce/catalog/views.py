from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . models import Game, Consoles
from . serializers import GameSerializer, ListGamesSerializer, ConsoleSerializer, ListConsoleSerializer, ListConsoleSerializerDetailed

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

class ListConsoles(APIView):
    allowed_methods = ['GET', 'POST', 'HEAD', 'OPTIONS']

    def get(self, request):
        consoles = Consoles.objects.all()
        serializer = ListConsoleSerializer(consoles, many = True, read_only = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ConsoleSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

class ListConsolesByCompany(APIView):
    allowed_methods = ['GET', 'HEAD', 'OPTIONS']

    def get(self, request, pk):
        consoles = Consoles.objects.filter(Company_name = pk).all()
        serializer = ListConsoleSerializerDetailed(consoles, many = True, read_only = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
