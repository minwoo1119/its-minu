import styles from './boxContent.module.scss';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const BoxContent = ({ icon, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
