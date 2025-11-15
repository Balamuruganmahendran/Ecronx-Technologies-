from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings

from .models import QuoteRequest, ProjectIntake
from .serializers import QuoteRequestSerializer, ProjectIntakeSerializer


class QuoteRequestCreateView(APIView):
    def post(self, request):
        serializer = QuoteRequestSerializer(data=request.data)
        if serializer.is_valid():
            quote = serializer.save()

            # Email to client
            client_subject = "Thank you for your quote request!"
            client_message = f"""
Hello {quote.full_name},

We have received your quote request for: {quote.plan}

Your Details:
Name    : {quote.full_name}
Company : {quote.company or 'N/A'}
Email   : {quote.email}
Phone   : {quote.phone}

Brief:
{quote.brief or 'N/A'}

Our team will contact you within 24 hours with a detailed quote.

Best regards,
Ecronx Technologies
+91 8438829844
ecrontechnologies@gmail.com
"""
            send_mail(
                client_subject,
                client_message,
                settings.DEFAULT_FROM_EMAIL,
                [quote.email],
                fail_silently=False,
            )

            # Email to admin
            admin_subject = f"New Quote Request – {quote.full_name} ({quote.plan})"
            admin_message = f"""
New quote request:

Plan      : {quote.plan}
Name      : {quote.full_name}
Company   : {quote.company or 'N/A'}
Email     : {quote.email}
Phone     : {quote.phone}

Brief:
{quote.brief or 'N/A'}
"""
            send_mail(
                admin_subject,
                admin_message,
                settings.DEFAULT_FROM_EMAIL,
                ['ecrontechnologies@gmail.com'],
                fail_silently=False,
            )

            return Response({"detail": "Quote request saved & emails sent"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectIntakeCreateView(APIView):
    def post(self, request):
        serializer = ProjectIntakeSerializer(data=request.data)
        if serializer.is_valid():
            intake = serializer.save()

            # Email to client
            client_subject = "Thank you for submitting your project!"
            client_message = f"""
Hello {intake.full_name},

We have received your project details:

Project Type : {intake.project_type}
Timeline     : {intake.timeline}
Budget       : {intake.budget}

Brief:
{intake.brief}

Our team will contact you within 24 hours.

Best regards,  
Ecronx Technologies  
+91 8438829844  
ecrontechnologies@gmail.com
"""
            send_mail(
                client_subject,
                client_message,
                settings.DEFAULT_FROM_EMAIL,
                [intake.email],
                fail_silently=False,
            )

            # Email to admin
            admin_subject = f"New Project Intake – {intake.full_name}"
            admin_message = f"""
New project submission:

Name      : {intake.full_name}
Company   : {intake.company or 'N/A'}
Email     : {intake.email}
Phone     : {intake.phone}
Type      : {intake.project_type}
Timeline  : {intake.timeline}
Budget    : {intake.budget}

Brief:
{intake.brief}
"""
            send_mail(
                admin_subject,
                admin_message,
                settings.DEFAULT_FROM_EMAIL,
                ['ecrontechnologies@gmail.com'],
                fail_silently=False,
            )

            return Response({"detail": "Project saved & emails sent"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)