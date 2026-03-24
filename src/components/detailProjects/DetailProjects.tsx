import { projectDetailData } from '../../../public/data/projectsDetailData';
import styles from './detailProjects.module.scss';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';

interface Props {
  language: Language;
  projectId: number;
}

export const DetailProjects = ({ language, projectId }: Props) => {
  const projectDetailInfo = projectDetailData.find(
    (project) => project.id === projectId
  );

  if (!projectDetailInfo) {
    return (
      <div>
        {language === 'ko'
          ? '해당 프로젝트 정보를 찾을 수 없습니다.'
          : 'Project details could not be found.'}
      </div>
    );
  }
  const formattedStartDate = projectDetailInfo.startDate.toLocaleDateString(
    language === 'ko' ? 'ko-KR' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
    }
  );
  const formattedEndDate = projectDetailInfo.endDate.toLocaleDateString(
    language === 'ko' ? 'ko-KR' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
    }
  );

  const periodData = `${formattedStartDate} - ${formattedEndDate}`;

  const fullImgUrl = `${import.meta.env.BASE_URL}${projectDetailInfo.imgUrl.startsWith('/') ? projectDetailInfo.imgUrl.slice(1) : projectDetailInfo.imgUrl}`;
  const localizedTitle = getText(language, projectDetailInfo.title);
  const ctaSuffix = language === 'ko' ? '보러가기' : 'View';

  return (
    <div className={styles.container}>
      <img src={fullImgUrl} alt={localizedTitle} />
      <div className={styles.title}>{localizedTitle}</div>
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
              {link.title} {ctaSuffix}
            </a>
          ))}
        </div>
      )}

      <div className={styles.description}>
        {getText(language, projectDetailInfo.description)}
      </div>

      <div className={styles.subtitle}>
        {language === 'ko' ? '기술 스택' : 'Tech Stack'}
      </div>
      <div className={styles.techRow}>
        {projectDetailInfo.techs.map((ele) => (
          <span key={ele} className={styles.techItemBox}>
            {ele}
          </span>
        ))}
      </div>

      <div className={styles.subtitle}>
        {language === 'ko' ? '주요 업무' : 'Key Contributions'}
      </div>
      <ul>
        {projectDetailInfo.do.map((d, index) => (
          <li key={index}>{getText(language, d)}</li>
        ))}
      </ul>

      <div className={styles.subtitle}>
        {language === 'ko' ? '성취' : 'Achievements'}
      </div>
      <ul>
        {projectDetailInfo.achievements.map((a, index) => (
          <li key={index}>{getText(language, a)}</li>
        ))}
      </ul>
    </div>
  );
};
