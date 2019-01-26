from django.conf import settings
from django.db import models

class SellInfo(models.Model):

    class Meta:
        db_table = "sellinfo"

    houseID = models.CharField(primary_key=True, max_length=50)
    updatedate = models.DateTimeField('updatedate')
    dealdate = models.CharField(max_length=50)
    direction = models.CharField(max_length=50)
    floor = models.CharField(max_length=50)
    community = models.CharField(max_length=50)
    houseType = models.CharField(max_length=50)
    link = models.CharField(max_length=50)
    source = models.CharField(max_length=50)
    square = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    totalPrice = models.CharField(max_length=50)
    unitPrice = models.CharField(max_length=50)
    years = models.CharField(max_length=50)
    