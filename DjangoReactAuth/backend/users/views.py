from django.shortcuts import render

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import *
from .serializers import *
from django.contrib.auth import get_user_model
User = get_user_model()

class RegisterViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
