import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import GestorView from './DefaultView';

const GestorBlockView = (props) => {
  return <GestorView {...props} />;
};

export default withBlockExtensions(GestorBlockView);
