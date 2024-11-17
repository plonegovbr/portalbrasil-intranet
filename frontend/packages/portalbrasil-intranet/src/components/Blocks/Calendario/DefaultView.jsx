import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Container } from '@plone/components';
import CalendarioEventos from '../../CalendarioEventos/CalendarioEventos';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import '@plone/components/src/styles/basic/Calendar.css';

const Evento = ({ item }, hasDescription) => {
  return (
    <Container className={'evento'}>
      <h3>{item.title}</h3>
      <When start={item.start} end={item.end} />
      {hasDescription && <p>{item.description}</p>}
    </Container>
  );
};

const EventosLista = ({ items }) => {
  return (
    <Container className={'eventos-lista'}>
      {items && items.map((item, idx) => <Evento key={idx} item={item} />)}
    </Container>
  );
};

const CalendarioView = (props) => {
  const { className, data, items, hasDescription } = props;
  const { heading } = data;
  const [date, setDate] = useState();
  const dateItems = date && items && items[date.toString()];
  return (
    <div className={`block calendarioBlock ${className}`}>
      <h2>{heading}</h2>
      <Container className={'wrapper'}>
        <div className={'calendario column'}>
          <CalendarioEventos items={items} onChange={setDate} />
        </div>
        <div className={'eventos column'}>
          {dateItems && <EventosLista items={dateItems} hasDescription={hasDescription} />}
        </div>
      </Container>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
CalendarioView.propTypes = {
  heading: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
CalendarioView.defaultProps = {
  heading: 'Eventos',
};

export default injectIntl(CalendarioView);
