
from django.contrib import admin
from django.urls import path
from myStore import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
#     path('api/PurchaseDetails/data_from_client/<str:items>/<str:name>/<int:price>/<int:cardNumber>/<int:idOfPerson>',
#          views.get_PurchaseDetails),

    path('api/PurchaseDetails/get-PurchaseDetails/<str:cliItems>/<str:cliName>/<int:cliPrice>/<int:cliCardNumber>/<int:cliIdOfPerson>',
         views.persist_new_PurchaseDetails),


]