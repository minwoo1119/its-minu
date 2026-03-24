import styles from './selectTabBar.module.scss';

interface Props<T extends string> {
  options: T[];
  selected: T;
  onSelect: (op: T) => void;
  getLabel?: (option: T) => string;
}

export const SelectTabBar = <T extends string>({
  options,
  selected,
  onSelect,
  getLabel,
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
          {getLabel ? getLabel(option) : option}
        </button>
      ))}
    </div>
  );
};
