from copy import deepcopy
from plone import api
from plone.restapi.interfaces import ISerializeToJson
from plone.restapi.interfaces import ISerializeToJsonSummary
from plone.restapi.serializer.converters import json_compatible
from plone.restapi.serializer.dxcontent import SerializeFolderToJson
from plonegovbr.intranet.content.area import IArea
from zope.component import adapter
from zope.component import getMultiAdapter
from zope.interface import implementer
from zope.interface import Interface


@implementer(ISerializeToJson)
@adapter(IArea, Interface)
class AreaJSONSerializer(SerializeFolderToJson):
    @property
    def base_query(self) -> dict:
        path = "/".join(self.context.getPhysicalPath())
        return {
            "path": {"query": path, "depth": 1},
            "review_state": "active",
            "sort_on": "sortable_title",
        }

    def _get_content(self, portal_type) -> list[dict]:
        results = []
        query = deepcopy(self.base_query)
        query["portal_type"] = portal_type
        brains = api.content.find(**query)
        for brain in brains:
            results.append(
                getMultiAdapter(
                    (brain.getObject(), self.request), ISerializeToJsonSummary
                )()
            )
        return results

    def __call__(self, version=None, include_items=True):
        result = super().__call__(version, include_items)
        result.update(
            json_compatible({
                "areas": self._get_content("Area"),
                "colaboradores": self._get_content("Colaborador"),
            })
        )
        return result
