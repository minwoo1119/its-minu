import { ProjectBox } from '../common/projectBox/ProjectBox';
import { projectsData } from '../../../public/data/projectsData';
import styles from './projects.module.scss';
import { useState } from 'react';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.subText}>애정이 담긴 프로젝트들이에요</div>
      <div className={styles.titleText}>프로젝트</div>
      <div className={styles.projects}>
        {visibleProjects.map((item) => (
          <ProjectBox {...item} />
        ))}
      </div>

      <button
        className={styles.moreBtn}
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? '접기' : '더보기'}
      </button>
    </div>
  );
};
