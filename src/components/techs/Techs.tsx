import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useState } from 'react';

export type TabBarOption = '프론트엔드' | '백엔드' | 'AI';

export const Techs = () => {
  const [selected, setSelected] = useState<TabBarOption>('프론트엔드');
  const options: TabBarOption[] = ['프론트엔드', '백엔드', 'AI'];

  const getFullImgUrl = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className={styles.container}>
      <SelectTabBar
        options={options}
        onSelect={(op: TabBarOption) => setSelected(op)}
        selected={selected}
      />
      <div className={styles.text}>
        많이 부족하지만 열심히 깊이를 채워나가는 중이에요.
      </div>
      <div className={styles.techStacks}>
        {selected === '프론트엔드' ? (
          <img src={getFullImgUrl('/img/frontend_stack.jpg')} alt='프론트엔드 기술스택' />
        ) : (
          ''
        )}
        {selected === '백엔드' ? (
          <img src={getFullImgUrl('/img/backend_stack.jpg')} alt='백엔드 기술스택' />
        ) : (
          ''
        )}
        {selected === 'AI' ? (
          <img src={getFullImgUrl('/img/ai_stack.jpg')} alt='AI 기술스택' />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
