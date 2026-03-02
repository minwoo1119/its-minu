import { Modal } from '../common/modal/Modal';
import { ProjectBox } from '../common/projectBox/ProjectBox';
import {
  projectsData,
  type ProjectInfo,
} from '../../../public/data/projectsData';
import styles from './projects.module.scss';
import { useState } from 'react';
import { DetailProjects } from '../detailProjects/DetailProjects';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  const handleProjectClick = (project: ProjectInfo) => {
    setSelectedProjectId(project.id);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subText}>애정이 담긴 프로젝트들이에요</div>
      <div className={styles.titleText}>프로젝트</div>
      <div className={styles.projects}>
        {visibleProjects.map((item) => (
          <ProjectBox
            key={item.id}
            {...item}
            onClick={() => handleProjectClick(item)}
          />
        ))}
      </div>

      <button
        className={styles.moreBtn}
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? '접기' : '더보기'}
      </button>

      {selectedProjectId !== null && (
        <Modal onClose={closeModal}>
          <DetailProjects projectId={selectedProjectId} />
        </Modal>
      )}
    </div>
  );
};
