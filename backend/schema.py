import graphene
from graphene_django import DjangoObjectType

from backend.titles.models import Title, Review


class TitleType(DjangoObjectType):
  class Meta:
    model = Title
    fields = ("id", "name", "reviews")


class Query(graphene.ObjectType):
  all_titles = graphene.List(TitleType)


schema = graphene.Schema(query=Query)
