from rest_framework import serializers
from .models import QuoteRequest, ProjectIntake


class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteRequest
        fields = '__all__'


class ProjectIntakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectIntake
        fields = '__all__'