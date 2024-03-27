from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from presents.models import Gift, PresentsList, BookedGifts, GiftImages
from presents.serializers import GiftSerializer, PresentsListSerializer, BookedGiftsSerializer, GiftImagesSerializer


class PresentListViewSet(viewsets.ModelViewSet):
    serializer_class = PresentsListSerializer
    queryset = PresentsList.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Возвращает списки подарков пользователя.
        Пользователь определяется по параметру в url.
        """
        username = self.kwargs.get('user_id', 1)
        return PresentsList.objects.filter(user=username)


class GiftViewSet(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
    permission_classes = [IsAuthenticated]
    parser_class = [JSONParser, MultiPartParser, FormParser]

    def get_queryset(self):
        """
        Возвращает подарки из списка.
        Список определяется по параметру в url.
        """
        list_id = self.kwargs.get('list_id', 1)
        return Gift.objects.filter(list=list_id)

    @action(detail=True, methods=['POST'])
    def book(self, request, list_id, pk):
        user = request.user
        gift = Gift.objects.get(id=pk)
        booking_serializer = BookedGiftsSerializer(data={"gift": pk, "user": user.id})
        if booking_serializer.is_valid():
            booking_serializer.save()
            gift.booked = True
            gift.save()

        return Response({'booking': booking_serializer.data}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['DELETE'])
    def unbook(self, request, list_id, pk):
        booking = BookedGifts.objects.get(gift=pk)
        booking.delete()
        gift = Gift.objects.get(id=pk)
        gift.booked = False
        gift.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['PATCH'])
    def upload_images(self, request, list_id, pk):
        validated_images = request.FILES.getlist('images')
        images = GiftImages.objects.filter(gift=pk)
        if len(images):
            print("delete images")
            images.delete()

        returned = []
        for image in validated_images:
            serializer = GiftImagesSerializer(data={"gift": pk, "image": image})
            if serializer.is_valid():
                serializer.save()
                returned.append(serializer.data)

        return Response({'image': returned}, status=status.HTTP_201_CREATED)
