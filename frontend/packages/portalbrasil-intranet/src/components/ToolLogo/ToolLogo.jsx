// SemanticUI-free pre-@plone/components
import { defineMessages, useIntl } from 'react-intl';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import LogoImage from './logo.png';

const messages = defineMessages({
  tool: {
    id: 'Portal Brasil: Intranet',
    defaultMessage: 'Portal Brasil: Intranet',
  },
});

const ToolLogo = () => {
  const intl = useIntl();
  return (
    <UniversalLink
      href="https://plone.org.br/portal-brasil"
      title={intl.formatMessage(messages.tool)}
    >
      <img
        src={LogoImage}
        alt={intl.formatMessage(messages.tool)}
        title={intl.formatMessage(messages.tool)}
      />
    </UniversalLink>
  );
};

export default ToolLogo;
