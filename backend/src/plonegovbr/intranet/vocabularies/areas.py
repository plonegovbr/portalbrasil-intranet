from plone import api
from plone.app.vocabularies.catalog import StaticCatalogVocabulary
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


@provider(IVocabularyFactory)
def areas_vocabulary(context):
    """Vocabulário de áreas."""
    terms = []
    brains = api.content.find(portal_type="Area")
    for brain in brains:
        terms.append(SimpleTerm(brain.UID, brain.UID, brain.Title))
    return SimpleVocabulary(terms)


@provider(IVocabularyFactory)
def cat_areas_vocabulary(context=None):
    """Vocabulário de possíveis áreas."""
    return StaticCatalogVocabulary({
        "portal_type": ["Area"],
        "review_state": "active",
        "sort_on": "sortable_title",
    })
