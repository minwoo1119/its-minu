import styles from './header.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';
import type { TrackId } from '../../data/tracks';

interface HeaderProps {
  language: Language;
  currentTrack: TrackId;
  onLanguageChange: (language: Language) => void;
  onTrackChange: (track: TrackId | 'portal') => void;
  onTechClick: () => void;
  onProjectClick: () => void;
  onAwardsClick: () => void;
  onPdfClick: () => void;
}

export const Header = ({
  language,
  currentTrack,
  onLanguageChange,
  onTrackChange,
  onTechClick,
  onProjectClick,
  onAwardsClick,
  onPdfClick,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    tech: language === 'ko' ? '기술' : 'Tech',
    project: language === 'ko' ? '프로젝트' : 'Projects',
    awards: language === 'ko' ? '수상 및 연구' : 'Awards',
    pdf: language === 'ko' ? 'PDF 다운로드' : 'Download PDF',
    blog: language === 'ko' ? '블로그' : 'Blog',
    menu: language === 'ko' ? '메뉴 토글' : 'Toggle menu',
    language: language === 'ko' ? '언어' : 'Language',
    trackSelect: language === 'ko' ? '트랙 선택' : 'Track',
    portalOption: language === 'ko' ? '전체 트랙 홈' : 'All Tracks',
    cvOption: 'Computer Vision',
    appOption: 'App Developer',
    seOption: 'Software Engineer',
  };

  const handleMenuClick = (callback?: () => void) => {
    if (callback) callback();
    setIsOpen(false);
  };

  return (
    <header className={styles.container}>
      <div className={styles.leftSection}>
        <div
          className={styles.dots}
          onClick={() => onTrackChange('portal')}
          title={labels.portalOption}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onTrackChange('portal');
          }}
        >
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>

        <div className={styles.desktopTrackSwitcher}>
          <select
            value={currentTrack}
            onChange={(e) =>
              onTrackChange(e.target.value as TrackId | 'portal')
            }
            aria-label={labels.trackSelect}
          >
            <option value='portal'>{labels.portalOption}</option>
            <option value='computer-vision'>{labels.cvOption}</option>
            <option value='app-dev'>{labels.appOption}</option>
            <option value='software-engineer'>{labels.seOption}</option>
          </select>
        </div>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={labels.menu}
        type='button'
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.selectTab} ${isOpen ? styles.open : ''}`}>
        <div className={styles.trackSelectMobile}>
          <label htmlFor='mobile-track-select'>{labels.trackSelect}</label>
          <select
            id='mobile-track-select'
            value={currentTrack}
            onChange={(e) => {
              onTrackChange(e.target.value as TrackId | 'portal');
              setIsOpen(false);
            }}
          >
            <option value='portal'>{labels.portalOption}</option>
            <option value='computer-vision'>{labels.cvOption}</option>
            <option value='app-dev'>{labels.appOption}</option>
            <option value='software-engineer'>{labels.seOption}</option>
          </select>
        </div>

        <label className={styles.languageSelector}>
          <select
            value={language}
            onChange={(event) =>
              onLanguageChange(event.target.value as Language)
            }
            aria-label={labels.language}
          >
            <option value='ko'>한국어</option>
            <option value='en'>English</option>
          </select>
        </label>

        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onTechClick)}
          role='button'
          tabIndex={0}
        >
          {labels.tech}
        </div>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onProjectClick)}
          role='button'
          tabIndex={0}
        >
          {labels.project}
        </div>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onAwardsClick)}
          role='button'
          tabIndex={0}
        >
          {labels.awards}
        </div>
        <button
          type='button'
          className={`${styles.tab} ${styles.pdfButton}`}
          onClick={() => handleMenuClick(onPdfClick)}
        >
          {labels.pdf}
        </button>
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
    </header>
  );
};
