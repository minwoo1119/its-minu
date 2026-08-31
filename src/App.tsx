import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
import { DetailProjects } from './components/detailProjects/DetailProjects';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Portal } from './components/portal/Portal';
import { PrintableResume } from './components/printableResume/PrintableResume';
import { Projects } from './components/projects/Projects';
import { Techs } from './components/techs/Techs';
import { Awards } from './components/awards/Awards';
import { tracksData, type TrackId } from './data/tracks';
import { projectsDetailData } from './data/projectsDetail';
import styles from './App.module.scss';
import { useEffect, useRef, useState } from 'react';
import type { Language } from './i18n';
import { getText } from './i18n';

type Route =
  | { name: 'portal' }
  | { name: 'track'; trackId: TrackId }
  | { name: 'projectDetail'; trackId: TrackId; projectId: number };

type SectionKey = 'techs' | 'projects' | 'awards';

const normalizeTrackSegment = (segment: string): TrackId | null => {
  const clean = segment.toLowerCase().replace(/^\/+|\/+$/g, '').trim();

  for (const [id, data] of Object.entries(tracksData) as [
    TrackId,
    (typeof tracksData)[TrackId],
  ][]) {
    if (clean === id || data.aliases.includes(clean)) {
      return id;
    }
  }

  return null;
};

const getCurrentRoute = (): Route => {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const pathname = window.location.pathname.replace(/\/+$/, '');
  const hash = window.location.hash.replace(/^#\/?|\/$/g, '');

  let relativePath = '';
  if (baseUrl && pathname.startsWith(baseUrl)) {
    relativePath = pathname.slice(baseUrl.length).replace(/^\/+|\/+$/g, '');
  } else {
    relativePath = pathname.replace(/^\/+|\/+$/g, '');
  }

  // 1. Check hash route first (most robust for GitHub Pages)
  if (hash) {
    // Pattern: {trackId}/projects/{projectId}
    const hashProjectMatch = hash.match(/^([^/]+)\/projects\/(\d+)$/);
    if (hashProjectMatch) {
      const track = normalizeTrackSegment(hashProjectMatch[1]);
      if (track) {
        return {
          name: 'projectDetail',
          trackId: track,
          projectId: Number(hashProjectMatch[2]),
        };
      }
    }

    // Pattern: projects/{projectId}
    const hashLegacyProjectMatch = hash.match(/^projects\/(\d+)$/);
    if (hashLegacyProjectMatch) {
      return {
        name: 'projectDetail',
        trackId: 'computer-vision',
        projectId: Number(hashLegacyProjectMatch[1]),
      };
    }

    // Pattern: {trackId}
    const hashTrack = normalizeTrackSegment(hash);
    if (hashTrack) {
      return { name: 'track', trackId: hashTrack };
    }
  }

  // 2. Check path route
  if (relativePath) {
    const pathProjectMatch = relativePath.match(/^([^/]+)\/projects\/(\d+)$/);
    if (pathProjectMatch) {
      const track = normalizeTrackSegment(pathProjectMatch[1]);
      if (track) {
        return {
          name: 'projectDetail',
          trackId: track,
          projectId: Number(pathProjectMatch[2]),
        };
      }
    }

    const pathTrack = normalizeTrackSegment(relativePath);
    if (pathTrack) {
      return { name: 'track', trackId: pathTrack };
    }
  }

  return { name: 'portal' };
};

const buildPath = (route: Route): string => {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, '') + '/';

  if (route.name === 'portal') {
    return baseUrl;
  }

  if (route.name === 'track') {
    return `${baseUrl}#/${route.trackId}`;
  }

  if (route.name === 'projectDetail') {
    return `${baseUrl}#/${route.trackId}/projects/${route.projectId}`;
  }

  return baseUrl;
};

