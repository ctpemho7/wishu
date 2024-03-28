from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

from users.filters import FriendsFilterBackend
from users.models import Friend, User
from users.serializers import FriendSerializer, UserForSearchingSerializer, UserAsFriendSerializer


class FriendsListViewSet(mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    """
    ViewSet для получения списка друзей конкретного пользователя.
    Обеспечивает метод `list` для получения списка друзей.
    """
    queryset = User.objects.all()
    serializer_class = UserAsFriendSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Возвращает queryset из друзей пользователя.
        """
        user_id = self.kwargs.get('user_id', 1)
        query_for_user = Friend.objects.filter(friend=user_id).values_list('user', flat=True)
        query_for_friend = Friend.objects.filter(user=user_id).values_list('friend', flat=True)
        friends = query_for_user.union(query_for_friend)

        return User.objects.filter(id__in=friends).order_by("username")


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
    serializer_class = UserForSearchingSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [FriendsFilterBackend]
    search_fields = ['username', ]
