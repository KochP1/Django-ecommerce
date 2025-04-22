from rest_framework import serializers
from . models import Game, Genre, Company, Consoles

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = [
            'genre'
        ]

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            'company_name'
        ]

class ListGamesSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(read_only = True)
    company = CompanySerializer(read_only = True, source = 'Company_name')

    class Meta:
        model = Game
        fields = [
            'id',
            'genre',
            'company',
            'Company_name',
            'game_name',
            'description',
            'release_date',
            'price',
            'game_image'
        ]

class GameSerializer(serializers.ModelSerializer):
    game_image = serializers.ImageField(required=False)
    class Meta:
        model = Game
        fields = [
            'genre',
            'Company_name',
            'game_name',
            'description',
            'release_date',
            'price',
            'game_image'
        ]

class ConsoleSerializer(serializers.ModelSerializer):
    console_image = serializers.ImageField(required=False)
    class Meta:
        model = Consoles
        fields = [
            'Company_name',
            'console_name',
            'description',
            'release_date',
            'price',
            'console_image'
        ]

class ListConsoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consoles
        fields = [
            'id',
            'Company_name',
            'console_name',
            'description',
            'release_date',
            'price',
            'console_image'
        ]

class ListConsoleSerializerDetailed(serializers.ModelSerializer):
    company = CompanySerializer(read_only = True, source = 'Company_name')
    class Meta:
        model = Consoles
        fields = [
            'id',
            'company',
            'Company_name',
            'console_name',
            'description',
            'release_date',
            'price',
            'console_image'
        ]