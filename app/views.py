# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from translate import Translator
from django.http import JsonResponse
from django.shortcuts import render
from app.models import Idiomas

def index(request):
    return render(request, "index.html", {"idiomas": Idiomas.objects.all()})

def traduzir(request):
    data = {}
    if 'texto' in request.GET:
        texto = request.GET.get('texto', None)
        fl = request.GET.get('idioma1', None)
        tl = request.GET.get('idioma2', None)
        de = Idiomas.objects.get(id=fl)
        para = Idiomas.objects.get(id=tl)
        translator = Translator(from_lang=de.sigla, to_lang=para.sigla)
        translation = translator.translate(texto)
        data = {
            'result': True, 'traducao': translation
        }
    return JsonResponse(data)
