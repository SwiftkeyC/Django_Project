from django.utils import timezone
from django.shortcuts import render

posts = [
    {# first post shown
        'author': 'John Doe',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': timezone.now(),
    },
    {#second post shown
        'author': 'Jane Doe',   
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': timezone.now(),
    }
]

def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/index.html', context)

def about(request):
    return render(request, 'blog/about.html')
