import type { TabBarOption } from '../../techs/Techs';
import styles from './selectTabBar.module.scss';

interface Props {
  op1: TabBarOption;
  op2: TabBarOption;
  op3: TabBarOption;
  selected: TabBarOption;
  onSelect: (op: TabBarOption) => void;
}

export const SelectTabBar = ({ op1, op2, op3, selected, onSelect }: Props) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => onSelect(op1)}
        className={`${styles.button} ${selected === op1 ? styles.active : ''}`}
      >
        {op1}
      </button>
      <button
        onClick={() => onSelect(op2)}
        className={`${styles.button} ${selected === op2 ? styles.active : ''}`}
      >
        {op2}
      </button>
      <button
        onClick={() => onSelect(op3)}
        className={`${styles.button} ${selected === op3 ? styles.active : ''}`}
      >
        {op3}
      </button>
    </div>
  );
};
