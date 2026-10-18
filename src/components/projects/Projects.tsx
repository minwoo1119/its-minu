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
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('all');
  const [selectedOtherCategory, setSelectedOtherCategory] = useState<string>('all');
  const [showAllOther, setShowAllOther] = useState(false);

  useEffect(() => {
    setSelectedMainCategory('all');
    setSelectedOtherCategory('all');
    setShowAllOther(false);
  }, [trackData.id]);

  // Main Projects Filtering
  const mainProjectItems =
    trackData.id === 'computer-vision'
      ? projects.items.filter((project) => project.id !== 4)
      : projects.items;
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

  const visibleOtherProjects = showAllOther
    ? filteredOtherProjects
    : filteredOtherProjects.slice(0, 6);

  const getCategoryBadgeLabel = (item: ProjectCardInfo) => {
    if (item.category === 'ai') return language === 'ko' ? 'AI / RAG' : 'AI & RAG';
    if (item.category === 'mobile') return language === 'ko' ? 'Mobile App' : 'Mobile App';
    if (item.category === 'web') return language === 'ko' ? 'Web System' : 'Web System';
    return language === 'ko' ? 'Engineering' : 'Engineering';
  };

  return (
    <div className={styles.container}>
      {/* 1. Main Projects Section */}
      <h2 className={styles.titleText}>
        {trackData.id === 'computer-vision'
          ? language === 'ko'
            ? '컴퓨터 비전 프로젝트'
            : 'Computer Vision Projects'
          : getText(language, projects.titleText)}
      </h2>

      {trackData.id === 'computer-vision' && (
        <p className={styles.sectionDescription}>
          {language === 'ko'
            ? '별도로 수행한 Edge AI, OCR, 영상 분석 프로젝트입니다.'
            : 'Independent projects in edge AI, OCR, and image analysis.'}
        </p>
      )}

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

      <div className={styles.projects}>
        {filteredMainProjects.map((item) => (
          <ProjectBox
            key={item.id}
            {...item}
            language={language}
            onClick={() => onProjectClick(item.id)}
          />
        ))}
      </div>

      {/* 2. Other Projects & Experiments Section */}
      {otherConfig && otherItems.length > 0 && (
        <>
          <div className={styles.divider} />

          <section className={styles.otherSection} id='other-projects'>
            <h2 className={styles.titleText}>
              {getText(language, otherConfig.titleText)}
            </h2>

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
                          {language === 'ko' ? '자세히 보기 →' : 'Details →'}
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

            {filteredOtherProjects.length > 6 && (
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
          </section>
        </>
      )}
    </div>
  );
};
