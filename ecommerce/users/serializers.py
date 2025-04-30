from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    user = UserInfoSerializer(source='*', read_only=True)  # Para incluirlo en la respuesta

class RegistUserSerialzer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True}
        }
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email ya está registrado")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Este usuario ya existe")
        return value
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=make_password(validated_data['password'])  # Encripta la contraseña
        )
        return user

class EditUserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username'
        ]

class EditEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email'
        ]
