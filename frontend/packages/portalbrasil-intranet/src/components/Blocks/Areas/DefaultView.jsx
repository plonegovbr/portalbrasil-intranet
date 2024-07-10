import React from 'react';
import { Card } from 'semantic-ui-react';
import AreaSummary from '../../Summary/AreaSummary';

const Header = ({ title }) => {
  return <h2 className={'headline'}>{title}</h2>;
};

const AreasView = (props) => {
  const { className, data, content, isEditMode } = props;
  const { areas } = content;
  const items = areas;
  return (
    <div className={`block areas ${className}`}>
      {isEditMode && !(items && items.length > 0) && (
        <Header title={data.title} />
      )}
      {items && items.length > 0 && (
        <>
          <Header title={data.title} />
          <Card.Group className={'subareas'}>
            {items.map(function (area, i) {
              return <AreaSummary content={area} key={i} />;
            })}
          </Card.Group>
        </>
      )}
    </div>
  );
};

export default AreasView;
