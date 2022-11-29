from django.db import models


class PurchaseDetails(models.Model):
    id = models.AutoField(primary_key=True)
    items = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    price = models.IntegerField()
    cardNumber = models.IntegerField()
    idOfPerson = models.IntegerField()
