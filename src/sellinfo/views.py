import json
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.db.models import Count

from sellinfo.model import SellInfo

class ListHousesByCommunity(GenericAPIView):
    
    def get(self, request, community):
        
        sellinfos = SellInfo.objects.filter(community = community).values_list()
        if sellinfos.count() > 0:
            data = "There are " + str(sellinfos.count()) + " in community " + community
            return Response(data, status=status.HTTP_200_OK)

        log.warning(message='House price from HousInfo not found',
                    details={'http_status_code': status.HTTP_404_NOT_FOUND})
        return Response(status=status.HTTP_404_NOT_FOUND)

class ListTopNbyColumn(GenericAPIView):

    def get(self, request, column, num):
        
        columns = SellInfo.objects.values(column) \
            .annotate(count=Count(column)) \
            .order_by('-count')[:int(num)]
        
        if columns.count() > 0:
            data = { 'data': list(columns) }
            json.dumps(data)
            return Response(data, status=status.HTTP_200_OK)

        log.warning(message='ListTopNbyColumn not found',
                    details={'http_status_code': status.HTTP_404_NOT_FOUND})
        return Response(status=status.HTTP_404_NOT_FOUND)