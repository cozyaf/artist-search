import React from 'react';
import PropTypes from 'prop-types';
import styles from './CoverArt.css';
import ImageNotFound from '../images/ImageNotFound.png';


function CoverArt({ title, date, id, coverArtArchive }) {
  const src = coverArtArchive.front ? `http://coverartarchive.org/release/${id}/front` : ImageNotFound;

  return (
    <section className={styles.CoverArt}>
      <img src={src} alt={`${title} Cover`}/>
      <p>{title}</p>
      <p>Release Date: {date}</p>
    </section>
  );
}

CoverArt.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  coverArtArchive: PropTypes.object.isRequired
};

export default CoverArt;
