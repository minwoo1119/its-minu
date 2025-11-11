import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>연락처</div>
          <div className={styles.value}>minwoo1119@naver.com</div>
        </div>
        <div>
          <div className={styles.title}>SNS</div>
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
          <div className={styles.title}>빠른 링크</div>
          <div className={styles.links}>
            <a href='#' target='_blank'>
              프로젝트
            </a>
            <a href='https://lmw1119.tistory.com/' target='_blank'>
              블로그
            </a>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div>© 2025. All rights reserved.</div>
    </div>
  );
};
