import { ProjectBox } from '../common/projectBox/ProjectBox';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './projects.module.scss';
import { useEffect, useState } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';

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
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setSelectedCategory('all');
    setShowAll(false);
  }, [trackData.id]);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects.items
      : projects.items.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className={styles.container}>
      <div className={styles.subText}>
        {getText(language, projects.subText)}
      </div>
      <div className={styles.titleText}>
        {getText(language, projects.titleText)}
      </div>

      <SelectTabBar
        options={projects.categoryOptions}
        selected={selectedCategory}
        getLabel={(category) =>
          projects.categoryLabels[category]
            ? getText(language, projects.categoryLabels[category])
            : category
        }
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setShowAll(false);
        }}
      />

      <div className={styles.projects}>
        {visibleProjects.map((item) => (
          <ProjectBox
            key={item.id}
            {...item}
            language={language}
            onClick={() => onProjectClick(item.id)}
          />
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <button
          className={styles.moreBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll
            ? language === 'ko'
              ? '접기'
              : 'Show Less'
            : language === 'ko'
              ? '더보기'
              : 'Show More'}
        </button>
      )}
    </div>
  );
};
