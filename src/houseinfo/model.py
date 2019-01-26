from django.conf import settings
from django.db import models

class HouseInfo(models.Model):

    class Meta:
        db_table = "houseinfo"

    houseID = models.CharField(primary_key=True, max_length=50)
    community = models.CharField(max_length=50)
    decoration = models.CharField(max_length=50)
    direction = models.CharField(max_length=50)
    floor = models.CharField(max_length=50)
    followinfo = models.CharField(max_length=50)
    direction = models.CharField(max_length=50)
    housetype = models.CharField(max_length=50)
    link = models.CharField(max_length=50)
    square = models.CharField(max_length=50)
    taxtype = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    totalPrice = models.CharField(max_length=50)
    unitPrice = models.CharField(max_length=50)
    validdate = models.DateTimeField('validdate')
    years = models.CharField(max_length=50)
