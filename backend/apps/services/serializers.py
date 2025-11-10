from rest_framework import serializers
from .models import Service, ServiceFeature


class ServiceFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceFeature
        fields = ['id', 'title', 'description', 'order']


class ServiceSerializer(serializers.ModelSerializer):
    features = ServiceFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = ['id', 'title', 'slug', 'description', 'short_description',
                  'icon', 'image', 'is_active', 'order', 'features',
                  'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
