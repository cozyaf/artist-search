import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <section className={styles.Header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div >
          <h1>Artist Search</h1>
        </div>
      </Link>
    </section>
  );
}

export default Header;
