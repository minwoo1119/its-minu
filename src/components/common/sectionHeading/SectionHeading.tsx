import type { ReactNode } from 'react';
import styles from './sectionHeading.module.scss';

interface SectionHeadingProps {
  id?: string;
  as?: 'h1' | 'h2';
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}

export const SectionHeading = ({
  id,
  as = 'h2',
  title,
  description,
  action,
  compact = false,
}: SectionHeadingProps) => {
  const HeadingTag = as;
  return (
    <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
      <div className={styles.copy}>
        <HeadingTag id={id} className={styles.title}>
          {title}
        </HeadingTag>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </header>
  );
};
