import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>COVID-19 Health Apps</h2>
      <p className={styles.description}>We searched for the mHealth apps using the term “COVID-19”</p>
    </div>
  );
}

export default Header;
