from django.contrib import admin
from . models import Genre, Company, Game, Consoles

# Register your models here.
admin.site.register(Genre)
admin.site.register(Company)
admin.site.register(Game)
admin.site.register(Consoles)