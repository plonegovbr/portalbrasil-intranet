from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.distribution.testing.layer import PloneDistributionFixture
from plone.testing.zope import WSGI_SERVER_FIXTURE


DEFAULT_ANSWERS = {
    "site_id": "plone",
    "title": "Intranet",
    "description": "Intranet desenvolvida com Plone",
    "default_language": "pt-br",
    "portal_timezone": "America/Sao_Paulo",
    "setup_content": True,
    "demo_content": True,
}


class BaseFixture(PloneDistributionFixture):
    PACKAGE_NAME = "plonegovbr.intranet"
    SITES = (("portalbrasil-intranet", DEFAULT_ANSWERS),)
    _distribution_products = (
        ("plone.app.contenttypes", {"loadZCML": True}),
        ("plone.distribution", {"loadZCML": True}),
        ("plone.restapi", {"loadZCML": True}),
        ("plone.volto", {"loadZCML": True}),
    )


BASE_FIXTURE = BaseFixture()


class Layer(PloneSandboxLayer):
    defaultBases = (BASE_FIXTURE,)


FIXTURE = Layer()

INTEGRATION_TESTING = IntegrationTesting(
    bases=(FIXTURE,),
    name="IntranetLayer:IntegrationTesting",
)


FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(FIXTURE, WSGI_SERVER_FIXTURE),
    name="IntranetLayer:FunctionalTesting",
)
