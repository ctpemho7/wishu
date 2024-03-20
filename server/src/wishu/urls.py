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
from django.urls import include, path
from rest_framework import routers, permissions

from events.views import EventViewSet
from presents.views import GiftViewSet, PresentListViewSet
from users.views import UserViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


router = routers.DefaultRouter()
router.register(r'profile', UserViewSet)
router.register(r'profile/(?P<profile_id>\d+)/lists', PresentListViewSet)
router.register(r'lists/(?P<list_id>\d+)/gifts', GiftViewSet)
router.register(r'profile/(?P<profile_id>\d+)/events', EventViewSet)


schema_view = get_schema_view(
   openapi.Info(
      title="Wishu API",
      default_version='v1',
      description="Wishlist api",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path("admin/", admin.site.urls),
    path("api/v1/", include(router.urls))
]
