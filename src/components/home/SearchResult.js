import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResult({ name, id, disambiguation }) {
  return (
    <>
      <Link to={ `/artist/${id}` }>
        <h2>{name}</h2>
        <p>{disambiguation ? disambiguation : 'description does not exist'}</p>
      </Link>
    </>
  );
}

SearchResult.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default SearchResult;
