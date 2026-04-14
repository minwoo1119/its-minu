import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
import { DetailProjects } from './components/detailProjects/DetailProjects';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Projects } from './components/projects/Projects';
import { Techs } from './components/techs/Techs';
import styles from './App.module.scss';
import { useEffect, useRef, useState } from 'react';
import type { Language } from './i18n';

type Route =
  | { name: 'home' }
  | { name: 'projectDetail'; projectId: number };

type SectionKey = 'techs' | 'projects';

const getCurrentRoute = (): Route => {
  const cleanPath = window.location.hash.replace(/^#\/?|\/$/g, '');
  const match = cleanPath.match(/^projects\/(\d+)$/);

  if (match) {
    return { name: 'projectDetail', projectId: Number(match[1]) };
  }

  return { name: 'home' };
};

const buildPath = (route: Route) => {
  const baseUrl = import.meta.env.BASE_URL;

  if (route.name === 'projectDetail') {
    return `${baseUrl}#/projects/${route.projectId}`;
  }

  return baseUrl;
};

function App() {
  const techsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState<Language>('ko');
  const [route, setRoute] = useState<Route>(() => getCurrentRoute());
  const [pendingSection, setPendingSection] = useState<SectionKey | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateTo = (nextRoute: Route) => {
    const nextPath = buildPath(nextRoute);

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (section?: SectionKey) => {
    if (section) {
      setPendingSection(section);
    }

    navigateTo({ name: 'home' });
  };

  const handleProjectOpen = (projectId: number) => {
    setPendingSection(null);
    navigateTo({ name: 'projectDetail', projectId });
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getCurrentRoute());
      setPendingSection(null);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (route.name !== 'home' || pendingSection === null) {
      return;
    }

    const targetRef = pendingSection === 'techs' ? techsRef : projectsRef;
    scrollToSection(targetRef);
    setPendingSection(null);
  }, [pendingSection, route]);

  return (
    <div className={styles.container}>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onTechClick={() =>
          route.name === 'home'
            ? scrollToSection(techsRef)
            : navigateHome('techs')
        }
        onProjectClick={() =>
          route.name === 'home'
            ? scrollToSection(projectsRef)
            : navigateHome('projects')
        }
      />

      {route.name === 'home' ? (
        <>
          <Intro language={language} />
          <CoreCompetencies language={language} />
          <div ref={techsRef}>
            <Techs language={language} />
          </div>
          <div ref={projectsRef}>
            <Projects language={language} onProjectClick={handleProjectOpen} />
          </div>
        </>
      ) : (
        <main className={styles.detailPage}>
          <button
            type='button'
            className={styles.backButton}
            onClick={() => window.history.back()}
          >
            {language === 'ko' ? '프로젝트 목록으로' : 'Back to Projects'}
          </button>
          <DetailProjects language={language} projectId={route.projectId} />
        </main>
      )}

      <Footer
        language={language}
        onProjectsClick={() => navigateHome('projects')}
      />
    </div>
  );
}

export default App;
