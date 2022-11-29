from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from myStore.serializers import PurchaseDetailsSerializer
from myStore.models import PurchaseDetails
from myStore.serializers import PurchaseDetails


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_PurchaseDetails(_, PurchaseDetails):
    PurchaseDetails = get_mock_PurchaseDetails()
    serializer = PurchaseDetailsSerializer(PurchaseDetails)

    return Response(serializer.data, status=status.HTTP_200_OK)


def persist_new_PurchaseDetails(_, cliItems, cliName, cliPrice, cliCardNumber, cliIdOfPerson):
    PurchaseDetails_1 = PurchaseDetails(
        items=cliItems, name=cliName, price=cliPrice, cardNumber=cliCardNumber, idOfPerson=cliIdOfPerson)
    PurchaseDetails_1.save()
    return PurchaseDetails


# def data_from_client(_, items, name, price, cardNumber, idOfPerson):
#     newData = PurchaseDetails(theItem=items, theName=name, thePrice=price,
#                               theCardNumber=cardNumber, theIdOfPerson=idOfPerson)
#     newData.save()


# def get_mock_PurchaseDetails():
#     return PurchaseDetails(id=5, items='20', name='tamir', price=250, cardNumber=1529, idOfPerson=3128)
