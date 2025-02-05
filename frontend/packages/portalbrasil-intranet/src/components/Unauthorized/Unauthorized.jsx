/**
 * @module components/Unauthorized/Unauthorized
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '@plone/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import Login from '@plone/volto/components/theme/Login/Login';
import { withServerErrorCode } from '@plone/volto/helpers/Utils/Utils';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import BodyClass from '@plone/volto/helpers/BodyClass/BodyClass';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = () => {
  let location = useLocation();
  const history = useHistory();
  if (location.pathname.indexOf('/login') === -1) {
    history.push(`${getBaseUrl(location.pathname)}/login`);
  }

  return (
    <Container narrow className="view-wrapper unauthorized">
      <BodyClass className="is-unauthorized" />
      <h1>
        <FormattedMessage id="Unauthorized" defaultMessage="Unauthorized" />
      </h1>
      <p className="description">
        <FormattedMessage
          id="You are trying to access a protected resource, please {login} first."
          defaultMessage="You are trying to access a protected resource, please {login} first."
          values={{
            login: (
              <UniversalLink href={`${getBaseUrl(location.pathname)}/login`}>
                <FormattedMessage id="log in" defaultMessage="log in" />
              </UniversalLink>
            ),
          }}
        />
      </p>
      <div className="login">
        <Login location={location} />
      </div>
    </Container>
  );
};

export default withServerErrorCode(401)(Unauthorized);
