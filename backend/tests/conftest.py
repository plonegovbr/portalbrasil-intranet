from plonegovbr.intranet.testing import FUNCTIONAL_TESTING
from plonegovbr.intranet.testing import INTEGRATION_TESTING
from pytest_plone import fixtures_factory

import pytest


pytest_plugins = ["pytest_plone"]


globals().update(
    fixtures_factory((
        (FUNCTIONAL_TESTING, "functional"),
        (INTEGRATION_TESTING, "integration"),
    ))
)


@pytest.fixture
def distribution_name() -> str:
    """Distribution name."""
    return "portalbrasil-intranet"
