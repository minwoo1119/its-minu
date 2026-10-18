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
      ko: '2026.07 - 현재 (재직 중)',
      en: '2026.07 - Present',
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
      'Python',
      'React / TypeScript',
      'C# / .NET',
      'WebSocket',
      'Multithreading',
    ],
    summary: {
      ko: '산업용 비전 검사 소프트웨어와 설비 운영 플랫폼을 개발하고 있습니다. 기존 C++/MFC 검사 흐름의 기능 확장과 안정화, 설비 Client 통신, 관리자 Web 및 검사 데이터 분석 기능을 담당합니다.',
      en: 'Developing industrial vision inspection software and an equipment operations platform, spanning C++/MFC feature work and stabilization, equipment-client communication, admin web UI, and inspection-data analytics.',
    },
    responsibilities: [
      {
        ko: 'C++/MFC 기반 검사 로직·ROI·결과 기록 기능 개발과 레거시 코드 분석',
        en: 'Developing C++/MFC inspection logic, ROI and result-recording features while analyzing a legacy codebase.',
      },
      {
        ko: '설비 Client TUI, WebSocket 통신, 설치·업데이트 및 운영 로그 흐름 구현',
        en: 'Implementing an equipment-client TUI, WebSocket communication, packaging, updates, and operational logging.',
      },
      {
        ko: '관리자 Web UI와 검사 로그·이미지 수집·결함 분포 분석 기능 연계',
        en: 'Connecting the admin web UI with inspection logs, image collection, and defect-distribution analytics.',
      },
      {
        ko: '멀티스레드 환경의 UI 프리징과 Heap Corruption 등 실행 안정성 이슈 분석·개선',
        en: 'Investigating and improving runtime stability issues including UI freezing and heap corruption in multi-threaded paths.',
      },
    ],
    note: {
      ko: '회사 보안 규정상 소스코드 및 구체적인 장비 사양은 비공개(Confidential)입니다.',
      en: 'Source code and proprietary hardware specifications are confidential per corporate policy.',
    },
  },
];
