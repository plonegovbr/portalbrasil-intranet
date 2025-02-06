import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Card } from 'semantic-ui-react';
import houseSVG from '@plone/volto/icons/home.svg';

const AreaSummary = ({ content }) => {
  return (
    <Card key={content.UID} className={'area'}>
      <Icon name={houseSVG} size="64px" className={'icon listitem'} />
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
AreaSummary.propTypes = {
  title: PropTypes.string,
};

export default AreaSummary;
