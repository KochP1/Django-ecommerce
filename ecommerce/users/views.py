from django.shortcuts import render
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import logout
from django.contrib.auth import authenticate

from . serializers import LoginSerializer, RegistUserSerialzer

# Create your views here.

@api_view(['POST', 'GET'])
def log_in(request):
    serializer = LoginSerializer(data = request.data)
    if serializer.is_valid():
        user = authenticate(
            username = serializer.validated_data['username'],
            password = serializer.validated_data['password']
        )

        if user:
            user_data = {
                'message': 'Login successful',
                'csrf_token': get_token(request),
                'user': {
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email     
                }
            }
            return Response(user_data, status=status.HTTP_200_OK)
        
        else:
            return Response({'messae': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Datos de entrada inválidos
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST', 'GET'])
def regist_user(request):
    serializer = RegistUserSerialzer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Usuario creado'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def log_out(request):
    if request.user.is_authenticated:
        log_out(request)
        Response({'message': 'Sesión cerrada'}, status=status.HTTP_200_OK)
    else:
        Response(status=status.HTTP_400_BAD_REQUEST)



