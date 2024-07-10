import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import ColaboradoresBlockData from './Data';
import ColaboradoresBlockView from './View';

const ColaboradoresBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <ColaboradoresBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <ColaboradoresBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(ColaboradoresBlockEdit);
