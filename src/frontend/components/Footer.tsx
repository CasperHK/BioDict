import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>© {new Date().getFullYear()} BioDict. All rights reserved.</span>
      <span className={styles.links}>
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </span>
    </div>
  </footer>
);

export default Footer;
