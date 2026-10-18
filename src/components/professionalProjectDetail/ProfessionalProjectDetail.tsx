import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type {
  ProfessionalProject,
  ProfessionalProjectStatus,
} from '../../data/professionalProjects';
import styles from './professionalProjectDetail.module.scss';

interface ProfessionalProjectDetailProps {
  language: Language;
  project: ProfessionalProject;
}

const statusLabel = (status: ProfessionalProjectStatus, language: Language) => {
  if (status === 'in-progress') {
    return language === 'ko' ? '분석·수정 진행 중' : 'Analysis & remediation in progress';
  }
  if (status === 'mixed') {
    return language === 'ko' ? '완료·진행 범위 구분' : 'Completed and ongoing scope';
  }
  return language === 'ko' ? '구현 완료' : 'Implemented';
};

export const ProfessionalProjectDetail = ({
  language,
  project,
}: ProfessionalProjectDetailProps) => (
  <article className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.heroTopline}>
        <span>{getText(language, project.period)}</span>
      </div>
      <p className={styles.eyebrow}>{getText(language, project.eyebrow)}</p>
      <h1>{getText(language, project.title)}</h1>
      <p className={styles.lead}>{getText(language, project.summary)}</p>
      <div className={styles.techList}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <p className={styles.confidentialNote}>
        {language === 'ko'
          ? '공개 범위 안내 · 내부 제품명, 고객·설비 정보, API·통신 주소, 원시 데이터와 코드는 포함하지 않았습니다.'
          : 'Public-scope note · Product names, customer/equipment data, API and network details, raw data, and source code are intentionally omitted.'}
      </p>
    </header>

    <section className={styles.section}>
      <div className={styles.sectionIndex}>01</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Problem & Context</p>
        <h2>{language === 'ko' ? '개발 배경' : 'Development context'}</h2>
        <p className={styles.bodyCopy}>{getText(language, project.context)}</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionIndex}>02</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>
          {project.id === 30 ? 'System Architecture' : 'Software Flow'}
        </p>
        <h2>
          {language === 'ko'
            ? project.id === 30
              ? '시스템 구성'
              : '소프트웨어 처리 흐름'
            : project.id === 30
              ? 'System architecture'
              : 'Software processing flow'}
        </h2>
        <div className={styles.architecture}>
          {project.architecture.map((step, index) => (
            <div className={styles.architectureStep} key={getText(language, step.label)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{getText(language, step.label)}</h3>
                <p>{getText(language, step.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionIndex}>03</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>My Contributions</p>
        <h2>{language === 'ko' ? '직접 구현한 범위' : 'My implementation scope'}</h2>
        <div className={styles.contributionList}>
          {project.contributions.map((item, index) => (
            <div className={styles.contribution} key={getText(language, item.title)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{getText(language, item.title)}</h3>
                <p>{getText(language, item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionIndex}>04</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Engineering Challenges</p>
        <h2>{language === 'ko' ? '오류 분석 및 개선 과정' : 'Investigation and improvements'}</h2>
        <div className={styles.challengeList}>
          {project.challenges.map((challenge) => (
            <article className={styles.challenge} key={getText(language, challenge.title)}>
              <header>
                <h3>{getText(language, challenge.title)}</h3>
                <span className={challenge.status === 'in-progress' ? styles.inProgress : ''}>
                  {statusLabel(challenge.status, language)}
                </span>
              </header>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{getText(language, challenge.problem)}</dd>
                </div>
                <div>
                  <dt>Investigation</dt>
                  <dd>{getText(language, challenge.investigation)}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{getText(language, challenge.currentStatus)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionIndex}>05</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Outcomes & Validation</p>
        <h2>{language === 'ko' ? '확인된 결과' : 'Verified outcomes'}</h2>
        <ul className={styles.outcomes}>
          {project.outcomes.map((outcome) => (
            <li key={getText(language, outcome)}>{getText(language, outcome)}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className={`${styles.section} ${styles.reflection}`}>
      <div className={styles.sectionIndex}>06</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Reflection</p>
        <h2>{language === 'ko' ? '개발 과정에서 확인한 점' : 'Engineering notes'}</h2>
        <p className={styles.bodyCopy}>{getText(language, project.reflection)}</p>
      </div>
    </section>
  </article>
);
