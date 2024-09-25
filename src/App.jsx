import './App.css';
import Courtois from './sections/Courtois/Courtois';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/skills';
import Contact from './sections/Contact-info/Contact';
import Footer from './sections/Footer/Footer'

//jsx file is a combination of html and javascript
//this function defines a component
//<> </> are react fragments
function App() {
  return (
    <>
      <Courtois />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>

    </>

  );
}

export default App
