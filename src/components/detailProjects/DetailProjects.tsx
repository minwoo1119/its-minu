import { useMemo, useState } from 'react';
import {
  projectsDetailData,
  type ProjectImage,
} from '../../data/projectsDetail';
import { ProjectSchematic } from '../common/visualDiagram/ProjectSchematic';
import { StickyToc, type TocItem } from '../common/detailLayout/StickyToc';
import { PerformanceChart } from '../common/detailLayout/PerformanceChart';
import { RelatedProjects } from '../common/detailLayout/RelatedProjects';
import styles from './detailProjects.module.scss';
import type { Language, LocalizedText } from '../../i18n';
import { getText } from '../../i18n';

interface Props {
  language: Language;
  projectId: number;
  onProjectClick: (projectId: number) => void;
}

const categoryLabels: Record<string, LocalizedText> = {
  featuredVision: {
    ko: 'Computer Vision & AI Inference',
    en: 'Computer Vision & AI Inference',
  },
  app: {
    ko: 'Mobile Application',
    en: 'Mobile Application',
  },
  cross: {
    ko: 'Cross-Platform Software',
    en: 'Cross-Platform Software',
  },
  fullstack: {
    ko: 'Systems & AI Platform',
    en: 'Systems & AI Platform',
  },
  frontend: {
    ko: 'Web Frontend',
    en: 'Web Frontend',
  },
  webFrontend: {
    ko: 'Web System',
    en: 'Web System',
  },
  backend: {
    ko: 'Backend System',
    en: 'Backend System',
  },
  desktop: {
    ko: 'Desktop Software',
    en: 'Desktop Software',
  },
  ai: {
    ko: 'AI / Machine Learning',
    en: 'AI / Machine Learning',
  },
  research: {
    ko: 'Research & Publications',
    en: 'Research & Publications',
  },
  other: {
    ko: 'Engineering Project',
    en: 'Engineering Project',
  },
};

const resolveAssetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const ImageCard = ({
  image,
  language,
  className,
  imageClassName,
  captionClassName,
}: {
  image: ProjectImage;
  language: Language;
  className: string;
  imageClassName: string;
  captionClassName: string;
}) => {
  const [hasError, setHasError] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const caption = getText(language, image.caption);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalHeight > img.naturalWidth * 1.1) {
      setIsPortrait(true);
    }
  };

  if (hasError) return null;

  return (
    <figure className={`${className} ${isPortrait ? styles.portraitCard : ''}`}>
      <img
        src={resolveAssetUrl(image.imageUrl)}
        alt={caption}
        className={`${imageClassName} ${isPortrait ? styles.portraitImage : ''}`}
        onLoad={handleImageLoad}
        onError={() => setHasError(true)}
      />
      <figcaption className={captionClassName}>{caption}</figcaption>
    </figure>
  );
};

