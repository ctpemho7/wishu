from django.db import models


class TimeStampMixin(models.Model):
    """
    Абстрактная модель для атрибутов времени создания и обновления записи.
    """

    created_at = models.DateTimeField("Время создания записи", auto_now_add=True)
    updated_at = models.DateTimeField("Время обновления записи", auto_now=True)

    class Meta:
        abstract = True
