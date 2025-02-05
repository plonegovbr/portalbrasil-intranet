import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Card } from 'semantic-ui-react';
import personSVG from '@plone/volto/icons/user.svg';

const ColaboradorSummary = ({ content }) => {
  const img = content.image_scales?.image;
  const scale = img ? img[0]?.scales?.tile : null;
  return (
    <Card key={content.UID} className={'colaborador'}>
      {img ? (
        <img
          src={`${content['@id']}/${scale.download}`}
          alt={`Foto de ${content.title}`}
          className={'portrait listitem'}
        />
      ) : (
        <Icon name={personSVG} size="64px" className={'portrait listitem'} />
      )}
      <Card.Content>
        <Card.Header>
          <UniversalLink href={content['@id']} className={'nome'}>
            {content.title}
          </UniversalLink>
        </Card.Header>
        <Card.Meta>{content.description}</Card.Meta>
      </Card.Content>
    </Card>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ColaboradorSummary.propTypes = {
  title: PropTypes.string,
};

export default ColaboradorSummary;
