import os

from django.shortcuts import render
from django.http import HttpResponse

from .models import *

def home(request):
    project_rows = [[]]
    for project in Project.objects.all().order_by('priority'):
        if len(project_rows[-1]) < 3:
            project_rows[-1].append(project)
        else:
            project_rows.append([project])

    context = {
        'milan': Profile.objects.get(name="Milan Gupta"),
        'skills': Skill_Category.objects.all().order_by('priority'),
        'project_rows': project_rows,
        'image_urls': [f"content/images/carousel-pics/{image}" for image in os.listdir('content/static/content/images/carousel-pics') if image != "first.jpeg" and image != '.DS_Store']
    }
    return render(request, 'content/home.html', context)

def image(request, path):
    image_data = open(os.path.join(os.getcwd(), 'content', request.path[1:])[:-1], "rb").read()
    return HttpResponse(image_data, content_type="image/jpeg")


def toastedpeanuts(request):
    return render(request, 'content/toastedpeanuts.html')
