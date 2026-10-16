import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import { experienceData } from '../../data/experience';
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
    nameEn: 'Lee Min-woo',
    role: getText(language, printableResume.role),
    bio: getText(language, printableResume.bio),
    email: 'minwoo1119@naver.com',
    github: 'github.com/minwoo1119',
    blog: 'lmw1119.tistory.com',
    linkedin: 'linkedin.com/in/sksmsalsndi',
    portfolio: 'minwoo1119.github.io/its-minu',
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
          summarySub: 'PROFESSIONAL SUMMARY',
          experience: '경력 사항',
          experienceSub: 'WORK EXPERIENCE',
          skills: '기술 스택',
          skillsSub: 'TECHNICAL SKILLS',
          projects: '핵심 프로젝트',
          projectsSub: 'FEATURED PROJECTS',
          education: '학력',
          educationSub: 'EDUCATION',
          awards: '수상 및 연구 실적',
          awardsSub: 'HONORS & RESEARCH',
          domain: '도메인',
          tech: '기술',
        }
      : {
          summary: 'Professional Summary',
          summarySub: 'CORE COMPETENCIES',
          experience: 'Work Experience',
          experienceSub: 'CAREER HISTORY',
          skills: 'Technical Skills',
          skillsSub: 'AREAS OF EXPERTISE',
          projects: 'Featured Projects',
          projectsSub: 'SYSTEMS & VISION',
          education: 'Education',
          educationSub: 'ACADEMICS',
          awards: 'Honors & Research',
          awardsSub: 'PUBLICATIONS & AWARDS',
          domain: 'Domain',
          tech: 'Tech',
        };

  return (
    <div className={styles.printRoot}>
      {/* 1. Header (Identity & Contact) */}
      <header className={styles.header}>
        <div className={styles.identityArea}>
          <div className={styles.nameRow}>
            <h1 className={styles.name}>{content.name}</h1>
            {language === 'ko' && (
              <span className={styles.nameEn}>{content.nameEn}</span>
            )}
          </div>
          <div className={styles.roleBadge}>{content.role}</div>
          <p className={styles.bio}>{content.bio}</p>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactValue}>{content.email}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>GitHub</span>
            <span className={styles.contactValue}>{content.github}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Blog</span>
            <span className={styles.contactValue}>{content.blog}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>LinkedIn</span>
            <span className={styles.contactValue}>{content.linkedin}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Portfolio</span>
            <span className={styles.contactValue}>{content.portfolio}</span>
          </div>
        </div>
      </header>

      {/* 2. Professional Summary */}
      <section className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.titleAccent} />
          <h2 className={styles.sectionTitle}>{labels.summary}</h2>
          <span className={styles.sectionSub}>{labels.summarySub}</span>
        </div>
        <ul className={styles.bulletList}>
          {content.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 3. Work Experience */}
      <section className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.titleAccent} />
          <h2 className={styles.sectionTitle}>{labels.experience}</h2>
          <span className={styles.sectionSub}>{labels.experienceSub}</span>
        </div>
        <div className={styles.itemList}>
          {experienceData.map((exp) => (
            <div key={exp.id} className={styles.experienceCard}>
              <div className={styles.itemHeader}>
                <div className={styles.companyGroup}>
                  <h3 className={styles.companyName}>
                    {getText(language, exp.company)}
                  </h3>
                  <span className={styles.roleTag}>
                    {getText(language, exp.role)}
                  </span>
                </div>
                <span className={styles.periodBadge}>
                  {getText(language, exp.period)}
                </span>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.domainTag}>
                  <strong>{labels.domain}:</strong> {getText(language, exp.domain)}
                </span>
                <span className={styles.techTag}>
                  <strong>{labels.tech}:</strong> {exp.techStack.join(', ')}
                </span>
              </div>

              <p className={styles.expSummary}>
                {getText(language, exp.summary)}
              </p>

              <ul className={styles.expBullets}>
                {exp.responsibilities.map((bullet, bIndex) => (
                  <li key={bIndex}>{getText(language, bullet)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technical Skills (2x2 Grid) */}
      <section className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.titleAccent} />
          <h2 className={styles.sectionTitle}>{labels.skills}</h2>
          <span className={styles.sectionSub}>{labels.skillsSub}</span>
        </div>
        <div className={styles.skillGrid}>
          {content.skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillDot} />
                <strong className={styles.skillTitle}>{skill.title}</strong>
              </div>
              <span className={styles.skillItems}>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Projects */}
      <section className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <div className={styles.titleAccent} />
          <h2 className={styles.sectionTitle}>{labels.projects}</h2>
          <span className={styles.sectionSub}>{labels.projectsSub}</span>
        </div>
        <div className={styles.itemList}>
          {content.projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.itemHeader}>
                <h3 className={styles.projectName}>{project.title}</h3>
                <span className={styles.roleTag}>{project.role}</span>
              </div>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>Tech</span>
                <span>{project.tech}</span>
              </div>
              <ul className={styles.projectBullets}>
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Education & Awards (2-Column Grid) */}
      <div className={styles.bottomGrid}>
        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <div className={styles.titleAccent} />
            <h2 className={styles.sectionTitle}>{labels.education}</h2>
            <span className={styles.sectionSub}>{labels.educationSub}</span>
          </div>
          <div className={styles.bottomCard}>
            <div className={styles.schoolHeader}>
              <strong className={styles.schoolName}>
                {content.education.school}
              </strong>
              <span className={styles.periodText}>
                {content.education.period}
              </span>
            </div>
            <div className={styles.majorText}>{content.education.major}</div>
          </div>
        </section>

        {content.research.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionTitleRow}>
              <div className={styles.titleAccent} />
              <h2 className={styles.sectionTitle}>{labels.awards}</h2>
              <span className={styles.sectionSub}>{labels.awardsSub}</span>
            </div>
            <div className={styles.bottomCard}>
              <ul className={styles.awardsList}>
                {content.research.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
