import type { ReactElement } from 'react';
import styles from './modal.module.scss';

interface Props {
  onClose: () => void;
  children: ReactElement;
}

export const Modal = ({ onClose, children }: Props) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </div>
    </div>
  );
};
