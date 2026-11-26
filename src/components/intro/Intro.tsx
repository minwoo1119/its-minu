import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';
import styles from './intro.module.scss';

interface IntroProps {
  language: Language;
  trackData: TrackData;
  onProjectsClick?: () => void;
  onPdfClick?: () => void;
}

const PROFILE_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/minwoo1119',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sksmsalsndi/',
    external: true,
  },
  {
    label: 'minwoo1119@naver.com',
    href: 'mailto:minwoo1119@naver.com',
    external: false,
  },
];

const HERO_METRICS = {
  ko: [
    {
      label: '현재 직무',
      value: 'Vision SW R&D Engineer',
      detail: '시냅스이미징 · C++/MFC 검사 SW & 플랫폼 (2026.07~)',
    },
    {
      label: '실측 추론 최적화',
      value: '300ms → 80ms (-73.3%)',
      detail: 'YOLO · Custom CNN · PaddleOCR · ONNX / TensorRT',
    },
    {
      label: '연구 및 수상',
      value: 'KIIT Gold · Silver · KCI',
      detail: '한국정보기술학회 2년 연속 수상 및 KCI 등재 논문',
    },
  ],
  en: [
    {
      label: 'Current Role',
      value: 'Vision SW R&D Engineer',
      detail: 'Synapse Imaging · C++/MFC Inspection SW & Platform',
    },
    {
      label: 'Measured Inference',
      value: '300ms → 80ms (-73.3%)',
      detail: 'YOLO · Custom CNN · PaddleOCR · ONNX / TensorRT',
    },
    {
      label: 'Research & Honors',
      value: 'KIIT Gold · Silver · KCI',
      detail: 'Consecutive KIIT Paper Awards & KCI Journal Publication',
    },
  ],
};

export const Intro = ({
  language,
  trackData,
  onProjectsClick,
  onPdfClick,
}: IntroProps) => {
  const { intro } = trackData;
  const isVisionTrack = trackData.id === 'computer-vision';
  const metrics = HERO_METRICS[language];

  return (
    <section className={styles.wrapper} aria-label='Introduction'>
      <div className={styles.container}>
        <p className={styles.positioning}>
          {isVisionTrack
            ? 'C++ Software Engineer · Computer Vision · Systems Engineering'
            : getText(language, trackData.badge)}
        </p>

        <h1 className={styles.title}>
          {getText(language, intro.title)}
          {getText(language, intro.role) && (
            <span>{getText(language, intro.role)}</span>
          )}
          {getText(language, intro.name)}
        </h1>

        <p className={styles.sub}>{getText(language, intro.sub)}</p>

        <div className={styles.actionsRow}>
          {onProjectsClick && (
            <button
              type='button'
              className={styles.primaryCta}
              onClick={onProjectsClick}
            >
              {language === 'ko' ? '핵심 프로젝트 보기 →' : 'View Core Projects →'}
            </button>
          )}
          {onPdfClick && (
            <button
              type='button'
              className={styles.secondaryCta}
              onClick={onPdfClick}
            >
              {language === 'ko' ? '이력서 PDF' : 'Resume PDF'}
            </button>
          )}

          <nav className={styles.profileLinks} aria-label='Profile links'>
            {PROFILE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {isVisionTrack && (
          <dl className={styles.metricsStrip} aria-label='Key highlights'>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCell}>
                <dt className={styles.metricLabel}>{metric.label}</dt>
                <dd className={styles.metricValue}>{metric.value}</dd>
                <dd className={styles.metricDetail}>{metric.detail}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
};
