import { defineMessages } from 'react-intl';

const messages = defineMessages({
  blockTitle: {
    id: 'Calendário',
    defaultMessage: 'Calendário',
  },
  heading: {
    id: 'Título',
    defaultMessage: 'Título',
  },
});

export const calendarioSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.blockTitle),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['heading'],
      },
    ],
    properties: {
      heading: {
        title: props.intl.formatMessage(messages.heading),
        default: 'Eventos',
      },
    },
    required: ['heading'],
  };
};
