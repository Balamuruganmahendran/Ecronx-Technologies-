from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import JobPosting, JobApplication
from .serializers import (
    JobPostingSerializer,
    JobPostingListSerializer,
    JobApplicationSerializer
)


class JobPostingListView(generics.ListAPIView):
    """
    List all active job postings.
    """
    queryset = JobPosting.objects.filter(is_active=True)
    serializer_class = JobPostingListSerializer
    permission_classes = [AllowAny]


class JobPostingDetailView(generics.RetrieveAPIView):
    """
    Get job posting details by slug.
    """
    queryset = JobPosting.objects.filter(is_active=True)
    serializer_class = JobPostingSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class JobApplicationCreateView(generics.CreateAPIView):
    """
    Submit a job application.
    """
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {'message': 'Application submitted successfully', 'data': serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )
