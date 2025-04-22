from django.shortcuts import render
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import logout, login
from django.contrib.auth import authenticate

from . serializers import LoginSerializer, RegistUserSerialzer, EditUserNameSerializer, EditEmailSerializer

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

    logout(request)
    response = Response(
            {
                'message': 'Logout successful',
                'detail': 'Session closed'
            },
            status=status.HTTP_200_OK
        )
    response.delete_cookie('sessionid')
    response.delete_cookie('csrftoken')
    return response

class PatchEmail(APIView):
    allowed_methods = ['PATCH']

    def patch(self, request, pk):
        user = User.object.get(pk = pk)
        serializer = EditEmailSerializer(user, data = request.data, partial = True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)

class PatchUserName(APIView):
    allowed_methods = ['PATCH']

    def get(self, request, pk):
        user = User.objects.get(pk = pk)
        serializer = EditUserNameSerializer(user, many = False, read_only = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch (self, request, pk):
        user = User.objects.get(pk = pk)
        serializer = EditUserNameSerializer(user, data = request.data, partial = True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)





