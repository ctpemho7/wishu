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
        fields = ("id", "gift", "image", )


class BookedGiftsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookedGifts
        fields = '__all__'


class GiftSerializer(WritableNestedModelSerializer):
    images = GiftImagesSerializer(many=True, required=False, read_only=True)
    links = GiftLinksSerializer(many=True, required=False)
    booked_by = serializers.IntegerField(read_only=True)

    class Meta:
        model = Gift
        fields = ["id", "name", "description", "min_price", "max_price", "booked", "booked_by",
                  "list", "links", "images"]


class PresentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = PresentsList
        fields = ["id", "name", "date", "description", "user"]
