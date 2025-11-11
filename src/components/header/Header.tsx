import styles from './header.module.scss';

interface HeaderProps {
  onTechClick: () => void;
  onProjectClick: () => void;
}

export const Header = ({ onTechClick, onProjectClick }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.selectTab}>
        <div className={styles.tab} onClick={onTechClick}>
          기술
        </div>
        <div className={styles.tab} onClick={onProjectClick}>
          프로젝트
        </div>
        <a
          className={styles.tab}
          href='https://lmw1119.tistory.com/'
          target='_blank'
        >
          블로그
        </a>
      </div>
    </div>
  );
};
