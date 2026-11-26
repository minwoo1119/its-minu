import styles from './coreCompetencies.module.scss';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';

interface CoreCompetenciesProps {
  language: Language;
  trackData: TrackData;
}

export const CoreCompetencies = ({
  language,
  trackData,
}: CoreCompetenciesProps) => {
  const { competencies } = trackData;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SectionHeading
          title={getText(language, competencies.title)}
          compact
        />

        <div className={styles.grid}>
          {competencies.items.map((item) => (
            <div key={getText(language, item.title)} className={styles.item}>
              <h3 className={styles.title}>{getText(language, item.title)}</h3>
              <p className={styles.description}>
                {getText(language, item.description)}
              </p>
              <p className={styles.tag}>{item.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
