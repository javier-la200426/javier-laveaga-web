import styles from './skillStyles.module.css';
import checkmarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id = "skils" className = {styles.container}> 
        <h1 className = "sectionTitle">Skills</h1>
        <div className = {styles.skillList}> 
            <SkillList src = {checkmarkIcon} skill = {"C++"}/>
            <SkillList src = {checkmarkIcon} skill = {"C"}/>
            <SkillList src = {checkmarkIcon} skill = {"Python"}/>
            <SkillList src = {checkmarkIcon} skill = {"Java"}/>
            <SkillList src = {checkmarkIcon} skill = {"JavaScript"}/>
            <SkillList src = {checkmarkIcon} skill = {"PyScript"}/>
            <SkillList src = {checkmarkIcon} skill = {"HTML"}/>
            <SkillList src = {checkmarkIcon} skill = {"CSS"}/>
            <SkillList src = {checkmarkIcon} skill = {"ReactJS"}/>
            <SkillList src = {checkmarkIcon} skill = {"LaTeX"}/>
            <SkillList src = {checkmarkIcon} skill = {"MATLAB"}/>
            <SkillList src = {checkmarkIcon} skill = {"x86 Assembly"}/>
        </div>
        <hr></hr>
        <div className = {styles.skillList}> 
            <SkillList src = {checkmarkIcon} skill = {"Visual Studio Code"}/>
            <SkillList src = {checkmarkIcon} skill = {"GitHub"}/>
            <SkillList src = {checkmarkIcon} skill = {"Excel"}/>
            <SkillList src = {checkmarkIcon} skill = {"Microsoft Office 365"}/>
        </div>
        <hr></hr>
        <div className = {styles.skillList}> 
            <SkillList src = {checkmarkIcon} skill = {"English"}/>
            <SkillList src = {checkmarkIcon} skill = {"Spanish"}/>
            <SkillList src = {checkmarkIcon} skill = {"French"}/>
        </div>
    </section>
    
  );
}

export default Skills;