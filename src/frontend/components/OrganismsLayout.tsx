import React, { ReactNode } from 'react';
import styles from './OrganismsLayout.module.css';

interface OrganismsLayoutProps {
  children: ReactNode;
}

const OrganismsLayout: React.FC<OrganismsLayoutProps> = ({ children }) => (
  <div className={styles.pageLayout}>
    <aside className={styles.sideMenuLeft}>
      <nav>
        <ul>
          <li><a href="#mammals">Mammals</a></li>
          <li><a href="#birds">Birds</a></li>
          <li><a href="#plants">Plants</a></li>
          <li><a href="#bacteria">Bacteria</a></li>
        </ul>
      </nav>
    </aside>
    <main className={styles.mainContent}>{children}</main>
    <aside className={styles.sideMenuRight}>
      <div className={styles.infoBox}>
        <h4>Did you know?</h4>
        <p>There are millions of known species on Earth, and new ones are discovered every year!</p>
      </div>
    </aside>
  </div>
);

export default OrganismsLayout;
