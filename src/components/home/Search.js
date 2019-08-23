import React from 'react';
import PropTypes from 'prop-types';

function Search({ text, handleChange, handleClick }) {
  return (
    <>
      <label>Search:
        <input name="text" type="text" placeholder="Search for artist..." value={text} onChange={handleChange}/>
      </label>
      <button onClick={handleClick}>Magic Time</button>
    </>
  );
}

Search.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Search;
