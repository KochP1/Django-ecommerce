from django.urls import path
from . import views
from .views import PatchEmail, PatchUserName

urlpatterns = [
    path('login/', views.log_in, name='login'),
    path('regist_user/', views.regist_user, name='regist_user'),
    path('log_out/', views.log_out, name='log_out'),
    path('edit_email/<int:pk>/', PatchEmail.as_view(), name='edit_email'),
    path('edit_username/<int:pk>/', PatchUserName.as_view(), name='edit_username'),
]
