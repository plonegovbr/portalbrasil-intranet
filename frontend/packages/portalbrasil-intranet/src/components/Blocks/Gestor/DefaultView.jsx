import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ColaboradorSummary from '../../Summary/ColaboradorSummary';

const Header = ({ title }) => {
  return <h2 className={'headline'}>{title}</h2>;
};

const GestorView = (props) => {
  const { className, title, content } = props;
  const { gestor } = content;
  return (
    <div className={`block gestor ${className}`}>
      {gestor && (
        <>
          <Header title={title} />
          <Card.Group className={'gestor'}>
            <ColaboradorSummary content={gestor} />
          </Card.Group>
        </>
      )}
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
GestorView.propTypes = {
  title: PropTypes.string,
};
GestorView.defaultProps = {
  title: 'Gestor',
};

export default GestorView;
