import type { Language } from '../../i18n';
import styles from './intro.module.scss';

interface IntroProps {
  language: Language;
}

export const Intro = ({ language }: IntroProps) => {
  const copy =
    language === 'ko'
      ? {
          title: '안녕하세요, ',
          role: '소프트웨어 엔지니어',
          name: ' 이민우입니다.',
          sub: '웹 프론트엔드, 백엔드, 앱, AI, 비전SW까지 다양한 분야에 관심을 갖고 개발해나가고 있습니다.',
        }
      : {
          title: 'Hello, I am ',
          role: 'a software engineer',
          name: ' Minwoo Lee.',
          sub: 'I am interested in a wide range of fields, from web frontend and backend development to apps, AI, and computer vision software, and I keep building across them.',
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
