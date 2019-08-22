import React from 'react';
import PropTypes from 'prop-types';
import ImageNotFound from '../../images/ImageNotFound.png';

function AlbumArt({ release }) {
  const { title, date, id } = release;
  const coverArtArchive = release['cover-art-archive'];

  const src = coverArtArchive.artwork ? `http://coverartarchive.org/release/${id}/front` : ImageNotFound;

  return (
    <section>
      <img src={src} alt={`${title} Cover`}/>
      <p>Title: {title}</p>
      <p>Release Date: {date}</p>
    </section>
  );
}

AlbumArt.propTypes = {
  release: PropTypes.object.isRequired
};

export default AlbumArt;
