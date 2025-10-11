import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillListStyles.module.css';

function SkillList({skill}) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={styles.skillText}>{skill}</span>
    </motion.div>
  );
}

export default SkillList