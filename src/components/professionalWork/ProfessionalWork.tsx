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
          {language === 'ko' ? '주요 실무 프로젝트' : 'Professional Projects'}
        </h2>
        <p className={styles.sectionIntro}>
          {language === 'ko'
            ? '재직 중 수행한 기능 개발과 문제 해결 경험을 중심으로 정리했습니다.'
            : 'Selected feature development and troubleshooting work completed in my current role.'}
        </p>
      </header>

      <div className={styles.projectList}>
        {orderedProjects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <div className={styles.projectIntro}>
              <div className={styles.projectHeading}>
                <h3>{getText(language, project.title)}</h3>
                {project.status === 'mixed' && (
                  <span className={styles.status}>
                    {language === 'ko' ? '일부 진행 중' : 'Partly in progress'}
                  </span>
                )}
              </div>
              <p className={styles.summary}>{getText(language, project.summary)}</p>
              <div className={styles.techList} aria-label='Technology stack'>
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.contributionBlock}>
              <p className={styles.contributionLabel}>
                {language === 'ko' ? '직접 구현한 내용' : 'My contributions'}
              </p>
              <ul>
                {project.cardContributions.map((item) => (
                  <li key={getText(language, item)}>
                    {getText(language, item)}
                  </li>
                ))}
              </ul>
              <button type='button' onClick={() => onProjectClick(project.id)}>
                {language === 'ko' ? '프로젝트 상세 보기' : 'View project details'}
                <span aria-hidden='true'>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
