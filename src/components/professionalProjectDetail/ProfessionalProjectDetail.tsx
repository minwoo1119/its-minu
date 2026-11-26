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
  const showPlatformSchematic = project.id === 30;
  const primaryOutcome = project.outcomes[0]
    ? getText(language, project.outcomes[0])
    : '';

  const tocItems: TocItem[] = useMemo(
    () => [
      { id: 'overview', label: language === 'ko' ? '개요 및 범위' : 'Overview' },
      { id: 'problem', label: language === 'ko' ? '기술적 문제' : 'Problem' },
      {
        id: 'implementation',
        label: language === 'ko' ? '아키텍처 및 구현' : 'Architecture & Implementation',
      },
      { id: 'challenges', label: language === 'ko' ? '트러블슈팅' : 'Challenges' },
      { id: 'results', label: language === 'ko' ? '검증 결과' : 'Results' },
      { id: 'tech-stack', label: language === 'ko' ? '기술 스택' : 'Tech Stack' },
    ],
    [language]
  );

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.metaTop}>
          <span>{getText(language, project.eyebrow)}</span>
          <span className={styles.statusText}>
            {' · '}
            {statusLabel(project.status, language)}
          </span>
        </p>

        <h1>{getText(language, project.title)}</h1>
        <p className={styles.lead}>{getText(language, project.summary)}</p>

        <dl className={styles.metaGrid}>
          <div className={styles.metaCell}>
            <dt className={styles.metaLabel}>
              {language === 'ko' ? '기간' : 'Period'}
            </dt>
            <dd className={styles.metaValue}>
              {getText(language, project.period)}
            </dd>
          </div>
          <div className={styles.metaCell}>
            <dt className={styles.metaLabel}>
              {language === 'ko' ? '담당 역할' : 'Role'}
            </dt>
            <dd className={styles.metaValue}>
              {getText(language, project.role)}
            </dd>
          </div>
          {primaryOutcome && (
            <div className={`${styles.metaCell} ${styles.metaWide}`}>
              <dt className={styles.metaLabel}>
                {language === 'ko' ? '핵심 성과' : 'Key Outcome'}
              </dt>
              <dd className={styles.metaValue}>{primaryOutcome}</dd>
            </div>
          )}
        </dl>

        <p className={styles.techLine} aria-label='Technologies'>
          {project.technologies.join(' · ')}
        </p>

        <p className={styles.confidentialNote}>
          {language === 'ko'
            ? '공개 범위 안내 · 회사 내부 소스코드, API 명세, 인증 정보, 설비 식별 규칙 및 원시 데이터는 포함하지 않았습니다.'
            : 'Confidentiality notice · Internal source code, API specs, credentials, equipment identification rules, and raw data are omitted.'}
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.mainCol}>
          <section id='overview' className={styles.section}>
            <h2>{language === 'ko' ? '프로젝트 목표와 담당 범위' : 'Project Goal & Scope'}</h2>
            <p className={styles.bodyCopy}>{getText(language, project.overview)}</p>
            {project.scopeNote && (
              <p className={styles.scopeNote}>{getText(language, project.scopeNote)}</p>
            )}
          </section>

          <section id='problem' className={styles.section}>
            <h2>{language === 'ko' ? '해결하려는 기술적 문제' : 'Technical Problems'}</h2>
            <ul className={styles.plainList}>
              {project.problems.map((item) => (
                <li key={getText(language, item)}>{getText(language, item)}</li>
              ))}
            </ul>
          </section>

          <section id='implementation' className={styles.section}>
            <h2>
              {language === 'ko'
                ? '시스템 아키텍처 및 구현 범위'
                : 'System Architecture & Implementation'}
            </h2>

            {showPlatformSchematic && (
              <ProjectSchematic variant='platform' language={language} />
            )}

            <ol className={styles.architecture}>
              {project.architecture.map((step) => (
                <li className={styles.archItem} key={getText(language, step.label)}>
                  <h3>{getText(language, step.label)}</h3>
                  <p>{getText(language, step.description)}</p>
                </li>
              ))}
            </ol>

            <div className={styles.contributionList}>
              {project.contributions.map((item) => (
                <div className={styles.contribution} key={getText(language, item.title)}>
                  <h3>{getText(language, item.title)}</h3>

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
                    <div className={styles.subSectionList}>
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

          <section id='challenges' className={styles.section}>
            <h2>{language === 'ko' ? '어려웠던 점과 접근 방법' : 'Challenges & Approach'}</h2>
            <div className={styles.challengeList}>
              {project.challenges.map((challenge) => (
                <article
                  className={styles.challenge}
                  key={getText(language, challenge.title)}
                >
                  <header className={styles.challengeHead}>
                    <h3>{getText(language, challenge.title)}</h3>
                    <span
                      className={
                        challenge.status === 'in-progress'
                          ? styles.statusInProgress
                          : styles.statusMuted
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

          <section id='results' className={styles.section}>
            <h2>{language === 'ko' ? '검증 가능한 결과' : 'Verifiable Results'}</h2>
            <ul className={styles.outcomes}>
              {project.outcomes.map((outcome) => (
                <li key={getText(language, outcome)}>
                  {getText(language, outcome)}
                </li>
              ))}
            </ul>
          </section>

          <section id='tech-stack' className={styles.section}>
            <h2>{language === 'ko' ? '실제 사용한 기술' : 'Technologies Used'}</h2>
            <dl className={styles.techDetailGrid}>
              {project.techDetails.map((item) => (
                <div className={styles.techDetailItem} key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{getText(language, item.usage)}</dd>
                </div>
              ))}
            </dl>
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
