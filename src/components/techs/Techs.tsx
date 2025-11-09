import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useState } from 'react';

export type TabBarOption = '프론트엔드' | '백엔드' | 'AI';

export const Techs = () => {
  const [selected, setSelected] = useState<TabBarOption>('프론트엔드');
  return (
    <div className={styles.container}>
      <SelectTabBar
        op1='프론트엔드'
        op2='백엔드'
        op3='AI'
        onSelect={(op: TabBarOption) => setSelected(op)}
        selected={selected}
      />
      <div className={styles.text}>
        많이 부족하지만 열심히 깊이를 채워나가는 중이에요.
      </div>
      <div className={styles.techStacks}>
        {selected === '프론트엔드' ? (
          <img
            src='src/assets/img/frontend_stack.jpg'
            alt='프론트엔드 기술스택'
          />
        ) : (
          ''
        )}
        {selected === '백엔드' ? (
          <img src='src/assets/img/backend_stack.jpg' alt='백엔드 기술스택' />
        ) : (
          ''
        )}
        {selected === 'AI' ? (
          <img src='src/assets/img/ai_stack.jpg' alt='AI 기술스택' />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
