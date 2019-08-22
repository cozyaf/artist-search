import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResult({ searchResult }) {
  const { id, name, disambiguation } = searchResult;

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
  searchResult: PropTypes.object.isRequired
};

export default SearchResult;
