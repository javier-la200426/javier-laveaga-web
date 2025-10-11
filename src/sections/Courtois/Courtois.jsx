import React from 'react';
import { motion } from 'framer-motion';
import styles from './CourtoisStyles.module.css';
import CourtoisImg from '../../assets/Final-3.png';
import LinkedInLight from '../../assets/linkedin-light.svg'
import LinkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import Resume from '../../assets/cv.pdf'
import MailInLight from '../../assets/mail-light.svg'
import MailInDark from '../../assets/mail-dark.svg'
import { useTheme } from '../../common/Theme';

function Courtois() {
  const {theme} = useTheme();

  const LinkedinIcon = theme === 'light' ? LinkedInLight: LinkedInDark;
  const GithubIcon = theme === 'light' ? githubLight: githubDark;
  const MailIcon = theme === 'light' ? MailInLight: MailInDark;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id='Courtois' className = {styles.container}>
      <motion.div 
        className = {styles.colorModeContainer}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.imageWrapper}>
          <img className = {styles.Courtois_pic} 
          src={CourtoisImg} 
          alt = "Profile Pic"
          />
          <div className={styles.imageGlow}></div>
        </div>
      </motion.div>
      <motion.div 
        className = {styles.info}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > 
          <motion.div variants={itemVariants}>
            <h1 className={styles.name}> 
              <span className={styles.firstName}>Javier</span>
              <br />
              <span className={styles.lastName}>Laveaga</span>
            </h1>
          </motion.div>
          <motion.h2 variants={itemVariants} className={styles.title}>
            Full Stack Developer
          </motion.h2>
          <motion.span variants={itemVariants} className={styles.socialLinks}>
            <a href = "https://www.linkedin.com/in/javier-laveaga/" target = "_blank" className={styles.socialIcon}>
              <img src = {LinkedinIcon} alt = "LinkedIn icon" />  
            </a>
            <a href = "https://github.com/javier-la200426" target = "_blank" className={styles.socialIcon}>
              <img src = {GithubIcon} alt = "Github icon" />  
            </a>
            <a href = "mailto:javier.la200426@gmail.com" target = "_blank" className={styles.socialIcon}>
              <img src = {MailIcon} alt = "Mail icon" />  
            </a>
          </motion.span>
          <motion.p variants={itemVariants} className={styles.description}> 
            I am a Computer Science student at Tufts University with experience in 
            both front-end and back-end development
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href = {Resume} download> 
              <button className={styles.resumeBtn}>
                Download Resume
                <span className={styles.btnIcon}>↓</span>
              </button>
            </a>
          </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </motion.div>
    </section>
  );
}

export default Courtois;