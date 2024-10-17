from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),  # Página de inicio en la raíz
]