from rest_framework import serializers

from users.models import User, Friend


class UserAsFriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'birth_date']


class UserForSearchingSerializer(serializers.ModelSerializer):
    is_friend = serializers.BooleanField()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'birth_date', 'is_friend']


class FriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friend
        fields = '__all__'
