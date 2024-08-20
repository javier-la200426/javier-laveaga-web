import React from 'react';
import styles from './CourtoisStyles.module.css';
import CourtoisImg from '../../assets/hero-img.png';
//import backgroundIcon from '../../assets/sun.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import LinkedInLight from '../../assets/linkedin-light.svg'
import LinkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import Resume from '../../assets/cv.pdf'
import { useTheme } from '../../common/Theme';
//In react we use classname instead of class
//target is to open in a new window
function Courtois() {
  //setting the toggling for themes 
  const {theme, toggleTheme} = useTheme();

  //set background icon based on whether theme is light or dark
  const backgroundIcon = theme === 'light' ? sun : moon; //*reverse this

  const LinkedinIcon = theme === 'light' ? LinkedInLight: LinkedInDark;
  const GithubIcon = theme === 'light' ? githubLight: githubDark;

  return (
    <section id='Courtois' className = {styles.container}>
      <div className = {styles.colorModeContainer}>
        <img className = {styles.Courtois} 
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
          <h2>Backend and Frontend Developer</h2>
          <span>
            <a href = "https://www.linkedin.com/in/javier-laveaga-4220aa268/" target = "_blank" >
              <img src = {LinkedinIcon} alt = "LinkedIn icon" />  
            </a>
            <a href = "https://github.com/javier-la200426" target = "_blank" >
              <img src = {GithubIcon} alt = "Github icon" />  
            </a>
          </span>
          <p> 
            Put some paragraph text here. Put some paragraph text here.
          </p>
          <a href = {Resume} download> 
            <button className="hover_btn" >My Resume</button>
          </a>
      </div>
    
    </section>
  );
}

export default Courtois; //can use this component because of the export