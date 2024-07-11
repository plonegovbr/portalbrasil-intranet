"""Init and utils."""

from .about import __version__  # noQA: F401
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "plonegovbr.intranet"

_ = MessageFactory(PACKAGE_NAME)

logger = logging.getLogger(PACKAGE_NAME)
