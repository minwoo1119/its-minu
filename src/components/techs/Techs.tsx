import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';

export type TabBarOption = 'frontend' | 'backend' | 'ai';

interface TechsProps {
  language: Language;
}

export const Techs = ({ language }: TechsProps) => {
  const [selected, setSelected] = useState<TabBarOption>('frontend');
  const options: TabBarOption[] = ['frontend', 'backend', 'ai'];
  const labels = {
    frontend: language === 'ko' ? '프론트엔드' : 'Frontend',
    backend: language === 'ko' ? '백엔드' : 'Backend',
    ai: 'AI',
  };

  const getFullImgUrl = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className={styles.container}>
      <SelectTabBar
        options={options}
        onSelect={(op: TabBarOption) => setSelected(op)}
        selected={selected}
        getLabel={(option) => labels[option]}
      />
      <div className={styles.text}>
        {language === 'ko'
          ? '많이 부족하지만 열심히 깊이를 채워나가는 중이에요.'
          : 'Still building depth every day, one layer at a time.'}
      </div>
      <div className={styles.techStacks}>
        {selected === 'frontend' ? (
          <img
            src={getFullImgUrl('/img/frontend_stack.jpg')}
            alt={language === 'ko' ? '프론트엔드 기술스택' : 'Frontend tech stack'}
          />
        ) : (
          ''
        )}
        {selected === 'backend' ? (
          <img
            src={getFullImgUrl('/img/backend_stack.jpg')}
            alt={language === 'ko' ? '백엔드 기술스택' : 'Backend tech stack'}
          />
        ) : (
          ''
        )}
        {selected === 'ai' ? (
          <img
            src={getFullImgUrl('/img/ai_stack.jpg')}
            alt={language === 'ko' ? 'AI 기술스택' : 'AI tech stack'}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
