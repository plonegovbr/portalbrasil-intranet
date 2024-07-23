import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getNavigation } from '@plone/volto/actions';
import { GridList, GridListItem } from '@plone/components';
import { getBaseUrl, hasApiExpander } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const Sitemap = ({ pathname }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userSession.token, shallowEqual);
  const items = useSelector((state) => state.navigation.items, shallowEqual);

  useEffect(() => {
    if (!hasApiExpander('navigation', getBaseUrl(pathname))) {
      dispatch(getNavigation(getBaseUrl(pathname), config.settings.navDepth));
    }
  }, [pathname, token, dispatch]);

  return (
    <nav id="footer-navigation" aria-label="navigation" className="navigation">
      <GridList className={'navigation-grid'}>
        {items.map((item, index) => (
          <GridListItem key={item.url} className={'navigation-item'}>
            <h3 className={'section'}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </h3>
            {item.items && item.items.length > 0 && (
              <ul className={'item-wrapper'}>
                {item.items.map((subitem) => (
                  <li key={subitem.url} className={'nav-subitem'}>
                    <NavLink to={subitem.url}>{subitem.title}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </GridListItem>
        ))}
      </GridList>
    </nav>
  );
};

export default Sitemap;
