import styles from './header.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onTechClick: () => void;
  onProjectClick: () => void;
}

export const Header = ({
  language,
  onLanguageChange,
  onTechClick,
  onProjectClick,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    tech: language === 'ko' ? '기술' : 'Tech',
    project: language === 'ko' ? '프로젝트' : 'Projects',
    blog: language === 'ko' ? '블로그' : 'Blog',
    menu: language === 'ko' ? '메뉴 토글' : 'Toggle menu',
    language: language === 'ko' ? '언어' : 'Language',
  };

  const handleMenuClick = (callback?: () => void) => {
    if (callback) callback();
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={labels.menu}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.selectTab} ${isOpen ? styles.open : ''}`}>
        <label className={styles.languageSelector}>
          <span>{labels.language}</span>
          <select
            value={language}
            onChange={(event) => onLanguageChange(event.target.value as Language)}
          >
            <option value='ko'>한국어</option>
            <option value='en'>English</option>
          </select>
        </label>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onTechClick)}
        >
          {labels.tech}
        </div>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onProjectClick)}
        >
          {labels.project}
        </div>
        <a
          className={styles.tab}
          href='https://lmw1119.tistory.com/'
          target='_blank'
          rel='noreferrer'
          onClick={() => setIsOpen(false)}
        >
          {labels.blog}
        </a>
      </div>
    </div>
  );
};
