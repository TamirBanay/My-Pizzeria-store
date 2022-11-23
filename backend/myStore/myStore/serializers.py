from rest_framework import serializers

from myStore.models import PurchaseDetails


class PurchaseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseDetails
        fields = '__all__'
