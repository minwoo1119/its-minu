import type { ProjectInfo } from '../../../../public/data/projectsData';
import styles from './projectBox.module.scss';

interface Props extends ProjectInfo {
  onClick: () => void;
}

export const ProjectBox = ({
  imgUrl,
  title,
  description,
  techs,
  onClick,
}: Props) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={imgUrl} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.techRow}>
        {techs.map((ele) => (
          <span className={styles.techItemBox}>{ele}</span>
        ))}
      </div>
    </div>
  );
};
