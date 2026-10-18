import styles from './header.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';
import type { TrackId } from '../../data/tracks';

interface HeaderProps {
  language: Language;
  currentTrack?: TrackId;
  onLanguageChange: (language: Language) => void;
  onTrackChange?: (track: TrackId | 'portal') => void;
  onLogoClick?: () => void;
  onExperienceClick?: () => void;
  onCompetenciesClick?: () => void;
  onTechClick?: () => void;
  onProjectClick: () => void;
  onOtherProjectsClick?: () => void;
  onAwardsClick: () => void;
  onPdfClick: () => void;
}

export const Header = ({
  language,
  onLanguageChange,
  onLogoClick,
  onExperienceClick,
  onCompetenciesClick,
  onTechClick,
  onProjectClick,
  onOtherProjectsClick,
  onAwardsClick,
  onPdfClick,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    brandName: language === 'ko' ? '이민우' : 'Minwoo Lee',
    brandRole: language === 'ko' ? 'C++ Vision & Systems' : 'C++ Vision & Systems',
    experience: language === 'ko' ? '경력' : 'Experience',
    competencies: language === 'ko' ? '핵심 전문성' : 'Expertise',
    tech: language === 'ko' ? '기술 스택' : 'Tech Stack',
    project: language === 'ko' ? '실무 프로젝트' : 'Professional Work',
    otherProjects: language === 'ko' ? '선별 프로젝트' : 'Selected Projects',
    awards: language === 'ko' ? '수상 및 연구' : 'Awards',
    pdf: language === 'ko' ? '이력서 PDF' : 'Resume PDF',
    blog: language === 'ko' ? '블로그' : 'Blog',
    menu: language === 'ko' ? '메뉴 토글' : 'Toggle menu',
    language: language === 'ko' ? '언어' : 'Language',
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
          onClick={onLogoClick}
          title={labels.brandName}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onLogoClick?.();
          }}
        >
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>

        <div
          className={styles.brandTitle}
          onClick={onLogoClick}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onLogoClick?.();
          }}
        >
          {labels.brandName}
          <span>| {labels.brandRole}</span>
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

        {onExperienceClick && (
          <div
            className={styles.tab}
            onClick={() => handleMenuClick(onExperienceClick)}
            role='button'
            tabIndex={0}
          >
            {labels.experience}
          </div>
        )}

        {onCompetenciesClick && (
          <div
            className={styles.tab}
            onClick={() => handleMenuClick(onCompetenciesClick)}
            role='button'
            tabIndex={0}
          >
            {labels.competencies}
          </div>
        )}

        {onTechClick && (
          <div
            className={styles.tab}
            onClick={() => handleMenuClick(onTechClick)}
            role='button'
            tabIndex={0}
          >
            {labels.tech}
          </div>
        )}

        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onProjectClick)}
          role='button'
          tabIndex={0}
        >
          {labels.project}
        </div>

        {onOtherProjectsClick && (
          <div
            className={styles.tab}
            onClick={() => handleMenuClick(onOtherProjectsClick)}
            role='button'
            tabIndex={0}
          >
            {labels.otherProjects}
          </div>
        )}

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
