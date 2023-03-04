from django.db import models
import uuid

# Create your models here.

class Journal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, unique=True)
    content = models.TextField()
    location = models.CharField(max_length=255)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=False)
    maps_url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "journal"
        ordering = ['-created_at']

        def __str__(self) -> str:
            return self.title