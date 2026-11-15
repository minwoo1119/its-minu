import type { LocalizedText } from '../i18n';

export type ProfessionalProjectStatus = 'completed' | 'in-progress' | 'mixed';

export interface ProfessionalContributionSubSection {
  subtitle: LocalizedText;
  bullets: LocalizedText[];
}

export interface ProfessionalContributionItem {
  title: LocalizedText;
  description?: LocalizedText;
  bullets?: LocalizedText[];
  subSections?: ProfessionalContributionSubSection[];
}

export interface ProfessionalKeyExperienceItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProfessionalProject {
  id: number;
  index: string;
  title: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  eyebrow: LocalizedText;
  status: ProfessionalProjectStatus;
  period: LocalizedText;
  technologies: string[];
  cardContributions: LocalizedText[];
  context: LocalizedText;
  architecture: {
    label: LocalizedText;
    description: LocalizedText;
  }[];
  contributions: ProfessionalContributionItem[];
  keyExperiences: ProfessionalKeyExperienceItem[];
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
    id: 31,
    index: '01',
    title: {
      ko: '산업용 Vision 검사 SW 기능 개발 및 안정화',
      en: 'Industrial Vision Inspection SW Development & Stabilization',
    },
    role: {
      ko: 'C++/MFC 검사 소프트웨어 개발 및 유지보수',
      en: 'C++/MFC Inspection Software Development & Maintenance',
    },
    summary: {
      ko: '산업용 머신비전 검사장비에서 실행되는 C++/MFC 기반 소프트웨어의 기능을 개발하고 기존 코드를 개선하는 프로젝트입니다. 기존 검사 알고리즘의 실행 구조와 검사 결과 처리 과정을 분석하고, 신규 검사 조건을 지원하는 기능과 결과 저장 로직을 구현했습니다. 현재는 이상 탐지 알고리즘 개선과 프로그램 안정화 작업을 진행하고 있습니다.',
      en: 'Developing features and improving existing code for C++/MFC-based software running on industrial machine vision inspection equipment. Analyzed the execution structure of existing inspection algorithms and result-processing flows, implemented features supporting new inspection conditions and result-storage logic, and am currently working on anomaly-detection algorithm improvements and program stabilization.',
    },
    eyebrow: {
      ko: 'C++ / MFC · Windows · Machine Vision',
      en: 'C++ / MFC · Windows · Machine Vision',
    },
    status: 'mixed',
    period: {
      ko: '2026.07 ~ 현재',
      en: '2026.07 ~ Present',
    },
    technologies: [
      'C++',
      'MFC',
      'Windows',
      'Multithreading',
      'Debugging',
      'Machine Vision',
      'PatchCore',
      'EfficientAD',
    ],
    cardContributions: [
      {
        ko: '양품조건 ROI 기능 개발: 기존 검사 프로그램의 ROI 판정 구조를 분석하고 특정 영역 검사 결과를 양품으로 처리하는 특수 ROI 기능을 통합했습니다.',
        en: 'Good-Condition ROI Development: Analyzed existing ROI decision structures and integrated a special ROI feature treating specific region results as good.',
      },
      {
        ko: 'Variation 검사 결과 로깅 개선: LotResult 데이터 구조에 전용 저장 변수를 추가하고 다른 검사 결과와 구분해 기록하도록 로깅 로직을 수정했습니다.',
        en: 'Variation Result Logging Improvement: Added dedicated storage variables to LotResult and updated logging logic to record Variation results separately.',
      },
      {
        ko: '검사 소프트웨어 안정화 및 디버깅: 결과 저장 스레드와 관련된 Heap Corruption 및 비정상 종료 문제를 조사하고 객체 수명주기와 스레드 흐름을 분석·수정 중입니다.',
        en: 'SW Stabilization & Debugging: Investigating heap corruption and abnormal termination in the result-saving thread by reviewing object lifetimes and multi-threaded data flows.',
      },
      {
        ko: 'AI 기반 이상 탐지 알고리즘 개선 연구: 기존 Variation Model을 분석하고 EfficientAD 및 PatchCore 기반 특징 추출·이상 점수 계산 구조의 적용 가능성을 평가 중입니다.',
        en: 'AI Anomaly Detection R&D: Analyzing the existing Variation Model and evaluating EfficientAD and PatchCore feature extraction and anomaly scoring structures.',
      },
    ],
    context: {
      ko: '산업용 머신비전 검사장비에서 실행되는 C++/MFC 기반 소프트웨어의 기능을 개발하고 기존 코드를 개선하는 프로젝트입니다. 기존 검사 알고리즘의 실행 구조와 검사 결과 처리 과정을 분석하여 신규 검사 조건을 지원하는 양품조건 ROI 기능과 Variation 결과 분리 로깅 로직을 구현했으며, 현재 이상 탐지 알고리즘 개선 연구와 멀티스레드 환경의 프로그램 안정화 작업을 진행하고 있습니다.',
      en: 'This project focuses on developing new capabilities and improving legacy code for C++/MFC software running on industrial machine vision inspection equipment. By analyzing the existing inspection algorithm execution flow and result-handling pipeline, I implemented good-condition ROI logic for new inspection criteria and separated Variation result logging, while continuing work on multi-threaded stability and deep-learning anomaly detection evaluation.',
    },
    architecture: [
      {
        label: { ko: 'Capture / Inspect', en: 'Capture / Inspect' },
        description: {
          ko: '영상 입력 및 기존 C++/MFC 검사 알고리즘 실행 구조',
          en: 'Image acquisition and existing C++/MFC inspection algorithm execution',
        },
      },
      {
        label: { ko: '양품조건 ROI 판정', en: 'Good-Condition ROI' },
        description: {
          ko: '검사 조건에 따라 특정 영역 판정 방식을 조정·통합하는 단계',
          en: 'Decision stage adjusting and integrating special ROI good-condition criteria',
        },
      },
      {
        label: { ko: 'LotResult & Variation 로깅', en: 'LotResult & Variation Logging' },
        description: {
          ko: 'LotResult 전용 저장 변수를 통해 일반 검사와 Variation 결과를 구분 기록',
          en: 'Distinguishing and recording standard and Variation results via dedicated LotResult fields',
        },
      },
      {
        label: { ko: '결과 저장 스레드 & 안정화', en: 'Result-Saving Thread & Stability' },
        description: {
          ko: '멀티스레드 데이터 전달, 객체 수명주기 관리 및 결과 저장 처리',
          en: 'Multi-threaded data handoff, object lifetime management, and persistence',
        },
      },
    ],
    contributions: [
      {
        title: {
          ko: '양품조건 ROI 기능 개발',
          en: 'Good-Condition ROI Feature Development',
        },
        description: {
          ko: '특정 영역에서 발생한 검사 결과를 검사 조건에 맞춰 양품으로 처리할 수 있도록 판정 로직을 확장했습니다.',
          en: 'Extended decision logic so inspection results occurring within specific regions can be treated as good according to configured inspection criteria.',
        },
        bullets: [
          {
            ko: '기존 검사 프로그램의 ROI 판정 및 검사 실행 구조 분석',
            en: 'Analyzed the ROI decision and inspection execution structure of the existing inspection program',
          },
          {
            ko: '특정 영역에서 발생한 검사 결과를 양품으로 처리하는 특수 ROI 기능 개발',
            en: 'Developed a special ROI feature that processes inspection results within designated regions as good (pass)',
          },
          {
            ko: '기존 C++/MFC 검사 로직에 신규 ROI 판정 조건 통합',
            en: 'Integrated the new ROI decision criteria into the existing C++/MFC inspection logic',
          },
          {
            ko: '검사 조건에 따라 특정 영역의 판정 방식을 조정할 수 있도록 기능 확장',
            en: 'Expanded functionality to allow flexible adjustment of region-specific decision rules based on inspection conditions',
          },
        ],
      },
      {
        title: {
          ko: 'Variation 검사 결과 로깅 개선',
          en: 'Variation Inspection Result Logging Improvement',
        },
        description: {
          ko: '기존 검사 결과 처리 구조를 유지하면서 Variation 검사 결과를 독립적으로 추적·기록할 수 있도록 개선했습니다.',
          en: 'Improved the logging structure to independently track and record Variation inspection results while preserving compatibility with existing result processing.',
        },
        bullets: [
          {
            ko: '기존 검사 알고리즘 실행 및 결과 저장 흐름 분석',
            en: 'Analyzed existing inspection algorithm execution and result-saving flows',
          },
          {
            ko: 'LotResult 데이터 구조에 Variation 결과 전용 저장 변수 추가',
            en: 'Added dedicated Variation result storage variables to the LotResult data structure',
          },
          {
            ko: 'Variation 검사 결과를 다른 검사 결과와 구분하여 기록하도록 로깅 로직 수정',
            en: 'Modified logging logic to record Variation inspection results separately from other inspection outcomes',
          },
          {
            ko: '기존 검사 결과 처리 구조를 유지하면서 신규 데이터 기록 기능 구현',
            en: 'Implemented the new data-recording capability while maintaining the existing result-handling architecture',
          },
        ],
      },
      {
        title: {
          ko: '검사 소프트웨어 안정화 및 디버깅',
          en: 'Inspection Software Stabilization & Debugging',
        },
        description: {
          ko: '멀티스레드 실행 환경에서 발생하는 메모리 손상 및 비정상 종료 문제를 추적하고 안정화 작업을 수행하고 있습니다.',
          en: 'Tracing memory corruption and abnormal termination issues occurring in a multi-threaded execution environment and performing stabilization work.',
        },
        bullets: [
          {
            ko: 'C++/MFC 기반 기존 코드베이스 및 멀티스레드 실행 구조 분석',
            en: 'Analyzed the existing C++/MFC codebase and multi-threaded execution architecture',
          },
          {
            ko: '검사 결과 저장 스레드와 관련된 Heap Corruption 및 비정상 종료 문제 조사',
            en: 'Investigated Heap Corruption and abnormal termination issues associated with the inspection result-saving thread',
          },
          {
            ko: '메모리 관리, 객체 수명주기 및 스레드 간 데이터 처리 흐름 검토',
            en: 'Reviewed memory management, object lifecycles, and inter-thread data processing flows',
          },
          {
            ko: '프로그램 비정상 종료 문제의 원인 분석 및 수정 진행 중',
            en: 'Root-cause analysis and remediation for abnormal program termination currently in progress',
          },
        ],
      },
      {
        title: {
          ko: 'AI 기반 이상 탐지 알고리즘 개선 연구',
          en: 'AI-Based Anomaly Detection Algorithm Improvement Research',
        },
        description: {
          ko: '기존 통계적 Variation Model과 최신 딥러닝 기반 이상 탐지 알고리즘의 구조를 비교·검토하고 있습니다.',
          en: 'Comparing and reviewing the existing statistical Variation Model against modern deep-learning anomaly detection architectures.',
        },
        bullets: [
          {
            ko: '기존 Variation Model의 구조와 적용 방식 분석',
            en: 'Analyzed the architecture and application method of the existing Variation Model',
          },
          {
            ko: 'EfficientAD 및 PatchCore 기반 이상 탐지 알고리즘 비교',
            en: 'Compared anomaly detection algorithms based on EfficientAD and PatchCore',
          },
          {
            ko: '특징 추출 및 이상 점수 계산 구조 검토',
            en: 'Reviewed feature extraction pipelines and anomaly score computation structures',
          },
          {
            ko: '기존 검사 프로그램의 알고리즘 개선을 위한 적용 가능성 평가 진행 중',
            en: 'Evaluating feasibility for algorithm enhancement within the existing inspection software',
          },
        ],
      },
    ],
    keyExperiences: [
      {
        title: { ko: '기존 C++ 코드베이스 분석', en: 'Legacy C++ Codebase Analysis' },
        description: {
          ko: '검사 실행 흐름과 데이터 처리 구조를 이해하고 기존 기능을 확장',
          en: 'Understood inspection execution flows and data processing structures to safely extend existing functionality',
        },
      },
      {
        title: { ko: '검사 알고리즘 개발', en: 'Inspection Algorithm Development' },
        description: {
          ko: '실제 검사 조건에 대응하는 양품조건 ROI 판정 기능 구현',
          en: 'Implemented good-condition ROI decision logic responding to real-world inspection criteria',
        },
      },
      {
        title: { ko: '데이터 구조 및 로깅', en: 'Data Structure & Logging' },
        description: {
          ko: 'LotResult 등 검사 결과 저장 구조를 수정하여 Variation 결과를 별도로 기록',
          en: 'Modified result storage structures including LotResult to record Variation outcomes separately',
        },
      },
      {
        title: { ko: '디버깅 및 안정화', en: 'Debugging & Stabilization' },
        description: {
          ko: '멀티스레드 환경에서 발생하는 Heap Corruption 등 메모리 관련 문제 분석',
          en: 'Analyzed memory-related issues such as Heap Corruption occurring in multi-threaded environments',
        },
      },
      {
        title: { ko: 'AI 알고리즘 검토', en: 'AI Algorithm Evaluation' },
        description: {
          ko: '기존 Variation 검사 알고리즘과 EfficientAD·PatchCore 등 딥러닝 기반 이상 탐지 방식의 적용 가능성 비교',
          en: 'Compared the applicability of deep-learning anomaly detection (EfficientAD, PatchCore) against existing Variation inspection algorithms',
        },
      },
    ],
    challenges: [
      {
        title: {
          ko: '결과 저장 스레드 Heap Corruption 및 비정상 종료 분석',
          en: 'Result-Saving Thread Heap Corruption & Crash Investigation',
        },
        status: 'in-progress',
        problem: {
          ko: 'C++/MFC 멀티스레드 실행 중 검사 결과 저장 스레드와 관련된 구간에서 Heap Corruption 및 프로그램 비정상 종료 현상이 관찰되었습니다.',
          en: 'Heap corruption and abnormal termination have been observed in paths associated with the inspection result-saving thread during multi-threaded C++/MFC execution.',
        },
        investigation: {
          ko: '메모리 관리 방식, 객체 수명주기(Object Lifecycle), 스레드 간 데이터 전달 및 공유 자원 처리 흐름을 면밀히 검토하며 원인 구간을 좁히고 있습니다.',
          en: 'Reviewing memory management, object lifecycles, and inter-thread data handoff boundaries to isolate the root cause.',
        },
        currentStatus: {
          ko: '원인 분석 및 수정 진행 중 — 재현 조건 확인 및 스레드 간 메모리 경계 검증을 바탕으로 안정화 작업을 진행하고 있습니다.',
          en: 'Root-cause analysis and remediation in progress — validating thread memory boundaries and stabilizing the persistence flow.',
        },
      },
      {
        title: {
          ko: '기존 Variation Model 대비 AI 이상 탐지 알고리즘 적용성 검토',
          en: 'Evaluating AI Anomaly Detection vs. Legacy Variation Model',
        },
        status: 'in-progress',
        problem: {
          ko: '기존 Variation Model의 한계를 보완하고 검사 프로그램의 이상 탐지 성능을 개선할 수 있는 알고리즘 구조 검토가 필요했습니다.',
          en: 'Needed to evaluate candidate anomaly detection architectures capable of complementing the existing Variation Model in production inspection.',
        },
        investigation: {
          ko: '기존 Variation Model의 적용 방식을 분석하고, EfficientAD와 PatchCore의 특징 추출 구조 및 이상 점수 계산 방식을 비교 검토하고 있습니다.',
          en: 'Analyzing the existing Variation Model workflow and comparing feature extraction and anomaly scoring structures of EfficientAD and PatchCore.',
        },
        currentStatus: {
          ko: '적용 가능성 평가 진행 중 — 현장 검사 조건과 추론 특성을 고려해 기존 검사 SW 내 통합 가능성을 검증하고 있습니다.',
          en: 'Feasibility evaluation in progress — assessing integration viability against field inspection constraints and inference characteristics.',
        },
      },
    ],
    outcomes: [
      {
        ko: '특정 영역의 검사 결과를 조건에 따라 양품으로 처리하는 양품조건 특수 ROI 기능을 개발하고 기존 C++/MFC 판정 로직에 통합했습니다.',
        en: 'Developed the good-condition special ROI feature and integrated it into the existing C++/MFC inspection decision logic.',
      },
      {
        ko: 'LotResult 데이터 구조에 전용 저장 변수를 추가하여 기존 처리 구조를 유지하면서 Variation 검사 결과를 구분 기록하도록 개선했습니다.',
        en: 'Added dedicated variables to the LotResult structure to log Variation results separately while preserving existing result processing.',
      },
      {
        ko: '멀티스레드 결과 저장 스레드의 Heap Corruption 원인 분석·수정 및 EfficientAD·PatchCore 기반 이상 탐지 개선 연구를 수행하고 있습니다.',
        en: 'Conducting root-cause remediation for result-saving thread heap corruption and evaluating EfficientAD/PatchCore anomaly detection improvements.',
      },
    ],
    reflection: {
      ko: '기존 C++/MFC 기반 산업용 비전 소프트웨어에서는 전체 검사 실행 흐름과 데이터 구조(LotResult 등)를 정확히 파악한 뒤 기존 동작과의 호환성을 지키며 기능을 확장하는 것이 핵심이었습니다. 또한 멀티스레드 환경의 안정성을 확보하기 위해 메모리 관리와 객체 수명주기를 체계적으로 추적하는 경험을 쌓고 있습니다.',
      en: 'Working on production C++/MFC vision software highlighted the importance of thoroughly understanding existing execution flows and data structures like LotResult to extend features without breaking compatibility, while systematically tracing memory ownership and object lifecycles across threads.',
    },
  },
  {
    id: 30,
    index: '02',
    title: {
      ko: '산업용 Vision Intelligence Platform 개발',
      en: 'Industrial Vision Intelligence Platform Development',
    },
    role: {
      ko: 'Full-Stack 개발 — 관리자 웹, 설비 Client, Teaching·Engineering, 서버 및 AI Worker 일부',
      en: 'Full-Stack Development — Admin Web, Equipment Client, Teaching & Engineering, Server & AI Worker (Partial)',
    },
    summary: {
      ko: '공장 내부망에서 여러 Vision 검사 설비를 중앙 관리하고, 검사 데이터 수집과 AI 모델의 티칭·학습·평가·배포를 지원하는 통합 플랫폼을 개발하는 프로젝트입니다. 플랫폼은 Monitoring, Teaching, Engineering, Library의 네 가지 주요 영역으로 구성되어 있으며, 이 중 Monitoring, Teaching, Engineering 영역의 기능과 설비 PC Client 및 서버 연동 기능을 개발했습니다.',
      en: 'Developing an integrated platform on the factory intranet to centrally manage multiple Vision inspection machines and support inspection data collection as well as AI model teaching, training, evaluation, and deployment. Among the platform’s four core areas (Monitoring, Teaching, Engineering, Library), I developed features across Monitoring, Teaching, and Engineering along with the equipment PC Client and server integration.',
    },
    eyebrow: {
      ko: 'Monitoring · Teaching · Engineering · Equipment Client',
      en: 'Monitoring · Teaching · Engineering · Equipment Client',
    },
    status: 'completed',
    period: {
      ko: '2026.08 ~ 현재',
      en: '2026.08 ~ Present',
    },
    technologies: [
      'Python',
      'C++',
      'C#',
      'WebSocket',
      'Windows Named Pipe',
      'REST API',
      'Velopack',
      'HDBSCAN',
      'Gaussian KDE',
      'DINOv2',
      'DINOv3',
    ],
    cardContributions: [
      {
        ko: 'Monitoring (설비 관리·수집): 관리자 웹, Python 설비 Client TUI, WebSocket·Heartbeat 및 Windows Named Pipe IPC, 모델 무결성 검증·원자적 교체·Velopack 업데이트, 최대 5GB 스트리밍 수집 및 Q-Log 통합 기능을 개발했습니다.',
        en: 'Monitoring (Equipment & Collection): Built Admin Web, Python Client TUI, WebSocket/Heartbeat & Windows Named Pipe IPC, atomic model replacement & Velopack updates, up to 5GB streaming downloads, and Q-Log analytics integration.',
      },
      {
        ko: 'Teaching (결함 분석·조건 관리): C# 기반 HDBSCAN 군집 분석·2D Gaussian KDE 결함 분포 엔진, 히트맵·등고선·핫스팟 시각화, ROI 탐색 Workbench, 군집 라벨링 및 Vision 검사 SW 연동 DLL 인터페이스를 구현했습니다.',
        en: 'Teaching (Defect Analytics & Condition Management): Built a C# HDBSCAN & 2D Gaussian KDE defect distribution engine, heatmap/contour/hotspot visualizations, ROI Workbench, cluster labeling, and DLL interface to the inspection SW.',
      },
      {
        ko: 'Engineering (AI 학습·평가·실험 관리): Dataset Manager, DINOv2·DINOv3·CNN Encoder 등록·관리, GOOD/NG 분류 Head 학습·평가, PCA·유사 이미지 검색 및 AI Experiment Lab(Matrix 실험·임베딩 레시피·파생 Encoder 운영 적용)을 개발했습니다.',
        en: 'Engineering (AI Training, Evaluation & Experiment Lab): Developed Dataset Manager, DINOv2/DINOv3/CNN Encoder management, GOOD/NG classification head training, PCA/similarity search, and AI Experiment Lab with derived encoder deployment.',
      },
    ],
    context: {
      ko: '공장 내부망에서 여러 Vision 검사 설비를 중앙 관리하고, 검사 데이터 수집과 AI 모델의 티칭·학습·평가·배포를 일관된 워크플로로 지원하는 통합 플랫폼(Monitoring, Teaching, Engineering, Library)이 필요했습니다. 이 중 Monitoring, Teaching, Engineering 3개 핵심 영역과 설비 PC Client–Vision 검사 SW–서버 간 통신·연동 및 AI Worker 일부를 전방위로 개발했습니다.',
      en: 'The factory intranet required a unified platform (Monitoring, Teaching, Engineering, Library) to centrally manage distributed Vision inspection equipment and streamline data collection, defect analysis, and AI model training, evaluation, and deployment. I developed features spanning Monitoring, Teaching, Engineering, the equipment PC Client, Vision SW IPC/DLL integration, and parts of the server and AI Worker.',
    },
    architecture: [
      {
        label: { ko: 'Monitoring', en: 'Monitoring' },
        description: {
          ko: '관리자 웹, 설비·호기·PC 계층 관리, 운영·수율 통계, 모델 배포 및 Q-Log 재집계',
          en: 'Admin web, equipment/unit/PC hierarchy, yield statistics, model deployment, and Q-Log reaggregation',
        },
      },
      {
        label: { ko: '설비 Client & IPC', en: 'Equipment Client & IPC' },
        description: {
          ko: 'Python TUI, WebSocket·Heartbeat, Windows Named Pipe IPC, 5GB 스트리밍 및 Velopack 업데이트',
          en: 'Python TUI, WebSocket/Heartbeat, Windows Named Pipe IPC, 5GB streaming, and Velopack updates',
        },
      },
      {
        label: { ko: 'Teaching & DLL', en: 'Teaching & DLL' },
        description: {
          ko: 'C# HDBSCAN·2D Gaussian KDE 결함 분포 엔진, 히트맵·Workbench 및 검사 SW DLL 인터페이스',
          en: 'C# HDBSCAN & 2D Gaussian KDE defect engine, heatmap/Workbench, and inspection SW DLL interface',
        },
      },
      {
        label: { ko: 'Engineering & AI Lab', en: 'Engineering & AI Lab' },
        description: {
          ko: 'DINOv2·DINOv3·CNN Encoder, 분류 Head 학습·평가, AI Experiment Lab 및 파생 Encoder 운영 적용',
          en: 'DINOv2/DINOv3/CNN Encoders, classification head training/eval, AI Experiment Lab, and derived encoder ops',
        },
      },
    ],
    contributions: [
      {
        title: {
          ko: 'Monitoring — 설비 관리 및 데이터 모니터링',
          en: 'Monitoring — Equipment Management & Data Monitoring',
        },
        description: {
          ko: '관리자 웹과 설비 PC Client를 구축하고, 검사 SW 연동부터 대용량 이미지·로그 수집 및 통계 분석까지 엔드투엔드로 구현했습니다.',
          en: 'Built the Admin Web and Equipment PC Client, implementing end-to-end inspection SW IPC, large-scale image/log collection, and statistical analytics.',
        },
        subSections: [
          {
            subtitle: {
              ko: '관리자 웹 및 데이터 분석',
              en: 'Admin Web & Data Analytics',
            },
            bullets: [
              {
                ko: '관리자 웹 초기 구축 및 서버 API 연동',
                en: 'Initial setup of the Admin Web and integration with server REST APIs',
              },
              {
                ko: '설비·호기·PC 계층 관리와 신규 Client 승인·반려 기능 개발',
                en: 'Developed equipment, unit, and PC hierarchy management with approval/rejection workflows for new Clients',
              },
              {
                ko: '설비별 운영 현황, 검사 시간, 수율 및 불량 통계 모니터링 화면 구현',
                en: 'Implemented monitoring views for per-equipment operational status, tact time, yield, and defect statistics',
              },
              {
                ko: '모델 관리·배포·로드·이력 조회 및 실시간 진행률 표시 기능 개발',
                en: 'Built model management, deployment, loading, history tracking, and real-time progress display features',
              },
              {
                ko: 'C# WPF로 먼저 개발했던 Q-Log Analyzer의 불량 코드 재분류, LOT 형식 검증, 통계 재집계 기능을 Monitoring에 통합',
                en: 'Integrated defect-code reclassification, LOT format validation, and statistical reaggregation from the C# WPF Q-Log Analyzer into Monitoring',
              },
              {
                ko: '검사 데이터의 Excel·CSV 리포트 내보내기 기능 개발',
                en: 'Developed Excel and CSV report export functionality for inspection data',
              },
            ],
          },
          {
            subtitle: {
              ko: '설비 Client 및 시스템 연동',
              en: 'Equipment Client & System Integration',
            },
            bullets: [
              {
                ko: 'Python 기반 설비 PC Client TUI 개발',
                en: 'Developed the Python-based equipment PC Client TUI',
              },
              {
                ko: 'WebSocket·Heartbeat를 활용한 서버 통신 및 연결 상태 관리',
                en: 'Implemented server communication and connection state management using WebSocket and Heartbeat',
              },
              {
                ko: 'Windows Named Pipe 기반 Vision 검사 SW–Client 간 IPC 구현',
                en: 'Implemented IPC between the Vision inspection SW and Client using Windows Named Pipe',
              },
              {
                ko: '통신 실패 시 자동 재시도 및 세션 복구 기능 개발',
                en: 'Developed automatic retry and session recovery mechanisms upon communication failure',
              },
              {
                ko: '모델 다운로드·무결성 검증·원자적 파일 교체 및 비정상 종료 후 상태 복구 기능 구현',
                en: 'Implemented model download, integrity verification, atomic file replacement, and post-crash state recovery',
              },
              {
                ko: 'Velopack 기반 Client 업데이트 및 Windows 자동 실행 기능 개발',
                en: 'Built Velopack-based Client auto-update and Windows startup registration features',
              },
            ],
          },
          {
            subtitle: {
              ko: '이미지·로그 수집 및 처리',
              en: 'Image & Log Collection and Processing',
            },
            bullets: [
              {
                ko: '검사 이미지 수동·예약 수집 및 작업 진행률 관리 기능 개발',
                en: 'Developed manual and scheduled inspection image collection with job progress management',
              },
              {
                ko: '최대 5GB 수준의 수집 파일을 위한 디스크 스트리밍 다운로드 구현',
                en: 'Implemented disk-streaming downloads capable of handling collection archives up to 5GB',
              },
              {
                ko: 'Handler Inspector 로그 수집 및 네트워크 공유 경로 재연결 기능 개발',
                en: 'Developed Handler Inspector log collection and automatic reconnection for network share paths',
              },
              {
                ko: '대용량 로그 처리 Worker 분리 및 과거 로그 Catch-up 기능 개발',
                en: 'Separated large-scale log processing into dedicated Workers and implemented historical log Catch-up',
              },
              {
                ko: '로그 표시 처리를 별도 스레드로 분리하여 Client UI 프리징 문제 해결',
                en: 'Resolved Client UI freezing by isolating log display processing onto a separate thread',
              },
            ],
          },
        ],
      },
      {
        title: {
          ko: 'Teaching — 결함 분석 및 검사 조건 관리',
          en: 'Teaching — Defect Analysis & Inspection Condition Management',
        },
        description: {
          ko: '결함 분포를 정량 분석·시각화하고 군집 기반 라벨링 및 검사 조건 검증을 수행하는 Teaching 엔진과 인터페이스를 개발했습니다.',
          en: 'Developed the Teaching analytics engine, interactive visualizations, and DLL interface for defect distribution analysis, cluster labeling, and inspection condition verification.',
        },
        bullets: [
          {
            ko: 'C# 기반 HDBSCAN 군집 분석 및 2D Gaussian KDE 결함 분포 분석 엔진 개발',
            en: 'Developed a C#-based HDBSCAN clustering and 2D Gaussian KDE defect distribution analysis engine',
          },
          {
            ko: '결함 히트맵·등고선·핫스팟 시각화 및 미니맵 탐색 기능 구현',
            en: 'Implemented defect heatmap, contour, and hotspot visualizations along with minimap navigation',
          },
          {
            ko: 'ROI별 영상 탐색, 위치 표시 및 확대 뷰어를 지원하는 Workbench 개발',
            en: 'Built a Workbench supporting per-ROI image exploration, location indicators, and zoom viewers',
          },
          {
            ko: '군집 단위 라벨링, 개별 라벨 수정 및 예외 표본 검수 기능 개발',
            en: 'Developed cluster-level labeling, individual label editing, and outlier/exception sample review features',
          },
          {
            ko: 'GMM·HDBSCAN·임베딩 활용 군집 분석 옵션과 특징 변환 기능 구현',
            en: 'Implemented clustering options utilizing GMM, HDBSCAN, and embeddings alongside feature transformation functions',
          },
          {
            ko: '시그니처 결과 시각화, 승인본 비교 및 검증 흐름 개발',
            en: 'Developed signature result visualization, approved-baseline comparison, and verification workflows',
          },
          {
            ko: 'Vision 검사 SW와 Teaching 기능 간 DLL 인터페이스 구현',
            en: 'Implemented the DLL interface bridging the Vision inspection software and Teaching module',
          },
        ],
      },
      {
        title: {
          ko: 'Engineering — AI 모델 학습·평가 및 실험 관리',
          en: 'Engineering — AI Model Training, Evaluation & Experiment Management',
        },
        description: {
          ko: '데이터셋·Encoder 관리부터 분류 Head 학습·평가, AI Experiment Lab 실험 실행 및 파생 Encoder 운영 적용까지 이어지는 AI Engineering 워크플로를 개발했습니다.',
          en: 'Built the end-to-end AI Engineering workflow spanning dataset/encoder management, classification head training and evaluation, AI Experiment Lab matrix runs, and derived encoder operationalization.',
        },
        subSections: [
          {
            subtitle: {
              ko: '모델 및 데이터 관리',
              en: 'Model & Data Management',
            },
            bullets: [
              {
                ko: 'Dataset Manager, Training, Evaluation, Registry 및 Recommendation Lab 개발',
                en: 'Developed Dataset Manager, Training, Evaluation, Registry, and Recommendation Lab modules',
              },
              {
                ko: '데이터셋 표본 관리, 버전 고정 및 학습·검증·테스트 분할 기능 구현',
                en: 'Implemented dataset sample management, version pinning, and train/validation/test split features',
              },
              {
                ko: 'DINOv2·DINOv3·CNN 기반 Encoder 등록 및 관리 기능 개발',
                en: 'Developed registration and management features for DINOv2, DINOv3, and CNN-based Encoders',
              },
              {
                ko: '신규 이미지 자동 임베딩 큐 및 모델 파일 무결성·호환성 검증 기능 구현',
                en: 'Implemented an automatic embedding queue for new images and model file integrity/compatibility validation',
              },
              {
                ko: 'GOOD/NG 분류 Head 학습·점수 계산·저장 API 개발',
                en: 'Developed APIs for training, scoring, and saving GOOD/NG classification heads',
              },
              {
                ko: 'PCA 임베딩 시각화, 유사 이미지 검색 및 분류 성능 평가 기능 구현',
                en: 'Implemented PCA embedding visualization, similar-image retrieval, and classification performance evaluation',
              },
            ],
          },
          {
            subtitle: {
              ko: 'AI Experiment Lab',
              en: 'AI Experiment Lab',
            },
            bullets: [
              {
                ko: 'AI Worker 기반 Encoder 실험 실행 기능 개발',
                en: 'Developed AI Worker-based Encoder experiment execution capabilities',
              },
              {
                ko: '이미지·정량 특징·혼합 입력과 특징 및 클래스 가중치 설정 지원',
                en: 'Supported image, quantitative-feature, and hybrid inputs along with feature and class weight configuration',
              },
              {
                ko: '실험 그룹(Matrix) 생성, 실행 상태 모니터링, 구성 복제·재실행 및 결과 보관 기능 개발',
                en: 'Built experiment matrix creation, execution status monitoring, config cloning/re-running, and result archiving',
              },
              {
                ko: '임베딩 표현 품질, 클러스터링 지표, 신뢰구간 및 중복 이미지 제외 효과 분석 기능 구현',
                en: 'Implemented analysis for embedding representation quality, clustering metrics, confidence intervals, and duplicate-image exclusion effects',
              },
              {
                ko: '실험별 임베딩 공간과 유사 이미지 비교 기능 개발',
                en: 'Developed cross-experiment embedding space and similar-image comparison features',
              },
              {
                ko: '실험 결과를 임베딩 레시피로 저장하고 파생 Encoder 생성·재임베딩으로 연결하는 운영 적용 기능 개발',
                en: 'Implemented operationalization workflows saving experiment results as embedding recipes and linking them to derived Encoder generation and re-embedding',
              },
            ],
          },
        ],
      },
    ],
    keyExperiences: [
      {
        title: { ko: 'Windows 설비 소프트웨어 개발', en: 'Windows Equipment SW Development' },
        description: {
          ko: 'Client TUI, Windows Named Pipe IPC, 서버 통신, 모델 배포 및 Velopack 자동 업데이트',
          en: 'Client TUI, Windows Named Pipe IPC, server communication, model deployment, and Velopack auto-updates',
        },
      },
      {
        title: { ko: '시스템 안정성', en: 'System Reliability' },
        description: {
          ko: '통신 재연결, 파일 무결성 검증, 원자적 파일 교체, 비정상 종료 후 상태 복구 및 UI 프리징 해결',
          en: 'Communication reconnection, file integrity verification, atomic replacement, post-crash state recovery, and UI freeze resolution',
        },
      },
      {
        title: { ko: 'Full-Stack 개발', en: 'Full-Stack Development' },
        description: {
          ko: '관리자 웹, REST API 연동, 설비·호기·PC 계층 및 모델·데이터 통합 관리',
          en: 'Admin web, REST API integration, and unified management of equipment hierarchies, models, and datasets',
        },
      },
      {
        title: { ko: '데이터 처리', en: 'Data Processing' },
        description: {
          ko: '검사 이미지·로그 수집, 최대 5GB 대용량 파일 디스크 스트리밍, Worker 분리 및 통계 재집계',
          en: 'Inspection image/log collection, up to 5GB disk streaming, background workers, and statistical reaggregation',
        },
      },
      {
        title: { ko: 'AI Engineering', en: 'AI Engineering' },
        description: {
          ko: 'DINOv2·DINOv3·CNN Encoder 관리, GOOD/NG 분류 Head 학습·평가, AI Worker 및 Experiment Lab 개발',
          en: 'DINOv2/DINOv3/CNN Encoder management, GOOD/NG classification head training/eval, AI Worker, and Experiment Lab development',
        },
      },
      {
        title: { ko: 'Computer Vision 분석', en: 'Computer Vision Analytics' },
        description: {
          ko: 'HDBSCAN 결함 군집화, 2D Gaussian KDE 히트맵·등고선·핫스팟, ROI Workbench, PCA 임베딩 시각화 및 유사 이미지 검색',
          en: 'HDBSCAN defect clustering, 2D Gaussian KDE heatmaps/contours/hotspots, ROI Workbench, PCA visualization, and similar-image retrieval',
        },
      },
    ],
    challenges: [
      {
        title: {
          ko: '설비 Client 실시간 로그 표시로 인한 UI 프리징 해결',
          en: 'Resolving Equipment Client UI Freezing Under Continuous Log Output',
        },
        status: 'completed',
        problem: {
          ko: '설비 Client에서 연속적인 로그 수신·처리와 TUI 화면 갱신이 동일 실행 흐름에서 수행되어 UI 프리징과 응답 지연이 발생했습니다.',
          en: 'Continuous log ingestion, processing, and TUI rendering shared an execution flow, causing UI freezes and degraded responsiveness.',
        },
        investigation: {
          ko: '대용량 로그 수집·처리 경로와 UI 표시 스레드의 경계를 분석하고 백그라운드 Worker와 렌더링 책임을 분리했습니다.',
          en: 'Analyzed the boundary between high-volume log processing and UI rendering, separating background workers from display updates.',
        },
        currentStatus: {
          ko: '대용량 로그 처리 Worker를 분리하고 로그 표시 처리를 별도 스레드로 격리하여 Client UI 프리징 문제를 해결했습니다.',
          en: 'Resolved Client UI freezing by isolating log display processing into a dedicated thread and offloading heavy log parsing to workers.',
        },
      },
      {
        title: {
          ko: '모델 배포 무결성 보장 및 최대 5GB 수집 데이터 스트리밍',
          en: 'Atomic Model Deployment & Up to 5GB Streaming Data Collection',
        },
        status: 'completed',
        problem: {
          ko: '현장 설비 네트워크 환경에서 모델 배포 중 비정상 종료나 파일 손상 위험이 있었고, 최대 5GB에 달하는 수집 이미지·로그 처리 시 메모리 부하를 방지해야 했습니다.',
          en: 'Field equipment networks posed risks of interrupted transfers or corrupted model files, while up to 5GB collection archives required constant-memory handling.',
        },
        investigation: {
          ko: '다운로드 단계별 해시·무결성 검증, 임시 파일을 통한 원자적 교체, 작업 상태 체크포인트와 디스크 스트리밍 구조를 설계했습니다.',
          en: 'Designed staged integrity checks, atomic file replacement, state checkpointing, and chunked disk-streaming downloads.',
        },
        currentStatus: {
          ko: '모델 무결성 검증·원자적 파일 교체·비정상 종료 후 상태 복구 및 최대 5GB 디스크 스트리밍 다운로드를 안정적으로 구현했습니다.',
          en: 'Implemented verified atomic model replacement, post-crash state recovery, and disk-streaming downloads supporting files up to 5GB.',
        },
      },
      {
        title: {
          ko: 'Q-Log Analyzer 통합 및 필터 이후 통계 일관성 확보',
          en: 'Q-Log Analyzer Integration & Post-Filter Statistical Consistency',
        },
        status: 'completed',
        problem: {
          ko: '불량 코드 재분류 및 포함·제외 조건 적용 시 요약 집계, LOT 통계, 차트, Excel·CSV 내보내기 결과가 서로 달라질 수 있는 문제가 있었습니다.',
          en: 'Defect-code reclassification and include/exclude filters risked producing divergent totals across summary metrics, LOT views, charts, and exports.',
        },
        investigation: {
          ko: 'C# WPF로 선행 개발했던 Q-Log Analyzer의 파싱·검증 로직을 플랫폼 Monitoring 구조에 맞춰 재설계하고 단일 재집계 파이프라인으로 통합했습니다.',
          en: 'Redesigned the parsing and validation logic from the standalone C# WPF Q-Log Analyzer into a unified reaggregation pipeline within Monitoring.',
        },
        currentStatus: {
          ko: '불량 코드 재분류, LOT 형식 검증, 통계 재집계, 차트 시각화 및 Excel·CSV 리포트 내보내기가 동일한 기준의 결과 집합을 사용하도록 구현했습니다.',
          en: 'Unified defect-code reclassification, LOT format validation, statistical reaggregation, charts, and Excel/CSV exports around a single consistent dataset.',
        },
      },
    ],
    outcomes: [
      {
        ko: 'Vision 검사 SW(Windows Named Pipe IPC · DLL 인터페이스), 설비 Client(Python TUI) 및 서버(WebSocket · REST API) 간 통신·연동 기능 구현',
        en: 'Implemented communication and integration across the Vision inspection SW (Windows Named Pipe IPC & DLL), Equipment Client (Python TUI), and Server (WebSocket & REST API).',
      },
      {
        ko: '모델 배포의 무결성 검증, 원자적 파일 교체 및 비정상 종료 후 작업 상태 복구 기능 개발',
        en: 'Developed model deployment integrity verification, atomic file replacement, and post-crash task state recovery.',
      },
      {
        ko: '별도 스레드 처리 및 대용량 로그 Worker 분리로 설비 Client의 로그 화면 프리징 문제 해결',
        en: 'Resolved Equipment Client log screen freezing through dedicated thread separation and background log workers.',
      },
      {
        ko: '최대 5GB 수준의 대용량 검사 데이터 디스크 스트리밍 처리 및 Q-Log 재집계·Excel/CSV 리포트 내보내기 지원',
        en: 'Supported disk-streaming processing for up to 5GB inspection archives alongside Q-Log reaggregation and Excel/CSV report exports.',
      },
      {
        ko: 'C# 기반 HDBSCAN·2D Gaussian KDE 결함 분포 분석, 히트맵·등고선·핫스팟 시각화 및 ROI Workbench 등 Teaching 작업 기능 구현',
        en: 'Implemented Teaching capabilities including C# HDBSCAN & 2D Gaussian KDE defect analytics, heatmap/contour/hotspot visualizations, and the ROI Workbench.',
      },
      {
        ko: 'DINOv2·DINOv3·CNN Encoder 관리부터 분류 Head 학습·평가, AI Experiment Lab(Matrix 실험) 및 파생 Encoder 운영 적용까지 이어지는 Engineering 워크플로 개발',
        en: 'Developed the complete Engineering workflow from DINOv2/DINOv3/CNN Encoder management and classification head training to AI Experiment Lab matrix runs and derived encoder deployment.',
      },
    ],
    reflection: {
      ko: '설비 현장과 맞닿아 있는 플랫폼 개발에서는 웹·서버 기능뿐만 아니라 프로세스 간 통신(Windows Named Pipe, DLL), 네트워크 재연결, 원자적 파일 교체, 대용량 스트리밍 등 시스템 레벨의 안정성이 필수적이었습니다. Monitoring·Teaching·Engineering 전 영역을 연결하며 데이터 수집부터 결함 분석, AI 모델 실험과 현장 배포까지의 전체 사이클을 구축할 수 있었습니다.',
      en: 'Building a platform connected to factory floor equipment required system-level reliability—such as Windows Named Pipe IPC, DLL interfaces, automatic reconnection, atomic file replacement, and disk streaming—alongside full-stack web and AI engineering across Monitoring, Teaching, and Engineering.',
    },
  },
];

export const getProfessionalProject = (id: number) =>
  professionalProjects.find((project) => project.id === id);
