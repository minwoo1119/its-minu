import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { professionalProjects } from '../../data/professionalProjects';
import styles from './professionalWork.module.scss';

interface ProfessionalWorkProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
}

export const ProfessionalWork = ({
  language,
  onProjectClick,
}: ProfessionalWorkProps) => {
  const orderedProjects = [...professionalProjects].sort((a, b) => b.id - a.id);

  return (
    <section className={styles.container} aria-labelledby='professional-work-title'>
      <header className={styles.sectionHeader}>
        <h2 id='professional-work-title'>
          {language === 'ko' ? '실무 프로젝트' : 'Professional Experience'}
        </h2>
        <p className={styles.sectionIntro}>
          {language === 'ko'
            ? '시냅스이미징(Synapse Imaging)에서 수행 중인 산업용 Vision 검사 소프트웨어와 통합 운영 플랫폼 프로젝트입니다.'
            : 'Industrial vision inspection software and platform engineering work at Synapse Imaging.'}
        </p>
      </header>

      <div className={styles.projectGrid}>
        {orderedProjects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <div className={styles.cardTop}>
              <div className={styles.metaRow}>
                <span className={styles.indexLabel}>Project {project.index}</span>
                <span className={styles.periodText}>
                  {getText(language, project.period)}
                </span>
                {project.status === 'mixed' && (
                  <span className={styles.statusBadge}>
                    {language === 'ko' ? '일부 진행 중' : 'Partly in progress'}
                  </span>
                )}
              </div>

              <h3 className={styles.title}>{getText(language, project.title)}</h3>

              <p className={styles.roleText}>{getText(language, project.role)}</p>

              <p className={styles.summary}>{getText(language, project.summary)}</p>
            </div>

            <div className={styles.contributionBlock}>
              <p className={styles.contributionLabel}>
                {language === 'ko' ? '주요 구현 및 담당 범위' : 'Key Contributions & Scope'}
              </p>
              <ul>
                {project.cardContributions.map((item) => (
                  <li key={getText(language, item)}>
                    {getText(language, item)}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.techList} aria-label='Technology stack'>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button
                type='button'
                className={styles.detailButton}
                onClick={() => onProjectClick(project.id)}
              >
                {language === 'ko' ? '프로젝트 상세 보기 →' : 'View project details →'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
