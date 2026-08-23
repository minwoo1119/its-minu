import type { Language } from '../../i18n';
import styles from './printableResume.module.scss';

interface PrintableResumeProps {
  language: Language;
}

const koContent = {
  name: '이민우',
  role: 'Computer Vision & Image Processing Engineer',
  bio: '전통적 영상처리 알고리즘과 최신 AI/딥러닝을 결합하여 산업용 비전 검사 시스템 및 고성능 정량 분석 솔루션을 구축하는 컴퓨터비전 엔지니어입니다.',
  summary: [
    'C++ MFC 및 C# .NET WPF(MVVM) 기반 실시간 비전 시스템 아키텍처와 OpenCV Mat 자원 관리 경험',
    'Watershed, Distance Transform, Morphology, CLAHE 기반 정밀 이미지 분할 및 형상 정량 분석 파이프라인 설계',
    'YOLO, Custom CNN, LightSVTR 모델 학습 및 ONNX Runtime/TensorRT 엔진 최적화 경험',
    '웹, 앱, LLM 경험을 비전 솔루션을 지탱하는 풀스택 소프트웨어 엔지니어링 역량으로 활용',
  ],
  skills: [
    {
      title: 'Computer Vision & AI',
      items: 'OpenCV, OpenCvSharp, HALCON, TensorRT, ONNX Runtime, YOLO, PyTorch, C++ CUDA',
    },
    {
      title: 'Vision SW Engineering',
      items: 'C++ MFC, C# .NET 8 WPF, MVVM, Async/CancellationToken, Clean Architecture, Memory Management',
    },
    {
      title: 'Supplementary Engineering',
      items: 'Python, FastAPI, Docker, React, TypeScript, Flutter',
    },
  ],
  projects: [
    {
      title: 'Micro-pipette Detection & Hybrid OCR System',
      role: 'AI & Vision Engineer',
      tech: 'YOLO & Custom CNN, TensorRT, ONNX Runtime, PaddleOCR / CTC Decoding, C++ / CUDA',
      bullets: [
        '마이크로 피펫 객체 탐지 및 OCR을 위한 YOLO, Custom CNN, PaddleOCR 하이브리드 모델 구축',
        '데이터 수집, 모델 학습, ONNX Runtime 및 TensorRT FP16/INT8 엔진 변환 파이프라인 수행',
        'TensorRT 최적화로 추론 지연 시간 73% 감소(300ms -> 80ms)',
      ],
    },
    {
      title: 'SEM Particle Analyzer',
      role: 'Vision Software Developer',
      tech: 'OpenCvSharp / OpenCV, C# .NET 8 WPF, Distance Transform & Watershed, Calibration, xUnit',
      bullets: [
        'SEM 미세입자 자동 검출 및 형상 정량 분석 WPF 데스크톱 애플리케이션 개발',
        'CLAHE, adaptive threshold, Distance Transform, Watershed 기반 접촉 입자 분리 파이프라인 구축',
        '면적, 둘레, Feret 직경, Circularity 등 calibration 기반 형상 지표 산출 및 34개 단위 테스트 검증',
      ],
    },
    {
      title: 'Video-based 7-Segment OCR System',
      role: 'Vision & AI Developer',
      tech: 'LightSVTR, ONNX Runtime, OpenCvSharp, Time-Series Calibration, Clean Architecture',
      bullets: [
        'LightSVTR 모델 연동, ONNX Runtime 추론, CTC Greedy Decoding 후처리 구현',
        'ROI 영상 프레임 처리와 인접 프레임 재분석 기반 시간축 이상치 보정 알고리즘 개발',
        'Domain/Application/Infrastructure/UI 계층 분리 및 모델 교체형 Factory 패턴 설계',
      ],
    },
    {
      title: 'Q-Log Analyzer & Vision System Utilities',
      role: 'Vision SW Researcher',
      tech: 'C# WPF, Regex Parsing, IQR Filtering, C++ MFC, Data Visualization',
      bullets: [
        '정규표현식 파싱과 IQR 이상치 제거로 장비 수율, 불량 패턴, 알고리즘 처리 시간 분석 도구 개발',
        '실시간 카메라 제어, ROI 설정, Lot Variation 데이터 로깅을 위한 C++ MFC 모듈 개발 및 유지보수',
      ],
    },
  ],
  research: [
    'Instruction-Tuned 언어모델에서 DPO의 효과와 한계에 대한 실험적 분석',
    '2026 한국정보기술학회 하계 학술대회 금상',
    '2025 한국정보기술학회 추계 학술대회 은상',
    'LG Aimers AI 과정 수료',
  ],
};

