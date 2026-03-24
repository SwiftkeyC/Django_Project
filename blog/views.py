from turtle import home

from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("blog home")

def about(request):
    return HttpResponse("<h6>blog about</h6>")