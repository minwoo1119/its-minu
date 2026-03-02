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
  const formattedStartDate = `${projectDetailInfo.startDate.getFullYear()}년 ${
    projectDetailInfo.startDate.getMonth() + 1
  }월`;
  const formattedEndDate = `${projectDetailInfo.endDate.getFullYear()}년 ${
    projectDetailInfo.endDate.getMonth() + 1
  }월`;

  const periodData = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className={styles.container}>
      <img src={projectDetailInfo.imgUrl} alt={projectDetailInfo.title} />
      <div className={styles.title}>{projectDetailInfo.title}</div>
      <div className={styles.period}>{periodData}</div>

      {projectDetailInfo.deployUrl && (
        <div className={styles.deployLinks}>
          {projectDetailInfo.deployUrl.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.deployBtn}
            >
              {link.title} 보러가기
            </a>
          ))}
        </div>
      )}

      <div className={styles.description}>{projectDetailInfo.description}</div>

      <div className={styles.subtitle}>기술 스택</div>
      <div className={styles.techRow}>
        {projectDetailInfo.techs.map((ele) => (
          <span key={ele} className={styles.techItemBox}>
            {ele}
          </span>
        ))}
      </div>

      <div className={styles.subtitle}>주요 업무</div>
      <ul>
        {projectDetailInfo.do.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>

      <div className={styles.subtitle}>성취</div>
      <ul>
        {projectDetailInfo.achievements.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
    </div>
  );
};
