import type { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

interface Props {
  onClose: () => void;
  children: ReactElement;
}

export const Modal = ({ onClose, children }: Props) => {
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
