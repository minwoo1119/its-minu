import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.selectTab}>
        <div className={styles.tab}>기술</div>
        <div className={styles.tab}>프로젝트</div>
        <div className={styles.tab}>블로그</div>
      </div>
    </div>
  );
};
