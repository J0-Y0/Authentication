# serializers.py

from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class CustomUserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "about",
            "is_staff",
            "is_active",
            "date_joined",
            "password",
        )

    # Add any custom methods or overrides here as needed
