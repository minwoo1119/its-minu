import type { Language } from '../../i18n';
import styles from './coreExpertise.module.scss';

interface CoreExpertiseProps {
  language: Language;
}

const expertise = [
  {
    index: '01',
    title: { ko: 'C++ & Windows Development', en: 'C++ & Windows Development' },
    description: {
      ko: 'C++/MFC 기반 산업용 Vision 검사 소프트웨어의 ROI 판정 로직과 결과 로깅 구조를 개발하고, Windows Named Pipe IPC 및 DLL 인터페이스를 연동했습니다.',
      en: 'Developed ROI decision logic and separated result logging in C++/MFC industrial vision inspection software, and implemented Windows Named Pipe IPC and DLL interfaces.',
    },
    tools: ['C++', 'MFC', 'Windows', 'Named Pipe IPC', 'DLL'],
  },
  {
    index: '02',
    title: { ko: 'Debugging & System Reliability', en: 'Debugging & System Reliability' },
    description: {
      ko: '로그 표시 스레드 분리로 설비 Client UI 프리징을 해결하고, 모델 무결성 검증·원자적 교체·장애 복구를 구현했으며, 멀티스레드 결과 저장 구간의 Heap Corruption 원인을 분석하고 있습니다.',
      en: 'Resolved Client UI freezing via thread separation, implemented verified atomic model deployment and recovery, and am investigating heap corruption in multi-threaded result saving.',
    },
    tools: ['Multithreading', 'Debugging', 'Heap Diagnostics', 'Crash Recovery'],
  },
  {
    index: '03',
    title: { ko: 'Computer Vision & AI Inference', en: 'Computer Vision & AI Inference' },
    description: {
      ko: 'YOLO·Custom CNN·PaddleOCR 파이프라인의 ONNX Runtime·TensorRT 추론 최적화(300ms → 80ms)와 C# 기반 HDBSCAN·Gaussian KDE 결함 분석, PatchCore·EfficientAD 이상 탐지 검토를 수행했습니다.',
      en: 'Optimized YOLO/CNN/PaddleOCR inference via ONNX Runtime & TensorRT (300ms to 80ms), built C# HDBSCAN/Gaussian KDE defect analytics, and worked on PatchCore/EfficientAD anomaly detection.',
    },
    tools: ['OpenCV', 'ONNX Runtime', 'TensorRT', 'HDBSCAN / KDE', 'PatchCore'],
  },
  {
    index: '04',
    title: { ko: 'Systems & AI Platform Integration', en: 'Systems & AI Platform Integration' },
    description: {
      ko: '관리자 웹, Python 설비 Client TUI, WebSocket 통신, 대용량 파일 스트리밍, DINOv2·DINOv3 기반 AI Experiment Lab 및 로컬 RAG 서비스 런처·스토리지 폴백을 구현했습니다.',
      en: 'Built Admin Web, Python Client TUI, WebSocket communication, large-file streaming, DINOv2/DINOv3 AI Experiment Lab, and local RAG service launcher with storage fallback.',
    },
    tools: ['Python', 'C#', 'WebSocket', 'REST API', 'FastAPI'],
  },
];

export const CoreExpertise = ({ language }: CoreExpertiseProps) => (
  <section className={styles.container} aria-labelledby='expertise-title'>
    <div className={styles.heading}>
      <div>
        <h2 id='expertise-title'>
          {language === 'ko' ? '핵심 기술 역량' : 'Core Technical Skills'}
        </h2>
      </div>
      <span>
        {language === 'ko'
          ? '실무와 선별 프로젝트에서 직접 구현하거나 분석한 기술을 중심으로 정리했습니다.'
          : 'Core engineering technologies directly implemented or investigated across production and selected projects.'}
      </span>
    </div>
    <div className={styles.list}>
      {expertise.map((item) => (
        <article key={item.index}>
          <span className={styles.index}>{item.index}</span>
          <div>
            <h3>{item.title[language]}</h3>
            <p>{item.description[language]}</p>
          </div>
          <ul>
            {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
