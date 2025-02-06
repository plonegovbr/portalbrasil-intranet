import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';
import ColaboradoresView from './DefaultView';

const ColaboradoresBlockView = (props) => {
  return <ColaboradoresView {...props} />;
};

export default withBlockExtensions(ColaboradoresBlockView);
