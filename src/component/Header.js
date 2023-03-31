import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>COVID-19 Cases By Country</h2>
    </div>
  );
}

export default Header;
