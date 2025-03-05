import React from 'react';
import styles from './CourtoisStyles.module.css';
import CourtoisImg from '../../assets/Final-3.png';
//import backgroundIcon from '../../assets/sun.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import light_mode from '../../assets/switch-light.svg'
import dark_mode from '../../assets/switch-dark.svg'
import LinkedInLight from '../../assets/linkedin-light.svg'
import LinkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import Resume from '../../assets/cv.pdf'
import MailInLight from '../../assets/mail-light.svg'
import MailInDark from '../../assets/mail-dark.svg'
import { useTheme } from '../../common/Theme';
//In react we use classname instead of class
//target is to open in a new window
function Courtois() {
  //setting the toggling for themes 
  const {theme, toggleTheme} = useTheme();

  //set background icon based on whether theme is light or dark
  const backgroundIcon = theme === 'light' ? light_mode : dark_mode; //*reverse this

  const LinkedinIcon = theme === 'light' ? LinkedInLight: LinkedInDark;
  const GithubIcon = theme === 'light' ? githubLight: githubDark;
  const MailIcon = theme === 'light' ? MailInLight: MailInDark;
  //styles.Courtois
  return (
    <section id='Courtois' className = {styles.container}>
      <div className = {styles.colorModeContainer}>
        <img className = {styles.Courtois_pic} 
        src={CourtoisImg} 
        alt = "Profile Pic"
        />
        <img 
          className = {styles.colorMode}
          src={backgroundIcon} 
          alt = "Color Mode icon"
          onClick = {toggleTheme}
        />
      </div>
      <div className = {styles.info} > 
          <h1> 
            Javier 
            <br />
            Laveaga
          </h1>
          <h2>Full Stack Developer</h2>
          <span>
            <a href = "https://www.linkedin.com/in/javier-laveaga-4220aa268/" target = "_blank" >
              <img src = {LinkedinIcon} alt = "LinkedIn icon" />  
            </a>
            <a href = "https://github.com/javier-la200426" target = "_blank" >
              <img src = {GithubIcon} alt = "Github icon" />  
            </a>
            <a href = "mailto:javier.la200426@gmail.com" target = "_blank" >
              <img src = {MailIcon} alt = "Mail icon" />  
            </a>
          </span>
          <p className={styles.description}> 
            I am a Computer Science student at Tufts University with experience in 
            both front-end and back-end development
          </p>
          <a href = {Resume} download> 
            <button className="hover_btn" >Resume</button>
          </a>
      </div>
    
    </section>
  );
}

export default Courtois; //can use this component because of the export