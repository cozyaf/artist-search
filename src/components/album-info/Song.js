import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ song }) {
  const { title, artistName } = song;
  return (
    <Link to={`/lyrics/${artistName}/${title}`} style={{ textDecoration: 'none' }}>
      <section>
        <p>{title}</p>
      </section>
    </Link>
  );
}

Song.propTypes = {
  song: PropTypes.object.isRequired
};

export default Song;
