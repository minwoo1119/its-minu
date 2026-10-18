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
      ko: 'C++/MFC 애플리케이션의 검사 로직과 ROI 기능을 수정하고 Win32 및 DLL 연동 작업을 수행했습니다.',
      en: 'Modified inspection logic and ROI features in C++/MFC applications and worked with Win32 and DLL integration.',
    },
    tools: ['C++', 'MFC', 'Windows', 'Win32', 'DLL'],
  },
  {
    index: '02',
    title: { ko: 'Debugging & Reliability', en: 'Debugging & Reliability' },
    description: {
      ko: '멀티스레드 처리 흐름과 로그를 추적하며 UI 프리징을 개선했고, 메모리 손상과 크래시 원인을 분석하고 있습니다.',
      en: 'Traced multithreaded execution and logs to address UI freezing and am currently investigating memory corruption and crashes.',
    },
    tools: ['Multithreading', 'Debugging', 'Log Analysis', 'Memory Diagnostics'],
  },
  {
    index: '03',
    title: { ko: 'Computer Vision & Inference', en: 'Computer Vision & Inference' },
    description: {
      ko: 'ROI와 영상 처리 기능을 구현하고 OpenCV 기반 분석, 이상 탐지 모델 비교와 추론 실험을 수행했습니다.',
      en: 'Implemented ROI and image-processing features and evaluated OpenCV-based analysis and anomaly-detection inference.',
    },
    tools: ['OpenCV', 'ROI', 'PatchCore', 'EfficientAD', 'TensorRT'],
  },
  {
    index: '04',
    title: { ko: 'Systems & Platform Integration', en: 'Systems & Platform Integration' },
    description: {
      ko: '설비 클라이언트와 서버 통신을 구현하고 Python·C#·React 기반 기능을 연동했습니다.',
      en: 'Implemented equipment client–server communication and integrated features across Python, C#, and React.',
    },
    tools: ['WebSocket', 'Python', 'C# / .NET', 'React', 'TypeScript'],
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
