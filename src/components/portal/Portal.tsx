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
  const isKo = language === 'ko';

  const content = isKo
    ? {
        eyebrow: 'Computer Vision & C++ Software Engineer',
        titlePrefix: 'C++로 현실의 Vision System을 만드는 ',
        titleHighlight: 'Software Engineer, 이민우',
        titleSuffix: '입니다.',
        description:
          '산업용 비전 검사장비의 C++/MFC 소프트웨어를 개발하며 Computer Vision, Image Processing, Edge AI로 전문성을 확장하고 있습니다.',
        heroTags: [
          'C++',
          'Computer Vision',
          'Industrial Vision',
          'OpenCV',
          'Edge AI',
        ],
        viewVisionBtn: 'Vision 포트폴리오 보기',
        blog: '블로그',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'minwoo1119@naver.com',
        previousHeading: '이전 소프트웨어 개발 프로젝트',
        previousDesc:
          '실제 사용자에게 배포·운영한 모바일 앱 및 풀스택 웹 개발 경험입니다.',
        awardsHeading: '수상 및 학술 활동',
        selectBtn: '포트폴리오 보기',
        projectCountSuffix: '개 프로젝트',
        awards: [
          {
            date: '2026.05',
            title:
              '2026 한국정보기술학회(KIIT) 하계 학술대회 대학생 논문경진대회 금상',
            desc: 'DPO(Direct Preference Optimization) 기반 소형 언어 모델의 한국어 정렬 성능 최적화 연구',
          },
          {
            date: '2025.11',
            title:
              '2025 한국정보기술학회(KIIT) 추계 학술대회 대학생 논문경진대회 은상',
            desc: '저속노화 건강 정보 특화 데이터셋 구축 및 경량 언어 모델 파인튜닝 연구',
          },
          {
            date: '2025.04',
            title: 'App Store & Google Play 모바일 앱 정식 출시 및 서비스 운영',
            desc: '금품타(Geumpumta) 모바일 서비스 출시 및 실제 유저 피드백 기반 지속 개선',
          },
        ],
        copyright: '© 2026 Minwoo Lee. All rights reserved.',
      }
    : {
        eyebrow: 'Computer Vision & C++ Software Engineer',
        titlePrefix: 'Building Real-World Vision Systems in C++, ',
        titleHighlight: 'Minwoo Lee',
        titleSuffix: '',
        description:
          'Developing C++/MFC software for industrial vision inspection equipment, with experience expanding into Computer Vision, Image Processing, and Edge AI.',
        heroTags: [
          'C++',
          'Computer Vision',
          'Industrial Vision',
          'OpenCV',
          'Edge AI',
        ],
        viewVisionBtn: 'View Vision Portfolio',
        blog: 'Blog',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'minwoo1119@naver.com',
        previousHeading: 'Previous Software Projects',
        previousDesc:
          'Proven software engineering background with mobile apps and full-stack web platforms shipped to real users.',
        awardsHeading: 'Awards & Research',
        selectBtn: 'View Portfolio',
        projectCountSuffix: ' Projects',
        awards: [
          {
            date: '2026.05',
            title:
              '2026 KIIT Summer Conference Paper Competition - Gold Prize',
            desc: 'Research on Korean alignment performance optimization for SLMs based on DPO',
          },
          {
            date: '2025.11',
            title:
              '2025 KIIT Fall Conference Paper Competition - Silver Prize',
            desc: 'Domain-specific healthcare dataset curation and lightweight SLM fine-tuning',
          },
          {
            date: '2025.04',
            title: 'App Store & Google Play Official Market Release',
            desc: 'Geumpumta mobile application release and iterative operational improvement',
          },
        ],
        copyright: '© 2026 Minwoo Lee. All rights reserved.',
      };

  const primaryHighlights = [
    {
      ko: '산업용 비전 검사장비 C++/MFC 실시간 검사 소프트웨어 개발 (Synapse Imaging)',
      en: 'Production C++/MFC industrial vision inspection software engineering (Synapse Imaging)',
    },
    {
      ko: 'Industrial Anomaly Detection on Edge (PatchCore · TensorRT INT8 · Jetson Orin Nano · 14ms 추론)',
      en: 'Edge anomaly detection with PatchCore, TensorRT INT8 quantization, and 14ms inference on Jetson',
    },
    {
      ko: 'Micro-pipette Vision System (YOLO + OCR + TensorRT C++ 가속 · 300ms → 80ms, -73%)',
      en: 'Micro-pipette detection and OCR accelerated via TensorRT (300ms → 80ms, 73% speedup)',
    },
    {
      ko: 'SEM Particle Analyzer (OpenCV Watershed · 거리 변환 · Feret Diameter 정량 계측)',
      en: 'SEM Particle quantitative analysis using OpenCV Watershed, distance transform, and Feret diameter',
    },
    {
      ko: 'Real-time 7-Segment Vision (C++ / MFC / OpenCV 고속 영상 스트림 판독)',
      en: 'High-speed digital readout pipeline in C++ MFC and OpenCV',
    },
  ];

  const secondaryHighlights = [
    {
      ko: 'Next.js 14 + FastAPI + Qdrant 100% 온프레미스 RAG 지식 검색 플랫폼 (dograc)',
      en: '100% on-premise enterprise RAG platform with Next.js 14 & Qdrant (dograc)',
    },
    {
      ko: 'Ubuntu Server 24.04 LTS + Docker + Ollama Gemma 기반 AI 서빙 마이크로서비스 (ChwieolUp-AI)',
      en: 'Ollama AI microservice deployed on Ubuntu Server 24.04 LTS & Docker (ChwieolUp-AI)',
    },
    {
      ko: '대형 언어모델(LLM) SFT/DPO 정렬 연구 (2026 한국정보기술학회 KIIT 하계 학술대회 금상 수상)',
      en: 'Published LLM DPO alignment research winning 2026 KIIT Gold Prize',
    },
  ];

  const previousCards: {
    id: TrackId;
    highlights: { ko: string; en: string }[];
  }[] = [
    {
      id: 'app-dev',
      highlights: [
        {
          ko: '금품타 : iOS / Android 양대 마켓 정식 출시 및 실제 사용자 대상 운영',
          en: 'Geumpumta: Shipped and operated on App Store & Google Play',
        },
        {
          ko: 'iOS Screen Time API 연동 및 교내 Wi-Fi IP 게이트웨이 인증 로직 설계',
          en: 'iOS Screen Time API & campus Wi-Fi IP verification logic',
        },
        {
          ko: 'Heartbeat 기반 무오차 백그라운드 타이머 & Riverpod MVVM 아키텍처',
          en: 'Zero-drift background timer & Riverpod MVVM architecture',
        },
      ],
    },
    {
      id: 'software-engineer',
      highlights: [
        {
          ko: 'React / TS + NestJS / FastAPI + PostgreSQL + Docker 풀스택 시스템 구축',
          en: 'Full-stack systems built with React/TS, NestJS/FastAPI, and Docker',
        },
        {
          ko: 'JWT 분산 인증 및 확장 가능한 RESTful API 아키텍처 설계',
          en: 'Designed scalable RESTful APIs with distributed authentication',
        },
        {
          ko: 'TanStack Query 기반 비동기 상태 관리 및 캐싱 최적화',
          en: 'Async state management and caching optimization via TanStack Query',
        },
      ],
    },
  ];

  const primaryTrack = tracksData['computer-vision'];
  const secondaryTrack = tracksData['ai-service-engineer'];

  return (
    <div className={styles.portalContainer}>
      {/* Top Bar */}
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

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.eyebrow}>{content.eyebrow}</div>
        <h1 className={styles.mainTitle}>
          {content.titlePrefix}
          <span>{content.titleHighlight}</span>
          {content.titleSuffix}
        </h1>
        <p className={styles.description}>{content.description}</p>

        <div className={styles.heroTags}>
          {content.heroTags.map((tag) => (
            <span key={tag} className={styles.heroTag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.heroCtaRow}>
          <button
            type='button'
            className={styles.primaryBtn}
            onClick={() => onSelectTrack('computer-vision')}
          >
            {content.viewVisionBtn} →
          </button>
          <a
            href='https://github.com/minwoo1119'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondaryBtn}
          >
            {content.github}
          </a>
          <a
            href='https://lmw1119.tistory.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondaryBtn}
          >
            {content.blog}
          </a>
          <a
            href='https://www.linkedin.com/in/sksmsalsndi/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondaryBtn}
          >
            {content.linkedin}
          </a>
        </div>
      </section>

      {/* 1. Primary Track (Computer Vision & C++) */}
      <div className={styles.featuredTrackGrid}>
        <div
          className={styles.trackCard}
          onClick={() => onSelectTrack('computer-vision')}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectTrack('computer-vision');
            }
          }}
        >
          <div className={styles.cardTop}>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                {getText(language, primaryTrack.badge)}
              </span>
              <span className={styles.projectCountPill}>
                {primaryTrack.projects.items.length}
                {content.projectCountSuffix}
              </span>
            </div>

            <h2 className={styles.cardTitle}>
              {getText(language, primaryTrack.intro.role)}
            </h2>

            <p className={styles.cardDescription}>
              {getText(language, primaryTrack.portalDescription)}
            </p>

            <ul className={styles.highlightsList}>
              {primaryHighlights.map((h, idx) => (
                <li key={idx}>{getText(language, h)}</li>
              ))}
            </ul>

            <div className={styles.tagList}>
              {primaryTrack.heroTags.map((tag) => (
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
      </div>

      {/* 2. Secondary Track (AI Systems) */}
      <div className={styles.featuredTrackGrid}>
        <div
          className={styles.trackCard}
          onClick={() => onSelectTrack('ai-service-engineer')}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectTrack('ai-service-engineer');
            }
          }}
        >
          <div className={styles.cardTop}>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                {getText(language, secondaryTrack.badge)}
              </span>
              <span className={styles.projectCountPill}>
                {secondaryTrack.projects.items.length}
                {content.projectCountSuffix}
              </span>
            </div>

            <h2 className={styles.cardTitle}>
              {getText(language, secondaryTrack.intro.role)}
            </h2>

            <p className={styles.cardDescription}>
              {getText(language, secondaryTrack.portalDescription)}
            </p>

            <ul className={styles.highlightsList}>
              {secondaryHighlights.map((h, idx) => (
                <li key={idx}>{getText(language, h)}</li>
              ))}
            </ul>

            <div className={styles.tagList}>
              {secondaryTrack.heroTags.map((tag) => (
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
      </div>

      {/* 3. Previous Software Projects */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{content.previousHeading}</h2>
        <p className={styles.sectionDesc}>{content.previousDesc}</p>
      </div>

      <div className={styles.trackGrid}>
        {previousCards.map(({ id, highlights }) => {
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

      {/* 4. Awards & Research */}
      <section className={styles.awardsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{content.awardsHeading}</h2>
        </div>
        <div className={styles.awardsList}>
          {content.awards.map((award, idx) => (
            <div key={idx} className={styles.awardItem}>
              <span className={styles.awardDate}>{award.date}</span>
              <div>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <p className={styles.awardDesc}>{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
