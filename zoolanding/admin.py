from django.contrib import admin
from zoolanding.models import Description, Services, Action


class DescriptionInline(admin.TabularInline):
    model = Description
    exclude = ('published',)


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('name_services', 'published')
    list_editable = ('published',)
    inlines = (DescriptionInline,)


class AdminAction(admin.ModelAdmin):
    list_display = ('description', 'image_url', 'published')
    list_display_links = ('description',)
    list_editable = ('published',)


class DescriptionAdmin(admin.ModelAdmin):
    list_display = ('name_of_service', 'price', 'service', 'published')
    search_fields = ('name_of_service',)
    list_editable = ('published',)


admin.site.register(Action, AdminAction)
admin.site.register(Services, ServicesAdmin)
admin.site.register(Description, DescriptionAdmin)
