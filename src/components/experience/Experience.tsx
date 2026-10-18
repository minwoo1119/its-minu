import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { experienceData } from '../../data/experience';
import styles from './experience.module.scss';

interface ExperienceProps {
  language: Language;
}

export const Experience = ({ language }: ExperienceProps) => {
  const content =
    language === 'ko'
      ? {
          titleText: '경력 사항',
        }
      : {
          titleText: 'Work Experience',
        };

  return (
    <section className={styles.container}>
      <h2 className={styles.titleText}>{content.titleText}</h2>

      <div className={styles.experienceList}>
        {experienceData.map((exp) => (
          <div key={exp.id} className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.headerMain}>
                <div className={styles.companyRow}>
                  <h3 className={styles.companyName}>
                    {getText(language, exp.company)}
                  </h3>
                  <span className={styles.statusBadge}>
                    {getText(language, exp.statusBadge)}
                  </span>
                </div>
                <p className={styles.roleAndDomain}>
                  {getText(language, exp.role)} · {getText(language, exp.domain)}
                </p>
              </div>

              <div className={styles.periodRow}>
                <span className={styles.periodText}>
                  {getText(language, exp.period)}
                </span>
              </div>
            </div>

            <p className={styles.summaryText}>{getText(language, exp.summary)}</p>

            <ul className={styles.responsibilitiesList}>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{getText(language, resp)}</li>
              ))}
            </ul>

            <div className={styles.techStackRow}>
              {exp.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {exp.note && (
              <p className={styles.noteText}>{getText(language, exp.note)}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
