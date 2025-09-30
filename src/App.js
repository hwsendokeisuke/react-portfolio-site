import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
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
        <Route path="/WorkPortforio" element={<WorkPortforio />} /> {/* WorkPortforioコンポーネントを表示 */}
        {/* 他の詳細画面用のルートも追加可能 */}
        <Route path="/WorkKoreaBlog" element={<WorkKoreaBlog />} /> {/* WorkKoreaBlogコンポーネントを表示 */}
        {/* 他の詳細画面用のルートも追加可能 */}
      </Routes>
    </Router>
  );
}

export default App;
