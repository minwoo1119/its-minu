import { useState } from 'react';
import styles from './projectBox.module.scss';
import type { Language, LocalizedText } from '../../../i18n';
import { getText } from '../../../i18n';

export interface ProjectBoxProps {
  id?: number;
  category?: string;
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  techs: string[];
  language: Language;
  onClick: () => void;
}

export const ProjectBox = ({
  imgUrl,
  title,
  description,
  techs,
  language,
  onClick,
}: ProjectBoxProps) => {
  const [hasImageError, setHasImageError] = useState(false);
  const fullImgUrl = `${import.meta.env.BASE_URL}${
    imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl
  }`;
  const localizedTitle = getText(language, title);

  return (
    <button type='button' className={styles.container} onClick={onClick}>
      {hasImageError ? (
        <div className={styles.imageFallback}>{localizedTitle}</div>
      ) : (
        <img
          src={fullImgUrl}
          alt={localizedTitle}
          onError={() => setHasImageError(true)}
        />
      )}
      <div className={styles.title}>{localizedTitle}</div>
      <div className={styles.description}>{getText(language, description)}</div>
      <div className={styles.techRow}>
        {techs.map((ele) => (
          <span key={ele} className={styles.techItemBox}>
            {ele}
          </span>
        ))}
      </div>
    </button>
  );
};
