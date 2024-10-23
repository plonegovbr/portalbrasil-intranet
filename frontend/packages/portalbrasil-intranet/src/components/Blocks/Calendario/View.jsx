import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import CalendarioView from './DefaultView';

const CalendarioBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <CalendarioView {...data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(CalendarioBlockView);
