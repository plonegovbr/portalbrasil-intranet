/**
 * Tags component.
 * @module components/theme/Tags/Tags
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import tagSVG from '@plone/volto/icons/tag.svg';

/**
 * Tags component class.
 * @function Tags
 * @param {array} tags Array of tags.
 * @returns {string} Markup of the component.
 */
const Tags = ({ tags }) => {
  const parsedTags = tags ? tags.filter((tag) => tag !== 'Área') : [];
  return parsedTags.length > 0 ? (
    <Container narrow className="tags">
      <Icon name={tagSVG} />
      {parsedTags.map((tag, i) => (
        <React.Fragment key={tag.id}>
          <Link className="ui tag" key={tag} to={`/search?Subject=${tag}`}>
            {tag}
          </Link>
          {parsedTags.length > i + 1 && <span className="divider">,</span>}
        </React.Fragment>
      ))}
    </Container>
  ) : (
    <span />
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Tags.defaultProps = {
  tags: null,
};

export default Tags;
