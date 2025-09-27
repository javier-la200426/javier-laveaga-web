import styles from './ProjectStyles.module.css';
import Proj1 from '../../assets/Puppy1.png';
import Proj2 from '../../assets/compression.png';
import Proj3 from '../../assets/CPU.png';
import Proj4 from '../../assets/CLI.png';
import ProjectCard from '../../common/ProjectCard';
import Hopimg from '../../assets/HopImage.png';
import Bloomberg from '../../assets/Bloomberg.png';
import EnglishAtLargImg from '../../assets/EnglishAtLargImg.png'
import IconStart from '../../assets/IconStart.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={IconStart}
          link={'https://surveyaidapp.com/'}
          h3={"SurveyAid"}
          p={"Create AI-powered assessments in seconds."}
        />
        <ProjectCard
          src={Hopimg}
          link={'https://devpost.com/software/hopoffer?ref_content=my-projects-tab&ref_feature=my_projects'}
          h3={"HopOffer"}
          p={"Swipe. Match. Get Hired. The ultimate job discovery mobile app built for students"}
        />
        <ProjectCard
          src={EnglishAtLargImg}
          link={'https://github.com/JumboCode/english-at-large'}
          h3={"Library system"}
          p={"Built a library management system for English At Large - a nonprofit that helps adult immigrants learn English"}
        />
        <ProjectCard
          src={Proj1}
          link={'https://github.com/javier-la200426/AI-Website'}
          h3={"AI Puppy Website"}
          p={"Developed an Integrated Development Environment (IDE) for LEGO SPIKE™ Prime "}
        />

        <ProjectCard
          src={Bloomberg}
          link={'https://github.com/javier-la200426/newsfeed-app-bloomberg/tree/main?tab=readme-ov-file'}
          h3={"Bloomberg Newsfeed app"}
          p={"Developed a FullStack Web Application using React, Flask, Redis, and Docker"}
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