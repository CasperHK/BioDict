import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1>Welcome to BioDict</h1>
      <p>Your international biology dictionary for exploring organisms and their 3D models.</p>
      <div className={styles.actions}>
        <a href="/organisms" className={styles.cta}>Explore Organisms</a>
        <a href="/3d-models" className={styles.ctaSecondary}>View 3D Models</a>
      </div>
    </div>
  </section>
);

export default Hero;
