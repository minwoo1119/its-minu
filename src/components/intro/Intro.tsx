import styles from './intro.module.scss';

export const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        안녕하세요, <span>프론트엔드 개발자</span> 이민우입니다.
      </div>
      <div className={styles.sub}>
        React + TypeScript를 가지고 멋진 일들을 해냅니다. 열정을 쏟아부으며
        성장할 곳을 찾고 있습니다.
      </div>
    </div>
  );
};
