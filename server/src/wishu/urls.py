"""
URL configuration for wishu project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import include, path, re_path
from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from events.views import EventViewSet
from presents.views import GiftViewSet, PresentListViewSet
from users.views import FriendsViewSet, FriendsListViewSet
from wishu import settings

router = routers.DefaultRouter()
router.register(r'friends/(?P<user_id>\d+)', FriendsListViewSet)
router.register(r'friends', FriendsViewSet)
router.register(r'lists/(?P<user_id>\d+)', PresentListViewSet)
router.register(r'gifts/(?P<list_id>\d+)', GiftViewSet)
router.register(r'events/(?P<user_id>\d+)', EventViewSet)


schema_view = get_schema_view(
   openapi.Info(
      title="Wishu API",
      default_version='v1',
      description="Wishlist api",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

prefix = "api/v1/"

urlpatterns = [
    path(prefix + 'swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path(prefix + 'swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(prefix + 'redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path(prefix + "admin/", admin.site.urls),
    re_path(prefix + 'auth/', include('djoser.urls')),
    re_path(prefix + 'auth/', include('djoser.urls.authtoken')),

    path(prefix, include(router.urls)),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns.append(path("__debug__/", include("debug_toolbar.urls")))
