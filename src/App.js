import { Routes, Route } from 'react-router-dom';
import { Ribbon } from './components/Ribbon';
import { Top } from './components/Top';
import { AboutThisSite } from './components/AboutThisSite';
import { AboutMe } from './components/AboutMe/AboutMe';
import Works from './components/works/Works';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe';
import WorkPortforio from './components/works/WorkPortforio'; // WorkPortforioコンポーネントをインポート
import WorkKoreaBlog from './components/works/WorkKoreaBlog'; // WorkKoreaBlogコンポーネントをインポート

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Ribbon />
          <Top />
          <AboutThisSite />
          <AboutMe />
          <Works />
          <Skills />
          <ContactMe />
        </>
      } />
      <Route path="/WorkPortforio" element={<WorkPortforio />} />
      <Route path="/WorkKoreaBlog" element={<WorkKoreaBlog />} />
    </Routes>
  );
}

export default App;
