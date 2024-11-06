import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import CalendarioView from './DefaultView';
import { parseDate } from '@internationalized/date';
import withQuerystringResults from './withQuerystringResults';

const groupByDate = (items) => {
  return items.reduce((map, obj) => {
    if (!obj.start) return;

    let start = obj.start ? parseDate(obj.start.slice(0, 10)) : null;
    const end = obj.end ? parseDate(obj.end.slice(0, 10)) : start;

    while (start < end) {
      const key = start.toString();

      if (key) {
        if (map[key] === undefined) {
          map[key] = [];
        }
        map[key].push(obj);
      }

      start = start.add({ days: 1 });
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
