from rest_framework import serializers
from .models import BlogPost, BlogCategory


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = ['id', 'name', 'slug', 'description']


class BlogPostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'author', 'author_name', 'content',
                  'excerpt', 'featured_image', 'is_published', 'published_at',
                  'views_count', 'created_at', 'updated_at']
        read_only_fields = ['views_count', 'created_at', 'updated_at']


class BlogPostListSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'author_name', 'excerpt',
                  'featured_image', 'published_at', 'views_count']
