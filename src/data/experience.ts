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
      ko: '2026.07 ~ 현재 (재직 중)',
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
      'Machine Vision',
      'Python',
      'C#',
      'WebSocket',
      'Windows Named Pipe',
      'REST API',
      'Velopack',
      'HDBSCAN',
      'Gaussian KDE',
      'DINOv2 / DINOv3',
      'PatchCore / EfficientAD',
    ],
    summary: {
      ko: 'C++/MFC 기반 산업용 머신비전 검사 소프트웨어의 기능 개발과 안정화 업무를 수행하고 있습니다. 또한 설비 관리, 검사 데이터 분석, AI 모델 학습·평가 및 운영을 지원하는 통합 플랫폼(Vision Intelligence Platform) 개발에 참여하고 있습니다.',
      en: 'Developing features and stabilizing C++/MFC-based industrial machine vision inspection software, while participating in the development of an integrated Vision Intelligence Platform supporting equipment management, inspection data analysis, and AI model training, evaluation, and operations.',
    },
    responsibilities: [
      {
        ko: '산업용 Vision 검사 SW 개발: 기존 검사 알고리즘 및 판정 구조 분석, 특정 영역 결과를 양품으로 처리하는 양품조건 특수 ROI 기능 개발 및 LotResult 내 Variation 검사 결과 분리 로깅 구현',
        en: 'Industrial Vision Inspection SW: Analyzed existing inspection algorithms and decision flows, developed good-condition special ROI logic, and implemented separated Variation result logging in LotResult.',
      },
      {
        ko: '검사 SW 안정화 및 이상 탐지 연구: 멀티스레드 결과 저장 스레드의 Heap Corruption·비정상 종료 원인 분석·수정 및 PatchCore·EfficientAD 기반 이상 탐지 알고리즘 개선 연구 진행',
        en: 'SW Stabilization & Anomaly Detection R&D: Investigating heap corruption and abnormal termination in the multi-threaded result-saving path and evaluating PatchCore/EfficientAD anomaly detection models.',
      },
      {
        ko: 'Monitoring (설비 관리·데이터 수집): 관리자 웹 및 Python 설비 Client TUI 개발, WebSocket·Heartbeat 및 Windows Named Pipe IPC 연동, 모델 무결성 검증·원자적 교체·Velopack 업데이트, 최대 5GB 스트리밍 수집, Q-Log 재집계 통합 및 로그 스레드 분리로 UI 프리징 해결',
        en: 'Monitoring (Equipment & Data): Built Admin Web and Python Client TUI, WebSocket/Heartbeat & Windows Named Pipe IPC, atomic model replacement & Velopack updates, up to 5GB streaming downloads, Q-Log integration, and dedicated log threading to resolve UI freezes.',
      },
      {
        ko: 'Teaching (결함 분석·조건 관리): C# 기반 HDBSCAN 군집 분석 및 2D Gaussian KDE 결함 분포·히트맵·등고선·핫스팟 엔진, ROI 탐색 Workbench, 시그니처 승인본 비교 및 Vision 검사 SW 연동 DLL 인터페이스 개발',
        en: 'Teaching (Defect Analytics & Condition Management): Developed C# HDBSCAN clustering and 2D Gaussian KDE defect distribution/heatmap/contour/hotspot engine, ROI Workbench, signature comparison, and DLL interface to the inspection SW.',
      },
      {
        ko: 'Engineering (AI 학습·평가·실험 관리): Dataset Manager, DINOv2·DINOv3·CNN 기반 Encoder 관리, GOOD/NG 분류 Head 학습·평가, PCA 임베딩 시각화·유사 이미지 검색 및 AI Experiment Lab(Matrix 실험·임베딩 레시피·파생 Encoder 운영 적용) 개발',
        en: 'Engineering (AI Training, Evaluation & Experiment Lab): Developed Dataset Manager, DINOv2/DINOv3/CNN Encoder registry, GOOD/NG classification head training/evaluation, PCA & similar-image search, and AI Experiment Lab for matrix experiments and derived encoder deployment.',
      },
    ],
    note: {
      ko: '회사 보안 규정상 소스코드 및 구체적인 장비 사양은 비공개(Confidential)입니다.',
      en: 'Source code and proprietary hardware specifications are confidential per corporate policy.',
    },
  },
];
