
from django.urls import path
from .views import QuoteRequestCreateView, ProjectIntakeCreateView


app_name = 'home'


urlpatterns = [
    path('quote/', QuoteRequestCreateView.as_view(), name='quote-create'),
    path('project/', ProjectIntakeCreateView.as_view(), name='project-create'),
]