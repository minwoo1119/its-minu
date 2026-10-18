import type { LocalizedText } from '../i18n';

export type ProfessionalProjectStatus = 'completed' | 'in-progress' | 'mixed';

export interface ProfessionalProject {
  id: number;
  index: string;
  title: LocalizedText;
  summary: LocalizedText;
  eyebrow: LocalizedText;
  status: ProfessionalProjectStatus;
  period: LocalizedText;
  technologies: string[];
  context: LocalizedText;
  architecture: {
    label: LocalizedText;
    description: LocalizedText;
  }[];
  contributions: {
    title: LocalizedText;
    description: LocalizedText;
  }[];
  challenges: {
    title: LocalizedText;
    status: ProfessionalProjectStatus;
    problem: LocalizedText;
    investigation: LocalizedText;
    currentStatus: LocalizedText;
  }[];
  outcomes: LocalizedText[];
  reflection: LocalizedText;
}

export const professionalProjects: ProfessionalProject[] = [
  {
    id: 30,
    index: '01',
    title: {
      ko: '산업용 비전 검사 통합 관리 플랫폼',
      en: 'Industrial Vision Management & Analytics Platform',
    },
    summary: {
      ko: '여러 비전 검사 설비를 연결하고 운영 현황, 검사 로그, 이미지 수집과 분석 흐름을 하나의 운영 경험으로 통합한 온프레미스 플랫폼입니다.',
      en: 'An on-premise platform that connects vision inspection equipment and unifies operational status, inspection logs, image collection, and analytics workflows.',
    },
    eyebrow: {
      ko: 'Professional Work · On-premise Systems · Platform & Analytics',
      en: 'Professional Work · On-premise Systems · Platform & Analytics',
    },
    status: 'completed',
    period: { ko: '실무 프로젝트', en: 'Professional project' },
    technologies: [
      'Python',
      'WebSocket',
      'React',
      'TypeScript',
      'C# / .NET',
      'HDBSCAN',
      'Gaussian KDE',
      'Velopack',
    ],
    context: {
      ko: '현장마다 분산된 검사 설비의 상태와 결과를 중앙에서 살펴보고, 필요한 이미지와 생산 로그를 일관된 흐름으로 수집·분석할 수 있어야 했습니다. 공개 페이지에서는 실제 제품명, 설비명, 통신 주소와 식별 규칙을 제외하고 시스템의 역할과 직접 구현한 범위만 설명합니다.',
      en: 'Inspection equipment distributed across sites needed a central way to expose status and results while collecting images and production logs through a consistent workflow. This public case study omits product names, equipment identifiers, network details, and proprietary identifier rules.',
    },
    architecture: [
      {
        label: { ko: '관리자 Web', en: 'Admin Web' },
        description: {
          ko: '운영 현황과 분석 결과를 확인하는 사용자 인터페이스',
          en: 'User interface for operational status and analysis results',
        },
      },
      {
        label: { ko: 'Application Server', en: 'Application Server' },
        description: {
          ko: '설비 연결과 데이터 흐름을 중계하는 시스템 영역',
          en: 'System layer coordinating equipment connections and data flows',
        },
      },
      {
        label: { ko: '설비 Client', en: 'Equipment Client' },
        description: {
          ko: 'Python TUI, 상태 통신, 로그 확인과 업데이트 실행',
          en: 'Python TUI, status communication, log viewing, and updates',
        },
      },
      {
        label: { ko: '검사 Software', en: 'Inspection Software' },
        description: {
          ko: '검사 결과와 이미지가 생성되는 기존 현장 소프트웨어',
          en: 'Existing on-site software producing inspection results and images',
        },
      },
    ],
    contributions: [
      {
        title: { ko: 'Admin Web', en: 'Admin Web' },
        description: {
          ko: '관리자 Web의 기본 UI와 공통 디자인을 구현하고 서버 API를 연동했습니다.',
          en: 'Implemented the admin web UI, applied the shared design system, and integrated server APIs.',
        },
      },
      {
        title: { ko: 'Client & Communication', en: 'Client & Communication' },
        description: {
          ko: 'Python 기반 설비 Client TUI, WebSocket 연결, 통신 오류 디버깅, 설치·업데이트 패키징과 Windows 재부팅 후 자동 실행 흐름을 구현했습니다.',
          en: 'Built the Python equipment-client TUI, debugged WebSocket communication, and implemented packaging, updates, and restart-on-boot behavior for Windows.',
        },
      },
      {
        title: {
          ko: 'Data Collection & Log Analytics',
          en: 'Data Collection & Log Analytics',
        },
        description: {
          ko: '검사 이미지 수집 흐름과 생산 로그 기반 모니터링을 연결했습니다. 기존 검사 로그 분석 도구의 필터, 집계, LOT, 차트, 내보내기 결과가 같은 기준을 따르도록 정리했습니다.',
          en: 'Connected inspection-image collection with production-log monitoring. Consolidated the former standalone log analyzer so filters, aggregation, LOT views, charts, and exports follow the same result set.',
        },
      },
      {
        title: {
          ko: 'Defect Heatmap & Hotspot',
          en: 'Defect Heatmap & Hotspot',
        },
        description: {
          ko: 'Teaching/Heatmap 흐름의 일부로 HDBSCAN 클러스터링과 2D Gaussian KDE 기반 결함 분포·핫스팟 엔진을 구현하고 Web 화면과 연결했습니다.',
          en: 'Implemented HDBSCAN clustering and a 2D Gaussian KDE defect-density and hotspot engine within the teaching/heatmap workflow, then connected it to the web UI.',
        },
      },
    ],
    challenges: [
      {
        title: {
          ko: '실시간 로그 화면의 프리징',
          en: 'Freezing in the real-time log view',
        },
        status: 'completed',
        problem: {
          ko: '연속 로그 처리와 UI 갱신이 같은 실행 흐름에 묶여 화면 응답성이 떨어졌습니다.',
          en: 'Continuous log processing and UI updates shared an execution path, degrading responsiveness.',
        },
        investigation: {
          ko: '로그 수신·처리 작업과 UI 렌더링의 책임 및 실행 경계를 분리해 확인했습니다.',
          en: 'Separated and inspected the responsibilities and execution boundaries of log ingestion, processing, and rendering.',
        },
        currentStatus: {
          ko: '로그 보기 작업을 UI와 분리된 스레드로 옮겨 프리징 문제를 해결했습니다.',
          en: 'Moved log-view processing to a thread separated from the UI, resolving the freeze.',
        },
      },
      {
        title: {
          ko: '필터 이후 통계 결과의 일관성',
          en: 'Consistency after log filtering',
        },
        status: 'completed',
        problem: {
          ko: '불량 코드의 포함·제외 조건에 따라 집계, LOT, 차트와 내보내기 결과가 서로 달라질 수 있었습니다.',
          en: 'Include/exclude rules for defect codes could cause totals, LOT views, charts, and exports to diverge.',
        },
        investigation: {
          ko: '각 화면이 참조하는 필터 결과와 집계 기준을 추적하고 동일 데이터 흐름을 사용하도록 정리했습니다.',
          en: 'Traced each view’s filtered result and aggregation criteria, then aligned them around the same data flow.',
        },
        currentStatus: {
          ko: '필터 이후의 집계·시각화·내보내기가 일관된 결과 집합을 사용하도록 반영했습니다.',
          en: 'Aggregation, visualization, and export now consume a consistent post-filter result set.',
        },
      },
    ],
    outcomes: [
      {
        ko: '분산된 설비 Client와 관리자 Web 사이의 상태·로그 확인 흐름을 구현했습니다.',
        en: 'Implemented status and log visibility across distributed equipment clients and the admin web.',
      },
      {
        ko: '검사 로그 분석 도구와 Teaching/Heatmap 기능을 플랫폼 안의 연결된 기능으로 정리했습니다.',
        en: 'Integrated log analytics and teaching/heatmap capabilities as connected platform features.',
      },
      {
        ko: '측정되지 않은 처리량·성능 수치는 공개 성과로 사용하지 않았습니다.',
        en: 'No unmeasured throughput or performance figures are presented as outcomes.',
      },
    ],
    reflection: {
      ko: '현장 소프트웨어는 개별 기능뿐 아니라 설치, 재시작, 통신 복구, 로그 관찰 가능성까지 하나의 운영 경험으로 설계해야 한다는 점을 배웠습니다. 전체 플랫폼의 모든 영역을 개인 기여로 표현하지 않고, 직접 구현한 Client·Web·분석 연계 범위만 구분해 기록했습니다.',
      en: 'The work reinforced that on-site software must treat installation, restart behavior, communication recovery, and observability as one operational experience. The case study distinguishes my client, web, and analytics integration work from the broader platform scope.',
    },
  },
  {
    id: 31,
    index: '02',
    title: {
      ko: '산업용 비전 검사 SW 안정화 및 알고리즘 고도화',
      en: 'Industrial Vision Software Stabilization & Algorithm Enhancement',
    },
    summary: {
      ko: '기존 Windows 비전 검사 소프트웨어의 판정 로직과 결과 기록을 개선하고, 이상 탐지 알고리즘과 실행 안정성 문제를 분석·개선하는 프로젝트입니다.',
      en: 'Improving decision logic and result logging in an existing Windows vision inspection application while evaluating anomaly detection and runtime stability.',
    },
    eyebrow: {
      ko: 'Professional Work · C++ / MFC · Computer Vision',
      en: 'Professional Work · C++ / MFC · Computer Vision',
    },
    status: 'mixed',
    period: { ko: '실무 프로젝트 · 일부 진행 중', en: 'Professional project · Partly in progress' },
    technologies: [
      'C++',
      'MFC',
      'Windows',
      'Multithreading',
      'Debugging',
      'Computer Vision',
      'PatchCore',
      'EfficientAD',
    ],
    context: {
      ko: '장기간 운영되는 Windows 검사 프로그램에 새로운 검사 조건과 기록 체계를 추가하면서도 기존 판정 흐름과 실행 안정성을 보존해야 했습니다. 공개 페이지에는 내부 코드, 실제 검사 조건과 재현 데이터 없이 담당 범위와 확인된 상태만 정리합니다.',
      en: 'A long-running Windows inspection application needed new inspection conditions and result records without compromising its established decision flow or runtime stability. This case study describes only the contribution scope and verified status, without internal code, inspection rules, or reproduction data.',
    },
    architecture: [
      {
        label: { ko: 'Capture / Inspect', en: 'Capture / Inspect' },
        description: {
          ko: '영상 입력과 기존 검사 알고리즘 호출',
          en: 'Image acquisition and existing inspection-algorithm invocation',
        },
      },
      {
        label: { ko: '판정 & ROI', en: 'Decision & ROI' },
        description: {
          ko: '검사 조건과 특수 ROI를 반영하는 판정 단계',
          en: 'Decision stage applying inspection conditions and a special ROI',
        },
      },
      {
        label: { ko: '결과 생성', en: 'Result Generation' },
        description: {
          ko: '일반 검사와 Variation 결과를 구분해 생성',
          en: 'Generates standard and Variation results as distinct records',
        },
      },
      {
        label: { ko: '기록 / 저장', en: 'Record / Save' },
        description: {
          ko: '결과 로그 구조와 저장 스레드가 연결되는 단계',
          en: 'Result-log structure and result-saving thread boundary',
        },
      },
    ],
    contributions: [
      {
        title: { ko: 'Good-condition ROI', en: 'Good-condition ROI' },
        description: {
          ko: 'C++/MFC 검사 로직과 알고리즘 호출 구조를 분석하고, 설정한 양품조건 영역을 판정에 반영하는 특수 ROI 기능을 구현했습니다.',
          en: 'Analyzed the C++/MFC inspection and algorithm call flow, then implemented a special ROI that applies the configured good-condition region to the decision logic.',
        },
      },
      {
        title: {
          ko: 'Variation Result Logging',
          en: 'Variation Result Logging',
        },
        description: {
          ko: '검사 SW 내부의 Variation 이상 탐지 결과를 별도로 기록할 수 있도록 로그 데이터 구조를 변경했습니다.',
          en: 'Changed the log data structure so Variation anomaly-detection results can be recorded separately inside the inspection software.',
        },
      },
      {
        title: {
          ko: 'Anomaly Detection Evaluation',
          en: 'Anomaly Detection Evaluation',
        },
        description: {
          ko: 'PatchCore와 EfficientAD의 구조 및 추론 특성을 비교하며 모델 개선을 진행하고 있습니다.',
          en: 'Comparing PatchCore and EfficientAD architectures and inference characteristics as ongoing model-improvement work.',
        },
      },
    ],
    challenges: [
      {
        title: {
          ko: 'Result-Saving Thread / Heap Corruption',
          en: 'Result-Saving Thread / Heap Corruption',
        },
        status: 'in-progress',
        problem: {
          ko: '검사 결과 저장 과정에서 Heap Corruption과 비정상 종료 현상이 관찰되었습니다.',
          en: 'Heap corruption and abnormal termination have been observed during result saving.',
        },
        investigation: {
          ko: '결과 저장 스레드와 공유 데이터의 생명주기·소유권·동기화 경계를 중심으로 재현 조건을 좁히고 있습니다. 원인은 아직 확정하지 않았습니다.',
          en: 'Reproduction conditions are being narrowed around object lifetime, ownership, and synchronization boundaries in the result-saving thread. The root cause is not yet confirmed.',
        },
        currentStatus: {
          ko: '분석·수정 진행 중 — 재현 시나리오 고정, 메모리 진단, 스레드 경계 검증 후 수정안 회귀 테스트를 계획하고 있습니다.',
          en: 'Analysis and remediation in progress — next steps are to lock a reproduction scenario, run memory diagnostics, validate thread boundaries, and regression-test a fix.',
        },
      },
      {
        title: {
          ko: '이상 탐지 모델 비교',
          en: 'Anomaly-detection model evaluation',
        },
        status: 'in-progress',
        problem: {
          ko: '검사 SW 내부 기능에 적합한 이상 탐지 구조와 추론 특성을 비교할 필요가 있습니다.',
          en: 'The anomaly-detection architecture and inference characteristics appropriate for the inspection application need evaluation.',
        },
        investigation: {
          ko: 'PatchCore와 EfficientAD의 구성과 적용 조건을 비교하고 있습니다.',
          en: 'PatchCore and EfficientAD are being compared by architecture and application constraints.',
        },
        currentStatus: {
          ko: '모델 개선 진행 중 — 검증 완료나 성능 향상 수치를 아직 확정하지 않았습니다.',
          en: 'Model improvement is in progress; no validated performance improvement is claimed yet.',
        },
      },
    ],
    outcomes: [
      {
        ko: '양품조건 영역을 판정 로직에 반영하는 특수 ROI 기능을 구현했습니다.',
        en: 'Implemented the special ROI that applies the good-condition region to inspection decisions.',
      },
      {
        ko: 'Variation 결과를 기존 결과와 구분해 기록할 수 있도록 로그 구조를 개선했습니다.',
        en: 'Improved the log structure to record Variation results separately from existing results.',
      },
      {
        ko: 'Heap Corruption과 모델 고도화는 완료 성과가 아닌 진행 중인 작업으로 구분했습니다.',
        en: 'Heap-corruption analysis and model enhancement are explicitly presented as ongoing work, not completed outcomes.',
      },
    ],
    reflection: {
      ko: '레거시 검사 소프트웨어에서는 기능 추가와 안정성 검증을 분리할 수 없습니다. 특히 멀티스레드 저장 경로는 관찰된 현상, 확인된 사실, 가설과 검증 계획을 구분해 기록해야 섣부른 원인 단정을 피할 수 있습니다.',
      en: 'In legacy inspection software, feature work and stability validation are inseparable. Multi-threaded persistence paths require clear separation between observed symptoms, verified facts, hypotheses, and validation plans to avoid premature conclusions.',
    },
  },
];

export const getProfessionalProject = (id: number) =>
  professionalProjects.find((project) => project.id === id);
