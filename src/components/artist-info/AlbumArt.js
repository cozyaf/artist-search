import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CoverArt from '../CoverArt';

function AlbumArt({ release }) {
  const { title, date, id, artistId } = release;

  return (
    <Link to={`/artist/${artistId}/album/${id}`} style={{ textDecoration: 'none' }}>
      <CoverArt title={title} date={date} id={id} coverArtArchive={release['cover-art-archive']} />
    </Link>
  );
}

AlbumArt.propTypes = {
  release: PropTypes.object.isRequired
};

export default AlbumArt;
