import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from '@plone/components';
import { useIntl, defineMessages } from 'react-intl';
import config from '@plone/volto/registry';
import BarraAcessibilidade from '../BarraAcessibilidade/BarraAcessibilidade';
import MobileNavigation from '@kitconcept/volto-light-theme/components/MobileNavigation/MobileNavigation';
import Logo from '@kitconcept/volto-light-theme/components/Logo/Logo';

import {
  Anontools,
  LanguageSelector,
  Navigation,
  SearchWidget,
  UniversalLink,
} from '@plone/volto/components';

const messages = defineMessages({
  siteLabel: {
    id: 'siteLabel',
    defaultMessage: ' ',
  },
});

const InternetHeader = ({ pathname, siteLabel, token, siteAction }) => {
  return (
    <>
      <Container layout className="header">
        <div className="tools-wrapper">
          <LanguageSelector />

          <div className="tools">
            {!token && <Anontools />}
            {siteAction &&
              siteAction.map((item) => (
                <UniversalLink key={item.url} href={item.url}>
                  {item.title}
                </UniversalLink>
              ))}
          </div>
          {siteLabel && (
            <div className="intranet">
              <p>{siteLabel}</p>
            </div>
          )}
        </div>
        <div className="logo-nav-wrapper">
          <div className="logo">
            <Logo />
          </div>
          <Navigation pathname={pathname} />
          <MobileNavigation pathname={pathname} />
          <div className="search-wrapper navigation-desktop">
            <div className="search">
              <SearchWidget />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Header = (props) => {
  const { pathname } = props;
  let siteLabel = config.settings.siteLabel;
  const token = useSelector((state) => state.userSession.token);
  const siteAction = useSelector(
    (state) => state.content.data?.['@components']?.actions?.site_actions,
  );
  const intl = useIntl();
  const translatedSiteLabel = intl.formatMessage(messages.siteLabel);

  siteLabel =
    siteLabel &&
    (translatedSiteLabel !== 'siteLabel' && translatedSiteLabel !== ' '
      ? translatedSiteLabel
      : siteLabel);

  return (
    <header className={'header-wrapper'}>
      <BarraAcessibilidade />
      <Container layout>
        <InternetHeader
          pathname={pathname}
          siteLabel={siteLabel}
          token={token}
          siteAction={siteAction}
        />
      </Container>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
};

Header.defaultProps = {
  token: null,
};

export default Header;
