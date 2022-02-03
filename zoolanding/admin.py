from django.contrib import admin
from zoolanding.models import Description, Services, Action

admin.site.register(Description)
admin.site.register(Services)


class AdminAction(admin.ModelAdmin):
    list_display = ('id','description','image')
    list_display_links = ('id','description')

admin.site.register(Action, AdminAction)

