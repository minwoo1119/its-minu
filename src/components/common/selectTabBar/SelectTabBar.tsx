import styles from './selectTabBar.module.scss';

interface Props<T extends string> {
  options: T[];
  selected: T;
  onSelect: (op: T) => void;
}

export const SelectTabBar = <T extends string>({
  options,
  selected,
  onSelect,
}: Props<T>) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`${styles.button} ${
            selected === option ? styles.active : ''
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
