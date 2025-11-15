from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from .models import JobApplication
from .serializers import JobApplicationSerializer
import os
import mimetypes

class JobApplicationAPIView(APIView):
    def post(self, request):
        serializer = JobApplicationSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'error': 'Validation failed',
                'details': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)

        # Save application
        application = serializer.save()

        # === EMAIL 1: To Company ===
        try:
            company_subject = f"New Application: {application.job_title} - {application.first_name} {application.last_name}"
            company_html = render_to_string('emails/company_application.html', {
                'app': application
            })
            company_email = EmailMessage(
                subject=company_subject,
                body=company_html,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=['ecrontechnologies@gmail.com'],
            )
            company_email.content_subtype = 'html'
            if application.resume:
                # Reset file pointer to beginning
                application.resume.seek(0)
                content_type, _ = mimetypes.guess_type(application.resume.name)
                if not content_type:
                    content_type = 'application/octet-stream'
                company_email.attach(
                    application.resume.name,
                    application.resume.read(),
                    content_type
                )
            if application.cover_letter_file:
                # Reset file pointer to beginning
                application.cover_letter_file.seek(0)
                content_type, _ = mimetypes.guess_type(application.cover_letter_file.name)
                if not content_type:
                    content_type = 'application/octet-stream'
                company_email.attach(
                    application.cover_letter_file.name,
                    application.cover_letter_file.read(),
                    content_type
                )
            company_email.send()
        except Exception as e:
            print(f"Company email failed: {e}")

        # === EMAIL 2: To Applicant ===
        try:
            applicant_subject = f"Thank You for Applying to {application.job_title} at Ecron Technologies"
            applicant_html = render_to_string('emails/applicant_thankyou.html', {
                'app': application
            })
            applicant_email = EmailMessage(
                subject=applicant_subject,
                body=applicant_html,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[application.email],
            )
            applicant_email.content_subtype = 'html'
            applicant_email.send()
        except Exception as e:
            print(f"Applicant email failed: {e}")

        return Response({
            'success': True,
            'message': 'Application submitted successfully!'
        }, status=status.HTTP_201_CREATED)
