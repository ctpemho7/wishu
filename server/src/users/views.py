from rest_framework import viewsets, mixins, filters, generics
from rest_framework.permissions import IsAuthenticated

from users.models import Friend, User
from users.serializers import FriendSerializer, UserAsFriendSerializer


class FriendsListViewSet(mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    """
    ViewSet для получения списка друзей конкретного пользователя.
    Обеспечивает методы `list`, `create`, `destroy` для получения списка друзей, создания и удаления связи.
    """
    queryset = Friend.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Возвращает queryset из друзей пользователя.
        """
        user_id = self.kwargs.get('user_id', 1)
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
    permission_classes = [IsAuthenticated]


class FindFriendsListViewSet(mixins.ListModelMixin,
                             viewsets.GenericViewSet):
    """
    ViewSet для поиска пользователей по username.
    """

    queryset = User.objects.all()
    serializer_class = UserAsFriendSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', ]
