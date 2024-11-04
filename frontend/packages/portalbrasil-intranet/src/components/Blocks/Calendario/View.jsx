import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import CalendarioView from './DefaultView';
import { parseDate } from '@internationalized/date';
import withQuerystringResults from './withQuerystringResults';

const groupByDate = (items) => {
  return items.reduce((map, obj) => {
    const key = obj.start ? parseDate(obj.start.slice(0, 10)).toString() : null;
    if (key) {
      if (map[key] === undefined) {
        map[key] = [];
      }
      map[key].push(obj);
    }
    return map;
  }, {});
};

const CalendarioBlockView = withQuerystringResults((props) => {
  const { data, isEditMode, path, pathname, className, listingItems } = props;
  const items = listingItems ? groupByDate(listingItems) : {};
  return (
    <CalendarioView
      data={data}
      path={path ?? pathname}
      isEditMode={isEditMode}
      className={className}
      items={items}
    />
  );
});

export default withBlockExtensions(CalendarioBlockView);
