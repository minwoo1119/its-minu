import { BoxContent } from '../common/boxContent/BoxContent';
import styles from './coreCompetencies.module.scss';
import type { Language } from '../../i18n';

interface CoreCompetenciesProps {
  language: Language;
}

export const CoreCompetencies = ({ language }: CoreCompetenciesProps) => {
  const content =
    language === 'ko'
      ? {
          mini: '핵심 역량',
          title: '겁없이 뛰어들고 집요하게 탐구합니다.',
          items: [
            {
              title: '견고한 프론트엔드 개발',
              description:
                'Typescript 기반 웹 애플리케이션 개발을 합니다. css는 Module Scss를 즐겨 사용하고, Tanstack Query도 공부하고 있어요.',
              icon: '💡',
            },
            {
              title: '다양한 기술에 대한 경험',
              description:
                'React 외에 React Native, Flutter 의 개발 경험을 보유했습니다. 타 분야와의 원활한 소통을 위해 NestJS 를 공부하고 있으며, AI 연구 경험도 있어요.',
              icon: '🚀',
            },
            {
              title: '성과를 만드는 사용자 중심 협업',
              description:
                '기본적으로 사람을 좋아합니다. 피드백 혹은 의견도 최대한 반영하려 노력하는 편이에요. 사용자는 중요하니까요.',
              icon: '🤝',
            },
          ],
        }
      : {
          mini: 'Core Competencies',
          title: 'I move fast into new domains and stay stubborn about depth.',
          items: [
            {
              title: 'Solid Frontend Engineering',
              description:
                'I build TypeScript-based web applications, prefer CSS Modules with SCSS, and keep expanding my depth with tools like TanStack Query.',
              icon: '💡',
            },
            {
              title: 'Range Across Technologies',
              description:
                'Beyond React, I have experience with React Native and Flutter. I am also studying NestJS for stronger cross-functional collaboration and have AI research experience.',
              icon: '🚀',
            },
            {
              title: 'User-Centered Collaboration',
              description:
                'I work well with people and make a real effort to absorb feedback and context, because products only matter if they work for users.',
              icon: '🤝',
            },
          ],
        };

  return (
    <div className={styles.container}>
      <div className={styles.mini}>{content.mini}</div>
      <div className={styles.title}>{content.title}</div>

      <div className={styles.boxesWrapper}>
        {content.items.map((item) => (
          <BoxContent
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
