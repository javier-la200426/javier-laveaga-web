import React, { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/Theme';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const themeIcon = theme === 'light' ? moon : sun;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>JL</div>
        <ul className={styles.navLinks}>
          <li onClick={() => scrollToSection('Courtois')}>Home</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skils')}>Skills</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <img 
          className={styles.themeToggle}
          src={themeIcon} 
          alt="Toggle theme"
          onClick={toggleTheme}
        />
      </div>
    </nav>
  );
}

export default Navbar;

