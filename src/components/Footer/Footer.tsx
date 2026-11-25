import styles from './footer.module.scss';
import type { Language } from '../../i18n';

interface FooterProps {
  language: Language;
  onProjectsClick?: () => void;
  onPortalClick?: () => void;
  onArchiveClick?: () => void;
  onTopClick?: () => void;
}

export const Footer = ({
  language,
  onProjectsClick,
  onPortalClick,
  onArchiveClick,
  onTopClick,
}: FooterProps) => {
  const labels =
    language === 'ko'
      ? {
          contact: 'Contact',
          profiles: 'Profiles',
          navigation: 'Navigation',
          top: '상단으로',
          projects: '주요 프로젝트',
          archive: '프로젝트 아카이브',
          tracks: '직무 트랙 포털',
          blog: '기술 블로그',
          copyright: '© 2026 Minwoo Lee. C++ Software Engineer.',
        }
      : {
          contact: 'Contact',
          profiles: 'Profiles',
          navigation: 'Navigation',
          top: 'Back to Top',
          projects: 'Core Projects',
          archive: 'Project Archive',
          tracks: 'Track Portal',
          blog: 'Tech Blog',
          copyright: '© 2026 Minwoo Lee. C++ Software Engineer.',
        };

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.label}>{labels.contact}</div>
            <a className={styles.link} href='mailto:minwoo1119@naver.com'>
              minwoo1119@naver.com
            </a>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>{labels.profiles}</div>
            <div className={styles.linkRow}>
              <a
                className={styles.link}
                href='https://github.com/minwoo1119'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
              <a
                className={styles.link}
                href='https://www.linkedin.com/in/sksmsalsndi/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
              <a
                className={styles.link}
                href='https://lmw1119.tistory.com/'
                target='_blank'
                rel='noreferrer'
              >
                {labels.blog}
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>{labels.navigation}</div>
            <div className={styles.linkRow}>
              {onTopClick && (
                <button type='button' className={styles.linkBtn} onClick={onTopClick}>
                  {labels.top}
                </button>
              )}
              {onProjectsClick && (
                <button type='button' className={styles.linkBtn} onClick={onProjectsClick}>
                  {labels.projects}
                </button>
              )}
              {onArchiveClick && (
                <button type='button' className={styles.linkBtn} onClick={onArchiveClick}>
                  {labels.archive}
                </button>
              )}
              {onPortalClick && (
                <button type='button' className={styles.linkBtn} onClick={onPortalClick}>
                  {labels.tracks}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>{labels.copyright}</div>
      </div>
    </footer>
  );
};
