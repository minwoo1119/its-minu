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
    </div>
  );
};
