import { useState } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { tracksData } from '../../data/tracks';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import { ProjectCard } from '../common/projectCard/ProjectCard';
import styles from './projectArchive.module.scss';

interface ProjectArchiveProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
  onBackClick: () => void;
}

export const ProjectArchive = ({
  language,
  onProjectClick,
  onBackClick,
}: ProjectArchiveProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const otherConfig = tracksData['computer-vision'].projects.otherProjects!;
  const items = otherConfig.items;

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const getCategoryLabel = (category: string) =>
    otherConfig.categoryLabels[category]
      ? getText(language, otherConfig.categoryLabels[category])
      : category;

  return (
    <main className={styles.page}>
      <button type='button' className={styles.backButton} onClick={onBackClick}>
        {language === 'ko' ? '← 메인 포트폴리오로 돌아가기' : '← Back to Portfolio'}
      </button>

      <SectionHeading
        as='h1'
        title={language === 'ko' ? '전체 프로젝트 아카이브' : 'Project Archive'}
        description={
          language === 'ko'
            ? `메인 페이지의 핵심 5개 프로젝트 외에 수행한 영상처리 유틸리티, LLM 연구, 모바일 앱 및 웹 프로젝트 ${items.length}건을 모아두었습니다.`
            : `All ${items.length} additional projects—including image-processing utilities, LLM research, mobile apps, and web systems—outside the 5 core projects.`
        }
      />

      <SelectTabBar
        options={otherConfig.categoryOptions}
        selected={selectedCategory}
        getLabel={getCategoryLabel}
        onSelect={setSelectedCategory}
      />

      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <ProjectCard
            key={item.id}
            language={language}
            variant='compact'
            eyebrow={getCategoryLabel(item.category)}
            title={getText(language, item.title)}
            summary={getText(language, item.description)}
            techs={item.techs}
            maxTechsDesktop={4}
            onClick={() => onProjectClick(item.id)}
          />
        ))}
      </div>
    </main>
  );
};
