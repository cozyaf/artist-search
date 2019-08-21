import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './home/SearchResult';

function List({ entries }) {
  const entryList = entries.map(entry => (
    <li key={entry.id}>
      <SearchResult 
        name={entry.name} 
        id={entry.id} 
        disambiguation={entry.disambiguation}/>
    </li>
  ));

  return (
    <section>
      <ul>IM ALIVE{entryList}</ul>
    </section>
  );
}

List.propTypes = {
  entries: PropTypes.array.isRequired
};

export default List;


