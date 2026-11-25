import { useState } from 'react';
import type { Language } from '../../../i18n';
import {
  ProjectSchematic,
  type SchematicVariant,
} from '../visualDiagram/ProjectSchematic';
import styles from './projectCard.module.scss';

export interface ProjectCardProps {
  language: Language;
  title: string;
  summary: string;
  eyebrow?: string;
  period?: string;
  role?: string;
  statusBadge?: string;
  outcome?: string;
  highlights?: string[];
  techs: string[];
  imgUrl?: string;
  schematicVariant?: SchematicVariant;
  variant?: 'featured' | 'standard' | 'compact';
  maxTechsDesktop?: number;
  onClick: () => void;
}

export const ProjectCard = ({
  language,
  title,
  summary,
  eyebrow,
  period,
  role,
  statusBadge,
  outcome,
  highlights,
  techs,
  imgUrl,
  schematicVariant,
  variant = 'standard',
  maxTechsDesktop = 5,
  onClick,
}: ProjectCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);

  const showPhoto = Boolean(imgUrl) && !hasImageError;
  const fullImgUrl = showPhoto
    ? `${import.meta.env.BASE_URL}${
        imgUrl!.startsWith('/') ? imgUrl!.slice(1) : imgUrl
      }`
    : '';

  const visibleTechs = techs.slice(0, maxTechsDesktop);
  const hiddenCount = Math.max(0, techs.length - visibleTechs.length);

  return (
    <article
      className={`${styles.card} ${styles[variant]}`}
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {variant !== 'compact' && (showPhoto || schematicVariant) && (
        <div className={styles.media}>
          {showPhoto ? (
            <img
              src={fullImgUrl}
              alt={title}
              loading='lazy'
              onError={() => setHasImageError(true)}
            />
          ) : schematicVariant ? (
            <ProjectSchematic
              variant={schematicVariant}
              language={language}
              compact
            />
          ) : null}
        </div>
      )}

      <div className={styles.body}>
        {(eyebrow || period || statusBadge) && (
          <div className={styles.metaRow}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {period && <span className={styles.period}>{period}</span>}
            {statusBadge && <span className={styles.status}>{statusBadge}</span>}
          </div>
        )}

        <h3 className={styles.title}>{title}</h3>

        {role && <p className={styles.role}>{role}</p>}

        <p className={styles.summary}>{summary}</p>

        {outcome && (
          <div className={styles.outcome}>
            <span className={styles.outcomeLabel}>
              {language === 'ko' ? '핵심 성과' : 'Key Outcome'}
            </span>
            <span className={styles.outcomeValue}>{outcome}</span>
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.techRow} aria-label='Technologies'>
          {visibleTechs.map((tech, index) => (
            <span
              key={tech}
              className={`${styles.techTag} ${
                index >= 3 ? styles.hideOnMobile : ''
              }`}
            >
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className={styles.moreTag}>+{hiddenCount}</span>
          )}
        </div>

        <span className={styles.detailCue} aria-hidden='true'>
          {language === 'ko' ? '상세 보기 →' : 'Details →'}
        </span>
      </div>
    </article>
  );
};
