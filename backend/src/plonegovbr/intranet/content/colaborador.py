from plone.app.z3cform.widget import DateFieldWidget
from plone.autoform import directives
from plone.dexterity.content import Container
from plone.supermodel.model import Schema
from plonegovbr.intranet import _
from zope import schema
from zope.interface import implementer


class IColaborador(Schema):
    """Colaborador da Instituição."""

    title = schema.TextLine(
        title=_("Nome completo"),
        description=_("Nome completo do colaborador."),
        required=True,
    )
    description = schema.TextLine(
        title=_("Cargo"),
        description=_("Informe o cargo do colaborador."),
        required=False,
    )
    birthdate = schema.Date(title=_("Data de nascimento"), required=False)
    directives.widget(
        "birthdate",
        DateFieldWidget,
    )


@implementer(IColaborador)
class Colaborador(Container):
    """Colaborador da Instituição."""
