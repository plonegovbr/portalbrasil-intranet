from plone import api
from plone.base.interfaces.constrains import ENABLED
from plone.base.interfaces.constrains import ISelectableConstrainTypes
from plone.dexterity.content import DexterityContent
from plonegovbr.intranet import logger


CONSTRAINS = {
    "/estrutura": {
        "immediately_addable_types": ["Area"],
        "locally_allowed_types": ["Document", "Area"],
    },
    "/servicos": {
        "immediately_addable_types": ["Area"],
        "locally_allowed_types": ["Document", "Servico"],
    },
}


def _update_constrains(content: DexterityContent, constrains: dict) -> DexterityContent:
    """Update constrains in object."""
    behavior = ISelectableConstrainTypes(content, None)
    if behavior:
        behavior.setConstrainTypesMode(ENABLED)
        for key, func in (
            ("locally_allowed_types", behavior.setLocallyAllowedTypes),
            ("immediately_addable_types", behavior.setImmediatelyAddableTypes),
        ):
            value = constrains.get(key)
            try:
                func(value)
            except ValueError:
                logger.warning(f"Cannot set {key} on {content.getId()}", exc_info=True)
            else:
                logger.info(f"Set {key} on {content.getId()}", exc_info=True)
    return content


def update_constrains():
    for path, constrains in CONSTRAINS.items():
        content = api.content.get(path=path)
        _update_constrains(content, constrains)
