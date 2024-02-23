from drf_writable_nested.serializers import WritableNestedModelSerializer
from rest_framework import serializers

from presents.models import (BookedGifts, Gift, GiftImages, GiftLinks,
                             PresentsList)


class PresentsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = PresentsList
        fields = '__all__'


class GiftLinksSerializer(serializers.ModelSerializer):

    class Meta:
        model = GiftLinks
        fields = ("id", "link", )


class GiftImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = GiftImages
        fields = ("id", "image", )

# самописное
# class GiftSerializer(serializers.ModelSerializer):
#     images = GiftImagesSerializer(many=True)
#     links = GiftLinksSerializer(many=True)
#
#     def create(self, validated_data):
#         links = validated_data.pop("links")
#         images = validated_data.pop("images")
#         gift = Gift(**validated_data)
#         gift.save()
#
#         links_serializer = GiftLinksSerializer(data=links, many=True)
#         if links_serializer.is_valid(raise_exception=True):
#             links_serializer.save(gift=gift)
#
#         images_serializer = GiftImagesSerializer(data=images, many=True)
#         if images_serializer.is_valid(raise_exception=True):
#             images_serializer.save(gift=gift)
#
#         return gift
#
#     def update(self, instance, validated_data):
#         # обновить объект подарка осталось
#         # for k,v in validated_data.items():
#         #     setattr(instance, k, v)
#         # instance.save()
#
#         instance.links.clear()
#         instance.images.clear()
#         links = validated_data.pop("links")
#         images = validated_data.pop("images")
#
#         links_serializer = GiftLinksSerializer(data=links, many=True)
#         if links_serializer.is_valid(raise_exception=True):
#             links_serializer.save(gift=instance)
#
#         images_serializer = GiftImagesSerializer(data=images, many=True)
#         if images_serializer.is_valid(raise_exception=True):
#             images_serializer.save(gift=instance)
#
#         # links_serializer = self.fields['links']
#         # instance_links = instance.links
#         # validated_links = validated_data.pop('links')
#         # links_serializer.update(instance_links, validated_links)
#         #
#         # images_serializer = self.fields['images']
#         # instance_images = instance.images
#         # validated_images = validated_data.pop('images')
#         # images_serializer.update(instance_images, validated_images)
#
#
#         # links_serializer = GiftLinksSerializer(data=links, many=True)
#         # if links_serializer.is_valid(raise_exception=True):
#         #     links_serializer.update(instance, links)
#         #
#         # images_serializer = GiftImagesSerializer(data=images, many=True)
#         # if images_serializer.is_valid(raise_exception=True):
#         #     images_serializer.save(gift=instance)
#
#         return super(GiftSerializer, self).update(instance, validated_data)
#
#         # не нрав мне форы
#         # for image in images_data:
#         #     if image.get('image') not in instance.images.all():
#         #         pass
#         #     GiftImages.objects.get_or_create(image=image.get('image'), gift=instance)
#         #
#         # for link in links_data:
#         #     GiftLinks.objects.get_or_create(link=link.get('link'), gift=instance)
#         #
#         # return instance
#
#
#     class Meta:
#         model = Gift
#         fields = ["id", "name", "description", "min_price", "max_price", "booked", "list", "links", "images"]


class BookedGiftsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BookedGifts
        fields = '__all__'


class GiftSerializer(WritableNestedModelSerializer):
    images = GiftImagesSerializer(many=True)
    links = GiftLinksSerializer(many=True)

    class Meta:
        model = Gift
        fields = ["id", "name", "description", "min_price", "max_price", "booked", "list", "links", "images"]
