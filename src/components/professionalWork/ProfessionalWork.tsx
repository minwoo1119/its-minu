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
            ? '시냅스이미징(Synapse Imaging)에서 Vision Software R&D Engineer로 수행하고 있는 핵심 실무 프로젝트입니다.'
            : 'Key R&D and full-stack platform projects performed as a Vision Software R&D Engineer at Synapse Imaging.'}
        </p>
      </header>

      <div className={styles.projectList}>
        {orderedProjects.map((project) => (
          <article className={styles.projectCard} key={project.id}>
            <div className={styles.projectIntro}>
              <div className={styles.metaRow}>
                <span className={styles.periodBadge}>
                  {getText(language, project.period)}
                </span>
                {project.status === 'mixed' && (
                  <span className={styles.status}>
                    {language === 'ko' ? '진행 중 (일부 완료)' : 'In Progress'}
                  </span>
                )}
              </div>

              <div className={styles.projectHeading}>
                <h3>
                  <span className={styles.indexNum}>{project.index}.</span>{' '}
                  {getText(language, project.title)}
                </h3>
              </div>

              <p className={styles.roleText}>
                <strong>{language === 'ko' ? '역할:' : 'Role:'}</strong>{' '}
                {getText(language, project.role)}
              </p>

              <p className={styles.summary}>{getText(language, project.summary)}</p>

              <div className={styles.techList} aria-label='Technology stack'>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.contributionBlock}>
              <p className={styles.contributionLabel}>
                {language === 'ko' ? '주요 개발 내용 요약' : 'Key Development Highlights'}
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
