from rest_framework import viewsets, mixins

from users.models import Friend
from users.serializers import FriendSerializer


class FriendsListViewSet(mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    """
    ViewSet для получения списка друзей.
    Обеспечивает методы `list`, `create`, `destroy` для получения списка друзей, создания и удаления связи.

    """
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer

    def get_queryset(self):
        """
        Возвращает queryset из друзей пользователя.
        """
        user_id = self.kwargs['user_id']
        return Friend.objects.filter(user=user_id)


class FriendsViewSet(mixins.CreateModelMixin,
                     mixins.DestroyModelMixin,
                     viewsets.GenericViewSet):
    """
    ViewSet для добавления друзей.
    Обеспечивает методы `create` и `destroy` для создания и удаления связи.

    """
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
