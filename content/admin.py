from django.contrib import admin
from .models import *

admin.site.register(Profile)

class Skill_Inline(admin.StackedInline):
    model = Skill
    extra = 3

class Skill_Cat_Admin(admin.ModelAdmin):
    inlines = [Skill_Inline]

admin.site.register(Skill_Category, Skill_Cat_Admin)
admin.site.register(Project)
