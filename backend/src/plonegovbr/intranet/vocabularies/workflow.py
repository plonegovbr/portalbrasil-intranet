from plone import api
from plonegovbr.intranet import _
from Products.CMFPlone.WorkflowTool import WorkflowTool
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


ALLOWED_WORKFLOWS = [
    "simple_intranet_workflow",
    "two_state_workflow",
]


@provider(IVocabularyFactory)
def wf_states_vocabulary(context):
    """Vocabulário de estados de workflow."""
    terms = []
    wtool: WorkflowTool = api.portal.get_tool("portal_workflow")
    for wf_id in ALLOWED_WORKFLOWS:
        wf = wtool[wf_id]
        states_folder = getattr(wf, "states", None)
        for state in states_folder.values():
            state_id = state.getId()
            state_title = _(state.title)
            terms.append(SimpleTerm(state_id, state_id, state_title))
    return SimpleVocabulary(terms)
