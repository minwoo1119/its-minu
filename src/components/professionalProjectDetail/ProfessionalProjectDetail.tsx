import { useMemo } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type {
  ProfessionalProject,
  ProfessionalProjectStatus,
} from '../../data/professionalProjects';
import { ProjectSchematic } from '../common/visualDiagram/ProjectSchematic';
import { StickyToc, type TocItem } from '../common/detailLayout/StickyToc';
import { RelatedProjects } from '../common/detailLayout/RelatedProjects';
import styles from './professionalProjectDetail.module.scss';

interface ProfessionalProjectDetailProps {
  language: Language;
  project: ProfessionalProject;
  onProjectClick: (projectId: number) => void;
}

const statusLabel = (status: ProfessionalProjectStatus, language: Language) => {
  if (status === 'in-progress') {
    return language === 'ko' ? '분석·검토 진행 중' : 'In progress';
  }
  if (status === 'mixed') {
    return language === 'ko' ? '완료·진행 구분' : 'Completed & ongoing';
  }
  return language === 'ko' ? '구현 완료' : 'Completed';
};

export const ProfessionalProjectDetail = ({
  language,
  project,
  onProjectClick,
}: ProfessionalProjectDetailProps) => {
  const schematicVariant = project.id === 31 ? 'systems-sw' : 'platform';
  const primaryOutcome = project.outcomes[0]
    ? getText(language, project.outcomes[0])
    : '';

  const tocItems: TocItem[] = useMemo(
    () => [
      { id: 'overview', label: language === 'ko' ? '01. 개요 및 범위' : '01. Overview' },
      { id: 'problem', label: language === 'ko' ? '02. 기술적 문제' : '02. Problem' },
      { id: 'implementation', label: language === 'ko' ? '03. 아키텍처 및 구현' : '03. Implementation' },
      { id: 'challenges', label: language === 'ko' ? '04. 트러블슈팅' : '04. Challenges' },
      { id: 'results', label: language === 'ko' ? '05. 검증 결과' : '05. Results' },
      { id: 'tech-stack', label: language === 'ko' ? '06. 기술 스택' : '06. Tech Stack' },
    ],
    [language]
  );

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroTop}>
          <span className={styles.eyebrow}>{getText(language, project.eyebrow)}</span>
          <span className={styles.statusPill}>
            {statusLabel(project.status, language)}
          </span>
        </div>

        <h1>{getText(language, project.title)}</h1>
        <p className={styles.lead}>{getText(language, project.summary)}</p>

        <div className={styles.metaGrid}>
          <div className={styles.metaCell}>
            <span className={styles.metaLabel}>
              {language === 'ko' ? '기간' : 'Period'}
            </span>
            <span className={styles.metaValue}>
              {getText(language, project.period)}
            </span>
          </div>
          <div className={styles.metaCell}>
            <span className={styles.metaLabel}>
              {language === 'ko' ? '담당 역할' : 'Role'}
            </span>
            <span className={styles.metaValue}>
              {getText(language, project.role)}
            </span>
          </div>
          {primaryOutcome && (
            <div className={`${styles.metaCell} ${styles.metaWide}`}>
              <span className={styles.metaLabel}>
                {language === 'ko' ? '핵심 성과' : 'Key Outcome'}
              </span>
              <span className={styles.metaValue}>{primaryOutcome}</span>
            </div>
          )}
        </div>

        <div className={styles.techPills}>
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

      <div className={styles.layout}>
        <div className={styles.mainCol}>
          {/* 01. Overview */}
          <section id='overview' className={styles.section}>
            <p className={styles.sectionEyebrow}>01 / Overview</p>
            <h2>{language === 'ko' ? '프로젝트 목표와 담당 범위' : 'Project Goal & Scope'}</h2>
            <p className={styles.bodyCopy}>{getText(language, project.overview)}</p>
            {project.scopeNote && (
              <p className={styles.scopeBox}>{getText(language, project.scopeNote)}</p>
            )}
          </section>

          {/* 02. Problem */}
          <section id='problem' className={styles.section}>
            <p className={styles.sectionEyebrow}>02 / Problem</p>
            <h2>{language === 'ko' ? '해결하려는 기술적 문제' : 'Technical Problems'}</h2>
            <ul className={styles.plainList}>
              {project.problems.map((item) => (
                <li key={getText(language, item)}>{getText(language, item)}</li>
              ))}
            </ul>
          </section>

          {/* 03. Implementation & Systems Architecture */}
          <section id='implementation' className={styles.section}>
            <p className={styles.sectionEyebrow}>03 / Architecture &amp; Implementation</p>
            <h2>
              {language === 'ko'
                ? '시스템 아키텍처 및 구현 범위'
                : 'System Architecture & Implementation'}
            </h2>

            <ProjectSchematic variant={schematicVariant} language={language} />

            <div className={styles.architecture}>
              {project.architecture.map((step, index) => (
                <div className={styles.archCard} key={getText(language, step.label)}>
                  <span className={styles.archStep}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{getText(language, step.label)}</h3>
                  <p>{getText(language, step.description)}</p>
                </div>
              ))}
            </div>

            <div className={styles.contributionList}>
              {project.contributions.map((item, index) => (
                <div className={styles.contribution} key={getText(language, item.title)}>
                  <div className={styles.contributionHead}>
                    <span className={styles.itemNum}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{getText(language, item.title)}</h3>
                  </div>

                  {item.description && (
                    <p className={styles.contributionDesc}>
                      {getText(language, item.description)}
                    </p>
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
                    <div className={styles.subSectionGrid}>
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
              ))}
            </div>
          </section>

          {/* 04. Engineering Challenges */}
          <section id='challenges' className={styles.section}>
            <p className={styles.sectionEyebrow}>04 / Engineering Challenges</p>
            <h2>{language === 'ko' ? '어려웠던 점과 접근 방법' : 'Challenges & Approach'}</h2>
            <div className={styles.challengeList}>
              {project.challenges.map((challenge) => (
                <article
                  className={styles.challenge}
                  key={getText(language, challenge.title)}
                >
                  <header>
                    <h3>{getText(language, challenge.title)}</h3>
                    <span
                      className={
                        challenge.status === 'in-progress' ? styles.inProgress : ''
                      }
                    >
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
          </section>

          {/* 05. Results & Validation */}
          <section id='results' className={styles.section}>
            <p className={styles.sectionEyebrow}>05 / Results &amp; Validation</p>
            <h2>{language === 'ko' ? '검증 가능한 결과' : 'Verifiable Results'}</h2>
            <ul className={styles.outcomes}>
              {project.outcomes.map((outcome) => (
                <li key={getText(language, outcome)}>
                  {getText(language, outcome)}
                </li>
              ))}
            </ul>
          </section>

          {/* 06. Tech Stack */}
          <section id='tech-stack' className={styles.section}>
            <p className={styles.sectionEyebrow}>06 / Tech Stack</p>
            <h2>{language === 'ko' ? '실제 사용한 기술' : 'Technologies Used'}</h2>
            <div className={styles.techDetailGrid}>
              {project.techDetails.map((item) => (
                <div className={styles.techDetailCard} key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{getText(language, item.usage)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <StickyToc language={language} items={tocItems} />
      </div>

      <RelatedProjects
        language={language}
        currentProjectId={project.id}
        onProjectClick={onProjectClick}
      />
    </article>
  );
};
