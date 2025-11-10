from django.contrib import admin
from .models import JobPosting, JobApplication


@admin.register(JobPosting)
class JobPostingAdmin(admin.ModelAdmin):
    list_display = ['title', 'department', 'location', 'job_type', 'is_active', 'created_at']
    list_filter = ['is_active', 'job_type', 'department', 'created_at']
    search_fields = ['title', 'description', 'location']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'job', 'status', 'created_at']
    list_filter = ['status', 'job', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'job__title']
    readonly_fields = ['created_at']
