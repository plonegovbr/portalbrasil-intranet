import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '@plone/components';
import '@plone/components/src/styles/basic/Calendar.css';

const CalendarioView = (props) => {
  const { heading, className } = props;
  return (
    <div className={`block calendarioBlock ${className}`}>
      <h2>{heading}</h2>
      <Calendar />
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

export default CalendarioView;
