import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { getQueryStringResults } from '@plone/volto/actions';
import { usePagination, getBaseUrl } from '@plone/volto/helpers';

import config from '@plone/volto/registry';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function withQuerystringResults(WrappedComponent) {
  function WithQuerystringResults(props) {
    const {
      data = {},
      id = data.block,
      properties: content,
      path,
      variation,
    } = props;
    const { settings } = config;
    const querystring = data.querystring || {};
    const subrequestID = content?.UID ? `${content?.UID}-${id}` : id;
    const { b_size = settings.defaultPageSize } = querystring; // batchsize

    // save the path so it won't trigger dispatch on eager router location change
    const [initialPath] = React.useState(getBaseUrl(path));

    const copyFields = ['limit', 'query', 'sort_on', 'sort_order', 'depth'];
    const { currentPage, setCurrentPage } = usePagination(id, 1);
    const adaptedQuery = Object.assign(
      variation?.fullobjects ? { fullobjects: 1 } : { metadata_fields: '_all' },
      {
        b_size: b_size,
      },
      ...copyFields.map((name) =>
        Object.keys(querystring).includes(name)
          ? { [name]: querystring[name] }
          : {},
      ),
    );
    const adaptedQueryRef = useRef(adaptedQuery);
    const currentPageRef = useRef(currentPage);

    const querystringResults = useSelector(
      (state) => state.querystringsearch.subrequests,
    );
    const dispatch = useDispatch();

    const hasQuery = querystring?.query?.length > 0;
    const hasLoaded = hasQuery
      ? querystringResults?.[subrequestID]?.loaded
      : true;

    const listingItems =
      hasQuery && (querystringResults?.[subrequestID]?.items || []);

    const showAsQueryListing =
      hasQuery && querystringResults?.[subrequestID]?.total > b_size;

    const totalPages = showAsQueryListing
      ? Math.ceil(querystringResults[subrequestID].total / b_size)
      : 0;

    const prevBatch = showAsQueryListing
      ? querystringResults[subrequestID].batching?.prev
      : null;
    const nextBatch = showAsQueryListing
      ? querystringResults[subrequestID].batching?.next
      : null;

    useDeepCompareEffect(() => {
      if (hasQuery) {
        dispatch(
          getQueryStringResults(
            initialPath,
            adaptedQuery,
            subrequestID,
            currentPage,
          ),
        );
      }
      adaptedQueryRef.current = adaptedQuery;
      currentPageRef.current = currentPage;
    }, [
      subrequestID,
      adaptedQuery,
      hasQuery,
      initialPath,
      dispatch,
      currentPage,
    ]);

    return (
      <WrappedComponent
        {...props}
        onPaginationChange={(e, { activePage }) => setCurrentPage(activePage)}
        total={querystringResults?.[subrequestID]?.total}
        batch_size={b_size}
        currentPage={currentPage}
        totalPages={totalPages}
        prevBatch={prevBatch}
        nextBatch={nextBatch}
        listingItems={listingItems}
        hasLoaded={hasLoaded}
      />
    );
  }

  WithQuerystringResults.displayName = `WithQuerystringResults(${getDisplayName(
    WrappedComponent,
  )})`;

  return hoistNonReactStatics(WithQuerystringResults, WrappedComponent);
}
