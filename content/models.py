from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(max_length=1000)
    picture = models.ImageField(upload_to='profiles/')

    def __str__(self):
        return self.name

class Skill_Category(models.Model):
    name = models.CharField(max_length=20)
    priority = models.IntegerField()
    description = models.TextField(max_length=500)
    proficiency_choices = [
        (1, 'Just Getting Started'),
        (2, 'Familiar'),
        (3, 'Proficient'),
        (4, 'Professional'),
    ]
    proficiency = models.IntegerField(choices=proficiency_choices)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=20)
    priority = models.IntegerField()
    category = models.ForeignKey('Skill_Category', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=500)
    link = models.URLField(blank=True, null=True)
    priority = models.IntegerField()
    picture = models.ImageField(upload_to='projects/')

    def __str__(self):
        return self.name
