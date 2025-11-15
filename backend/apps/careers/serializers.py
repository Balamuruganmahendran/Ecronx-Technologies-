from rest_framework import serializers
from .models import JobApplication

class JobApplicationSerializer(serializers.ModelSerializer):
    resume = serializers.FileField(required=True)
    cover_letter_file = serializers.FileField(required=False, allow_null=True)

    class Meta:
        model = JobApplication
        fields = '__all__'
        extra_kwargs = {
            'applied_at': {'read_only': True},
        }
