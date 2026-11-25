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
    return language === 'ko' ? '분석·검토 진행 중' : 'In progress';
  }
  if (status === 'mixed') {
    return language === 'ko' ? '완료·진행 범위 구분' : 'Completed & ongoing';
  }
  return language === 'ko' ? '구현 완료' : 'Completed';
};

export const ProfessionalProjectDetail = ({
  language,
  project,
}: ProfessionalProjectDetailProps) => (
  <article className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.heroTopline}>
        <span>
          {language === 'ko' ? '기간: ' : 'Period: '}
          {getText(language, project.period)}
        </span>
        <span>
          {language === 'ko' ? '역할: ' : 'Role: '}
          {getText(language, project.role)}
        </span>
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
          ? '공개 범위 안내 · 회사 내부 소스코드, API 명세, 인증 정보, 설비 식별 규칙 및 원시 데이터는 포함하지 않았습니다.'
          : 'Confidentiality notice · Internal source code, API specs, credentials, equipment identification rules, and raw data are omitted.'}
      </p>
    </header>

    {/* 1. Overview */}
    <section className={styles.section}>
      <div className={styles.sectionIndex}>01</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Overview</p>
        <h2>{language === 'ko' ? '프로젝트 목표와 담당 범위' : 'Project goal & scope'}</h2>
        <p className={styles.bodyCopy}>{getText(language, project.overview)}</p>
        {project.scopeNote && (
          <p className={styles.scopeBox}>{getText(language, project.scopeNote)}</p>
        )}
      </div>
    </section>

    {/* 2. Problem */}
    <section className={styles.section}>
      <div className={styles.sectionIndex}>02</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Problem</p>
        <h2>{language === 'ko' ? '해결하려는 기술적 문제' : 'Technical problems'}</h2>
        <ul className={styles.plainList}>
          {project.problems.map((item) => (
            <li key={getText(language, item)}>{getText(language, item)}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* 3. Implementation */}
    <section className={styles.section}>
      <div className={styles.sectionIndex}>03</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Implementation</p>
        <h2>{language === 'ko' ? '실제 구현한 기능과 아키텍처' : 'Implementation & architecture'}</h2>

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

        <div className={styles.contributionList}>
          {project.contributions.map((item, index) => (
            <div className={styles.contribution} key={getText(language, item.title)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{getText(language, item.title)}</h3>
                {item.description && (
                  <p>{getText(language, item.description)}</p>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {item.bullets.map((bullet) => (
                      <li key={getText(language, bullet)}>
                        {getText(language, bullet)}
                      </li>
                    ))}
                  </ul>
                )}

                {item.subSections && item.subSections.length > 0 && (
                  <div className={styles.subSectionGroup}>
                    {item.subSections.map((sub) => (
                      <div
                        className={styles.subSection}
                        key={getText(language, sub.subtitle)}
                      >
                        <h4>{getText(language, sub.subtitle)}</h4>
                        <ul className={styles.bulletList}>
                          {sub.bullets.map((bullet) => (
                            <li key={getText(language, bullet)}>
                              {getText(language, bullet)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Engineering Challenges */}
    <section className={styles.section}>
      <div className={styles.sectionIndex}>04</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Engineering Challenges</p>
        <h2>{language === 'ko' ? '어려웠던 점과 접근 방법' : 'Challenges & approach'}</h2>
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
                  <dt>Approach</dt>
                  <dd>{getText(language, challenge.approach)}</dd>
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

    {/* 5. Results & Validation */}
    <section className={styles.section}>
      <div className={styles.sectionIndex}>05</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Results &amp; Validation</p>
        <h2>{language === 'ko' ? '검증 가능한 결과' : 'Verifiable results'}</h2>
        <ul className={styles.outcomes}>
          {project.outcomes.map((outcome) => (
            <li key={getText(language, outcome)}>{getText(language, outcome)}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* 6. Tech Stack */}
    <section className={`${styles.section} ${styles.lastSection}`}>
      <div className={styles.sectionIndex}>06</div>
      <div className={styles.sectionBody}>
        <p className={styles.sectionEyebrow}>Tech Stack</p>
        <h2>{language === 'ko' ? '실제 사용한 기술' : 'Technologies used'}</h2>
        <div className={styles.techDetailGrid}>
          {project.techDetails.map((item) => (
            <div className={styles.techDetailCard} key={item.name}>
              <h3>{item.name}</h3>
              <p>{getText(language, item.usage)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </article>
);
