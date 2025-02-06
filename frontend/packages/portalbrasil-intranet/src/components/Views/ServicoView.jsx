/**
 * ServicoView view component.
 * @module components/View/ServicoView
 */
import React from 'react';
import { Container } from '@plone/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import lockSVG from '@plone/volto/icons/lock.svg';

/**
 * ServicoView view component class.
 * @function ServicoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const ServicoView = (props) => {
  const { content } = props;

  return (
    <Container narrow id="page-document" className="view-wrapper servico-view">
      <Container className={'servico-header'}>
        <Container className={'servico-title'}>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </Container>
        {content.authentication && (
          <Container className={'icon'}>
            <Icon name={lockSVG} size="48px" />
          </Container>
        )}
      </Container>
      <Container className={'servico-link'}>
        <UniversalLink href={content.href}>Acesso</UniversalLink>
      </Container>
      {content.text && content.text.data && (
        <Container className={'detalhes'}>
          <h2 className={'headline'}>Detalhes</h2>
          <div dangerouslySetInnerHTML={{ __html: content.text.data }} />
        </Container>
      )}
      <Container className={'servico-area'}>
        <h2 className={'headline'}>Mantido por</h2>
        <UniversalLink item={content.area}>{content.area.title}</UniversalLink>
      </Container>
    </Container>
  );
};

export default ServicoView;
