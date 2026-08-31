import { BoxContent } from '../common/boxContent/BoxContent';
import styles from './coreCompetencies.module.scss';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';

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
    <div className={styles.container}>
      <div className={styles.mini}>
        {getText(language, competencies.mini)}
      </div>
      <div className={styles.title}>
        {getText(language, competencies.title)}
      </div>

      <div className={styles.boxesWrapper}>
        {competencies.items.map((item) => (
          <BoxContent
            key={getText(language, item.title)}
            icon={item.icon}
            title={getText(language, item.title)}
            description={getText(language, item.description)}
          />
        ))}
      </div>
    </div>
  );
};
