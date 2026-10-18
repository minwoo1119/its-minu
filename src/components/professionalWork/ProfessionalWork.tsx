import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { professionalProjects } from '../../data/professionalProjects';
import styles from './professionalWork.module.scss';

interface ProfessionalWorkProps {
  language: Language;
  onProjectClick: (projectId: number) => void;
}

const SystemPreview = ({ projectId }: { projectId: number }) => {
  const labels =
    projectId === 30
      ? ['Admin Web', 'App Server', 'Equipment Client', 'Inspection SW']
      : ['Capture', 'Decision / ROI', 'Result', 'Record / Save'];

  return (
    <div className={styles.systemPreview} aria-hidden='true'>
      <div className={styles.previewHeader}>
        <span />
        <span />
        <span />
        <b>{projectId === 30 ? 'SYSTEM MAP' : 'SOFTWARE FLOW'}</b>
      </div>
      <div className={styles.previewFlow}>
        {labels.map((label, index) => (
          <div className={styles.previewStep} key={label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <div className={styles.previewSignal}>
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
};

export const ProfessionalWork = ({
  language,
  onProjectClick,
}: ProfessionalWorkProps) => (
  <section className={styles.container} aria-labelledby='professional-work-title'>
    <header className={styles.sectionHeader}>
      <div>
        <p className={styles.eyebrow}>Featured Professional Work</p>
        <h2 id='professional-work-title'>
          {language === 'ko' ? '현장에서 만든 시스템' : 'Systems built for the field'}
        </h2>
      </div>
      <p className={styles.sectionIntro}>
        {language === 'ko'
          ? '운영 플랫폼부터 C++ 검사 소프트웨어까지, 직접 구현하고 개선한 범위를 중심으로 정리했습니다.'
          : 'From an operations platform to C++ inspection software, these case studies focus on the parts I implemented and improved.'}
      </p>
    </header>

    <div className={styles.projectList}>
      {professionalProjects.map((project) => (
        <article className={styles.projectCard} key={project.id}>
          <SystemPreview projectId={project.id} />
          <div className={styles.projectCopy}>
            <div className={styles.projectMeta}>
              <span>Case {project.index}</span>
              <span className={project.status === 'mixed' ? styles.progress : ''}>
                {project.status === 'mixed'
                  ? language === 'ko'
                    ? '일부 진행 중'
                    : 'Partly in progress'
                  : language === 'ko'
                    ? '구현 범위 정리'
                    : 'Implemented scope'}
              </span>
            </div>
            <p className={styles.projectEyebrow}>{getText(language, project.eyebrow)}</p>
            <h3>{getText(language, project.title)}</h3>
            <p className={styles.summary}>{getText(language, project.summary)}</p>
            <div className={styles.techList} aria-label='Technology stack'>
              {project.technologies.slice(0, 6).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <button type='button' onClick={() => onProjectClick(project.id)}>
              {language === 'ko' ? '케이스 스터디 보기' : 'View case study'}
              <span aria-hidden='true'>→</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);
