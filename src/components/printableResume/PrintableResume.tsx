import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import styles from './printableResume.module.scss';

interface PrintableResumeProps {
  language: Language;
  trackData: TrackData;
}

export const PrintableResume = ({
  language,
  trackData,
}: PrintableResumeProps) => {
  const { printableResume } = trackData;

  const content = {
    name: language === 'ko' ? '이민우' : 'Minwoo Lee',
    role: getText(language, printableResume.role),
    bio: getText(language, printableResume.bio),
    email: 'minwoo1119@naver.com',
    github: 'github.com/minwoo1119',
    blog: 'lmw1119.tistory.com',
    linkedin: 'linkedin.com/in/sksmsalsndi',
    summary: printableResume.summary.map((s) => getText(language, s)),
    skills: printableResume.skills.map((s) => ({
      title: getText(language, s.title),
      items: s.items,
    })),
    projects: printableResume.projects.map((p) => ({
      title: p.title,
      role: p.role,
      tech: p.tech,
      bullets: p.bullets.map((b) => getText(language, b)),
    })),
    research: printableResume.research?.map((r) => getText(language, r)) || [],
    education: {
      school:
        language === 'ko'
          ? '금오공과대학교 (Kumoh National Institute of Technology)'
          : 'Kumoh National Institute of Technology (KIT)',
      major:
        language === 'ko'
          ? '컴퓨터공학과 학사 (GPA: 3.9 / 4.5)'
          : 'B.S. in Computer Engineering (GPA: 3.9 / 4.5)',
      period: '2021.03 - 2026.02',
    },
  };

  const labels =
    language === 'ko'
      ? {
          summary: '핵심 역량 요약',
          skills: '기술 스택',
          projects: '주요 프로젝트',
          education: '학력',
          awards: '수상 및 학술 활동',
        }
      : {
          summary: 'Professional Summary',
          skills: 'Technical Skills',
          projects: 'Featured Projects',
          education: 'Education',
          awards: 'Honors & Research',
        };

  return (
    <div className={styles.printRoot}>
      <header className={styles.header}>
        <div className={styles.titleArea}>
          <h1 className={styles.name}>{content.name}</h1>
          <div className={styles.role}>{content.role}</div>
          <p className={styles.bio}>{content.bio}</p>
        </div>
        <div className={styles.contactArea}>
          <div>Email: {content.email}</div>
          <div>GitHub: {content.github}</div>
          <div>Blog: {content.blog}</div>
          <div>LinkedIn: {content.linkedin}</div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{labels.summary}</h2>
        <ul className={styles.bulletList}>
          {content.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{labels.skills}</h2>
        <div className={styles.skillGrid}>
          {content.skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <strong>{skill.title}</strong>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{labels.projects}</h2>
        <div className={styles.projectList}>
          {content.projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                <span>{project.role}</span>
              </div>
              <div className={styles.tech}>Tech: {project.tech}</div>
              <ul>
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.bottomGrid}>
        <section className={styles.section}>
          <h2>{labels.education}</h2>
          <div>
            <strong>{content.education.school}</strong> (
            {content.education.period})
          </div>
          <div>{content.education.major}</div>
        </section>

        {content.research.length > 0 && (
          <section className={styles.section}>
            <h2>{labels.awards}</h2>
            <ul>
              {content.research.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
