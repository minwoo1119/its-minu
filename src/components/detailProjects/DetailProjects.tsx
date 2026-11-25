import { useState } from 'react';
import {
  projectsDetailData,
  type ProjectImage,
} from '../../data/projectsDetail';
import styles from './detailProjects.module.scss';
import type { Language, LocalizedText } from '../../i18n';
import { getText } from '../../i18n';

interface Props {
  language: Language;
  projectId: number;
}

const categoryLabels: Record<string, LocalizedText> = {
  featuredVision: {
    ko: 'Computer Vision & AI Inference',
    en: 'Computer Vision & AI Inference',
  },
  app: {
    ko: 'Mobile App Project',
    en: 'Mobile App Project',
  },
  cross: {
    ko: 'Cross-Platform Project',
    en: 'Cross-Platform Project',
  },
  fullstack: {
    ko: 'Systems & AI Platform',
    en: 'Systems & AI Platform',
  },
  frontend: {
    ko: 'Frontend & Web Project',
    en: 'Frontend & Web Project',
  },
  webFrontend: {
    ko: 'Web Frontend Project',
    en: 'Web Frontend Project',
  },
  backend: {
    ko: 'Backend System Project',
    en: 'Backend System Project',
  },
  desktop: {
    ko: 'Desktop Software Project',
    en: 'Desktop Software Project',
  },
  ai: {
    ko: 'AI & Machine Learning Project',
    en: 'AI & Machine Learning Project',
  },
  research: {
    ko: 'Research & Awards',
    en: 'Research & Awards',
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

  return (
    <figure className={`${className} ${isPortrait ? styles.portraitCard : ''}`}>
      {hasError ? (
        <div
          className={`${styles.imageFallback} ${isPortrait ? styles.portraitFallback : ''}`}
        >
          <span>{language === 'ko' ? '이미지 준비 중' : 'Image unavailable'}</span>
        </div>
      ) : (
        <img
          src={resolveAssetUrl(image.imageUrl)}
          alt={caption}
          className={`${imageClassName} ${isPortrait ? styles.portraitImage : ''}`}
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
        />
      )}
      <figcaption className={captionClassName}>{caption}</figcaption>
    </figure>
  );
};

const ImageGallery = ({
  images,
  language,
  cardClassName,
  imageClassName,
  captionClassName,
}: {
  images: ProjectImage[];
  language: Language;
  cardClassName: string;
  imageClassName: string;
  captionClassName: string;
}) => (
  <div className={styles.imageGallery}>
    {images.map((image, index) => (
      <ImageCard
        key={`${image.imageUrl}-${index}`}
        image={image}
        language={language}
        className={cardClassName}
        imageClassName={imageClassName}
        captionClassName={captionClassName}
      />
    ))}
  </div>
);

export const DetailProjects = ({ language, projectId }: Props) => {
  const project = projectsDetailData.find((item) => item.id === projectId);

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
          ? '학술 연구 및 프로젝트 성과'
          : 'Research & Honors';

  const localizedTitle = getText(language, project.title);
  const categoryLabel = categoryLabels[project.category]
    ? getText(language, categoryLabels[project.category])
    : project.category;
  const hasHeroImages = project.images && project.images.length > 0;

  return (
    <article className={styles.container}>
      <section
        className={`${styles.heroSection} ${
          !hasHeroImages ? styles.heroSingleCol : ''
        }`}
      >
        <div className={styles.heroCopy}>
          <div className={styles.heroMeta}>
            <div className={styles.category}>{categoryLabel}</div>
            {project.isInProgress && (
              <span className={styles.inProgressBadge}>
                {language === 'ko' ? '진행 중' : 'In Progress'}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{localizedTitle}</h1>
          <p className={styles.oneLiner}>{getText(language, project.oneLiner)}</p>
          <p className={styles.overview}>{getText(language, project.overview)}</p>
        </div>
        {hasHeroImages && (
          <ImageGallery
            images={project.images}
            language={language}
            cardClassName={styles.heroImageCard}
            imageClassName={styles.heroImage}
            captionClassName={styles.heroCaption}
          />
        )}
      </section>

      {/* 01. Overview */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>01 · Overview</div>
          <h2>{language === 'ko' ? '프로젝트 목표와 담당 범위' : 'Project Goal & Scope'}</h2>
        </div>

        <div className={styles.overviewGrid}>
          {project.affiliation && (
            <div className={`${styles.infoCard} ${styles.infoCardFull}`}>
              <div className={styles.cardLabel}>
                {language === 'ko' ? '소속 및 배경' : 'Affiliation'}
              </div>
              <div className={styles.cardValue}>{getText(language, project.affiliation)}</div>
            </div>
          )}
          <div className={styles.infoCard}>
            <div className={styles.cardLabel}>
              {language === 'ko' ? '개발 기간' : 'Duration'}
            </div>
            <div className={styles.cardValue}>{periodData}</div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardLabel}>
              {language === 'ko' ? '개발 형태' : 'Team Setup'}
            </div>
            <div className={styles.cardValue}>{getText(language, project.teamInfo)}</div>
          </div>
          <div className={`${styles.infoCard} ${styles.infoCardFull}`}>
            <div className={styles.cardLabel}>
              {language === 'ko' ? '담당 역할 및 범위' : 'Role & Scope'}
            </div>
            <div className={styles.cardValue}>{getText(language, project.contribution)}</div>
          </div>
        </div>
      </section>

      {/* 02. Problem */}
      {(project.problemStatement || (project.constraints && project.constraints.length > 0)) && (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>02 · Problem</div>
            <h2>{language === 'ko' ? '해결하려는 기술적 문제' : 'Technical Problem'}</h2>
          </div>

          {project.problemStatement && (
            <div className={styles.problemBox}>
              <p>{getText(language, project.problemStatement)}</p>
            </div>
          )}

          {project.constraints && project.constraints.length > 0 && (
            <div className={styles.constraintsGrid}>
              {project.constraints.map((c, idx) => (
                <div key={idx} className={styles.constraintCard}>
                  <div className={styles.constraintType}>{getText(language, c.type)}</div>
                  <p>{getText(language, c.description)}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 03. Implementation */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>03 · Implementation</div>
          <h2>{language === 'ko' ? '실제 구현한 기능과 아키텍처' : 'Implementation & Architecture'}</h2>
        </div>

        {project.architectureSteps && project.architectureSteps.length > 0 && (
          <div className={styles.archStepsGrid}>
            {project.architectureSteps.map((step) => (
              <div key={step.step} className={styles.archStepCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>{getText(language, step.title)}</div>
                  <p>{getText(language, step.description)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.featureGrid}>
          {project.keyFeatures.map((feature, index) => {
            const hasImages = feature.images && feature.images.length > 0;
            return (
              <div
                key={getText(language, feature.title)}
                className={`${styles.featureCard} ${hasImages ? styles.featureCardWithImage : ''}`}
              >
                <div className={styles.featureInfo}>
                  <div className={styles.featureBadge}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.featureTitle}>
                    {getText(language, feature.title)}
                  </div>
                  <p className={styles.featureDescription}>
                    {getText(language, feature.description)}
                  </p>
                </div>
                {hasImages && (
                  <div className={styles.featureVisual}>
                    <ImageGallery
                      images={feature.images}
                      language={language}
                      cardClassName={styles.featureImageCard}
                      imageClassName={styles.featureImage}
                      captionClassName={styles.featureCaption}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {project.roleDetails.length > 0 && (
          <>
            <div className={styles.subSectionTitle}>
              {language === 'ko' ? '세부 구현 내역' : 'Detailed Implementation'}
            </div>
            <ul className={styles.bulletList}>
              {project.roleDetails.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* 04. Engineering Challenges */}
      {project.troubleshooting.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>04 · Engineering Challenges</div>
            <h2>
              {language === 'ko'
                ? '어려웠던 점과 접근 방법'
                : 'Engineering Challenges & Approach'}
            </h2>
          </div>

          <div className={styles.troubleGrid}>
            {project.troubleshooting.map((item, index) => (
              <div key={index} className={styles.troubleCard}>
                <div className={styles.troubleBlock}>
                  <div className={styles.troubleLabel}>Problem</div>
                  <p>{getText(language, item.problem)}</p>
                </div>
                <div className={styles.troubleBlock}>
                  <div className={styles.troubleLabel}>Approach</div>
                  <p>{getText(language, item.solution)}</p>
                </div>
                <div className={styles.troubleBlock}>
                  <div className={styles.troubleLabel}>Result / Status</div>
                  <p>{getText(language, item.result)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 05. Results & Validation */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>05 · Results &amp; Validation</div>
          <h2>{language === 'ko' ? '검증 가능한 결과 및 현황' : 'Results & Validation'}</h2>
        </div>

        {project.performanceComparisons && project.performanceComparisons.length > 0 && (
          <div className={styles.comparisonGrid}>
            {project.performanceComparisons.map((comp, idx) => (
              <div key={idx} className={styles.comparisonCard}>
                <div className={styles.compMetric}>{getText(language, comp.metric)}</div>
                <div className={styles.compRow}>
                  <span className={styles.compBefore}>Before: {getText(language, comp.before)}</span>
                  <span className={styles.compAfter}>After: {getText(language, comp.after)}</span>
                </div>
                <div className={styles.compBadge}>{getText(language, comp.improvement)}</div>
              </div>
            ))}
          </div>
        )}

        {project.resultMetrics.length > 0 && (
          <div className={styles.metricGrid}>
            {project.resultMetrics.map((metric) => (
              <div key={getText(language, metric.label)} className={styles.metricCard}>
                <div className={styles.metricLabel}>{getText(language, metric.label)}</div>
                <div className={styles.metricValue}>{getText(language, metric.value)}</div>
                <p>{getText(language, metric.description)}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.reflectionGrid}>
          {project.lessonsLearned.length > 0 && (
            <div className={styles.reflectionCard}>
              <div className={styles.reflectionTitle}>
                {language === 'ko' ? '핵심 학습 및 정리' : 'Key Takeaways'}
              </div>
              <ul className={styles.bulletList}>
                {project.lessonsLearned.map((item, index) => (
                  <li key={index}>{getText(language, item)}</li>
                ))}
              </ul>
            </div>
          )}
          {project.limitations.length > 0 && (
            <div className={styles.reflectionCard}>
              <div className={styles.reflectionTitle}>
                {language === 'ko' ? '현재 한계 및 미구현 범위' : 'Limitations & Remaining Scope'}
              </div>
              <ul className={styles.bulletList}>
                {project.limitations.map((item, index) => (
                  <li key={index}>{getText(language, item)}</li>
                ))}
              </ul>
            </div>
          )}
          {project.nextSteps.length > 0 && (
            <div className={styles.reflectionCard}>
              <div className={styles.reflectionTitle}>
                {language === 'ko' ? '향후 계획' : 'Next Steps'}
              </div>
              <ul className={styles.bulletList}>
                {project.nextSteps.map((item, index) => (
                  <li key={index}>{getText(language, item)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 06. Tech Stack & References */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>06 · Tech Stack</div>
          <h2>{language === 'ko' ? '실제 사용한 기술 및 링크' : 'Tech Stack & References'}</h2>
        </div>

        <div className={styles.techChoiceGrid}>
          {project.techChoices.map((tech) => (
            <div key={tech.name} className={styles.techChoiceCard}>
              <div className={styles.techChoiceName}>{tech.name}</div>
              <p>{getText(language, tech.reason)}</p>
            </div>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className={styles.linkGrid}>
            {project.links.map((link, index) =>
              link.url ? (
                <a
                  key={`${link.url}-${index}`}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.linkCard}
                >
                  <div className={styles.linkTitle}>{getText(language, link.label)}</div>
                  <div className={styles.linkBody}>{link.url}</div>
                </a>
              ) : (
                <div key={`${getText(language, link.label)}-${index}`} className={styles.linkCard}>
                  <div className={styles.linkTitle}>{getText(language, link.label)}</div>
                  <div className={styles.linkBody}>
                    {link.note ? getText(language, link.note) : ''}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>
    </article>
  );
};
