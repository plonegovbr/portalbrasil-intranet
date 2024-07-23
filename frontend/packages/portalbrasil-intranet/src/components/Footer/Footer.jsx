// SemanticUI-free pre-@plone/components
import React from 'react';

import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { Container } from '@plone/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import Sitemap from './Sitemap';
import ToolLogo from '../ToolLogo/ToolLogo';
import config from '@plone/volto/registry';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ pathname, intl }) => {
  const { settings } = config;
  const { display_sitemap, display_toollogo } = settings.intranet?.footer;
  const { lang, siteActions = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );
  return (
    <footer id="footer">
      <Container className="footer">
        <ul>
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          {siteActions?.length
            ? siteActions.map((item) => (
                <li className="item" key={item.id}>
                  <UniversalLink
                    className="item"
                    href={
                      settings.isMultilingual
                        ? `/${lang}/${
                            item.url
                              ? flattenToAppURL(item.url)
                              : addAppURL(item.id)
                          }`
                        : item.url
                          ? flattenToAppURL(item.url)
                          : addAppURL(item.id)
                    }
                  >
                    {item?.title}
                  </UniversalLink>
                </li>
              ))
            : null}
        </ul>
        {display_sitemap && (
          <Container narrow>
            <Sitemap pathname={pathname} />
          </Container>
        )}
        {display_toollogo && (
          <Container className="logo">
            <ToolLogo />
          </Container>
        )}
        <a className="item powered-by" href="https://plone.org">
          <FormattedMessage
            id="Powered by Portal Brasil: Intranet, Plone & Python"
            defaultMessage="Powered by Portal Brasil: Intranet, Plone & Python"
          />
        </a>
        <br />
        <div className="footer-branding">
          Feito com{' '}
          <span role="img" aria-label="love" style={{ color: 'red' }}>
            ❤️
          </span>{' '}
          pela comunidade PloneGov-BR
        </div>
      </Container>
    </footer>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
