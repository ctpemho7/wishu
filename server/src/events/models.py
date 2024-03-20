from django.db import models

from base.models import TimeStampMixin
from users.models import User


class Event(TimeStampMixin):
    name = models.CharField(max_length=50)
    date = models.DateField()
    description = models.TextField()
    repeat = models.BooleanField(default=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} | {self.date} | {self.user.username}"
