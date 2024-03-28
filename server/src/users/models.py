from django.contrib.auth.models import AbstractUser
from django.db import models

from base.models import TimeStampMixin

# from presents.models import Gift


class User(TimeStampMixin, AbstractUser):
    """
    Модель пользователя
    AbstractUser уже содержит в себе поля username, first_name, last_name, email, is_staff, is_active, date_joined
    """
    birth_date = models.DateField("День рождения")
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'birth_date']


class Friend(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    friend = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friend')

    def __str__(self):
        return f'User {self.user.username}, Friend {self.friend.username}'
