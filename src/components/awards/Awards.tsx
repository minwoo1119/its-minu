import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { awardsData } from '../../data/awards';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './awards.module.scss';

interface AwardsProps {
  language: Language;
}

export const Awards = ({ language }: AwardsProps) => (
  <section className={styles.wrapper} aria-labelledby='awards-section-title'>
    <div className={styles.container}>
      <SectionHeading
        id='awards-section-title'
        title={language === 'ko' ? '수상 및 연구 실적' : 'Honors & Research'}
        compact
      />

      <ol className={styles.timeline}>
        {awardsData.map((award) => (
          <li key={award.id} className={styles.item}>
            <div className={styles.dateCol}>
              <span className={styles.year}>{award.date}</span>
              <span className={styles.badge}>{getText(language, award.badge)}</span>
            </div>

            <div className={styles.bodyCol}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{getText(language, award.title)}</h3>
                <span className={styles.org}>
                  {getText(language, award.organization)}
                </span>
              </div>
              <p className={styles.subtitle}>
                {getText(language, award.subtitle)}
              </p>
              <p className={styles.description}>
                {getText(language, award.description)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
