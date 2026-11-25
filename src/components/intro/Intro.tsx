import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import styles from './intro.module.scss';

interface IntroProps {
  language: Language;
  trackData: TrackData;
}

const PROFILE_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/minwoo1119',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sksmsalsndi/',
    external: true,
  },
  {
    label: 'minwoo1119@naver.com',
    href: 'mailto:minwoo1119@naver.com',
    external: false,
  },
];

export const Intro = ({ language, trackData }: IntroProps) => {
  const { intro } = trackData;
  const isVisionTrack = trackData.id === 'computer-vision';

  return (
    <section className={styles.container} aria-label='Introduction'>
      {isVisionTrack && (
        <p className={styles.positioning}>
          C++ Software Engineer | Computer Vision &amp; AI Inference | Windows &amp; Systems Integration
        </p>
      )}
      <h1 className={styles.title}>
        {getText(language, intro.title)}
        {getText(language, intro.role) && (
          <span>{getText(language, intro.role)}</span>
        )}
        {getText(language, intro.name)}
      </h1>
      <p className={styles.sub}>{getText(language, intro.sub)}</p>

      <nav className={styles.profileLinks} aria-label='Profile links'>
        {PROFILE_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
};
