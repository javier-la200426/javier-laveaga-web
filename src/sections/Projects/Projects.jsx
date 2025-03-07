import styles from './ProjectStyles.module.css';
import Proj1 from '../../assets/Puppy1.png';
import Proj2 from '../../assets/compression.png';
import Proj3 from '../../assets/CPU.png';
import Proj4 from '../../assets/CLI.png';
import ProjectCard from '../../common/ProjectCard';
import Hopimg from '../../assets/HopImage.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Hopimg}
          link={'https://devpost.com/software/hopoffer?ref_content=my-projects-tab&ref_feature=my_projects'}
          h3={"HopOffer"}
          p={"Swipe. Match. Get Hired. The ultimate job discovery mobile app built for students"}
        />
        <ProjectCard
          src={Proj1}
          link={'https://github.com/javier-la200426/AI-Website'}
          h3={"AI Puppy Website"}
          p={"Developed an Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
        />
        <ProjectCard
          src={Proj2}
          h3={"Image Compressor"}
          p={"Implemented in C using discrete cosine transformation, quantization, and bit packing techniques"}
        />

        <ProjectCard
          src={Proj3}
          h3={"Universal Machine"}
          p={"Created a Turing-complete virtual machine in C, achieving 12x processing speed increase after profiling"}
        />

        <ProjectCard
          src={Proj4}
          h3={"Command Line Interface (CLI)"}
          p={"Implemented a CLI tool for searching words or character sequences within files in a directory"}
        />
      </div>
    </section>

  );
}

export default Projects