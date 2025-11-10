from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import BlogPost, BlogCategory
from .serializers import (
    BlogPostSerializer,
    BlogPostListSerializer,
    BlogCategorySerializer
)


class BlogPostListView(generics.ListAPIView):
    """
    List all published blog posts.
    """
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostListSerializer
    permission_classes = [AllowAny]


class BlogPostDetailView(generics.RetrieveAPIView):
    """
    Get blog post details by slug.
    """
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class BlogCategoryListView(generics.ListAPIView):
    """
    List all blog categories.
    """
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    permission_classes = [AllowAny]
