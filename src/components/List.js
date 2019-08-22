import React from 'react';
import PropTypes from 'prop-types';

function List({ list, keyName, ListItem }) {
  const listElements = list.map(item => {
    const props = {
      [keyName]: item
    };
    return (
      <li key={item.id}>
        <ListItem {...props} />
      </li>
    );
  });

  return (
    <section>
      <ul>IM ALIVE{listElements}</ul>
    </section>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  ListItem: PropTypes.func.isRequired,
  keyName: PropTypes.string.isRequired
};

export default List;