export const DetailProjects = ({
  language,
  projectId,
  onProjectClick,
}: Props) => {
  const project = projectsDetailData.find((item) => item.id === projectId);

  const tocItems: TocItem[] = useMemo(() => {
    if (!project) return [];
    const list: TocItem[] = [
      { id: 'overview', label: language === 'ko' ? '개요 및 역할' : 'Overview' },
    ];
    if (project.problemStatement || (project.constraints && project.constraints.length > 0)) {
      list.push({ id: 'problem', label: language === 'ko' ? '기술적 문제' : 'Problem' });
    }
    list.push({
      id: 'implementation',
      label: language === 'ko' ? '파이프라인 및 구현' : 'Implementation',
    });
    if (project.troubleshooting.length > 0) {
      list.push({
        id: 'challenges',
        label: language === 'ko' ? '트러블슈팅' : 'Troubleshooting',
      });
    }
    list.push({
      id: 'results',
      label: language === 'ko' ? '검증 및 결과' : 'Results',
    });
    list.push({
      id: 'tech-stack',
      label: language === 'ko' ? '기술 스택' : 'Tech Stack',
    });
    return list;
  }, [project, language]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        {language === 'ko'
          ? '해당 프로젝트 정보를 찾을 수 없습니다.'
          : 'Project details could not be found.'}
      </div>
    );
  }

  const formattedStartDate = project.startDate
    ? project.startDate.toLocaleDateString(
        language === 'ko' ? 'ko-KR' : 'en-US',
        {
          year: 'numeric',
          month: 'long',
        }
      )
    : '';
  const formattedEndDate = project.endDate
    ? project.endDate.toLocaleDateString(
        language === 'ko' ? 'ko-KR' : 'en-US',
        {
          year: 'numeric',
          month: 'long',
        }
      )
    : language === 'ko'
      ? '진행 중'
      : 'In Progress';

  const periodData = project.periodText
    ? getText(language, project.periodText)
    : formattedStartDate
      ? `${formattedStartDate} - ${formattedEndDate}`
      : project.isInProgress
        ? language === 'ko'
          ? '진행 중'
          : 'In Progress'
        : language === 'ko'
          ? '학술 연구 성과'
          : 'Research & Honors';

  const localizedTitle = getText(language, project.title);
  const categoryLabel = categoryLabels[project.category]
    ? getText(language, categoryLabels[project.category])
    : project.category;

  const showLocalRagSchematic = project.id === 18;
  const primaryMetric = project.resultMetrics[0]
    ? `${getText(language, project.resultMetrics[0].label)}: ${getText(
        language,
        project.resultMetrics[0].value
      )}`
    : '';

  // Deduplicate images so the same image is never repeated between Hero and Feature sections
  const featureImageUrls = new Set<string>();
  project.keyFeatures.forEach((f) =>
    f.images?.forEach((img) => featureImageUrls.add(img.imageUrl))
  );

  const usedUrls = new Set<string>();
  const heroImages: ProjectImage[] = [];
  if (project.images.length > 0) {
    if (featureImageUrls.size > 0) {
      const lead = project.images[0];
      heroImages.push(lead);
      usedUrls.add(lead.imageUrl);
    } else {
      for (const img of project.images) {
        if (!usedUrls.has(img.imageUrl)) {
          heroImages.push(img);
          usedUrls.add(img.imageUrl);
        }
      }
    }
  }

  const dedupedFeatures = project.keyFeatures.map((feature) => {
    const uniqueImgs: ProjectImage[] = [];
    for (const img of feature.images || []) {
      if (!usedUrls.has(img.imageUrl)) {
        uniqueImgs.push(img);
        usedUrls.add(img.imageUrl);
      }
    }
    return { ...feature, uniqueImgs };
  });

  const hasHeroVisual = heroImages.length > 0;

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.metaTop}>
          <span>{categoryLabel}</span>
          {project.isInProgress && (
            <span className={styles.statusText}>
              {' · '}
              {language === 'ko' ? '진행 중' : 'In Progress'}
            </span>
          )}
        </p>

        <h1>{localizedTitle}</h1>
        <p className={styles.oneLiner}>{getText(language, project.oneLiner)}</p>

        <dl className={styles.metaGrid}>
          <div className={styles.metaCell}>
            <dt className={styles.metaLabel}>
              {language === 'ko' ? '기간' : 'Duration'}
            </dt>
            <dd className={styles.metaValue}>{periodData}</dd>
          </div>
          <div className={styles.metaCell}>
            <dt className={styles.metaLabel}>
              {language === 'ko' ? '개발 형태' : 'Role / Setup'}
            </dt>
            <dd className={styles.metaValue}>
              {getText(language, project.teamInfo)}
            </dd>
          </div>
          {primaryMetric && (
            <div className={styles.metaCell}>
              <dt className={styles.metaLabel}>
                {language === 'ko' ? '핵심 결과' : 'Key Result'}
              </dt>
              <dd className={styles.metaValue}>{primaryMetric}</dd>
            </div>
          )}
        </dl>

        {hasHeroVisual && (
          <div className={styles.heroMedia}>
            {heroImages.map((img, idx) => (
              <ImageCard
                key={`${img.imageUrl}-${idx}`}
                image={img}
                language={language}
                className={styles.heroFigure}
                imageClassName={styles.heroImage}
                captionClassName={styles.caption}
              />
            ))}
          </div>
        )}
      </header>

      <div className={styles.layout}>
        <div className={styles.mainCol}>
          <section id='overview' className={styles.section}>
            <h2>{language === 'ko' ? '프로젝트 목표와 담당 범위' : 'Project Goal & Scope'}</h2>
            <p className={styles.bodyCopy}>{getText(language, project.overview)}</p>

            <div className={styles.scopeNote}>
              {project.affiliation && (
                <p>
                  <strong>{language === 'ko' ? '소속: ' : 'Affiliation: '}</strong>
                  {getText(language, project.affiliation)}
                </p>
              )}
              <p>
                <strong>{language === 'ko' ? '담당 역할: ' : 'Scope: '}</strong>
                {getText(language, project.contribution)}
              </p>
            </div>
          </section>

          {(project.problemStatement || (project.constraints && project.constraints.length > 0)) && (
            <section id='problem' className={styles.section}>
              <h2>{language === 'ko' ? '해결하려는 기술적 문제' : 'Technical Problem'}</h2>

              {project.problemStatement && (
                <p className={styles.bodyCopy}>
                  {getText(language, project.problemStatement)}
                </p>
              )}

              {project.constraints && project.constraints.length > 0 && (
                <dl className={styles.constraintsGrid}>
                  {project.constraints.map((c, idx) => (
                    <div key={idx} className={styles.constraintItem}>
                      <dt>{getText(language, c.type)}</dt>
                      <dd>{getText(language, c.description)}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          )}

          <section id='implementation' className={styles.section}>
            <h2>
              {language === 'ko'
                ? '파이프라인 및 핵심 구현'
                : 'Pipeline & Core Implementation'}
            </h2>

            {showLocalRagSchematic && (
              <ProjectSchematic variant='local-rag' language={language} />
            )}

            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <ol className={styles.archGrid}>
                {project.architectureSteps.map((step) => (
                  <li key={step.step} className={styles.archItem}>
                    <h3>{getText(language, step.title)}</h3>
                    <p>{getText(language, step.description)}</p>
                  </li>
                ))}
              </ol>
            )}

            <div className={styles.featureList}>
              {dedupedFeatures.map((feature) => {
                const hasUniqueImgs = feature.uniqueImgs.length > 0;
                return (
                  <div
                    key={getText(language, feature.title)}
                    className={`${styles.featureItem} ${
                      hasUniqueImgs ? styles.featureWithMedia : ''
                    }`}
                  >
                    <div className={styles.featureCopy}>
                      <h3>{getText(language, feature.title)}</h3>
                      <p>{getText(language, feature.description)}</p>
                    </div>
                    {hasUniqueImgs && (
                      <div className={styles.featureMedia}>
                        {feature.uniqueImgs.map((img, idx) => (
                          <ImageCard
                            key={`${img.imageUrl}-${idx}`}
                            image={img}
                            language={language}
                            className={styles.featureFigure}
                            imageClassName={styles.featureImage}
                            captionClassName={styles.caption}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {project.roleDetails.length > 0 && (
              <div className={styles.subBlock}>
                <h3 className={styles.subHeading}>
                  {language === 'ko' ? '세부 구현 내역' : 'Detailed Implementation'}
                </h3>
                <ul className={styles.bulletList}>
                  {project.roleDetails.map((item, index) => (
                    <li key={index}>{getText(language, item)}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {project.troubleshooting.length > 0 && (
            <section id='challenges' className={styles.section}>
              <h2>
                {language === 'ko'
                  ? '어려웠던 점과 접근 방법'
                  : 'Challenges & Troubleshooting'}
              </h2>

              <div className={styles.troubleList}>
                {project.troubleshooting.map((item, index) => (
                  <article key={index} className={styles.troubleItem}>
                    <dl>
                      <div>
                        <dt>Problem</dt>
                        <dd>{getText(language, item.problem)}</dd>
                      </div>
                      <div>
                        <dt>Approach</dt>
                        <dd>{getText(language, item.solution)}</dd>
                      </div>
                      <div>
                        <dt>Result</dt>
                        <dd>{getText(language, item.result)}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section id='results' className={styles.section}>
            <h2>{language === 'ko' ? '검증 가능한 결과 및 현황' : 'Results & Validation'}</h2>

            {project.performanceComparisons &&
              project.performanceComparisons.length > 0 && (
                <PerformanceChart
                  language={language}
                  items={project.performanceComparisons}
                />
              )}

            {project.resultMetrics.length > 0 && (
              <dl className={styles.metricGrid}>
                {project.resultMetrics.map((metric) => (
                  <div
                    key={getText(language, metric.label)}
                    className={styles.metricItem}
                  >
                    <dt className={styles.metricLabel}>
                      {getText(language, metric.label)}
                    </dt>
                    <dd className={styles.metricValue}>
                      {getText(language, metric.value)}
                    </dd>
                    <dd className={styles.metricDesc}>
                      {getText(language, metric.description)}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <div className={styles.notesStack}>
              {project.lessonsLearned.length > 0 && (
                <div className={styles.noteBlock}>
                  <h3>{language === 'ko' ? '핵심 학습 및 정리' : 'Key Takeaways'}</h3>
                  <ul className={styles.bulletList}>
                    {project.lessonsLearned.map((item, idx) => (
                      <li key={idx}>{getText(language, item)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.limitations.length > 0 && (
                <div className={styles.noteBlock}>
                  <h3>
                    {language === 'ko'
                      ? '현재 한계 및 미구현 범위'
                      : 'Limitations & Remaining Scope'}
                  </h3>
                  <ul className={styles.bulletList}>
                    {project.limitations.map((item, idx) => (
                      <li key={idx}>{getText(language, item)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.nextSteps.length > 0 && (
                <div className={styles.noteBlock}>
                  <h3>{language === 'ko' ? '향후 계획' : 'Next Steps'}</h3>
                  <ul className={styles.bulletList}>
                    {project.nextSteps.map((item, idx) => (
                      <li key={idx}>{getText(language, item)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          <section id='tech-stack' className={styles.section}>
            <h2>
              {language === 'ko' ? '실제 사용한 기술 및 링크' : 'Tech Stack & Links'}
            </h2>

            <dl className={styles.techGrid}>
              {project.techChoices.map((tech) => (
                <div key={tech.name} className={styles.techItem}>
                  <dt>{tech.name}</dt>
                  <dd>{getText(language, tech.reason)}</dd>
                </div>
              ))}
            </dl>

            {project.links.length > 0 && (
              <ul className={styles.linkList}>
                {project.links.map((link, index) => (
                  <li key={`${link.url || getText(language, link.label)}-${index}`}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.linkAnchor}
                      >
                        <span className={styles.linkTitle}>
                          {getText(language, link.label)} ↗
                        </span>
                        <span className={styles.linkUrl}>{link.url}</span>
                      </a>
                    ) : (
                      <div className={styles.linkStatic}>
                        <span className={styles.linkTitle}>
                          {getText(language, link.label)}
                        </span>
                        <span className={styles.linkNote}>
                          {link.note ? getText(language, link.note) : ''}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
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
