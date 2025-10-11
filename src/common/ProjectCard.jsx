import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({src, link, h3, p}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      > 
        <div className={styles.imageContainer}>
          <img 
            src={src} 
            alt={`${h3} thumbnail`}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.viewProject}>View Project →</span>
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{h3}</h3>
          <p className={styles.description}>{p}</p>
        </div>
      </a>
    </motion.div>
  )
}

export default ProjectCard