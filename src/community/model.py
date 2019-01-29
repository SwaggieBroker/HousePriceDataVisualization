from django.conf import settings
from django.db import models

class Community(models.Model):

    class Meta:
        db_table = "community"

    id = models.CharField(primary_key=True, max_length=50)
    validdate = models.DateTimeField('validdate')
    title = models.CharField(max_length=50)
    link = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    bizcircle = models.CharField(max_length=50)
    tagList = models.CharField(max_length=50)
    onsale = models.CharField(max_length=50)
    onrent = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    housetype = models.CharField(max_length=50)
    cost = models.CharField(max_length=50)
    service = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    building_num = models.CharField(max_length=50)
    house_num = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    city = models.CharField(max_length=50)