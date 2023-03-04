from django.urls import path
from api.views import *

urlpatterns = [
    path('', JournalEntry.as_view()),
    path('<str:pk>', JournalEntryDetail.as_view())
]
