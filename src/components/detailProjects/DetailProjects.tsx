import { projectDetailData } from '../../../public/data/projectsDetailData';
import styles from './detailProjects.module.scss';

interface Props {
  projectId: number;
}

export const DetailProjects = ({ projectId }: Props) => {
  const projectDetailInfo = projectDetailData.find(
    (project) => project.id === projectId
  );

  if (!projectDetailInfo) {
    return <div>해당 프로젝트 정보를 찾을 수 없습니다.</div>;
  }
  const formattedStartDate = `${projectDetailInfo.startDate.getFullYear()}년 ${projectDetailInfo.startDate.getMonth()}월`;
  const formattedEndDate = `${projectDetailInfo.endDate.getFullYear()}년 ${projectDetailInfo.endDate.getMonth()}월`;

  const periodData = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className={styles.container}>
      <img src={projectDetailInfo.imgUrl} alt={projectDetailInfo.title} />
      <div className={styles.title}>{projectDetailInfo.title}</div>
      <div className={styles.period}>{periodData}</div>
      <div className={styles.description}>{projectDetailInfo.description}</div>

      <div className={styles.subtitle}>기술 스택</div>
      <div className={styles.techRow}>
        {projectDetailInfo.techs.map((ele) => (
          <span className={styles.techItemBox}>{ele}</span>
        ))}
      </div>

      <div className={styles.subtitle}>주요 업무</div>
      <ul>
        {projectDetailInfo.do.map((d) => (
          <li>{d}</li>
        ))}
      </ul>

      <div className={styles.subtitle}>성취</div>
      <ul>
        {projectDetailInfo.achievements.map((a) => (
          <li>{a}</li>
        ))}
      </ul>
    </div>
  );
};
