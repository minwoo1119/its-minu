import { useState } from 'react';
import {
  projectPageData,
  type ProjectImage,
} from '../../../public/data/projectPageData.updated';
import styles from './detailProjects.module.scss';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';

interface Props {
  language: Language;
  projectId: number;
}

const categoryLabels = {
  ko: {
    webFrontend: '웹 프론트엔드',
    backend: '백엔드',
    app: '앱',
    ai: 'AI',
  },
  en: {
    webFrontend: 'Web Frontend',
    backend: 'Backend',
    app: 'App',
    ai: 'AI',
  },
} as const;

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
  const caption = getText(language, image.caption);

  return (
    <figure className={className}>
      {hasError ? (
        <div className={styles.imageFallback}>
          <span>{language === 'ko' ? '이미지 준비 중' : 'Image coming soon'}</span>
        </div>
      ) : (
        <img
          src={resolveAssetUrl(image.imageUrl)}
          alt={caption}
          className={imageClassName}
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
  const project = projectPageData.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div>
        {language === 'ko'
          ? '해당 프로젝트 정보를 찾을 수 없습니다.'
          : 'Project details could not be found.'}
      </div>
    );
  }

  const formattedStartDate = project.startDate.toLocaleDateString(
    language === 'ko' ? 'ko-KR' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
    }
  );
  const formattedEndDate = project.endDate.toLocaleDateString(
    language === 'ko' ? 'ko-KR' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
    }
  );

  const periodData = `${formattedStartDate} - ${formattedEndDate}`;
  const localizedTitle = getText(language, project.title);

  return (
    <article className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <div className={styles.category}>
            {categoryLabels[language][project.category]}
          </div>
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

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>01</div>
          <h2>{language === 'ko' ? '프로젝트 개요' : 'Overview'}</h2>
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.infoCard}>
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
          <div className={styles.infoCard}>
            <div className={styles.cardLabel}>
              {language === 'ko' ? '기여도' : 'Contribution'}
            </div>
            <div className={styles.cardValue}>{getText(language, project.contribution)}</div>
          </div>
        </div>

        <div className={styles.subSectionTitle}>
          {language === 'ko' ? '기술 스택과 선택 이유' : 'Tech Stack and Why'}
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

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>02</div>
          <h2>{language === 'ko' ? '핵심 기능 및 담당 역할' : 'Key Features & Role'}</h2>
        </div>

        <div className={styles.featureGrid}>
          {project.keyFeatures.map((feature) => {
            return (
              <div key={getText(language, feature.title)} className={styles.featureCard}>
                <ImageGallery
                  images={feature.images}
                  language={language}
                  cardClassName={styles.featureImageCard}
                  imageClassName={styles.featureImage}
                  captionClassName={styles.featureCaption}
                />
                <div className={styles.featureTitle}>
                  {getText(language, feature.title)}
                </div>
                <p className={styles.featureDescription}>
                  {getText(language, feature.description)}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.subSectionTitle}>
          {language === 'ko' ? '담당 업무' : 'Role Details'}
        </div>
        <ul className={styles.bulletList}>
          {project.roleDetails.map((item, index) => (
            <li key={index}>{getText(language, item)}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>03</div>
          <h2>
            {language === 'ko'
              ? '기술적 도전과 해결 과정'
              : 'Troubleshooting'}
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

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionEyebrow}>04</div>
          <h2>{language === 'ko' ? '성과 및 회고' : 'Results & Lessons'}</h2>
        </div>

        <div className={styles.metricGrid}>
          {project.resultMetrics.map((metric) => (
            <div key={getText(language, metric.label)} className={styles.metricCard}>
              <div className={styles.metricLabel}>{getText(language, metric.label)}</div>
              <div className={styles.metricValue}>{getText(language, metric.value)}</div>
              <p>{getText(language, metric.description)}</p>
            </div>
          ))}
        </div>

        <div className={styles.reflectionGrid}>
          <div className={styles.reflectionCard}>
            <div className={styles.reflectionTitle}>
              {language === 'ko' ? '배운 점' : 'Lessons Learned'}
            </div>
            <ul className={styles.bulletList}>
              {project.lessonsLearned.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </div>
          <div className={styles.reflectionCard}>
            <div className={styles.reflectionTitle}>
              {language === 'ko' ? '아쉬운 점' : 'Limitations'}
            </div>
            <ul className={styles.bulletList}>
              {project.limitations.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </div>
          <div className={styles.reflectionCard}>
            <div className={styles.reflectionTitle}>
              {language === 'ko' ? '다음 단계' : 'Next Steps'}
            </div>
            <ul className={styles.bulletList}>
              {project.nextSteps.map((item, index) => (
                <li key={index}>{getText(language, item)}</li>
              ))}
            </ul>
          </div>
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
