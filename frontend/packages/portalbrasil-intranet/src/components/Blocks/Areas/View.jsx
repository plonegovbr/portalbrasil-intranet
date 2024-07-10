import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import AreasView from './DefaultView';

const AreasBlockView = (props) => {
  return <AreasView {...props} />;
};

export default withBlockExtensions(AreasBlockView);
