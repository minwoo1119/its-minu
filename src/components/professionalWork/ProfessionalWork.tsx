import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { professionalProjects } from '../../data/professionalProjects';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import { ProjectCard } from '../common/projectCard/ProjectCard';
import type { SchematicVariant } from '../common/visualDiagram/ProjectSchematic';
import styles from './professionalWork.module.scss';

interface ProfessionalWorkProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
}

const CARD_META: Record<
  number,
  {
    schematic: SchematicVariant;
    outcome: { ko: string; en: string };
  }
> = {
  31: {
    schematic: 'systems-sw',
    outcome: {
      ko: '양품조건 ROI 통합 · Variation 분리 로깅 구현 완료 (Heap Corruption 분석 진행 중)',
      en: 'Good-condition ROI & separated Variation logging implemented (Heap Corruption analysis in progress)',
    },
  },
  30: {
    schematic: 'platform',
    outcome: {
      ko: 'Monitoring·Teaching·Engineering 연동, Client UI 프리징 해결 및 원자적 모델 배포 구현',
      en: 'Monitoring/Teaching/Engineering integrated, Client UI freeze resolved & atomic model deployment built',
    },
  },
};

export const ProfessionalWork = ({
  language,
  onProjectClick,
}: ProfessionalWorkProps) => {
  const orderedProjects = [...professionalProjects].sort((a, b) => b.id - a.id);

  return (
    <section className={styles.wrapper} aria-labelledby='professional-work-title'>
      <div className={styles.container}>
        <SectionHeading
          id='professional-work-title'
          eyebrow='Professional Work'
          title={language === 'ko' ? '실무 프로젝트' : 'Professional Projects'}
          description={
            language === 'ko'
              ? '시냅스이미징(Synapse Imaging)에서 수행 중인 산업용 Vision 검사 소프트웨어와 통합 운영 플랫폼 프로젝트입니다.'
              : 'Industrial vision inspection software and integrated operations platform engineering at Synapse Imaging.'
          }
        />

        <div className={styles.grid}>
          {orderedProjects.map((project) => {
            const meta = CARD_META[project.id];
            return (
              <ProjectCard
                key={project.id}
                language={language}
                variant='featured'
                eyebrow={`Project ${project.index}`}
                period={getText(language, project.period)}
                statusBadge={
                  project.status === 'mixed'
                    ? language === 'ko'
                      ? '일부 진행 중'
                      : 'Partly in progress'
                    : undefined
                }
                title={getText(language, project.title)}
                role={getText(language, project.role)}
                summary={getText(language, project.summary)}
                outcome={meta ? meta.outcome[language] : undefined}
                highlights={project.cardContributions
                  .slice(0, 3)
                  .map((item) => getText(language, item))}
                techs={project.technologies}
                maxTechsDesktop={6}
                schematicVariant={meta?.schematic}
                onClick={() => onProjectClick(project.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
