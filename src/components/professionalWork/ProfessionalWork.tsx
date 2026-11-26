import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { professionalProjects } from '../../data/professionalProjects';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './professionalWork.module.scss';

interface ProfessionalWorkProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
}

const OUTCOME_BY_ID: Record<number, { ko: string; en: string }> = {
  31: {
    ko: '양품조건 ROI 통합 · Variation 분리 로깅 구현 완료 (Heap Corruption 분석 진행 중)',
    en: 'Good-condition ROI & separated Variation logging implemented (Heap Corruption analysis in progress)',
  },
  30: {
    ko: 'Monitoring·Teaching·Engineering 연동, Client UI 프리징 해결 및 원자적 모델 배포 구현',
    en: 'Monitoring/Teaching/Engineering integrated, Client UI freeze resolved & atomic model deployment built',
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
          title={language === 'ko' ? '실무 프로젝트' : 'Professional Projects'}
          description={
            language === 'ko'
              ? '시냅스이미징(Synapse Imaging)에서 수행 중인 산업용 Vision 검사 소프트웨어와 통합 운영 플랫폼 프로젝트입니다.'
              : 'Industrial vision inspection software and integrated operations platform engineering at Synapse Imaging.'
          }
        />

        <div className={styles.list}>
          {orderedProjects.map((project) => {
            const outcome = OUTCOME_BY_ID[project.id]?.[language];
            const statusText =
              project.status === 'mixed'
                ? language === 'ko'
                  ? '일부 진행 중'
                  : 'Partly in progress'
                : undefined;

            return (
              <article
                key={project.id}
                className={styles.entry}
                onClick={() => onProjectClick(project.id)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onProjectClick(project.id);
                  }
                }}
              >
                <div className={styles.leadCol}>
                  <p className={styles.meta}>
                    <span>{getText(language, project.period)}</span>
                    {statusText && (
                      <span className={styles.status}> · {statusText}</span>
                    )}
                  </p>

                  <h3 className={styles.title}>
                    {getText(language, project.title)}
                  </h3>

                  <p className={styles.role}>{getText(language, project.role)}</p>

                  <p className={styles.summary}>
                    {getText(language, project.summary)}
                  </p>

                  {outcome && <p className={styles.outcome}>{outcome}</p>}
                </div>

                <div className={styles.detailCol}>
                  <ul className={styles.highlights}>
                    {project.cardContributions.slice(0, 3).map((item) => (
                      <li key={getText(language, item)}>
                        {getText(language, item)}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.footer}>
                    <p className={styles.techLine} aria-label='Technologies'>
                      {project.technologies.slice(0, 6).join(' · ')}
                    </p>
                    <span className={styles.detailCue} aria-hidden='true'>
                      {language === 'ko' ? '상세 보기 →' : 'Details →'}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
