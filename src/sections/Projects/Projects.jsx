import styles from './ProjectStyles.module.css';
import Proj1 from '../../assets/viberr.png'

function Projects() {
  return (
    <section id = "projects" className = {styles.container}> 
    <h1 className="sectionTitle">Projects </h1>
    <div className= {styles.projectsContainer}> 
        <a 
        href="https://github.com/javier-la200426/AI-Website"
        target="_blank"> 
            <img className='hover' src = {Proj1} alt = "Project1 logo"
            />
            <h3>AI Puppy Website</h3>
            <p>Integrated Development Environment (IDE) for LEGO SPIKE™ Prime </p>
        </a>


    </div>
    </section>

  );
}

export default Projects