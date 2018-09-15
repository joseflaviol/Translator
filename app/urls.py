from django.conf.urls import url, include
from app import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^traduzir/$', views.traduzir, name="traduzir")
]
