import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactStyles.module.css';

function Contact() {
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

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section id="contact" className={styles.container}> 
      <motion.h1 
        className="sectionTitle"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Get In Touch
      </motion.h1>
      <motion.form 
        action="https://formspree.io/f/xrbznzro" 
        method="post"
        className={styles.form}
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message" 
            id="message"
            placeholder="Your message..."
            rows="6"
            required>
          </textarea>
        </div>
        <motion.button 
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;