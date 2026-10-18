import type { Language } from '../../i18n';
import styles from './coreExpertise.module.scss';

interface CoreExpertiseProps {
  language: Language;
}

const expertise = [
  {
    index: '01',
    title: { ko: 'Vision Software', en: 'Vision Software' },
    description: {
      ko: 'C++/MFC 기반 검사 흐름, ROI·판정 로직, OpenCV/HALCON 영상 처리',
      en: 'C++/MFC inspection flows, ROI and decision logic, OpenCV/HALCON image processing',
    },
    tools: ['C++', 'MFC', 'OpenCV', 'HALCON'],
  },
  {
    index: '02',
    title: { ko: 'Systems & Reliability', en: 'Systems & Reliability' },
    description: {
      ko: 'Windows 멀티스레딩, 레거시 코드 분석, 통신·메모리 문제 디버깅',
      en: 'Windows multithreading, legacy-code analysis, communication and memory debugging',
    },
    tools: ['Windows', 'Multithreading', 'Debugging', 'WebSocket'],
  },
  {
    index: '03',
    title: { ko: 'Platform & Analytics', en: 'Platform & Analytics' },
    description: {
      ko: '설비 Client, React 관리자 UI, 검사 로그 집계와 결함 분포 시각화',
      en: 'Equipment clients, React admin UI, inspection-log aggregation, and defect visualization',
    },
    tools: ['Python', 'React', 'TypeScript', 'C# / .NET'],
  },
  {
    index: '04',
    title: { ko: 'Applied Vision AI', en: 'Applied Vision AI' },
    description: {
      ko: '이상 탐지 구조 비교, ONNX/TensorRT 변환과 엣지 추론 실험',
      en: 'Anomaly-detection evaluation, ONNX/TensorRT conversion, and edge-inference experiments',
    },
    tools: ['PatchCore', 'EfficientAD', 'ONNX', 'TensorRT'],
  },
];

export const CoreExpertise = ({ language }: CoreExpertiseProps) => (
  <section className={styles.container} aria-labelledby='expertise-title'>
    <div className={styles.heading}>
      <div>
        <p>Core Expertise</p>
        <h2 id='expertise-title'>
          {language === 'ko' ? '문제를 끝까지 연결하는 기술' : 'Expertise across the full problem'}
        </h2>
      </div>
      <span>
        {language === 'ko'
          ? '도구 목록보다 실제로 연결해 온 엔지니어링 영역을 기준으로 정리했습니다.'
          : 'Grouped by the engineering responsibilities I connect in practice, rather than a wall of tool icons.'}
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
