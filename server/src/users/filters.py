from django.db.models import Case, Value, When
from rest_framework import filters
from django.db.models import Q

from users.models import Friend


class FriendsFilterBackend(filters.SearchFilter):
    def filter_queryset(self, request, queryset, view):
        user = request.user
        queryset = super().filter_queryset(request, queryset, view).exclude(id=user.id)
        friend_ids = Friend.objects.filter(
            Q(user=user) | Q(friend=user)
        ).values_list('friend_id', flat=True)
        queryset = queryset.annotate(is_friend=Case(
            When(id__in=friend_ids, then=Value(True)),
            default=Value(False)
        ))
        return queryset
