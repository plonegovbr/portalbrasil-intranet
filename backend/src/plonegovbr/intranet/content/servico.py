from plone.app.textfield import RichText as RichTextField
from plone.app.z3cform.widget import RichTextFieldWidget
from plone.autoform import directives
from plone.dexterity.content import Container
from plone.supermodel import model
from plone.supermodel.model import Schema
from plonegovbr.intranet import _
from z3c.relationfield.schema import RelationChoice
from zope import schema
from zope.interface import implementer


class IServico(Schema):
    """Serviço ou Sistema."""

    title = schema.TextLine(
        title=_("Serviço"),
        description=_("Nome do sistema / serviço"),
        required=True,
    )
    description = schema.TextLine(
        title=_("Sumário"),
        description=_("Pequena explicação sobre o sistema / serviço"),
        required=False,
    )
    text = RichTextField(
        title=_("Detalhes"),
        description="",
        required=False,
    )
    directives.widget("text", RichTextFieldWidget)

    model.fieldset(
        "acesso",
        _("Acesso"),
        fields=[
            "href",
            "authentication",
        ],
    )
    href = schema.URI(title=_("Link"), required=True)
    authentication = schema.Bool(
        title=_("Acesso restrito"),
        required=False,
    )
    area = RelationChoice(
        title=_("Área responsável"),
        description=_("Área responsável por este serviço"),
        vocabulary="plonegovbr.intranet.voc.cat_areas",
        required=False,
    )
    directives.widget(
        "area",
        frontendOptions={
            "widget": "select",
        },
    )


@implementer(IServico)
class Servico(Container):
    """Serviço ou Sistema da Instituição."""
