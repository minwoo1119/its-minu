import styles from './projectBox.module.scss';

interface Props {
  imgUrl: string;
  title: string;
  description: string;
  techs: string[];
}

export const ProjectBox = ({ imgUrl, title, description, techs }: Props) => {
  return (
    <div className={styles.container}>
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
