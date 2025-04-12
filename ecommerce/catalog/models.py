from django.db import models

# Create your models here.

class Genre(models.Model):
    genre = models.TextField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

class Company(models.Model):
    company_name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

class Game(models.Model):
    genre = models.ForeignKey(Genre, related_name='game_genre', on_delete=models.CASCADE)
    Company_name = models.ForeignKey(Company, related_name='game_company_name', on_delete=models.CASCADE)
    game_name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    release_date = models.DateField()
    price = models.FloatField()
    game_image = models.ImageField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)