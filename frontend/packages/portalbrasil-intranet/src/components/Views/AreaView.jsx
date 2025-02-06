/**
 * AreaView view component.
 * @module components/View/AreaView
 */
import React from 'react';
import { Container } from '@plone/components';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import { hasBlocksData } from '@plone/volto/helpers/Blocks/Blocks';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

/**
 * AreaView view component class.
 * @function AreaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const AreaView = (props) => {
  const { content, location } = props;
  const path = getBaseUrl(location?.pathname || '');

  return (
    <Container narrow className="view-wrapper area-view">
      {hasBlocksData(content) && <RenderBlocks {...props} path={path} />}
    </Container>
  );
};

export default AreaView;
