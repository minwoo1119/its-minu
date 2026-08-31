import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import styles from './intro.module.scss';

interface IntroProps {
  language: Language;
  trackData: TrackData;
}

export const Intro = ({ language, trackData }: IntroProps) => {
  const { intro } = trackData;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {getText(language, intro.title)}
        <span>{getText(language, intro.role)}</span>
        {getText(language, intro.name)}
      </div>
      <div className={styles.sub}>{getText(language, intro.sub)}</div>
    </div>
  );
};
