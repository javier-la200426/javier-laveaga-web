import React from 'react';
import styles from './CourtoisStyles.module.css';
import CourtoisImg from '../../assets/hero-img.png';

function Courtois() {
  return (
    <section id='Courtois'>
      <div>
        <img src={CourtoisImg} alt = "bruh"> </img>
      </div>
    
    </section>
  );
}

export default Courtois; //can use this component because of the export