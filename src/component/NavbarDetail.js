import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import styles from '../styles/NavbarDetail.module.css';

function NavbarDetail() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>Covid19 App</h1>
      </div>
      <div className={styles.icons}>
        <BiMicrophone className={styles.icon} />
        <AiOutlineSetting className={styles.icon} />
      </div>
    </nav>
  );
}
export default NavbarDetail
