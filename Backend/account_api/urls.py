from django.urls import path, include
from rest_framework import routers

from .views import NotesView, home


urlpatterns = [
    path("", home, name="home"),
    path("account/api/auth/", include("djoser.urls")),
    path("account/api/auth/", include("djoser.urls.jwt")),
]
router = routers.SimpleRouter()

router.register("notes/api", NotesView)
urlpatterns += router.urls