function App() {
  const techsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const awardsRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState<Language>('ko');
  const [route, setRoute] = useState<Route>(() => getCurrentRoute());
  const [pendingSection, setPendingSection] = useState<SectionKey | null>(null);

  const activeTrackId: TrackId =
    route.name === 'track' || route.name === 'projectDetail'
      ? route.trackId
      : 'computer-vision';

  const activeTrackData = tracksData[activeTrackId];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateTo = (nextRoute: Route) => {
    const nextPath = buildPath(nextRoute);

    if (
      window.location.hash !== nextPath &&
      window.location.pathname !== nextPath
    ) {
      window.history.pushState({}, '', nextPath);
    }

    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTrack = (trackId: TrackId, section?: SectionKey) => {
    if (section) {
      setPendingSection(section);
    }
    navigateTo({ name: 'track', trackId });
  };

  const handleTrackChange = (target: TrackId | 'portal') => {
    if (target === 'portal') {
      navigateTo({ name: 'portal' });
    } else {
      navigateTrack(target);
    }
  };

  const handleProjectOpen = (projectId: number) => {
    setPendingSection(null);
    navigateTo({
      name: 'projectDetail',
      trackId: activeTrackId,
      projectId,
    });
  };

  const handlePdfDownload = () => {
    const previousTitle = document.title;
    document.title = activeTrackData.pdfFilename[language];
    window.print();
    document.title = previousTitle;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (route.name === 'portal') {
      document.title =
        language === 'ko'
          ? '이민우 포트폴리오 | Minwoo Lee Career Portfolio'
          : 'Minwoo Lee Portfolio | Computer Vision, App, Software Engineer';
    } else if (route.name === 'track') {
      const role = getText(language, activeTrackData.intro.role);
      document.title = `${role} | 이민우 (Minwoo Lee)`;
    } else if (route.name === 'projectDetail') {
      const project = projectsDetailData.find((p) => p.id === route.projectId);
      const title = project
        ? getText(language, project.title)
        : 'Project Detail';
      document.title = `${title} | 이민우 (Minwoo Lee)`;
    }
  }, [route, language, activeTrackData]);

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
    if (route.name !== 'track' || pendingSection === null) {
      return;
    }

    let targetRef: React.RefObject<HTMLDivElement | null> | null = null;
    if (pendingSection === 'techs') targetRef = techsRef;
    else if (pendingSection === 'projects') targetRef = projectsRef;
    else if (pendingSection === 'awards') targetRef = awardsRef;

    if (targetRef) {
      scrollToSection(targetRef);
    }
    setPendingSection(null);
  }, [pendingSection, route]);

  return (
    <div className={styles.container}>
      <div className={styles.screenContent}>
        {route.name === 'portal' ? (
          <Portal
            language={language}
            onLanguageChange={setLanguage}
            onSelectTrack={(trackId) => navigateTrack(trackId)}
          />
        ) : (
          <>
            <Header
              language={language}
              currentTrack={activeTrackId}
              onLanguageChange={setLanguage}
              onTrackChange={handleTrackChange}
              onPdfClick={handlePdfDownload}
              onTechClick={() =>
                route.name === 'track'
                  ? scrollToSection(techsRef)
                  : navigateTrack(activeTrackId, 'techs')
              }
              onProjectClick={() =>
                route.name === 'track'
                  ? scrollToSection(projectsRef)
                  : navigateTrack(activeTrackId, 'projects')
              }
              onAwardsClick={() =>
                route.name === 'track'
                  ? scrollToSection(awardsRef)
                  : navigateTrack(activeTrackId, 'awards')
              }
            />

            {route.name === 'track' ? (
              <>
                <Intro language={language} trackData={activeTrackData} />
                <CoreCompetencies
                  language={language}
                  trackData={activeTrackData}
                />
                <div ref={techsRef} style={{ width: '100%' }}>
                  <Techs language={language} trackData={activeTrackData} />
                </div>
                <div ref={projectsRef} style={{ width: '100%' }}>
                  <Projects
                    language={language}
                    trackData={activeTrackData}
                    onProjectClick={handleProjectOpen}
                  />
                </div>
                <div ref={awardsRef} style={{ width: '100%' }}>
                  <Awards language={language} />
                </div>
              </>
            ) : (
              <main className={styles.detailPage}>
                <button
                  type='button'
                  className={styles.backButton}
                  onClick={() => navigateTrack(activeTrackId, 'projects')}
                >
                  {language === 'ko'
                    ? `← ${getText(language, activeTrackData.navTitle)} 프로젝트 목록으로`
                    : `← Back to ${getText(language, activeTrackData.navTitle)} Projects`}
                </button>
                <DetailProjects
                  language={language}
                  projectId={route.projectId}
                />
              </main>
            )}

            <Footer
              language={language}
              onPortalClick={() => navigateTo({ name: 'portal' })}
              onProjectsClick={() => navigateTrack(activeTrackId, 'projects')}
            />
          </>
        )}
      </div>

      {route.name !== 'portal' && (
        <PrintableResume language={language} trackData={activeTrackData} />
      )}
    </div>
  );
}

export default App;
