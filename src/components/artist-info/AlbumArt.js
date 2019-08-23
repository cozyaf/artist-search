import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageNotFound from '../../images/ImageNotFound.png';
import styles from './AlbumArt.css';

function AlbumArt({ release }) {
  const { title, date, id, artistId } = release;
  const coverArtArchive = release['cover-art-archive'];

  const src = coverArtArchive.front ? `http://coverartarchive.org/release/${id}/front` : ImageNotFound;

  return (
    <Link to={ `/artist/${artistId}/album/${id}`} style={{ textDecoration: 'none' }}>
      <section className={styles.AlbumArt}>
        <img src={src} alt={`${title} Cover`}/>
        <p>{title}</p>
        <p>Release Date: {date}</p>
      </section>
    </Link>
  );
}

AlbumArt.propTypes = {
  release: PropTypes.object.isRequired
};

export default AlbumArt;
