import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Projects } from './components/projects/Projects';
import { Techs } from './components/techs/Techs';
import styles from './App.module.scss';
import { useRef } from 'react';

function App() {
  const techsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.container}>
      <Header
        onTechClick={() => scrollToSection(techsRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
      />
      <Intro />
      <CoreCompetencies />
      <div ref={techsRef}>
        <Techs />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
