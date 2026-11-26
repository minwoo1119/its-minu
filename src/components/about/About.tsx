import type { Language } from '../../i18n';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './about.module.scss';

interface AboutProps {
  language: Language;
}

const FOCUS_CONTENT = {
  ko: {
    title: '엔지니어링 집중 영역',
    description:
      '실제 장비와 운영 환경에서 동작하는 소프트웨어를 구현하며 실행 성능과 시스템 안정성을 개선하는 데 집중합니다.',
    pillars: [
      {
        title: 'C++ & Windows Inspection SW',
        detail:
          '기존 C++/MFC 검사 코드베이스를 분석해 양품조건 ROI 판정과 Variation 분리 로깅을 구현하고, 멀티스레드 결과 저장 안정성을 추적합니다.',
      },
      {
        title: 'Computer Vision & AI Inference',
        detail:
          'YOLO·Custom CNN·PaddleOCR 파이프라인의 ONNX Runtime·TensorRT 추론 최적화(300ms → 80ms)와 결함 분석·비지도 이상 탐지를 수행합니다.',
      },
      {
        title: 'Equipment IPC & AI Platforms',
        detail:
          'Python 설비 Client, WebSocket·Windows Named Pipe IPC, 원자적 모델 배포, C# DLL 연동, AI Experiment Lab과 로컬 RAG 시스템을 연결합니다.',
      },
    ],
  },
  en: {
    title: 'Engineering Focus',
    description:
      'Focused on building software that runs reliably in production systems—improving execution latency, runtime stability, and equipment integration.',
    pillars: [
      {
        title: 'C++ & Windows Inspection SW',
        detail:
          'Extending legacy C++/MFC inspection codebases with good-condition ROI logic and separated Variation logging while investigating multi-threaded stability.',
      },
      {
        title: 'Computer Vision & AI Inference',
        detail:
          'Optimizing YOLO, Custom CNN, and PaddleOCR pipelines via ONNX Runtime & TensorRT (300ms → 80ms), alongside defect analytics and visual anomaly detection.',
      },
      {
        title: 'Equipment IPC & AI Platforms',
        detail:
          'Connecting factory equipment and AI workflows via Python Clients, WebSocket/Named Pipe IPC, atomic model deployment, C# DLLs, and local RAG systems.',
      },
    ],
  },
};

export const About = ({ language }: AboutProps) => {
  const content = FOCUS_CONTENT[language];

  return (
    <section className={styles.wrapper} aria-labelledby='engineering-focus-title'>
      <div className={styles.container}>
        <SectionHeading
          id='engineering-focus-title'
          title={content.title}
          description={content.description}
          compact
        />

        <div className={styles.grid}>
          {content.pillars.map((pillar) => (
            <div key={pillar.title} className={styles.column}>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
