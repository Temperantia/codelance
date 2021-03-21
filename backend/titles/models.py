from django.db import models

# Create your models here.


class Title(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return self.name


class Review(models.Model):
  name = models.CharField(max_length=100)
  title = models.ForeignKey(
      Title, related_name='reviews', on_delete=models.CASCADE)

  def __str__(self):
    return self.name
