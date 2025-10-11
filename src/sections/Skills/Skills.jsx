import React from 'react';
import { motion } from 'framer-motion';
import styles from './skillStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const languages = ["C++", "C", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "ReactJS"];
  const tools = ["Visual Studio Code", "GitHub", "Git", "Docker", "Redis", "Flask"];
  const languages_spoken = ["English", "Spanish", "French"];

  return (
    <section id="skils" className={styles.container}> 
      <motion.h1 
        className="sectionTitle"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Expertise
      </motion.h1>
      
      <div className={styles.skillsWrapper}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Languages & Frameworks</h3>
          <motion.div 
            className={styles.skillList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {languages.map((skill, index) => (
              <SkillList key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Tools & Technologies</h3>
          <motion.div 
            className={styles.skillList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {tools.map((skill, index) => (
              <SkillList key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Languages</h3>
          <motion.div 
            className={styles.skillList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {languages_spoken.map((skill, index) => (
              <SkillList key={index} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;