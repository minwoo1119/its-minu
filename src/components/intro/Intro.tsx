import styles from './intro.module.scss';
import type { Language } from '../../i18n';

interface IntroProps {
  language: Language;
}

export const Intro = ({ language }: IntroProps) => {
  const copy =
    language === 'ko'
      ? {
          title: '안녕하세요, ',
          role: '프론트엔드 개발자',
          name: ' 이민우입니다.',
          sub: 'React + TypeScript를 가지고 멋진 일들을 해냅니다. 열정을 쏟아부으며 성장할 곳을 찾고 있습니다.',
        }
      : {
          title: 'Hello, I am ',
          role: 'a frontend developer',
          name: ' Minwoo Lee.',
          sub: 'I build thoughtful products with React and TypeScript, and I am looking for a place where I can keep growing through real work.',
        };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {copy.title}
        <span>{copy.role}</span>
        {copy.name}
      </div>
      <div className={styles.sub}>{copy.sub}</div>
    </div>
  );
};
