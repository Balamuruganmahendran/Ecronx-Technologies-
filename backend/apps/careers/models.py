from django.db import models

class JobApplication(models.Model):
    # Personal
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=200, blank=True)

    # Job
    job_title = models.CharField(max_length=200)

    # Professional
    current_job_title = models.CharField(max_length=200, blank=True)
    years_of_experience = models.CharField(max_length=50, blank=True)
    expected_salary = models.CharField(max_length=100, blank=True)
    notice_period = models.CharField(max_length=50, blank=True)

    # Links
    linkedin_url = models.URLField(blank=True)
    portfolio_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)

    # Additional
    how_did_you_hear = models.CharField(max_length=100, blank=True)
    available_start_date = models.DateField(null=True, blank=True)
    willing_to_relocate = models.CharField(max_length=10, blank=True)
    requires_sponsorship = models.CharField(max_length=10, blank=True)

    # Cover Letter
    cover_letter_text = models.TextField(blank=True)
    cover_letter_file = models.FileField(upload_to='cover_letters/', null=True, blank=True)

    # Resume
    resume = models.FileField(upload_to='resumes/')

    # Timestamps
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.job_title}"
