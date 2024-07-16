

import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Page from './components/Page';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Nav />
        <Page />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