const enContent = {
  name: 'Minwoo Lee',
  role: 'Computer Vision & Image Processing Engineer',
  bio: 'Computer vision engineer building industrial inspection systems and high-performance quantitative analysis solutions by combining classical image processing with modern AI and deep learning.',
  summary: [
    'Real-time vision system architecture with C++ MFC and C# .NET WPF(MVVM), including OpenCV Mat lifecycle management',
    'Precise image segmentation and quantitative shape-analysis pipelines using watershed, distance transform, morphology, and CLAHE',
    'YOLO, custom CNN, and LightSVTR training with ONNX Runtime and TensorRT engine optimization',
    'Full-stack, mobile, and LLM experience used as a software foundation for extending vision solutions',
  ],
  skills: [
    {
      title: 'Computer Vision & AI',
      items: 'OpenCV, OpenCvSharp, HALCON, TensorRT, ONNX Runtime, YOLO, PyTorch, C++ CUDA',
    },
    {
      title: 'Vision SW Engineering',
      items: 'C++ MFC, C# .NET 8 WPF, MVVM, Async/CancellationToken, Clean Architecture, Memory Management',
    },
    {
      title: 'Supplementary Engineering',
      items: 'Python, FastAPI, Docker, React, TypeScript, Flutter',
    },
  ],
  projects: [
    {
      title: 'Micro-pipette Detection & Hybrid OCR System',
      role: 'AI & Vision Engineer',
      tech: 'YOLO & Custom CNN, TensorRT, ONNX Runtime, PaddleOCR / CTC Decoding, C++ / CUDA',
      bullets: [
        'Built a hybrid YOLO, custom CNN, and PaddleOCR model for micro-pipette object detection and OCR',
        'Handled data collection, model training, ONNX Runtime integration, and TensorRT FP16/INT8 engine conversion',
        'Reduced inference latency by 73%, from 300ms to 80ms, through TensorRT optimization',
      ],
    },
    {
      title: 'SEM Particle Analyzer',
      role: 'Vision Software Developer',
      tech: 'OpenCvSharp / OpenCV, C# .NET 8 WPF, Distance Transform & Watershed, Calibration, xUnit',
      bullets: [
        'Developed a WPF desktop application for SEM particle detection and quantitative shape analysis',
        'Built a touching-particle separation pipeline using CLAHE, adaptive thresholding, distance transform, and watershed',
        'Computed calibrated metrics including area, perimeter, Feret diameter, and circularity, verified by 34 unit tests',
      ],
    },
    {
      title: 'Video-based 7-Segment OCR System',
      role: 'Vision & AI Developer',
      tech: 'LightSVTR, ONNX Runtime, OpenCvSharp, Time-Series Calibration, Clean Architecture',
      bullets: [
        'Integrated LightSVTR with ONNX Runtime and implemented CTC greedy decoding',
        'Developed ROI video-frame processing and neighboring-frame time-series calibration for flicker and lighting issues',
        'Designed layered Clean Architecture and a replaceable model factory pattern',
      ],
    },
    {
      title: 'Q-Log Analyzer & Vision System Utilities',
      role: 'Vision SW Researcher',
      tech: 'C# WPF, Regex Parsing, IQR Filtering, C++ MFC, Data Visualization',
      bullets: [
        'Developed a C# WPF tool for yield, defect-pattern, and processing-time analysis using regex parsing and IQR filtering',
        'Developed and maintained C++ MFC modules for real-time camera control, ROI setup, and Lot Variation data logging',
      ],
    },
  ],
  research: [
    'Empirical analysis of DPO effectiveness and limitations in instruction-tuned language models',
    '2026 KIIT Summer Conference Gold Award',
    '2025 KIIT Fall Conference Silver Award',
    'Completed LG Aimers AI training',
  ],
};

export const PrintableResume = ({ language }: PrintableResumeProps) => {
  const content = language === 'ko' ? koContent : enContent;

  return (
    <section className={styles.printRoot} aria-hidden='true'>
      <header className={styles.header}>
        <div>
          <h1>{content.name}</h1>
          <p className={styles.role}>{content.role}</p>
        </div>
        <p className={styles.bio}>{content.bio}</p>
      </header>

      <section className={styles.section}>
        <h2>{language === 'ko' ? 'Profile' : 'Profile'}</h2>
        <ul>
          {content.summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{language === 'ko' ? 'Skills' : 'Skills'}</h2>
        <div className={styles.skillGrid}>
          {content.skills.map((skill) => (
            <div key={skill.title} className={styles.skillCard}>
              <strong>{skill.title}</strong>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{language === 'ko' ? 'Featured Vision Projects' : 'Featured Vision Projects'}</h2>
        <div className={styles.projectList}>
          {content.projects.map((project) => (
            <article key={project.title} className={styles.project}>
              <div className={styles.projectHeader}>
                <h3>{project.title}</h3>
                <span>{project.role}</span>
              </div>
              <p className={styles.tech}>{project.tech}</p>
              <ul>
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{language === 'ko' ? 'Research & Awards' : 'Research & Awards'}</h2>
        <ul>
          {content.research.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};
