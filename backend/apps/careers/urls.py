from django.urls import path
from .views import JobApplicationAPIView

app_name = 'careers'

urlpatterns = [
    path('applications/', JobApplicationAPIView.as_view(), name='application-create'),
]
