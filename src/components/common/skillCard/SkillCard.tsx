import styles from './skillCard.module.scss';

export interface SkillCardProps {
  index?: string;
  title: string;
  description: string;
  items: string[];
}

export const SkillCard = ({
  index,
  title,
  description,
  items,
}: SkillCardProps) => (
  <article className={styles.card}>
    <div className={styles.header}>
      {index && <span className={styles.index}>{index}</span>}
      <h3 className={styles.title}>{title}</h3>
    </div>
    <p className={styles.description}>{description}</p>
    <ul className={styles.items}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);
