import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillListStyles.module.css';

function SkillList({skill}) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className={styles.skillBadge}
      variants={itemVariants}
      whileHover={!isMobile ? { scale: 1.05, y: -5 } : undefined}
      whileTap={!isMobile ? { scale: 0.95 } : undefined}
    >
      <span className={styles.skillText}>{skill}</span>
    </motion.div>
  );
}

export default SkillList