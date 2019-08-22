import React from 'react';
import PropTypes from 'prop-types';

function List({ entries, Comp }) {
  const entryList = entries.map(object => (
    <li key={object.id}>
      <Comp props={object} />
    </li>
  ));

  return (
    <section>
      <ul>IM ALIVE{entryList}</ul>
    </section>
  );
}

List.propTypes = {
  entries: PropTypes.array.isRequired,
  Comp: PropTypes.func.isRequired
};

export default List;


