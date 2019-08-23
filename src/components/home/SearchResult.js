import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResult({ searchResult }) {
  const { id, name, disambiguation } = searchResult;

  return (
    <>
      <Link to={ `/artist/${id}` } style={{ textDecoration: 'none' }}>
        <h2>{name}</h2>
        <p>{disambiguation ? disambiguation : 'description does not exist'}</p>
      </Link>
    </>
  );
}

SearchResult.propTypes = {
  searchResult: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disambiguation: PropTypes.string
  }).isRequired
};

export default SearchResult;
