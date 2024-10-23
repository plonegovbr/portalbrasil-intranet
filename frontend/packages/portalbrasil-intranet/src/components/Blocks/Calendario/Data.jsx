import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { calendarioSchema } from './schema';
import { useIntl } from 'react-intl';

const CalendarioBlockData = (props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;

  const intl = useIntl();
  const schema = calendarioSchema({ ...props, intl });
  const onChangeField = (id, value) => {
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default CalendarioBlockData;
