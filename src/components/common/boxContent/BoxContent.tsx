import styles from './boxContent.module.scss';

const techColors: Record<string, string> = {
  // Computer Vision
  'C++': '#00599c',
  'OpenCV': '#0284c7',
  'TensorRT': '#16a34a',

  // Mobile App
  'Flutter': '#0284c7',
  'iOS': '#059669',
  'App Store': '#2563eb',

  // Software Engineer
  'React': '#0ea5e9',
  'NestJS': '#e0234e',
  'Docker': '#2563eb',
};

interface Props {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export const BoxContent = ({ icon, title, description, color }: Props) => {
  const iconColor = color || techColors[icon] || '#2563eb';

  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
