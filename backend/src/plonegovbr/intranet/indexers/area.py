from Acquisition import aq_parent
from plone import api
from plone.indexer import indexer
from plonegovbr.intranet.content.colaborador import Colaborador
from plonegovbr.intranet.content.colaborador import IColaborador
from plonegovbr.intranet.content.servico import IServico
from plonegovbr.intranet.content.servico import Servico


@indexer(IColaborador)
def area_indexer(colaborador: Colaborador) -> str:
    """Indexa o tipo área."""
    parent = aq_parent(colaborador)
    uid = ""
    if parent.portal_type == "Area":
        uid = api.content.get_uuid(parent)
    return uid


@indexer(IServico)
def area_servico_indexer(servico: Servico) -> str:
    """Indexa o tipo área."""
    relation = servico.area
    if relation:
        return api.content.get_uuid(relation.to_object)
