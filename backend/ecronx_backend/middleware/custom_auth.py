"""
Custom authentication middleware for ecronx_backend.
"""
from django.utils.deprecation import MiddlewareMixin


class CustomAuthMiddleware(MiddlewareMixin):
    """
    Custom authentication middleware.
    Add custom authentication logic here as needed.
    """

    def process_request(self, request):
        """Process incoming request."""
        return None

    def process_response(self, request, response):
        """Process outgoing response."""
        return response
