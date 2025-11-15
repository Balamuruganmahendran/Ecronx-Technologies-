# contact/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactAPIView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'error': 'Validation failed',
                'details': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)

        # Save to DB
        message = serializer.save()

        # Send Email
        try:
            subject = f"New Contact: {message.subject}"
            body = f"""
            You have a new contact form submission:

            Name: {message.name}
            Email: {message.email}
            Subject: {message.subject}

            Message:
            {message.message}

            ---
            Sent via Ecronx Contact Form
            """
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['ecrontechnologies@gmail.com'],
                fail_silently=False,
            )
        except Exception as e:
            # Log error but don't fail the form
            print(f"Email failed: {e}")

        return Response({
            'success': True,
            'message': 'Message sent successfully!'
        }, status=status.HTTP_201_CREATED)