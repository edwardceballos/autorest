# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.service_client import ServiceClient
from msrest import Configuration, Serializer, Deserializer
from .version import VERSION
from msrest.exceptions import HttpOperationError
from .operations.image_operations import ImageOperations


class CowbellModeratorConfiguration(Configuration):
    """Configuration for CowbellModerator
    Note that all parameters used to create this instance are saved as instance
    attributes.

    :param str base_url: Service URL
    """

    def __init__(
            self, base_url=None):

        if not base_url:
            base_url = 'https://localhost'

        super(CowbellModeratorConfiguration, self).__init__(base_url)

        self.add_user_agent('cowbellmoderator/{}'.format(VERSION))


class CowbellModerator(object):
    """CowbellModerator

    :ivar config: Configuration for client.
    :vartype config: CowbellModeratorConfiguration

    :ivar image: Image operations
    :vartype image: streamwithcontenttype.operations.ImageOperations

    :param str base_url: Service URL
    """

    def __init__(
            self, base_url=None):

        self.config = CowbellModeratorConfiguration(base_url)
        self._client = ServiceClient(None, self.config)

        client_models = {}
        self.api_version = '1.0'
        self._serialize = Serializer(client_models)
        self._deserialize = Deserializer(client_models)

        self.image = ImageOperations(
            self._client, self.config, self._serialize, self._deserialize)
