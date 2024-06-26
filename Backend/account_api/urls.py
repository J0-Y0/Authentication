from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, NotesView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("schema/", SpectacularAPIView.as_view(), name="token_schema"),
    path(
        "schema/doc/",
        SpectacularSwaggerView.as_view(url_name="token_schema"),
        name="schema-doc",
    ),
]
# router = routers.SimpleRouter()
# router.register("users", UserViewSet)
# urlpatterns += router.urls

router = routers.SimpleRouter()

router.register("notes", NotesView)
urlpatterns += router.urls
