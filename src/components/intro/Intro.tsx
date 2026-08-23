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
          role: 'Computer Vision & Image Processing Engineer',
          name: ' 이민우입니다.',
          sub: '전통적 영상처리 알고리즘과 최신 AI/딥러닝을 결합하여 산업용 비전 검사 시스템 및 고성능 정량 분석 솔루션을 구축하는 컴퓨터비전 엔지니어 이민우입니다.',
        }
      : {
          title: 'Hello, I am ',
          role: 'a Computer Vision & Image Processing Engineer',
          name: ' Minwoo Lee.',
          sub: 'I build industrial vision inspection systems and high-performance quantitative analysis solutions by combining classical image processing with modern AI and deep learning.',
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
