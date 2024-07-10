from plone.autoform.interfaces import IFormFieldProvider
from plone.schema.email import Email
from plone.supermodel import model
from plonegovbr.intranet import _
from zope import schema
from zope.interface import provider


@provider(IFormFieldProvider)
class IContato(model.Schema):
    model.fieldset(
        "contato",
        _("Contato"),
        fields=[
            "email",
            "telefone",
        ],
    )
    email = Email(
        title=_("Email"),
        required=False,
    )
    telefone = schema.TextLine(
        title=_("Telefone"),
        required=False,
    )
