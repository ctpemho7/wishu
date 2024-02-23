from rest_framework import viewsets

from presents.models import Gift, GiftLinks, PresentsList
from presents.serializers import GiftSerializer, PresentsListSerializer


class PresentListViewSet(viewsets.ModelViewSet):
    serializer_class = PresentsListSerializer
    queryset = PresentsList.objects.all()

    def get_queryset(self):
        """
        Возвращает списки подарков пользователя.
        Пользователь определяется по параметру в url.
        """
        username = self.kwargs['profile_id']
        return PresentsList.objects.filter(user=username)


class GiftViewSet(viewsets.ModelViewSet):
    queryset = Gift.objects.all()
    serializer_class = GiftSerializer

    def get_queryset(self):
        """
        Возвращает подарки из списка.
        Список определяется по параметру в url.
        """
        list_id = self.kwargs['list_id']
        return Gift.objects.filter(list=list_id)


class GiftLinksViewSet(viewsets.ModelViewSet):
    queryset = GiftLinks.objects.all()
    serializer_class = GiftSerializer

    def get_queryset(self):
        """
        Возвращает подарки из списка.
        Список определяется по параметру в url.
        """
        list_id = self.kwargs['list_id']
        return Gift.objects.filter(list=list_id)
