from django.db import models

from base.models import TimeStampMixin
from users.models import User


class PresentsList(TimeStampMixin):
    name = models.CharField(max_length=50)
    date = models.DateField(blank=True)
    description = models.TextField(blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lists')

    def __str__(self):
        return f"Список '{self.name}' пользователя {self.user.username}"


class Gift(TimeStampMixin):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    min_price = models.IntegerField(blank=True, null=True)
    max_price = models.IntegerField(blank=True, null=True)
    booked = models.BooleanField(default=False)
    list = models.ForeignKey(PresentsList, on_delete=models.CASCADE, related_name='gifts')

    def __str__(self):
        return f"Подарок {self.name} из списка '{self.list.name}'"


class GiftLinks(TimeStampMixin):
    gift = models.ForeignKey(Gift, related_name='links', on_delete=models.CASCADE, blank=True)
    link = models.URLField()

    def __str__(self):
        return f"{self.gift.name} | {self.link[:30]}.."


class GiftImages(TimeStampMixin):
    gift = models.ForeignKey(Gift, related_name='images', on_delete=models.CASCADE, blank=True)
    image = models.ImageField(upload_to="images")

    def __str__(self):
        return f"{self.gift.name}"


class BookedGifts(TimeStampMixin):
    gift = models.ForeignKey(Gift, on_delete=models.CASCADE, related_name='booking')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} забронировал {self.gift.name} у {self.gift.list.user.username}"
