import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import { tracksData, type TrackId } from '../../data/tracks';
import { awardsData } from '../../data/awards';
import { Header } from '../header/Header';
import { Footer } from '../Footer/Footer';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './portal.module.scss';

interface PortalProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onSelectTrack: (trackId: TrackId) => void;
  onArchiveClick?: () => void;
}

const PRIMARY_HIGHLIGHTS = {
  ko: [
    '시냅스이미징(Synapse Imaging) — C++/MFC 산업용 Vision 검사 SW 개발 및 안정화',
    'Industrial Vision Intelligence Platform — Monitoring · Teaching · Engineering 및 설비 IPC 연동',
    'Micro-Pipette Detection & OCR — ONNX Runtime · TensorRT 최적화 (300ms → 80ms, -73.3%)',
    'PatchCore Visual Anomaly Detection (진행 중) & Offline RAG Platform (2026.07~2026.10)',
  ],
  en: [
    'Synapse Imaging — C++/MFC Industrial Vision Inspection SW Development & Reliability',
    'Industrial Vision Intelligence Platform — Monitoring, Teaching, Engineering & Equipment IPC',
    'Micro-Pipette Detection & OCR — ONNX Runtime & TensorRT Optimization (300ms → 80ms, -73.3%)',
    'PatchCore Visual Anomaly Detection (In Progress) & Offline RAG Platform (2026.07–2026.10)',
  ],
};

const SECONDARY_TRACKS: {
  id: TrackId;
  eyebrow: { ko: string; en: string };
  highlights: { ko: string; en: string }[];
}[] = [
  {
    id: 'ai-service-engineer',
    eyebrow: { ko: 'AI Systems', en: 'AI Systems' },
    highlights: [
      {
        ko: 'Offline RAG Platform (dograc) — FastAPI · 로컬 LLM · Windows 런처 · 스토리지 폴백',
        en: 'Offline RAG Platform (dograc) — FastAPI, Local LLM, Windows Launcher & Storage Fallback',
      },
      {
        ko: 'ChwieolUp-AI — Ubuntu Server · Docker · Ollama AI 서빙 마이크로서비스',
        en: 'ChwieolUp-AI — Ollama AI Microservice on Ubuntu Server & Docker',
      },
      {
        ko: 'Gemma SFT / DPO 정렬 연구 — KIIT 2026 금상 · 2025 은상 수상',
        en: 'Gemma SFT/DPO Alignment Research — KIIT 2026 Gold & 2025 Silver Awards',
      },
    ],
  },
  {
    id: 'app-dev',
    eyebrow: { ko: 'Mobile Apps', en: 'Mobile Apps' },
    highlights: [
      {
        ko: '예상(Yesang) · 사상(SaSang) · 금품타 — App Store & Google Play 출시 경험',
        en: 'Yesang, SaSang & Geumpumta — Shipped to App Store & Google Play',
      },
      {
        ko: 'Flutter(Riverpod) & React Native(Expo · Zustand · Reanimated) 크로스플랫폼 구현',
        en: 'Cross-platform architecture in Flutter (Riverpod) & React Native (Expo/Zustand)',
      },
      {
        ko: 'KCI 등재 학술지 논문 게재 (Chirp-aid 모바일 투명성 연구)',
        en: 'Published in KCI-indexed journal (Chirp-aid mobile transparency architecture)',
      },
    ],
  },
  {
    id: 'software-engineer',
    eyebrow: { ko: 'Web & Full-Stack', en: 'Web & Full-Stack' },
    highlights: [
      {
        ko: 'React / TypeScript 프론트엔드 및 NestJS / FastAPI 백엔드 시스템 구축',
        en: 'React/TypeScript frontends paired with NestJS/FastAPI backend services',
      },
      {
        ko: 'PostgreSQL / MySQL 데이터 모델링, Docker 컨테이너 구성 및 API 연동',
        en: 'Relational modeling (PostgreSQL/MySQL), Docker setups & REST API integration',
      },
      {
        ko: 'JobForeigner · JoinUs · Babzip 등 웹 서비스 설계·구현',
        en: 'End-to-end web delivery across JobForeigner, JoinUs & Babzip',
      },
    ],
  },
];

