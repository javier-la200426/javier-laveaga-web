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

  const hasLink = !!link;

  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        <img 
          src={src} 
          alt={`${h3} thumbnail`}
          className={styles.image}
        />
        <div className={`${styles.overlay} ${!hasLink ? styles.overlayNoLink : ''}`}>
          <span className={styles.viewProject}>
            {hasLink ? 'View Project →' : 'Link not available'}
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{h3}</h3>
        <p className={styles.description}>{p}</p>
      </div>
    </>
  );

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
    >
      {hasLink ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          {cardContent}
        </a>
      ) : (
        <div className={styles.cardLink}>
          {cardContent}
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard