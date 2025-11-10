from django.urls import path
from .views import ContactSubmissionCreateView

app_name = 'contact'

urlpatterns = [
    path('submit/', ContactSubmissionCreateView.as_view(), name='submit'),
]
