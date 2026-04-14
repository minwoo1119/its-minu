import type { ProjectInfo } from '../../../../public/data/projectsData';
import styles from './projectBox.module.scss';
import type { Language } from '../../../i18n';
import { getText } from '../../../i18n';

interface Props extends ProjectInfo {
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
}: Props) => {
  const fullImgUrl = `${import.meta.env.BASE_URL}${imgUrl.startsWith('/') ? imgUrl.slice(1) : imgUrl}`;
  const localizedTitle = getText(language, title);
  
  return (
    <button type='button' className={styles.container} onClick={onClick}>
      <img src={fullImgUrl} alt={localizedTitle} />
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
