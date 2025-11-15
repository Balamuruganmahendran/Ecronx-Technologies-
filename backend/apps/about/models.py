from django.db import models
from django.contrib.auth import get_user_model
from apps.home.models import TimeStampedModel

User = get_user_model()


class BlogPost(TimeStampedModel):
    """
    Blog post model.
    """
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    content = models.TextField()
    excerpt = models.CharField(max_length=500)
    featured_image = models.ImageField(upload_to='blog/', blank=True, null=True)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True, null=True)
    views_count = models.IntegerField(default=0)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class BlogCategory(TimeStampedModel):
    """
    Blog category model.
    """
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Blog Categories'

    def __str__(self):
        return self.name


class BlogPostCategory(models.Model):
    """
    Many-to-many relationship between posts and categories.
    """
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('post', 'category')
