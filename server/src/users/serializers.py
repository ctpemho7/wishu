from rest_framework import serializers

from users.models import User, Friend


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email', 'birth_date']


class UserAsFriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class FriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friend
        fields = '__all__'
