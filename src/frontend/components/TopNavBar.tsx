import Link from 'next/link';
import React from 'react';
import styles from './TopNavBar.module.css';

const TopNavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span>BioDict</span>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/organisms">Organisms</Link></li>
        <li><Link href="/3d-models">3D Models</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
