import { useState } from 'react';
import type { Language } from '../../../i18n';
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
  variant?: 'featureRow' | 'standard' | 'compact';
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
  variant = 'standard',
  maxTechsDesktop = 5,
  onClick,
}: ProjectCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);

  const showPhoto = Boolean(imgUrl) && !hasImageError && variant !== 'compact';
  const fullImgUrl = showPhoto
    ? `${import.meta.env.BASE_URL}${
        imgUrl!.startsWith('/') ? imgUrl!.slice(1) : imgUrl
      }`
    : '';

  const visibleTechs = techs.slice(0, maxTechsDesktop);
  const hiddenCount = Math.max(0, techs.length - visibleTechs.length);
  const techText =
    hiddenCount > 0
      ? `${visibleTechs.join(' · ')} (+${hiddenCount})`
      : visibleTechs.join(' · ');

  const metaParts = [eyebrow, period].filter(Boolean);

  return (
    <article
      className={`${styles.entry} ${styles[variant]} ${
        showPhoto ? styles.withMedia : styles.textOnly
      }`}
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
      {showPhoto && (
        <div className={styles.media}>
          <img
            src={fullImgUrl}
            alt={title}
            onError={() => setHasImageError(true)}
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.body}>
          {(metaParts.length > 0 || statusBadge) && (
            <p className={styles.metaRow}>
              {metaParts.length > 0 && (
                <span className={styles.metaText}>{metaParts.join(' · ')}</span>
              )}
              {statusBadge && (
                <span className={styles.status}>
                  {metaParts.length > 0 ? ` · ${statusBadge}` : statusBadge}
                </span>
              )}
            </p>
          )}

          <h3 className={styles.title}>{title}</h3>

          {role && <p className={styles.role}>{role}</p>}

          <p className={styles.summary}>{summary}</p>

          {outcome && <p className={styles.outcome}>{outcome}</p>}

          {highlights && highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.footer}>
          <p className={styles.techLine} aria-label='Technologies'>
            {techText}
          </p>

          <span className={styles.detailCue} aria-hidden='true'>
            {variant === 'compact'
              ? '→'
              : language === 'ko'
                ? '상세 보기 →'
                : 'Details →'}
          </span>
        </div>
      </div>
    </article>
  );
};
