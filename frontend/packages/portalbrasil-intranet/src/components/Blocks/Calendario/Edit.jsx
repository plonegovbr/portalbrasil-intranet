import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import CalendarioBlockData from './Data';
import CalendarioBlockView from './View';

const CalendarioBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <CalendarioBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <CalendarioBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(CalendarioBlockEdit);
