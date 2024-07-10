import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import GestorBlockData from './Data';
import GestorBlockView from './View';

const GestorBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <GestorBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <GestorBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(GestorBlockEdit);
