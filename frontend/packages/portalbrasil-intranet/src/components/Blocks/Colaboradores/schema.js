import { defineMessages } from 'react-intl';

const messages = defineMessages({
  colaboradores: {
    id: 'Colaboradores',
    defaultMessage: 'Colaboradores',
  },
  title: {
    id: 'Título',
    defaultMessage: 'Título',
  },
});

export const colaboradoresSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.colaboradores),
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
        default: 'Colaboradores',
      },
    },
    required: ['title'],
  };
};
