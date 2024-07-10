import { defineMessages } from 'react-intl';

const messages = defineMessages({
  gestor: {
    id: 'Gestor',
    defaultMessage: 'Gestor',
  },
  title: {
    id: 'Título',
    defaultMessage: 'Título',
  },
});

export const gestorSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.gestor),
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
        default: 'Gestor',
      },
    },
    required: ['title'],
  };
};
