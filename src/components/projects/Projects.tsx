import { ProjectBox } from '../common/projectBox/ProjectBox';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './projects.module.scss';
import { useEffect, useState } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData, ProjectCardInfo } from '../../data/tracks';

interface ProjectsProps {
  language: Language;
  trackData: TrackData;
  onProjectClick: (projectId: number) => void;
}

export const Projects = ({
  language,
  trackData,
  onProjectClick,
}: ProjectsProps) => {
  const { projects } = trackData;
  const isVisionTrack = trackData.id === 'computer-vision';
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('all');
  const [selectedOtherCategory, setSelectedOtherCategory] = useState<string>('all');
  const [isOtherExpanded, setIsOtherExpanded] = useState<boolean>(!isVisionTrack);
  const [showAllOther, setShowAllOther] = useState<boolean>(false);

  useEffect(() => {
    setSelectedMainCategory('all');
    setSelectedOtherCategory('all');
    setIsOtherExpanded(trackData.id !== 'computer-vision');
    setShowAllOther(false);
  }, [trackData.id]);

  // Main Projects Filtering
  const mainProjectItems = projects.items;
  const filteredMainProjects =
    selectedMainCategory === 'all'
      ? mainProjectItems
      : mainProjectItems.filter((p) => p.category === selectedMainCategory);

  // Other Projects Filtering
  const otherConfig = projects.otherProjects;
  const otherItems = otherConfig?.items ?? [];
  const filteredOtherProjects =
    selectedOtherCategory === 'all'
      ? otherItems
      : otherItems.filter((p) => p.category === selectedOtherCategory);

  const visibleOtherProjects =
    isVisionTrack || showAllOther
      ? filteredOtherProjects
      : filteredOtherProjects.slice(0, 6);

  const getCategoryBadgeLabel = (item: ProjectCardInfo) => {
    if (item.category === 'vision') return language === 'ko' ? 'Vision / SW' : 'Vision & SW';
    if (item.category === 'ai') return language === 'ko' ? 'AI / Research' : 'AI & Research';
    if (item.category === 'mobile') return 'Mobile App';
    if (item.category === 'web') return 'Web System';
    return 'Engineering';
  };

  return (
    <div className={styles.container}>
      {/* 1. Selected Projects Section */}
      <section className={styles.selectedSection} id='selected-projects'>
        <h2 className={styles.titleText}>
          {isVisionTrack
            ? language === 'ko'
              ? '개인·연구 프로젝트'
              : 'Selected Projects'
            : getText(language, projects.titleText)}
        </h2>

        {isVisionTrack && (
          <p className={styles.sectionDescription}>
            {language === 'ko'
              ? '영상 인식·추론 최적화, 비지도 이상 탐지, 로컬 RAG 시스템 구현 역량을 보여주는 선별 프로젝트입니다.'
              : 'Selected projects demonstrating computer vision inference optimization, visual anomaly detection, and local RAG system engineering.'}
          </p>
        )}

        {projects.categoryOptions.length > 1 && (
          <SelectTabBar
            options={projects.categoryOptions}
            selected={selectedMainCategory}
            getLabel={(category) =>
              projects.categoryLabels[category]
                ? getText(language, projects.categoryLabels[category])
                : category
            }
            onSelect={(cat) => setSelectedMainCategory(cat)}
          />
        )}

        <div
          className={`${styles.projects} ${
            isVisionTrack ? styles.threeColGrid : ''
          }`}
        >
          {filteredMainProjects.map((item) => (
            <ProjectBox
              key={item.id}
              {...item}
              language={language}
              onClick={() => onProjectClick(item.id)}
            />
          ))}
        </div>
      </section>

      {/* 2. Other Work (Collapsible on primary track) */}
      {otherConfig && otherItems.length > 0 && (
        <>
          <div className={styles.divider} />

          <section className={styles.otherSection} id='other-projects'>
            <div className={styles.otherHeader}>
              <div>
                <h2 className={styles.otherTitle}>
                  {getText(language, otherConfig.titleText)}
                </h2>
                <p className={styles.otherDescription}>
                  {getText(language, otherConfig.subText)}
                </p>
              </div>

              {isVisionTrack && (
                <button
                  type='button'
                  className={styles.toggleOtherBtn}
                  onClick={() => setIsOtherExpanded((prev) => !prev)}
                  aria-expanded={isOtherExpanded}
                  aria-controls='other-work-list'
                >
                  {isOtherExpanded
                    ? language === 'ko'
                      ? '기타 작업 접기'
                      : 'Hide Other Work'
                    : language === 'ko'
                      ? `기타 작업 보기 (${otherItems.length})`
                      : `Show Other Work (${otherItems.length})`}
                </button>
              )}
            </div>

            {isOtherExpanded && (
              <div id='other-work-list' className={styles.otherBody}>
                <SelectTabBar
                  options={otherConfig.categoryOptions}
                  selected={selectedOtherCategory}
                  getLabel={(category) =>
                    otherConfig.categoryLabels[category]
                      ? getText(language, otherConfig.categoryLabels[category])
                      : category
                  }
                  onSelect={(cat) => {
                    setSelectedOtherCategory(cat);
                    setShowAllOther(false);
                  }}
                />

                <div className={styles.otherProjectsGrid}>
                  {visibleOtherProjects.map((item) => {
                    const titleText = getText(language, item.title);
                    const descText = getText(language, item.description);

                    return (
                      <div
                        key={item.id}
                        className={styles.compactCard}
                        onClick={() => onProjectClick(item.id)}
                        role='button'
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onProjectClick(item.id);
                          }
                        }}
                      >
                        <div>
                          <div className={styles.cardHeader}>
                            <span className={styles.categoryBadge}>
                              {getCategoryBadgeLabel(item)}
                            </span>
                            <span className={styles.arrowIcon}>
                              {language === 'ko' ? '상세 →' : 'Details →'}
                            </span>
                          </div>
                          <h3 className={styles.cardTitle}>{titleText}</h3>
                          <p className={styles.cardDesc}>{descText}</p>
                        </div>

                        <div className={styles.cardTechs}>
                          {item.techs.slice(0, 4).map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                          {item.techs.length > 4 && (
                            <span>+{item.techs.length - 4}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {!isVisionTrack && filteredOtherProjects.length > 6 && (
                  <button
                    className={styles.moreBtn}
                    onClick={() => setShowAllOther((prev) => !prev)}
                    type='button'
                  >
                    {showAllOther
                      ? language === 'ko'
                        ? '접기'
                        : 'Show Less'
                      : language === 'ko'
                        ? `기타 프로젝트 더보기 (${filteredOtherProjects.length - 6}개 더보기)`
                        : `Show More (${filteredOtherProjects.length - 6} more)`}
                  </button>
                )}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};
