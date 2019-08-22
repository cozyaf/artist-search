import React from 'react';
import PropTypes from 'prop-types';

function AlbumArt({ props }) {
  const { id, title, date } = props;

  return (
    <section>
      <img src={image}/>
      <p>Title: {title}</p>
      <p>Release Date: {date}</p>
    </section>
  );
}

AlbumArt.propTypes = {
  props: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default AlbumArt;
