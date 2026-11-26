import styles from './coreCompetencies.module.scss';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import { SkillCard } from '../common/skillCard/SkillCard';

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
          eyebrow={getText(language, competencies.mini)}
          title={getText(language, competencies.title)}
          compact
        />

        <div className={styles.grid}>
          {competencies.items.map((item, idx) => (
            <SkillCard
              key={getText(language, item.title)}
              index={String(idx + 1).padStart(2, '0')}
              title={getText(language, item.title)}
              description={getText(language, item.description)}
              items={[item.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
