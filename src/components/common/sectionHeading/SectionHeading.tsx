import type { ReactNode } from 'react';
import styles from './sectionHeading.module.scss';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  action,
  compact = false,
}: SectionHeadingProps) => (
  <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
    <div className={styles.copy}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
    {action && <div className={styles.action}>{action}</div>}
  </header>
);
