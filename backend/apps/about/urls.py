from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogCategoryListView

app_name = 'about'

urlpatterns = [
    path('posts/', BlogPostListView.as_view(), name='post-list'),
    path('posts/<slug:slug>/', BlogPostDetailView.as_view(), name='post-detail'),
    path('categories/', BlogCategoryListView.as_view(), name='category-list'),
]
