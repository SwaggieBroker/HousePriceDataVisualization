from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _
import community.views

urlpatterns = [
	url(r'^getCommunity/(?P<communityName>[^/]+)/',
        community.views.GetCommunity.as_view(),
        name='getCommunity'),
]