from plone.app.vocabularies.catalog import StaticCatalogVocabulary
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory


@provider(IVocabularyFactory)
def gestores_vocabulary(context=None):
    """Vocabulário de possíveis gestores."""
    folder_path = "/".join(context.getPhysicalPath())
    return StaticCatalogVocabulary({
        "path": {"query": folder_path, "depth": 1},
        "portal_type": ["Colaborador"],
        "review_state": "active",
        "sort_on": "sortable_title",
    })
