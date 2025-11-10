from django.urls import path
from .views import (
    JobPostingListView,
    JobPostingDetailView,
    JobApplicationCreateView
)

app_name = 'careers'

urlpatterns = [
    path('jobs/', JobPostingListView.as_view(), name='job-list'),
    path('jobs/<slug:slug>/', JobPostingDetailView.as_view(), name='job-detail'),
    path('applications/', JobApplicationCreateView.as_view(), name='application-create'),
]
