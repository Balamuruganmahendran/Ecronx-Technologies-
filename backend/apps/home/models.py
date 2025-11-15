from django.db import models


class TimeStampedModel(models.Model):
    """
    Abstract base model with timestamp fields.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class QuoteRequest(models.Model):
    plan = models.CharField(max_length=100)
    full_name = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    brief = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'home'

    def __str__(self):
        return f"{self.full_name} – {self.plan}"


class ProjectIntake(models.Model):
    full_name = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    project_type = models.CharField(max_length=50)
    timeline = models.CharField(max_length=50)
    budget = models.CharField(max_length=50)
    brief = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'home'

    def __str__(self):
        return f"{self.full_name} – {self.project_type}"