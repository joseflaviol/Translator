# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Idiomas(models.Model):

    idioma = models.CharField(max_length=60, null=False)
    sigla = models.CharField(max_length=5, null=False)
