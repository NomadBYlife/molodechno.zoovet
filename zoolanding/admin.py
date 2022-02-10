from django.contrib import admin
from zoolanding.models import Description, Services, Action, DifferenceFromOtherClinics, Info, Directions


class DescriptionInline(admin.TabularInline):
    model = Description
    exclude = ('published',)


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('name_services', 'published')
    list_editable = ('published',)
    inlines = (DescriptionInline,)


class AdminAction(admin.ModelAdmin):
    list_display = ('title', 'published')
    list_display_links = ('title',)
    list_editable = ('published',)


class DescriptionAdmin(admin.ModelAdmin):
    list_display = ('name_of_service', 'price', 'service', 'published')
    search_fields = ('name_of_service',)
    list_editable = ('published',)


class InfoAdmin(admin.ModelAdmin):
    list_display = ('city', 'address', 'phone', 'time_work1', 'time_work2', 'published')
    list_display_links = ('city',)
    list_editable = ('time_work1', 'time_work2', 'published',)


class DirectionsAdmin(admin.ModelAdmin):
    list_display = ('name_directions', 'published')
    list_display_links = ('name_directions',)
    list_editable = ('published',)

class DifferenceAdmin(admin.ModelAdmin):
    list_display = ('title','published')
    list_editable = ('published',)


admin.site.register(Action, AdminAction)
admin.site.register(Services, ServicesAdmin)
admin.site.register(Description, DescriptionAdmin)
admin.site.register(Info, InfoAdmin)
admin.site.register(Directions, DirectionsAdmin)
admin.site.register(DifferenceFromOtherClinics, DifferenceAdmin)
