import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ColaboradorSummary from '../../Summary/ColaboradorSummary';

const Header = ({ title }) => {
  return <h2 className={'headline'}>{title}</h2>;
};

const ColaboradoresView = (props) => {
  const { className, title, content, isEditMode } = props;
  const { colaboradores } = content;
  const items = colaboradores;
  return (
    <div className={`block colaboradores ${className}`}>
      {isEditMode && !(items && items.length > 0) && <Header title={title} />}
      {items && items.length > 0 && (
        <>
          <Header title={title} />
          <Card.Group className={'colaboradores'}>
            {items.map(function (colaborador, i) {
              return <ColaboradorSummary content={colaborador} key={i} />;
            })}
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
ColaboradoresView.propTypes = {
  title: PropTypes.string,
};
ColaboradoresView.defaultProps = {
  title: 'Colaboradores',
};

export default ColaboradoresView;
