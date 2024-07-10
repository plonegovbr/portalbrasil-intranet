import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import AreasBlockData from './Data';
import AreasBlockView from './View';

const AreasBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <AreasBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <AreasBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(AreasBlockEdit);
