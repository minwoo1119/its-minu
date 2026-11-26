import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './experience.module.scss';

interface ExperienceProps {
  language: Language;
}

const splitLead = (text: string): { lead: string | null; body: string } => {
  const idx = text.indexOf(':');
  if (idx > 0 && idx < 48) {
    return {
      lead: text.slice(0, idx).trim(),
      body: text.slice(idx + 1).trim(),
    };
  }
  return { lead: null, body: text };
};

export const Experience = ({ language }: ExperienceProps) => (
  <section className={styles.wrapper} aria-labelledby='experience-section-title'>
    <div className={styles.container}>
      <SectionHeading
        id='experience-section-title'
        title={language === 'ko' ? '경력 사항' : 'Work Experience'}
        compact
      />

      <div className={styles.list}>
        {experienceData.map((exp) => (
          <article key={exp.id} className={styles.entry}>
            <div className={styles.metaCol}>
              <p className={styles.period}>
                {getText(language, exp.period)}
                <span className={styles.statusText}>
                  {' · '}
                  {getText(language, exp.statusBadge)}
                </span>
              </p>
              <h3 className={styles.companyName}>
                {getText(language, exp.company)}
              </h3>
              <p className={styles.role}>{getText(language, exp.role)}</p>
              <p className={styles.domain}>{getText(language, exp.domain)}</p>
            </div>

            <div className={styles.detailCol}>
              <p className={styles.summary}>{getText(language, exp.summary)}</p>

              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => {
                  const { lead, body } = splitLead(getText(language, resp));
                  return (
                    <li key={idx}>
                      {lead && <strong>{lead}: </strong>}
                      {body}
                    </li>
                  );
                })}
              </ul>

              <p className={styles.techLine} aria-label='Technologies'>
                {exp.techStack.join(' · ')}
              </p>

              {exp.note && (
                <p className={styles.note}>{getText(language, exp.note)}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
