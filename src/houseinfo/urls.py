from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _
import houseinfo.views

urlpatterns = [
	url(r'^listHousesByCommunity/(?P<community>[^/]+)/',
        houseinfo.views.ListHousesByCommunity.as_view(),
        name='listHousesByCommunity'),
]