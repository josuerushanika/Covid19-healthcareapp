import React from 'react'
import styling from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styling.footer}>
      <footer>
        <p className={styling.footerText}>
          &copy; 2023 | <span className={styling.footerName}>Josue Rushanika</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer

