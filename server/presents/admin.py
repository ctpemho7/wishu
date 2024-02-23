from django.contrib import admin

from presents.models import Gift, GiftImages, GiftLinks, PresentsList


class GiftLinksAdmin(admin.TabularInline):
    model = GiftLinks
    fields = ('link',)


class GiftImagesAdmin(admin.TabularInline):
    model = GiftImages
    fields = ('image',)


@admin.register(PresentsList)
class PresentsListAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "date",
        "description",
        "user",
    )

    search_fields = ("name", "description")

    list_filter = (
        "user",
    )


@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "min_price",
        "max_price",
        "booked",
        # "list",
        # "bookedGifts",
    )

    search_fields = ("name", "description")

    list_filter = (
        "booked",
    )

    inlines = (GiftLinksAdmin, GiftImagesAdmin)
