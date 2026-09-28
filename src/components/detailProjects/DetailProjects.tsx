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
    ko: 'Featured Vision Project',
    en: 'Featured Vision Project',
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
    ko: 'Full-Stack Project',
    en: 'Full-Stack Project',
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
          <span>{language === 'ko' ? '이미지 준비 중' : 'Image coming soon'}</span>
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
      : 'Present';

  const periodData = formattedStartDate
    ? `${formattedStartDate} - ${formattedEndDate}`
    : (language === 'ko' ? '학술 연구 및 프로젝트 성과' : 'Research & Honors');
  const localizedTitle = getText(language, project.title);
  const categoryLabel = categoryLabels[project.category]
    ? getText(language, categoryLabels[project.category])
    : project.category;

  return (
    <article className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <div className={styles.category}>{categoryLabel}</div>
          <h1 className={styles.title}>{localizedTitle}</h1>
          <p className={styles.oneLiner}>{getText(language, project.oneLiner)}</p>
          <p className={styles.overview}>{getText(language, project.overview)}</p>
        </div>
        <ImageGallery
          images={project.images}
          language={language}
          cardClassName={styles.heroImageCard}
          imageClassName={styles.heroImage}
          captionClassName={styles.heroCaption}
        />
      </section>

      {/* 01. Problem & Overview */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>01</div>
          <h2>{language === 'ko' ? '문제 정의 및 프로젝트 개요' : 'Problem Statement & Overview'}</h2>
        </div>

        <div className={styles.overviewGrid}>
          {project.affiliation && (
            <div className={`${styles.infoCard} ${styles.infoCardFull}`}>
              <div className={styles.cardLabel}>
                {language === 'ko' ? '경력 및 소속' : 'Experience & Affiliation'}
              </div>
              <div className={styles.cardValue}>{getText(language, project.affiliation)}</div>
            </div>
          )}
          <div className={`${styles.infoCard} ${styles.infoCardFull}`}>
            <div className={styles.cardLabel}>
              {language === 'ko' ? '한 줄 소개' : 'One-liner'}
            </div>
            <div className={styles.cardValue}>{getText(language, project.oneLiner)}</div>
          </div>
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
              {language === 'ko' ? '기여도 및 역할' : 'Contribution & Role'}
            </div>
            <div className={styles.cardValue}>{getText(language, project.contribution)}</div>
          </div>
        </div>

        {project.problemStatement && (
          <div className={styles.problemBox}>
            <div className={styles.problemLabel}>
              {language === 'ko' ? '해결하고자 한 문제 (Problem)' : 'Problem Statement'}
            </div>
            <p>{getText(language, project.problemStatement)}</p>
          </div>
        )}
      </section>

      {/* 02. Constraints & System Environment */}
      {project.constraints && project.constraints.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>02</div>
            <h2>{language === 'ko' ? '시스템 제약 조건 및 환경' : 'System Constraints & Environment'}</h2>
          </div>
          <div className={styles.constraintsGrid}>
            {project.constraints.map((c, idx) => (
              <div key={idx} className={styles.constraintCard}>
                <div className={styles.constraintType}>{getText(language, c.type)}</div>
                <p>{getText(language, c.description)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 03. Architecture & Processing Pipeline */}
      {project.architectureSteps && project.architectureSteps.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <div className={styles.sectionEyebrow}>03</div>
            <h2>{language === 'ko' ? '시스템 아키텍처 및 처리 파이프라인' : 'Architecture & Pipeline Flow'}</h2>
          </div>
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
        </section>
      )}

      {/* 04. Key Implementation & Role Details */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>04</div>
          <h2>{language === 'ko' ? '핵심 구현 기능 및 담당 역할' : 'Key Implementation & Role'}</h2>
        </div>

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
                    Feature {String(index + 1).padStart(2, '0')}
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

        <div className={styles.subSectionTitle}>
          {language === 'ko' ? '내가 직접 구현한 부분 (My Contribution)' : 'Detailed Implementation Tasks'}
        </div>
        <ul className={styles.bulletList}>
          {project.roleDetails.map((item, index) => (
            <li key={index}>{getText(language, item)}</li>
          ))}
        </ul>
      </section>

      {/* 05. Engineering Decisions */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>05</div>
          <h2>{language === 'ko' ? '엔지니어링 의사결정 (기술 스택과 선택 이유)' : 'Engineering Decisions (Tech Stack & Why)'}</h2>
        </div>
        <div className={styles.techChoiceGrid}>
          {project.techChoices.map((tech) => (
            <div key={tech.name} className={styles.techChoiceCard}>
              <div className={styles.techChoiceName}>{tech.name}</div>
              <p>{getText(language, tech.reason)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Technical Challenges & Troubleshooting */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>06</div>
          <h2>
            {language === 'ko'
              ? '기술적 도전과 문제 해결 과정'
              : 'Technical Challenges & Troubleshooting'}
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
                <div className={styles.troubleLabel}>Solution</div>
                <p>{getText(language, item.solution)}</p>
              </div>
              <div className={styles.troubleBlock}>
                <div className={styles.troubleLabel}>Result</div>
                <p>{getText(language, item.result)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07. Quantitative Performance & Results */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>07</div>
          <h2>{language === 'ko' ? '정량적 성능 검증 및 성과 (Before → After)' : 'Performance & Benchmark Results'}</h2>
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

        <div className={styles.metricGrid}>
          {project.resultMetrics.map((metric) => (
            <div key={getText(language, metric.label)} className={styles.metricCard}>
              <div className={styles.metricLabel}>{getText(language, metric.label)}</div>
              <div className={styles.metricValue}>{getText(language, metric.value)}</div>
              <p>{getText(language, metric.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. Retrospective & References */}
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>08</div>
          <h2>{language === 'ko' ? '엔지니어링 회고 및 참고 자료' : 'What I Learned & References'}</h2>
        </div>

        <div className={styles.reflectionGrid}>
          <div className={styles.reflectionCard}>
            <div className={styles.reflectionTitle}>
              {language === 'ko' ? '배운 점' : 'What I Learned'}
            </div>
            <ul className={styles.bulletList}>
              {project.lessonsLearned.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </div>
          <div className={styles.reflectionCard}>
            <div className={styles.reflectionTitle}>
              {language === 'ko' ? '한계점 및 개선 과제' : 'Limitations'}
            </div>
            <ul className={styles.bulletList}>
              {project.limitations.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </div>
          {project.nextSteps.length > 0 && (
            <div className={styles.reflectionCard}>
              <div className={styles.reflectionTitle}>
                {language === 'ko' ? '다음 단계 (Next Steps)' : 'Next Steps'}
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

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>05</div>
          <h2>{language === 'ko' ? '링크 및 참고 자료' : 'Links & References'}</h2>
        </div>

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
      </section>
    </article>
  );
};
