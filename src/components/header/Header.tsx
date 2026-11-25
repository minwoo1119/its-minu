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
  onAboutClick?: () => void;
  onExperienceClick?: () => void;
  onCompetenciesClick?: () => void;
  onTechClick?: () => void;
  onProjectClick?: () => void;
  onOtherProjectsClick?: () => void;
  onArchiveClick?: () => void;
  onPortalClick?: () => void;
  onAwardsClick?: () => void;
  onPdfClick?: () => void;
}

export const Header = ({
  language,
  onLanguageChange,
  onLogoClick,
  onAboutClick,
  onExperienceClick,
  onCompetenciesClick,
  onTechClick,
  onProjectClick,
  onOtherProjectsClick,
  onArchiveClick,
  onPortalClick,
  onAwardsClick,
  onPdfClick,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    brandName: language === 'ko' ? '이민우' : 'Minwoo Lee',
    brandRole: 'C++ / Vision / Systems',
    about: language === 'ko' ? 'Focus' : 'Focus',
    experience: language === 'ko' ? '경력' : 'Experience',
    competencies: language === 'ko' ? '핵심 역량' : 'Skills',
    tech: language === 'ko' ? '기술 스택' : 'Tech',
    project: language === 'ko' ? '실무' : 'Work',
    otherProjects: language === 'ko' ? '프로젝트' : 'Projects',
    archive: language === 'ko' ? '아카이브' : 'Archive',
    portal: language === 'ko' ? '트랙' : 'Tracks',
    awards: language === 'ko' ? '수상' : 'Awards',
    pdf: language === 'ko' ? '이력서 PDF' : 'Resume PDF',
    menu: language === 'ko' ? '메뉴 열기/닫기' : 'Toggle navigation menu',
    language: language === 'ko' ? '언어 선택' : 'Select language',
  };

  const handleMenuClick = (callback?: () => void) => {
    if (callback) callback();
    setIsOpen(false);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <button
          type='button'
          className={styles.brand}
          onClick={() => handleMenuClick(onLogoClick)}
        >
          <span className={styles.brandName}>{labels.brandName}</span>
          <span className={styles.brandDivider} aria-hidden='true'>/</span>
          <span className={styles.brandRole}>{labels.brandRole}</span>
        </button>

        <div className={styles.mobileControls}>
          <label className={styles.languageSelector}>
            <select
              value={language}
              onChange={(event) =>
                onLanguageChange(event.target.value as Language)
              }
              aria-label={labels.language}
            >
              <option value='ko'>KO</option>
              <option value='en'>EN</option>
            </select>
          </label>

          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={labels.menu}
            aria-expanded={isOpen}
            type='button'
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-label='Primary navigation'
        >
          {onAboutClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onAboutClick)}
            >
              {labels.about}
            </button>
          )}

          {onExperienceClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onExperienceClick)}
            >
              {labels.experience}
            </button>
          )}

          {onProjectClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onProjectClick)}
            >
              {labels.project}
            </button>
          )}

          {onOtherProjectsClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onOtherProjectsClick)}
            >
              {labels.otherProjects}
            </button>
          )}

          {onArchiveClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onArchiveClick)}
            >
              {labels.archive}
            </button>
          )}

          {onCompetenciesClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onCompetenciesClick)}
            >
              {labels.competencies}
            </button>
          )}

          {onTechClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onTechClick)}
            >
              {labels.tech}
            </button>
          )}

          {onAwardsClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onAwardsClick)}
            >
              {labels.awards}
            </button>
          )}

          {onPortalClick && (
            <button
              type='button'
              className={styles.navItem}
              onClick={() => handleMenuClick(onPortalClick)}
            >
              {labels.portal}
            </button>
          )}

          <div className={styles.navActions}>
            <label className={`${styles.languageSelector} ${styles.desktopLang}`}>
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

            {onPdfClick && (
              <button
                type='button'
                className={styles.pdfButton}
                onClick={() => handleMenuClick(onPdfClick)}
              >
                {labels.pdf}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
