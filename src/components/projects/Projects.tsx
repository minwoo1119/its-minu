import { ProjectBox } from '../common/projectBox/ProjectBox';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import {
  projectsData,
  type ProjectCategory,
} from '../../../public/data/projectsData';
import styles from './projects.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';

type FilterCategory = ProjectCategory | 'all';

interface ProjectsProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
}

export const Projects = ({ language, onProjectClick }: ProjectsProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('all');

  const categories: FilterCategory[] = [
    'all',
    'featuredVision',
    'other',
    'research',
  ];
  const categoryLabels: Record<FilterCategory, string> = {
    all: language === 'ko' ? '전체' : 'All',
    featuredVision:
      language === 'ko' ? 'Featured Vision Projects' : 'Featured Vision Projects',
    other: language === 'ko' ? 'Other Projects' : 'Other Projects',
    research: language === 'ko' ? 'Research & Awards' : 'Research & Awards',
  };

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className={styles.container}>
      <div className={styles.subText}>
        {language === 'ko'
          ? 'Computer Vision & Image Processing 중심 프로젝트'
          : 'Computer Vision & Image Processing focused work'}
      </div>
      <div className={styles.titleText}>
        {language === 'ko' ? 'Featured Projects' : 'Featured Projects'}
      </div>

      <SelectTabBar
        options={categories}
        selected={selectedCategory}
        getLabel={(category) => categoryLabels[category]}
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
