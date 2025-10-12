
from django.urls import path
from . import views

urlpatterns = [
    path('tasks', views.task_list),
    # path('tasks/<int:id>/complete', views.complete_task),
    path('task/<int:pk>',views.task)
]
