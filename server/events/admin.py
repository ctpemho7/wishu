from django.contrib import admin

from events.models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "date",
        "description",
        "repeat",
        "user",
    )

    search_fields = ("name", "description")

    list_filter = (
        "user",
    )