import type { Language } from '../../../i18n';
import { getText } from '../../../i18n';
import { professionalProjects } from '../../../data/professionalProjects';
import { projectsDetailData } from '../../../data/projectsDetail';
import { ProjectCard } from '../projectCard/ProjectCard';
import styles from './relatedProjects.module.scss';

interface RelatedProjectsProps {
  language: Language;
  currentProjectId: number;
  onProjectClick: (projectId: number) => void;
}

const RELATED_MAP: Record<number, number[]> = {
  31: [30, 1, 21],
  30: [31, 18, 21],
  1: [31, 21, 3],
  21: [31, 1, 30],
  18: [30, 19, 5],
  2: [1, 3, 31],
  3: [31, 1, 2],
  4: [30, 31, 2],
  5: [15, 18, 19],
  15: [5, 18, 19],
  19: [18, 5, 30],
  7: [16, 17, 9],
  16: [7, 17, 8],
  17: [16, 7, 8],
  8: [7, 16, 6],
  9: [7, 16, 6],
  6: [11, 12, 18],
  11: [6, 12, 13],
  12: [6, 11, 13],
  13: [11, 12, 6],
  14: [6, 18, 11],
};

interface ResolvedSummary {
  id: number;
  eyebrow: string;
  title: string;
  summary: string;
  techs: string[];
}

const resolveProjectSummary = (
  id: number,
  language: Language
): ResolvedSummary | null => {
  const pro = professionalProjects.find((p) => p.id === id);
  if (pro) {
    return {
      id: pro.id,
      eyebrow: language === 'ko' ? '실무 프로젝트' : 'Professional',
      title: getText(language, pro.title),
      summary: getText(language, pro.summary),
      techs: pro.technologies,
    };
  }

  const detail = projectsDetailData.find((p) => p.id === id);
  if (detail) {
    return {
      id: detail.id,
      eyebrow:
        detail.id === 1 || detail.id === 21 || detail.id === 18
          ? language === 'ko'
            ? '핵심 프로젝트'
            : 'Selected'
          : language === 'ko'
            ? '아카이브'
            : 'Archive',
      title: getText(language, detail.title),
      summary: getText(language, detail.oneLiner),
      techs: detail.techChoices.map((t) => t.name.split(' ')[0]).slice(0, 4),
    };
  }

  return null;
};

export const RelatedProjects = ({
  language,
  currentProjectId,
  onProjectClick,
}: RelatedProjectsProps) => {
  const targetIds = (RELATED_MAP[currentProjectId] ?? [31, 30, 1]).filter(
    (id) => id !== currentProjectId
  );

  const items = targetIds
    .map((id) => resolveProjectSummary(id, language))
    .filter((item): item is ResolvedSummary => Boolean(item))
    .slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby='related-projects-title'>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Continue Reading</p>
        <h2 id='related-projects-title'>
          {language === 'ko' ? '관련 프로젝트 탐색' : 'Related Projects'}
        </h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            language={language}
            variant='compact'
            eyebrow={item.eyebrow}
            title={item.title}
            summary={item.summary}
            techs={item.techs}
            maxTechsDesktop={3}
            onClick={() => onProjectClick(item.id)}
          />
        ))}
      </div>
    </section>
  );
};
