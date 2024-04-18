import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made with <span className={styles.heart}>❤️</span> by @desertoraposa</p>
    </footer>
  );
}

export default Footer;