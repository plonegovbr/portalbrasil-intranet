from plone.app.dexterity.behaviors.id import ShortName
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
from plone.supermodel import model
from plonegovbr.intranet import _
from zope import schema
from zope.interface import provider


@provider(IFormFieldProvider)
class IMatricula(model.Schema):
    id = schema.ASCIILine(
        title=_("Matrícula"),
        description=_("Matrícula deste colaborador"),
        required=True,
    )
    directives.write_permission(id="cmf.AddPortalContent")
    directives.order_before(id="*")


class Matricula(ShortName):
    """Matrícula."""
