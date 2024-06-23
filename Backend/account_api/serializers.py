from rest_framework import serializers
from account.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "email",
            "first_name",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):

        user = CustomUser(
            email=validated_data["email"], first_name=validated_data["first_name"]
        )

        user.set_password(validated_data["password"])
        user.save()
        return user
