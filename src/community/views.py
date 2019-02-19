from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.forms.models import model_to_dict

from community.model import Community

class GetCommunity(GenericAPIView):
    
    def get(self, request, communityName):
        
        community = Community.objects.get(title = communityName)
        if community is not None:
        	return JsonResponse(model_to_dict(community), status=status.HTTP_200_OK, safe=False)

        log.warning(message='Community not found',
                    details={'http_status_code': status.HTTP_404_NOT_FOUND})
        return Response(status=status.HTTP_404_NOT_FOUND)