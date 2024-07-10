from plone.autoform import directives
from plone.dexterity.content import Container
from plone.supermodel.model import Schema
from z3c.relationfield.schema import RelationChoice
from zope.interface import implementer


class IArea(Schema):
    """Definição de uma área na Instituição."""

    gestor = RelationChoice(
        title="Gestor(a)",
        description="Pessoa gestora dessa área",
        vocabulary="plonegovbr.intranet.voc.gestores",
        required=False,
    )
    directives.widget(
        "gestor",
        frontendOptions={
            "widget": "select",
        },
    )


@implementer(IArea)
class Area(Container):
    """Uma área na Instituição."""
