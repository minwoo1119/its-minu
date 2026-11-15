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
      ko: 'C++/MFC 검사 프로그램의 양품조건 특수 ROI 판정과 LotResult 내 Variation 분리 로깅을 개발하고, Windows Named Pipe IPC 및 DLL 인터페이스를 구현했습니다.',
      en: 'Developed good-condition special ROI logic and separated Variation logging in LotResult for C++/MFC inspection software, and implemented Windows Named Pipe IPC and DLL interfaces.',
    },
    tools: ['C++', 'MFC', 'Windows', 'Named Pipe IPC', 'DLL'],
  },
  {
    index: '02',
    title: { ko: 'Debugging & System Reliability', en: 'Debugging & System Reliability' },
    description: {
      ko: '로그 표시 스레드 분리로 설비 Client UI 프리징을 해결하고, 모델 무결성 검증·원자적 교체·비정상 종료 후 복구 구현 및 결과 저장 스레드의 Heap Corruption 원인을 분석하고 있습니다.',
      en: 'Resolved Client UI freezing via thread isolation, implemented atomic model replacement and post-crash state recovery, and am investigating heap corruption in the result-saving thread.',
    },
    tools: ['Multithreading', 'Debugging', 'Heap Diagnostics', 'Session Recovery', 'Velopack'],
  },
  {
    index: '03',
    title: { ko: 'Computer Vision & AI Engineering', en: 'Computer Vision & AI Engineering' },
    description: {
      ko: 'C# 기반 HDBSCAN·2D Gaussian KDE 결함 분포·히트맵 엔진과 DINOv2·DINOv3·CNN Encoder 관리, 분류 Head 학습·평가, AI Experiment Lab 구축 및 PatchCore·EfficientAD 비교 연구를 수행했습니다.',
      en: 'Built a C# HDBSCAN & 2D Gaussian KDE defect analytics engine, DINOv2/DINOv3/CNN Encoder registry, classification head training, AI Experiment Lab, and PatchCore/EfficientAD evaluations.',
    },
    tools: ['DINOv2 / DINOv3', 'HDBSCAN / KDE', 'PatchCore', 'EfficientAD', 'OpenCV', 'TensorRT'],
  },
  {
    index: '04',
    title: { ko: 'Platform & Data Integration', en: 'Platform & Data Integration' },
    description: {
      ko: '관리자 웹, Python 설비 Client TUI, WebSocket·Heartbeat 통신, 최대 5GB 디스크 스트리밍 다운로드, Q-Log 재집계 통합 및 Excel·CSV 리포트 내보내기를 구현했습니다.',
      en: 'Implemented the Admin Web, Python Client TUI, WebSocket/Heartbeat communication, up to 5GB disk-streaming downloads, Q-Log reaggregation, and Excel/CSV report exports.',
    },
    tools: ['Python', 'C# / .NET', 'WebSocket', 'REST API', 'React / TypeScript'],
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
          ? '실무에서 직접 사용하거나 분석한 기술을 개발 업무 기준으로 정리했습니다.'
          : 'Technologies I have used or evaluated directly, organized by engineering responsibility.'}
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
