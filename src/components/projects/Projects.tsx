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

  const categories: FilterCategory[] = ['all', 'webFrontend', 'backend', 'app', 'ai'];
  const categoryLabels: Record<FilterCategory, string> = {
    all: language === 'ko' ? '전체' : 'All',
    webFrontend: language === 'ko' ? '웹 프론트엔드' : 'Web Frontend',
    backend: language === 'ko' ? '백엔드' : 'Backend',
    app: language === 'ko' ? '앱' : 'App',
    ai: 'AI',
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
          ? '애정이 담긴 프로젝트들이에요'
          : 'Projects built with care and follow-through'}
      </div>
      <div className={styles.titleText}>
        {language === 'ko' ? '프로젝트' : 'Projects'}
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
