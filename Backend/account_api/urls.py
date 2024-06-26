from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, NotesView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # path("auth/", include("djoser.urls")),
    # path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
]
# router = routers.SimpleRouter()
# router.register("users", UserViewSet)
# urlpatterns += router.urls

router = routers.SimpleRouter()

router.register("notes", NotesView)
urlpatterns += router.urls
