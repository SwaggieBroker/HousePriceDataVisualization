from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from houseinfo.model import HouseInfo

class ListHousesByCommunity(GenericAPIView):
    def get(self, request, community):
        
        houseinfos = HouseInfo.objects.filter(community = community).values_list()
        if houseinfos.count() > 0:
            data = "There are " + str(houseinfos.count()) + " in community " + community
            return Response(data, status=status.HTTP_200_OK)

        log.warning(message='House price from HousInfo not found',
                    details={'http_status_code': status.HTTP_404_NOT_FOUND})
        return Response(status=status.HTTP_404_NOT_FOUND)
