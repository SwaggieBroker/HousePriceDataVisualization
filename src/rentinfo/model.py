from django.conf import settings
from django.db import models

class RentInfo(models.Model):

    class Meta:
        db_table = "rentinfo"

    houseID = models.CharField(primary_key=True, max_length=50)
    updatedate = models.DateTimeField('updatedate')
    decoration = models.CharField(max_length=50)
    heating = models.CharField(max_length=50)
    link = models.CharField(max_length=50)
    meters = models.CharField(max_length=50)
    other = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    pricepre = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    subway = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    zone = models.CharField(max_length=50)
