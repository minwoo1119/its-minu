import type { LocalizedText } from '../i18n';

export interface ExperienceItem {
  id: string;
  company: LocalizedText;
  companyEn: string;
  role: LocalizedText;
  domain: LocalizedText;
  period: LocalizedText;
  isCurrent: boolean;
  statusBadge: LocalizedText;
  location: LocalizedText;
  techStack: string[];
  summary: LocalizedText;
  responsibilities: LocalizedText[];
  note?: LocalizedText;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'synapse-imaging',
    company: {
      ko: '시냅스이미징 (Synapse Imaging)',
      en: 'Synapse Imaging',
    },
    companyEn: 'Synapse Imaging',
    role: {
      ko: 'Software Engineer',
      en: 'Software Engineer',
    },
    domain: {
      ko: 'Industrial Machine Vision Software · C++/MFC',
      en: 'Industrial Machine Vision Software · C++/MFC',
    },
    period: {
      ko: '2026.03 - 현재 (재직 중)',
      en: '2026.03 - Present',
    },
    isCurrent: true,
    statusBadge: {
      ko: '재직 중',
      en: 'Current',
    },
    location: {
      ko: '대한민국',
      en: 'South Korea',
    },
    techStack: [
      'C++',
      'MFC',
      'OpenCV',
      'HALCON',
      'Multithreading',
      'Visual Studio',
      'Win32',
    ],
    summary: {
      ko: '산업용 머신비전 검사장비의 C++/MFC 소프트웨어를 개발 및 유지보수하고 있습니다. 생산 라인에 투입되는 비전 검사 장비의 기존 대규모 C++ 코드베이스를 분석하고, 멀티스레드 기반 실시간 영상 수집 및 정밀 영상처리/검사 알고리즘을 개발하고 있습니다.',
      en: 'Developing and maintaining industrial machine vision inspection software in C++/MFC. Analyzing large-scale legacy C++ codebases, implementing multi-threaded real-time acquisition pipelines, and engineering high-precision image processing and defect inspection algorithms.',
    },
    responsibilities: [
      {
        ko: '산업용 비전 검사장비 C++/MFC 기반 소프트웨어 개발 및 대규모 레거시 코드베이스 분석·유지보수',
        en: 'Developed C++/MFC software for industrial vision inspection equipment; analyzed and maintained large-scale legacy codebases.',
      },
      {
        ko: '고속 멀티스레드 영상 수집(Frame Acquisition) 및 링 버퍼 파이프라인 분석과 안정성 개선',
        en: 'Analyzed and maintained high-speed multi-threaded image acquisition and ring buffer pipelines.',
      },
      {
        ko: 'OpenCV / HALCON 기반 정밀 영상처리, 결함 검출(Defect Inspection) 및 계측 알고리즘 개발',
        en: 'Engineered high-precision image processing, defect inspection, and measurement algorithms using OpenCV and HALCON.',
      },
      {
        ko: '인라인 검사 장비의 실시간성 보장을 위한 스레드 동기화 최적화 및 현장 이슈 디버깅',
        en: 'Optimized thread synchronization for real-time line inspection and resolved on-site runtime issues.',
      },
    ],
    note: {
      ko: '회사 보안 규정상 소스코드 및 구체적인 장비 사양은 비공개(Confidential)입니다.',
      en: 'Source code and proprietary hardware specifications are confidential per corporate policy.',
    },
  },
];
