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
import { Experience } from './components/experience/Experience';
import { ProfessionalWork } from './components/professionalWork/ProfessionalWork';
import { ProfessionalProjectDetail } from './components/professionalProjectDetail/ProfessionalProjectDetail';
import { CoreExpertise } from './components/coreExpertise/CoreExpertise';
import { tracksData, type TrackId } from './data/tracks';
import { projectsDetailData } from './data/projectsDetail';
import { getProfessionalProject } from './data/professionalProjects';
import styles from './App.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Language } from './i18n';
import { getText } from './i18n';

type Route =
  | { name: 'portal' }
  | { name: 'track'; trackId: TrackId }
  | { name: 'projectDetail'; trackId: TrackId; projectId: number };

type SectionKey =
  | 'experience'
  | 'competencies'
  | 'techs'
  | 'projects'
  | 'otherProjects'
  | 'awards';

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
    if (hash === 'portal') {
      return { name: 'portal' };
    }

    // Pattern: {trackId}/projects/{projectId}
    const hashProjectMatch = hash.match(/^([^/]+)\/projects\/(\d+)$/);
    if (hashProjectMatch) {
      const track = normalizeTrackSegment(hashProjectMatch[1]);
      return {
        name: 'projectDetail',
        trackId: track || 'computer-vision',
        projectId: Number(hashProjectMatch[2]),
      };
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
    if (relativePath === 'portal') {
      return { name: 'portal' };
    }

    const pathProjectMatch = relativePath.match(/^([^/]+)\/projects\/(\d+)$/);
    if (pathProjectMatch) {
      const track = normalizeTrackSegment(pathProjectMatch[1]);
      return {
        name: 'projectDetail',
        trackId: track || 'computer-vision',
        projectId: Number(pathProjectMatch[2]),
      };
    }

    const pathTrack = normalizeTrackSegment(relativePath);
    if (pathTrack) {
      return { name: 'track', trackId: pathTrack };
    }
  }

  // Default entry route: C++ Computer Vision & Systems Software Engineer portfolio directly
  return { name: 'track', trackId: 'computer-vision' };
};

const buildPath = (route: Route): string => {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, '') + '/';

  if (route.name === 'portal') {
    return `${baseUrl}#/portal`;
  }

  if (route.name === 'track') {
    return route.trackId === 'computer-vision'
      ? `${baseUrl}`
      : `${baseUrl}#/${route.trackId}`;
  }

  if (route.name === 'projectDetail') {
    return `${baseUrl}#/${route.trackId}/projects/${route.projectId}`;
  }

  return baseUrl;
};

function App() {
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const competenciesRef = useRef<HTMLDivElement | null>(null);
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

  const scrollToOtherProjects = useCallback(() => {
    const el = document.getElementById('other-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          ? '이민우 | C++ 기반 실시간 컴퓨터 비전 & 시스템 SW 엔지니어'
          : 'Minwoo Lee | C++ Computer Vision & Systems Software Engineer';
    } else if (route.name === 'track') {
      const role =
        activeTrackId === 'computer-vision'
          ? language === 'ko'
            ? '산업용 비전 검사 SW 엔지니어'
            : 'Industrial Vision Software Engineer'
          : getText(language, activeTrackData.intro.role);
      document.title = `${role} | 이민우 (Minwoo Lee)`;
    } else if (route.name === 'projectDetail') {
      const project =
        getProfessionalProject(route.projectId) ??
        projectsDetailData.find((p) => p.id === route.projectId);
      const title = project
        ? getText(language, project.title)
        : 'Project Detail';
      document.title = `${title} | 이민우 (Minwoo Lee)`;
    }
  }, [route, language, activeTrackData, activeTrackId]);

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

    if (pendingSection === 'experience') scrollToSection(experienceRef);
    else if (pendingSection === 'competencies') scrollToSection(competenciesRef);
    else if (pendingSection === 'techs') scrollToSection(techsRef);
    else if (pendingSection === 'projects') scrollToSection(projectsRef);
    else if (pendingSection === 'otherProjects') scrollToOtherProjects();
    else if (pendingSection === 'awards') scrollToSection(awardsRef);

    setPendingSection(null);
  }, [pendingSection, route, scrollToOtherProjects]);

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
              onLogoClick={scrollToTop}
              onPdfClick={handlePdfDownload}
              onExperienceClick={() =>
                route.name === 'track'
                  ? scrollToSection(experienceRef)
                  : navigateTrack(activeTrackId, 'experience')
              }
              onCompetenciesClick={() =>
                route.name === 'track'
                  ? scrollToSection(competenciesRef)
                  : navigateTrack(activeTrackId, 'competencies')
              }
              onTechClick={
                activeTrackId === 'computer-vision'
                  ? undefined
                  : () =>
                      route.name === 'track'
                        ? scrollToSection(techsRef)
                        : navigateTrack(activeTrackId, 'techs')
              }
              onProjectClick={() =>
                route.name === 'track'
                  ? scrollToSection(projectsRef)
                  : navigateTrack(activeTrackId, 'projects')
              }
              onOtherProjectsClick={() =>
                route.name === 'track'
                  ? scrollToOtherProjects()
                  : navigateTrack(activeTrackId, 'otherProjects')
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
                <div ref={experienceRef} style={{ width: '100%' }}>
                  <Experience language={language} />
                </div>
                <div ref={projectsRef} style={{ width: '100%' }}>
                  {activeTrackId === 'computer-vision' && (
                    <ProfessionalWork
                      language={language}
                      onProjectClick={handleProjectOpen}
                    />
                  )}
                  <Projects
                    language={language}
                    trackData={activeTrackData}
                    onProjectClick={handleProjectOpen}
                  />
                </div>
                {activeTrackId === 'computer-vision' ? (
                  <div ref={competenciesRef} style={{ width: '100%' }}>
                    <CoreExpertise language={language} />
                  </div>
                ) : (
                  <>
                    <div ref={competenciesRef} style={{ width: '100%' }}>
                      <CoreCompetencies
                        language={language}
                        trackData={activeTrackData}
                      />
                    </div>
                    <div ref={techsRef} style={{ width: '100%' }}>
                      <Techs language={language} trackData={activeTrackData} />
                    </div>
                  </>
                )}
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
                    ? `← 프로젝트 목록으로 돌아가기`
                    : `← Back to Projects`}
                </button>
                {getProfessionalProject(route.projectId) ? (
                  <ProfessionalProjectDetail
                    language={language}
                    project={getProfessionalProject(route.projectId)!}
                  />
                ) : (
                  <DetailProjects
                    language={language}
                    projectId={route.projectId}
                  />
                )}
              </main>
            )}

            <Footer
              language={language}
              onPortalClick={scrollToTop}
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
