from django.db import models

from base.models import TimeStampMixin
from users.models import User


class PresentsList(TimeStampMixin):
    name = models.CharField(max_length=50)
    date = models.DateField()
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Gift(TimeStampMixin):
    name = models.CharField(max_length=50)
    description = models.TextField()
    min_price = models.IntegerField()
    max_price = models.IntegerField()
    booked = models.BooleanField(default=False)
    list = models.ForeignKey(PresentsList, on_delete=models.CASCADE)


class GiftLinks(TimeStampMixin):
    gift = models.ForeignKey(Gift, related_name='links', on_delete=models.CASCADE)
    link = models.URLField()


class GiftImages(TimeStampMixin):
    gift = models.ForeignKey(Gift, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField()


class BookedGifts(TimeStampMixin):
    gift = models.ForeignKey(Gift, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
