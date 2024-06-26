from django.db import models
from account.models import CustomUser as User


# Create your models here.
class Notes(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True, max_length=200)
