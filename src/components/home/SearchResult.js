import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResult({ props }) {
  return (
    <>
      <Link to={ `/artist/${props.id}` }>
        <h2>{props.name}</h2>
        <p>{props.disambiguation ? props.disambiguation : 'description does not exist'}</p>
      </Link>
    </>
  );
}

SearchResult.propTypes = {
  props: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default SearchResult;
