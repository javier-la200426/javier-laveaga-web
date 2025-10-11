import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <section id='footer' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          &copy; {currentYear} Javier Laveaga. All rights reserved.
        </p>
        <p className={styles.tagline}>
          Built with React & Framer Motion
        </p>
      </div>
    </section>
  );
}

export default Footer