import { defineMessages } from 'react-intl';

const messages = defineMessages({
  areas: {
    id: 'Áreas',
    defaultMessage: 'Áreas',
  },
  title: {
    id: 'Título',
    defaultMessage: 'Título',
  },
});

export const areasSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.areas),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title'],
      },
    ],
    properties: {
      title: {
        title: props.intl.formatMessage(messages.title),
        default: 'Áreas',
      },
    },
    required: ['title'],
  };
};
