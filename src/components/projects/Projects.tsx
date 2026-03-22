import { Modal } from '../common/modal/Modal';
import { ProjectBox } from '../common/projectBox/ProjectBox';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import {
  projectsData,
  type ProjectInfo,
  type ProjectCategory,
} from '../../../public/data/projectsData';
import styles from './projects.module.scss';
import { useState } from 'react';
import { DetailProjects } from '../detailProjects/DetailProjects';

type FilterCategory = ProjectCategory | '전체';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('전체');

  const categories: FilterCategory[] = [
    '전체',
    '웹 프론트엔드',
    '백엔드',
    '앱',
    'AI',
  ];

  const filteredProjects =
    selectedCategory === '전체'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

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

      <SelectTabBar
        options={categories}
        selected={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setShowAll(false); // 카테고리 변경 시 더보기 상태 초기화
        }}
      />

      <div className={styles.projects}>
        {visibleProjects.map((item) => (
          <ProjectBox
            key={item.id}
            {...item}
            onClick={() => handleProjectClick(item)}
          />
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <button
          className={styles.moreBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? '접기' : '더보기'}
        </button>
      )}

      {selectedProjectId !== null && (
        <Modal onClose={closeModal}>
          <DetailProjects projectId={selectedProjectId} />
        </Modal>
      )}
    </div>
  );
};
