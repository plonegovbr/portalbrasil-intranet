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
  querystring: {
    id: 'Query',
    defaultMessage: 'Query',
  },
});

// Consulta padrão dos eventos
const defaultQueryString = {
  query: [
    {
      i: 'portal_type',
      o: 'plone.app.querystring.operation.selection.any',
      v: ['Event'],
    },
  ],
  sort_on: 'start',
  sort_order: 'ascending',
};

export const calendarioSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.blockTitle),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['heading', 'querystring'],
      },
    ],
    properties: {
      heading: {
        title: props.intl.formatMessage(messages.heading),
        default: 'Eventos',
      },
      querystring: {
        title: props.intl.formatMessage(messages.querystring),
        widget: 'querystring',
        default: defaultQueryString,
      },
    },
    required: ['heading', 'querystring'],
  };
};
