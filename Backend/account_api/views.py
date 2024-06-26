from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from account.models import CustomUser
from .models import Notes

from .serializers import CustomUserSerializer, NotesSerializer

from rest_framework.permissions import (
    BasePermission,
    AllowAny,
    SAFE_METHODS,
    IsAuthenticated,
    IsAdminUser,
)

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class IsOwnerOrReadOnly(BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):

        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # if request.method in SAFE_METHODS:
        #     return True

        # Instance must have an attribute named `user` or `owner`.
        return True


class UserViewSet(viewsets.ViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def get_permissions(self):
        # Define different permissions for different actions
        if self.action == "list" or self.action == "retrieve":
            permission_classes = [IsAdminUser]

        elif self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

        return [permission() for permission in permission_classes]

    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(user)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        user = get_object_or_404(self.queryset, pk=pk)
        self.check_object_permissions(request, user)  # Check permissions manually
        serializer = self.serializer_class(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user = get_object_or_404(self.queryset, pk=pk)
        self.check_object_permissions(request, user)  # Check permissions manually
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class IsOwnerOrReadOnlyNote(BasePermission):
    message = "Custom permission to only allow owners of an object to edit it."

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # if request.method in ["GET", "HEAD", "OPTIONS"]:
        #     return True

        # Instance must have an attribute named `owner`.
        return obj.author == request.user


class NotesView(viewsets.ViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer

    def get_permissions(self):
        if self.action == "retrieve":
            permission_classes = [IsOwnerOrReadOnlyNote]
        elif self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated & IsOwnerOrReadOnlyNote]
        return [permission() for permission in permission_classes]

    def list(self, request):
        notes = self.queryset.filter(author=self.request.user)
        serializer = self.serializer_class(notes, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        note = get_object_or_404(self.queryset, pk=pk)
        self.check_object_permissions(request, note)  # Ensure permissions are checked
        serializer = self.serializer_class(note)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        note = get_object_or_404(self.queryset, pk=pk)
        self.check_object_permissions(request, note)
        serializer = self.serializer_class(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        note = get_object_or_404(self.queryset, pk=pk)
        self.check_object_permissions(request, note)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
