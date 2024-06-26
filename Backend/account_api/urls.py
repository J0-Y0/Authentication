from django.urls import path
from rest_framework import routers
from .views import UserViewSet, NotesView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # path("api-auth/", include("rest_framework.urls")),
]
# router = routers.SimpleRouter()
# router.register("users", UserViewSet)
# urlpatterns += router.urls

router = routers.SimpleRouter()

router.register("notes", NotesView)
urlpatterns += router.urls
