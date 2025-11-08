import { BoxContent } from '../common/boxContent/BoxContent';
import styles from './techs.module.scss';

export const Techs = () => {
  const webFrontendCore = {
    title: '견고한 프론트엔드 개발',
    description: `Typescript 기반 웹 애플리케이션 개발을 합니다. css는 Module Scss를 즐겨 사용하고, Tanstack Query도 공부하고 있어요.`,
    icon: '💡',
  };

  const techExpansion = {
    title: '다양한 기술에 대한 경험',
    description: `React 외에 React Native, Flutter 의 개발 경험을 보유했습니다. 타 분야와의 원활한 소통을 위해 NestJS 를 공부하고 있으며, AI 연구 경험도 있어요.`,
    icon: '🚀',
  };

  const softSkills = {
    title: '성과를 만드는 사용자 중심 협업',
    description: `기본적으로 사람을 좋아합니다. 피드백 혹은 의견도 최대한 반영하려 노력하는 편이에요. 사용자는 중요하니까요.`,
    icon: '🤝',
  };

  return (
    <div className={styles.container}>
      <div className={styles.mini}>핵심 역량</div>
      <div className={styles.title}>겁없이 뛰어들고 집요하게 탐구합니다.</div>

      <div className={styles.boxesWrapper}>
        <BoxContent
          icon={webFrontendCore.icon}
          title={webFrontendCore.title}
          description={webFrontendCore.description}
        />
        <BoxContent
          icon={techExpansion.icon}
          title={techExpansion.title}
          description={techExpansion.description}
        />
        <BoxContent
          icon={softSkills.icon}
          title={softSkills.title}
          description={softSkills.description}
        />
      </div>
    </div>
  );
};
