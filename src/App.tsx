import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Projects } from './components/projects/Projects';
import { Techs } from './components/techs/Techs';
import styles from './App.module.scss';
import { useEffect, useRef, useState } from 'react';
import type { Language } from './i18n';

function App() {
  const techsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState<Language>('ko');

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={styles.container}>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onTechClick={() => scrollToSection(techsRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
      />
      <Intro language={language} />
      <CoreCompetencies language={language} />
      <div ref={techsRef}>
        <Techs language={language} />
      </div>
      <div ref={projectsRef}>
        <Projects language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
}

export default App;
