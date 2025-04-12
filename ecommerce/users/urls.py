from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.log_in, name='login'),
    path('regist_user/', views.regist_user, name='regist_user')
]
