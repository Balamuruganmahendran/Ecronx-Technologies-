from rest_framework import serializers
from .models import JobPosting, JobApplication


class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'slug', 'department', 'location', 'job_type',
                  'description', 'requirements', 'responsibilities', 'salary_range',
                  'is_active', 'expires_at', 'created_at']


class JobPostingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ['id', 'title', 'slug', 'department', 'location', 'job_type',
                  'salary_range', 'created_at']


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'job', 'first_name', 'last_name', 'email', 'phone',
                  'resume', 'cover_letter', 'linkedin_url', 'portfolio_url',
                  'status', 'created_at']
        read_only_fields = ['status', 'created_at']
