import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { tracksData, type TrackId } from '../../data/tracks';
import styles from './portal.module.scss';

interface PortalProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onSelectTrack: (trackId: TrackId) => void;
}

export const Portal = ({
  language,
  onLanguageChange,
  onSelectTrack,
}: PortalProps) => {
  const content =
    language === 'ko'
      ? {
          eyebrow: 'Portfolio Tracks',
          titlePrefix: '엔지니어 ',
          titleHighlight: '이민우',
          titleSuffix: '의 포트폴리오',
          description:
            '컴퓨터 비전, 모바일 앱 개발, 소프트웨어 엔지니어링 3개 전문 영역별 포트폴리오입니다. 확인하고자 하는 트랙을 선택해 주세요.',
          selectBtn: '포트폴리오 보기',
          projectCountSuffix: '개 프로젝트',
          blog: '블로그',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          email: 'minwoo1119@naver.com',
          copyright: '© 2026 Minwoo Lee. All rights reserved.',
        }
      : {
          eyebrow: 'Portfolio Tracks',
          titlePrefix: 'Portfolio of ',
          titleHighlight: 'Minwoo Lee',
          titleSuffix: '',
          description:
            'Explore engineering portfolios across 3 specialized domains: Computer Vision, Mobile App Development, and Software Engineering.',
          selectBtn: 'View Portfolio',
          projectCountSuffix: ' Projects',
          blog: 'Blog',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          email: 'minwoo1119@naver.com',
          copyright: '© 2026 Minwoo Lee. All rights reserved.',
        };

  const trackCards: {
    id: TrackId;
    highlights: { ko: string; en: string }[];
  }[] = [
    {
      id: 'computer-vision',
      highlights: [
        {
          ko: 'YOLO + TensorRT 80ms 추론 최적화 (-73%)',
          en: '73% TensorRT inference speedup (300ms → 80ms)',
        },
        {
          ko: 'CLAHE, Distance Transform, Watershed 영상 분할 & 정량 분석',
          en: 'CLAHE, Distance Transform & Watershed quantitative analysis',
        },
        {
          ko: 'C++ MFC & C# .NET 8 WPF(MVVM) 실시간 비전 아키텍처',
          en: 'Real-time vision software architecture in C++ MFC & C# WPF',
        },
      ],
    },
    {
      id: 'app-dev',
      highlights: [
        {
          ko: '금품타 : iOS / Android 양대 마켓 정식 출시 및 운영',
          en: 'Geumpumta: Shipped and operated on App Store & Google Play',
        },
        {
          ko: 'iOS Screen Time API & 교내 Wi-Fi IP 게이트웨이 인증',
          en: 'iOS Screen Time API & campus Wi-Fi IP verification',
        },
        {
          ko: 'Heartbeat 기반 무오차 백그라운드 타이머 & Riverpod MVVM',
          en: 'Zero-drift background timer & Riverpod MVVM architecture',
        },
      ],
    },
    {
      id: 'software-engineer',
      highlights: [
        {
          ko: 'React/TS 프론트엔드 + NestJS/FastAPI 백엔드 + Docker 풀스택',
          en: 'Full-stack development: React/TS + NestJS/FastAPI + Docker',
        },
        {
          ko: '대형 언어모델(LLM) SFT/DPO 정렬 연구 (2026 KIIT 금상 수상)',
          en: 'Published LLM DPO alignment research winning 2026 KIIT Gold',
        },
        {
          ko: 'TanStack Query 캐싱, Kakao Map 시각화 & 트랜잭션 동시성 제어',
          en: 'TanStack Query caching, Kakao Map clustering & ACID transactions',
        },
      ],
    },
  ];

  return (
    <div className={styles.portalContainer}>
      <header className={styles.topBar}>
        <div className={styles.dots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={styles.topActions}>
          <label className={styles.languageSelector}>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label='Select language'
            >
              <option value='ko'>한국어</option>
              <option value='en'>English</option>
            </select>
          </label>
          <a
            href='https://lmw1119.tistory.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.blogLink}
          >
            {content.blog}
          </a>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.eyebrow}>{content.eyebrow}</div>
        <h1 className={styles.mainTitle}>
          {content.titlePrefix}
          <span>{content.titleHighlight}</span>
          {content.titleSuffix}
        </h1>
        <p className={styles.description}>{content.description}</p>
      </section>

      <div className={styles.trackGrid}>
        {trackCards.map(({ id, highlights }) => {
          const track = tracksData[id];
          const projectCount = track.projects.items.length;

          return (
            <div
              key={id}
              className={styles.trackCard}
              onClick={() => onSelectTrack(id)}
              role='button'
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectTrack(id);
                }
              }}
            >
              <div className={styles.cardTop}>
                <div className={styles.badgeRow}>
                  <span className={styles.badge}>
                    {getText(language, track.badge)}
                  </span>
                  <span className={styles.projectCountPill}>
                    {projectCount}
                    {content.projectCountSuffix}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>
                  {getText(language, track.intro.role)}
                </h2>

                <p className={styles.cardDescription}>
                  {getText(language, track.portalDescription)}
                </p>

                <ul className={styles.highlightsList}>
                  {highlights.map((h, idx) => (
                    <li key={idx}>{getText(language, h)}</li>
                  ))}
                </ul>

                <div className={styles.tagList}>
                  {track.heroTags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.actionLink}>
                  {content.selectBtn} <span>→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <footer className={styles.footerSection}>
        <div className={styles.socialLinks}>
          <a
            href='https://github.com/minwoo1119'
            target='_blank'
            rel='noopener noreferrer'
          >
            {content.github}
          </a>
          <a
            href='https://www.linkedin.com/in/sksmsalsndi/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {content.linkedin}
          </a>
          <a
            href='https://lmw1119.tistory.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {content.blog}
          </a>
          <a href='mailto:minwoo1119@naver.com'>{content.email}</a>
        </div>
        <div className={styles.copyright}>{content.copyright}</div>
      </footer>
    </div>
  );
};
