from django.contrib import admin
from .models import QuoteRequest, ProjectIntake


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'plan', 'email', 'phone', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
    list_filter = ('plan', 'created_at')


@admin.register(ProjectIntake)
class ProjectIntakeAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'project_type', 'email', 'phone', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
    list_filter = ('project_type', 'timeline', 'created_at')