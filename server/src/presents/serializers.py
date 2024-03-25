from drf_writable_nested.serializers import WritableNestedModelSerializer
from rest_framework import serializers

from presents.models import (BookedGifts, Gift, GiftImages, GiftLinks,
                             PresentsList)


class GiftLinksSerializer(serializers.ModelSerializer):

    class Meta:
        model = GiftLinks
        fields = ("id", "link", )


class GiftImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = GiftImages
        fields = ("id", "image", )


class BookedGiftsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookedGifts
        fields = '__all__'


class GiftSerializer(serializers.ModelSerializer):
    # images = GiftImagesSerializer(many=True)
    # links = GiftLinksSerializer(many=True)

    class Meta:
        model = Gift
        fields = ["id", "name", "description", "min_price", "max_price", "booked", "list"]


class PresentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = PresentsList
        fields = ["id", "name", "date", "description", "user"]
