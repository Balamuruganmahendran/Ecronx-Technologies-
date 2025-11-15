from django.contrib import admin
from .models import JobApplication


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'job_title', 'applied_at']
    list_filter = ['applied_at']
    search_fields = ['first_name', 'last_name', 'email', 'job_title']
    readonly_fields = ['applied_at']
