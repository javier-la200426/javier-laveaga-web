import styles from './ProjectStyles.module.css';
import Proj1 from '../../assets/Puppy1.png';
import Proj2 from '../../assets/compression.png';
import Proj3 from '../../assets/CPU.png';
import Proj4 from '../../assets/CLI.png';
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
            p = {"Developed an Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
          /> 
          <ProjectCard 
            src = {Proj2} 
            link = {''}
            h3 = {"Image Compressor"}
            p = {"Implemented in C using discrete cosine transformation, quantization, and bit packing techniques"}
          />

          <ProjectCard 
            src = {Proj3} 
            link = {''}
            h3 = {"Universal Machine"}
            p = {"Created a Turing-complete virtual machine in C, achieving 12x processing speed increase after profiling"}
          />

          <ProjectCard 
            src = {Proj4} 
            link = {''}
            h3 = {"Command Line Interface (CLI)"}
            p = {"Implemented a CLI tool for searching words or character sequences within files in a directory"}
          />
      </div>
    </section>

  );
}

export default Projects