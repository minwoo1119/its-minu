import styles from './footer.module.scss';
import type { Language } from '../../i18n';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const labels =
    language === 'ko'
      ? {
          contact: '연락처',
          sns: 'SNS',
          quickLinks: '빠른 링크',
          projects: '프로젝트',
          blog: '블로그',
          copyright: '© 2025. All rights reserved.',
        }
      : {
          contact: 'Contact',
          sns: 'Social',
          quickLinks: 'Quick Links',
          projects: 'Projects',
          blog: 'Blog',
          copyright: '© 2025. All rights reserved.',
        };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>{labels.contact}</div>
          <div className={styles.value}>minwoo1119@naver.com</div>
        </div>
        <div>
          <div className={styles.title}>{labels.sns}</div>
          <div className={styles.snses}>
            <a href='https://github.com/minwoo1119' target='_blank'>
              Github
            </a>
            <a href='https://www.linkedin.com/in/sksmsalsndi/' target='_blank'>
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div className={styles.title}>{labels.quickLinks}</div>
          <div className={styles.links}>
            <a href='#' target='_blank'>
              {labels.projects}
            </a>
            <a href='https://lmw1119.tistory.com/' target='_blank'>
              {labels.blog}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div>{labels.copyright}</div>
    </div>
  );
};
