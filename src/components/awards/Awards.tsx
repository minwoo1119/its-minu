import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { awardsData } from '../../data/awards';
import styles from './awards.module.scss';

interface AwardsProps {
  language: Language;
}

export const Awards = ({ language }: AwardsProps) => {
  const content =
    language === 'ko'
      ? {
          titleText: '수상 및 연구 실적',
        }
      : {
          titleText: 'Honors & Research',
        };

  return (
    <div className={styles.container}>
      <h2 className={styles.titleText}>{content.titleText}</h2>

      <div className={styles.awardsList}>
        {awardsData.map((award) => (
          <div key={award.id} className={styles.awardRow}>
            <div className={styles.rowHeader}>
              <div className={styles.badgeAndOrg}>
                <span className={styles.typeBadge}>
                  {getText(language, award.badge)}
                </span>
                <span className={styles.orgText}>
                  {getText(language, award.organization)}
                </span>
              </div>
              <span className={styles.yearText}>{award.date}</span>
            </div>

            <h3 className={styles.awardTitle}>
              {getText(language, award.title)}
            </h3>

            <p className={styles.paperTitle}>
              {getText(language, award.subtitle)}
            </p>

            <p className={styles.description}>
              {getText(language, award.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