export const Portal = ({
  language,
  onLanguageChange,
  onSelectTrack,
  onArchiveClick,
}: PortalProps) => {
  const isKo = language === 'ko';
  const primaryTrack = tracksData['computer-vision'];

  return (
    <div className={styles.page}>
      <Header
        language={language}
        onLanguageChange={onLanguageChange}
        onLogoClick={() => onSelectTrack('computer-vision')}
        onArchiveClick={onArchiveClick}
      />

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            Portfolio Track Portal · C++ / Computer Vision / Systems Engineering
          </p>
          <h1>
            {isKo
              ? '직무 영역별 포트폴리오를 선택해 확인하세요.'
              : 'Explore engineering tracks by domain.'}
          </h1>
          <p className={styles.lead}>
            {isKo
              ? '핵심 전문 분야인 C++ · Computer Vision · Systems Engineering을 중심으로, 확장 영역인 AI Systems, Mobile, Full-Stack 트랙을 별도로 정리했습니다.'
              : 'Centered on C++, Computer Vision, and Systems Engineering as the primary focus, with supporting tracks across AI Systems, Mobile, and Full-Stack development.'}
          </p>
          <div className={styles.ctaRow}>
            <button
              type='button'
              className={styles.primaryCta}
              onClick={() => onSelectTrack('computer-vision')}
            >
              {isKo
                ? '메인 포트폴리오 열기 (C++ / Vision / Systems) →'
                : 'Open Primary Portfolio (C++ / Vision / Systems) →'}
            </button>
            {onArchiveClick && (
              <button
                type='button'
                className={styles.secondaryCta}
                onClick={onArchiveClick}
              >
                {isKo ? '전체 프로젝트 아카이브' : 'Project Archive'}
              </button>
            )}
          </div>
        </section>

        {/* Primary Track */}
        <section className={styles.section}>
          <SectionHeading
            eyebrow='Primary Track'
            title={
              isKo
                ? 'C++ Software Engineer · Computer Vision · Systems'
                : 'C++ Software Engineer · Computer Vision · Systems'
            }
            compact
          />

          <article
            className={styles.primaryCard}
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
            <div className={styles.primaryBody}>
              <div className={styles.cardMeta}>
                <span className={styles.primaryBadge}>PRIMARY</span>
                <span className={styles.metaCount}>
                  {isKo ? '실무 2 + 핵심 3 프로젝트' : '2 Professional + 3 Core Projects'}
                </span>
              </div>

              <h3 className={styles.cardTitle}>
                {isKo
                  ? '산업용 Vision 검사 SW, AI 추론 최적화 및 시스템 연동'
                  : 'Industrial Vision Software, AI Inference & Systems Integration'}
              </h3>

              <p className={styles.cardDesc}>
                {getText(language, primaryTrack.intro.sub)}
              </p>

              <ul className={styles.highlightList}>
                {PRIMARY_HIGHLIGHTS[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.tagRow}>
                {['C++', 'MFC', 'Windows IPC', 'OpenCV', 'ONNX / TensorRT', 'Python'].map(
                  (tag) => (
                    <span key={tag}>{tag}</span>
                  )
                )}
              </div>
              <span className={styles.openCue}>
                {isKo ? '트랙 열기 →' : 'Open Track →'}
              </span>
            </div>
          </article>
        </section>

        {/* Secondary Specializations */}
        <section className={styles.section}>
          <SectionHeading
            eyebrow='Secondary Specializations'
            title={isKo ? '보조 전문 분야 트랙' : 'Secondary Specializations'}
            description={
              isKo
                ? '시스템 엔지니어링 역량을 확장하며 수행한 AI 시스템, 모바일 앱, 웹·풀스택 트랙입니다.'
                : 'Supporting engineering tracks covering AI serving systems, mobile applications, and full-stack web software.'
            }
            compact
          />

          <div className={styles.secondaryGrid}>
            {SECONDARY_TRACKS.map(({ id, eyebrow, highlights }) => {
              const track = tracksData[id];
              return (
                <article
                  key={id}
                  className={styles.secondaryCard}
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
                  <div className={styles.secondaryBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.secondaryBadge}>
                        {getText(language, eyebrow)}
                      </span>
                      <span className={styles.metaCount}>
                        {track.projects.items.length}
                        {isKo ? '개 프로젝트' : ' projects'}
                      </span>
                    </div>

                    <h3 className={styles.secondaryTitle}>
                      {getText(language, track.intro.role)}
                    </h3>

                    <p className={styles.secondaryDesc}>
                      {getText(language, track.portalDescription)}
                    </p>

                    <ul className={styles.compactList}>
                      {highlights.map((item) => (
                        <li key={item.en}>{getText(language, item)}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.tagRow}>
                      {track.heroTags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className={styles.openCue}>
                      {isKo ? '열기 →' : 'Open →'}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Honors & Research */}
        <section className={styles.section}>
          <SectionHeading
            eyebrow='Honors & Research'
            title={isKo ? '주요 수상 및 연구' : 'Honors & Research'}
            compact
          />
          <ol className={styles.awardsList}>
            {awardsData.map((award) => (
              <li key={award.id} className={styles.awardItem}>
                <span className={styles.awardDate}>{award.date}</span>
                <div>
                  <strong>{getText(language, award.title)}</strong>
                  <p>{getText(language, award.subtitle)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer
        language={language}
        onProjectsClick={() => onSelectTrack('computer-vision')}
        onArchiveClick={onArchiveClick}
      />
    </div>
  );
};
