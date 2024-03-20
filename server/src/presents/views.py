from django.forms import model_to_dict
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.views import APIView

from presents.models import Gift, GiftLinks, PresentsList, BookedGifts
from presents.serializers import GiftSerializer, PresentsListSerializer, BookedGiftsSerializer


class PresentListViewSet(viewsets.ModelViewSet):
    serializer_class = PresentsListSerializer
    queryset = PresentsList.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Возвращает списки подарков пользователя.
        Пользователь определяется по параметру в url.
        """
        username = self.kwargs.get('profile_id', 1)
        return PresentsList.objects.filter(user=username)


class GiftViewSet(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer
    permission_classes = [IsAuthenticated]

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


class GiftLinksViewSet(viewsets.ModelViewSet):
    queryset = GiftLinks.objects.all()
    serializer_class = GiftSerializer

    def get_queryset(self):
        """
        Возвращает подарки из списка.
        Список определяется по параметру в url.
        """
        list_id = self.kwargs.get('list_id', 1)
        return Gift.objects.filter(list=list_id)


class BookingAPIView(APIView):
    def get(self, request):
        print(request)
        print()
        print(request.query_params)
        user = request.user
        gift_id = request.query_params.get('gift_id', 1)
        gift = Gift.objects.get(id=gift_id)
        return Response({'get': model_to_dict(gift), 'user': model_to_dict(user)})

    def post(self, request):
        user = request.user
        gift_id = request.query_params.get('gift_id', 1)

        return Response({'title': 'Jennifer Shrader Lawrence'})

    def delete(self, request):
        user = request.user
        gift_id = request.query_params.get('gift_id', 1)
        gift = Gift.objects.get(id=gift_id)
        return Response({'title': 'Jennifer Shrader Lawrence'})



@api_view(['POST'])
def book_gift(request):
    """
    Function for booking gift. Sets booked = True and creates the BookedGift instance
    """
    # мы имеем юзера и гифт, поэтому создаём только BookedGiftSerializer и сохраняем
    # у него внутри лежит получение этого гифта и задание тру
    user = request.user
    gift_id = request.query_params.get('gift_id', 1)
    serializer = BookedGiftsSerializer(gift=gift_id, user=user)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
