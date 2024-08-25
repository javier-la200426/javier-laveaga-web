import './App.css';
import Courtois from './sections/Courtois/Courtois';
import Projects from './sections/Projects/Projects'

//jsx file is a combination of html and javascript
//this function defines a component
//<> </> are react fragments
function App() {
  return (
    <>
      <Courtois />
      <Projects />
    </>

  );
}

export default App
