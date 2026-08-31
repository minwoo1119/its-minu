import styles from './footer.module.scss';
import type { Language } from '../../i18n';

interface FooterProps {
  language: Language;
  onProjectsClick: () => void;
  onPortalClick?: () => void;
}

export const Footer = ({
  language,
  onProjectsClick,
  onPortalClick,
}: FooterProps) => {
  const labels =
    language === 'ko'
      ? {
          contact: '연락처',
          sns: 'SNS',
          quickLinks: '빠른 링크',
          portal: '전체 트랙 홈',
          projects: '프로젝트 목록',
          blog: '기술 블로그',
          copyright: '© 2026 Minwoo Lee. All rights reserved.',
        }
      : {
          contact: 'Contact',
          sns: 'Social',
          quickLinks: 'Quick Links',
          portal: 'All Tracks Portal',
          projects: 'Projects',
          blog: 'Tech Blog',
          copyright: '© 2026 Minwoo Lee. All rights reserved.',
        };

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>{labels.contact}</div>
          <div className={styles.value}>minwoo1119@naver.com</div>
        </div>
        <div>
          <div className={styles.title}>{labels.sns}</div>
          <div className={styles.snses}>
            <a
              href='https://github.com/minwoo1119'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://www.linkedin.com/in/sksmsalsndi/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div className={styles.title}>{labels.quickLinks}</div>
          <div className={styles.links}>
            {onPortalClick && (
              <button type='button' onClick={onPortalClick}>
                {labels.portal}
              </button>
            )}
            <button type='button' onClick={onProjectsClick}>
              {labels.projects}
            </button>
            <a
              href='https://lmw1119.tistory.com/'
              target='_blank'
              rel='noreferrer'
            >
              {labels.blog}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.border} />
      <div>{labels.copyright}</div>
    </footer>
  );
};
