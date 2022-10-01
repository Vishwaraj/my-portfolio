
import './App.css';
import Footer from './components/Footer';
import OtherProjects from './components/OtherProjects';
import Projects from './components/Projects';
import SkillsComponent from './components/SkillsComponent';
import TopComponent from './components/TopComponent';

function App() {
  return (
    <>
    <TopComponent/>
    <SkillsComponent/>
    <Projects />
    <OtherProjects />
    <Footer />
    </>
  );
}

export default App;
