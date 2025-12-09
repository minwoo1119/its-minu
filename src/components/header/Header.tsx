import styles from './header.module.scss';
import { useState } from 'react';

interface HeaderProps {
  onTechClick: () => void;
  onProjectClick: () => void;
}

export const Header = ({ onTechClick, onProjectClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        aria-label='Menu Toggle'
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.selectTab} ${isOpen ? styles.open : ''}`}>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onTechClick)}
        >
          기술
        </div>
        <div
          className={styles.tab}
          onClick={() => handleMenuClick(onProjectClick)}
        >
          프로젝트
        </div>
        <a
          className={styles.tab}
          href='https://lmw1119.tistory.com/'
          target='_blank'
          rel='noreferrer'
          onClick={() => setIsOpen(false)}
        >
          블로그
        </a>
      </div>
    </div>
  );
};
