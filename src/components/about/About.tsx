import type { Language } from '../../i18n';
import styles from './about.module.scss';

interface AboutProps {
  language: Language;
}

const ABOUT_CONTENT = {
  ko: {
    title: 'About',
    lead: '실제 장비와 운영 환경에서 동작하는 소프트웨어를 구현하고, 성능과 안정성을 개선하는 엔지니어입니다.',
    description:
      '모델 실험이나 화면 구현에 머물지 않고, 영상 인식 파이프라인의 추론 지연 개선부터 C++/MFC 검사 소프트웨어 유지보수, 설비 간 IPC·배포 자동화, AI 실험 플랫폼 구축까지 시스템 단위로 문제를 해결해 왔습니다.',
    timeline: [
      {
        step: '01',
        phase: '학부연구생 · 영상 인식 및 추론 최적화',
        detail:
          'YOLO 객체 탐지, Custom CNN, PaddleOCR를 결합한 계측 영상 인식 파이프라인을 구현하고, ONNX Runtime과 TensorRT 최적화를 통해 실측 처리 시간을 300ms에서 80ms로 단축했습니다.',
      },
      {
        step: '02',
        phase: '현재 · C++/MFC 산업용 Vision 검사 SW 개발',
        detail:
          '산업용 머신비전 검사장비의 기존 C++/MFC 코드베이스를 분석해 양품조건 ROI 판정과 Variation 검사 결과 분리 로깅을 구현하고, 멀티스레드 결과 저장 구간의 메모리·안정성 이슈를 추적·개선하고 있습니다.',
      },
      {
        step: '03',
        phase: '확장 · 설비 Client, IPC, 모델 배포 및 AI 실험 플랫폼',
        detail:
          'Python 설비 Client TUI, WebSocket·Windows Named Pipe IPC, 무결성 검증·원자적 모델 교체, C# 결함 분석 엔진(DLL 연동)과 AI Experiment Lab을 개발하며 현장 설비와 AI 운영 워크플로를 연결했습니다.',
      },
    ],
  },
  en: {
    title: 'About',
    lead: 'I build software that runs in production systems, focusing on execution performance and runtime reliability.',
    description:
      'Rather than focusing solely on standalone model experiments or frontend screens, I work across the full engineering stack—from accelerating computer vision inference pipelines to maintaining C++/MFC inspection software, building equipment IPC and deployment tooling, and developing AI experimentation workflows.',
    timeline: [
      {
        step: '01',
        phase: 'Undergraduate Research · Vision Recognition & Inference Optimization',
        detail:
          'Built a measurement vision pipeline combining YOLO detection, a Custom CNN, and PaddleOCR, and optimized inference with ONNX Runtime and TensorRT to reduce measured latency from 300ms to 80ms.',
      },
      {
        step: '02',
        phase: 'Current · C++/MFC Industrial Vision Inspection Software',
        detail:
          'Analyzing and extending a production C++/MFC machine vision codebase—implementing good-condition ROI logic and separated Variation result logging, while investigating memory and multi-threaded stability issues in the result-saving path.',
      },
      {
        step: '03',
        phase: 'Systems · Equipment Client, IPC, Model Deployment & AI Platform',
        detail:
          'Developed a Python equipment Client TUI, WebSocket and Windows Named Pipe IPC, verified atomic model deployment, a C# defect analysis engine via DLL integration, and an AI Experiment Lab connecting factory machines with AI operations.',
      },
    ],
  },
};

export const About = ({ language }: AboutProps) => {
  const content = ABOUT_CONTENT[language];

  return (
    <section className={styles.container} aria-labelledby='about-section-title'>
      <div className={styles.header}>
        <h2 id='about-section-title' className={styles.title}>
          {content.title}
        </h2>
        <p className={styles.lead}>{content.lead}</p>
        <p className={styles.description}>{content.description}</p>
      </div>

      <ol className={styles.timeline}>
        {content.timeline.map((item) => (
          <li key={item.step} className={styles.timelineItem}>
            <span className={styles.step}>{item.step}</span>
            <div className={styles.itemBody}>
              <h3>{item.phase}</h3>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
