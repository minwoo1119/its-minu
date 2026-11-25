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
      ko: 'Vision Software R&D Engineer',
      en: 'Vision Software R&D Engineer',
    },
    domain: {
      ko: 'Industrial Machine Vision SW & Vision Intelligence Platform',
      en: 'Industrial Machine Vision SW & Vision Intelligence Platform',
    },
    period: {
      ko: '2026.07 ~ 현재',
      en: '2026.07 ~ Present',
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
      'Windows',
      'Multithreading',
      'Debugging',
      'Python',
      'C#',
      'WebSocket',
      'Windows IPC',
      'HDBSCAN / KDE',
    ],
    summary: {
      ko: 'C++/MFC 기반 산업용 머신비전 검사 소프트웨어의 기능 개발과 안정화 업무를 수행하고 있습니다. 동시에 Monitoring, Teaching, Engineering, Library로 구성된 통합 비전 플랫폼에서 Monitoring·Teaching·Engineering과 설비 Client·서버·AI Worker 연동 기능 개발에 참여하고 있습니다.',
      en: 'Developing and stabilizing C++/MFC-based industrial machine vision inspection software. Also participating in the development of Monitoring, Teaching, and Engineering features—along with equipment Client, server, and AI Worker integration—within an integrated vision platform composed of Monitoring, Teaching, Engineering, and Library.',
    },
    responsibilities: [
      {
        ko: 'C++/MFC 검사 SW 기능 개발: 기존 ROI 판정·실행 구조 분석, 특정 영역 결과를 양품으로 처리하는 양품조건 ROI 기능 통합 및 Variation 검사 결과 분리 로깅 구조 개선',
        en: 'C++/MFC Inspection SW: Analyzed existing ROI decision flows, integrated good-condition ROI logic, and improved result data structures to log Variation outcomes separately.',
      },
      {
        ko: '검사 SW 안정화 및 이상 탐지 검토(진행 중): 결과 저장 스레드의 Heap Corruption·비정상 종료 원인 분석 진행 중, EfficientAD·PatchCore 기반 이상 탐지 적용 가능성 연구',
        en: 'SW Reliability & Anomaly Detection (In Progress): Investigating heap corruption and abnormal termination in the result-saving thread, and evaluating EfficientAD/PatchCore feasibility.',
      },
      {
        ko: 'Monitoring & 설비 Client: 관리자 웹·API 연동, Python 설비 Client TUI, WebSocket·Windows Named Pipe IPC, 모델 무결성 검증·원자적 교체·자동 업데이트, 대용량 스트리밍, C# WPF Q-Log Analyzer 통합 및 로그 스레드 분리로 UI 프리징 해결',
        en: 'Monitoring & Equipment Client: Built Admin Web/API integration, Python Client TUI, WebSocket & Windows Named Pipe IPC, verified atomic model deployment, large-file streaming, Q-Log Analyzer integration, and thread isolation resolving UI freezes.',
      },
      {
        ko: 'Teaching & Engineering: C# 기반 HDBSCAN·Gaussian KDE 결함 분석·핫스팟 시각화·ROI Workbench 및 검사 SW DLL 연동, DINOv2·DINOv3·CNN Encoder 관리·GOOD/NG 분류 Head 학습·Experiment Lab 및 임베딩 레시피 운영 적용 워크플로 개발',
        en: 'Teaching & Engineering: Developed C# HDBSCAN/Gaussian KDE defect analytics, ROI Workbench, and inspection SW DLL integration, plus DINOv2/DINOv3/CNN Encoder management, GOOD/NG head training, and AI Experiment Lab operationalization.',
      },
    ],
    note: {
      ko: '회사 보안 규정상 내부 소스코드, API 명세, 설비 식별 규칙 및 원시 데이터는 비공개입니다.',
      en: 'Internal source code, API specifications, equipment identification rules, and raw data are confidential per company policy.',
    },
  },
];
