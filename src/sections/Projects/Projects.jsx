import styles from './ProjectStyles.module.css';
import Proj1 from '../../assets/viberr.png';
import Proj2 from '../../assets/fresh-burger.png';
import Proj3 from '../../assets/hipsster.png';
import Proj4 from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id = "projects" className = {styles.container}> 
      <h1 className="sectionTitle">Projects </h1>
      <div className= {styles.projectsContainer}> 
          <ProjectCard 
            src = {Proj1} 
            link = {'https://github.com/javier-la200426/AI-Website'}
            h3 = {"AI Puppy Website"}
            p = {"Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
          /> 
          <ProjectCard 
            src = {Proj2} 
            link = {'https://github.com/javier-la200426/AI-Website'}
            h3 = {"AI Puppy Website"}
            p = {"Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
          />

          <ProjectCard 
            src = {Proj3} 
            link = {'https://github.com/javier-la200426/AI-Website'}
            h3 = {"AI Puppy Website"}
            p = {"Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
          />

          <ProjectCard 
            src = {Proj4} 
            link = {'https://github.com/javier-la200426/AI-Website'}
            h3 = {"AI Puppy Website"}
            p = {"Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
          />
      </div>
    </section>

  );
}

export default Projects