from django.conf import settings
from django.db import models

class HisPrice(models.Model):

    class Meta:
        db_table = "hisprice"

    date = models.DateTimeField('date')
    houseID = models.CharField(primary_key=True, max_length=50)
    totalPrice = models.CharField(max_length=50)