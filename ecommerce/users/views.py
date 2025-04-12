from django.shortcuts import render
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from . serializers import LoginSerializer

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
            return Response({'message': 'Login succesfull', 'csrf_token': get_token(request)}, status=status.HTTP_200_OK)
        
        else:
            return Response({'messae': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        # Datos de entrada inválidos
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

