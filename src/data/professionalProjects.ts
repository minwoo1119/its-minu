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

export interface ProfessionalTechItem {
  name: string;
  usage: LocalizedText;
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
  overview: LocalizedText;
  scopeNote?: LocalizedText;
  problems: LocalizedText[];
  architecture: {
    label: LocalizedText;
    description: LocalizedText;
  }[];
  contributions: ProfessionalContributionItem[];
  challenges: {
    title: LocalizedText;
    status: ProfessionalProjectStatus;
    problem: LocalizedText;
    approach: LocalizedText;
    currentStatus: LocalizedText;
  }[];
  outcomes: LocalizedText[];
  techDetails: ProfessionalTechItem[];
}

export const professionalProjects: ProfessionalProject[] = [
  {
    id: 31,
    index: '01',
    title: {
      ko: 'Industrial Vision Software Development & Reliability',
      en: 'Industrial Vision Software Development & Reliability',
    },
    role: {
      ko: 'C++/MFC 검사 소프트웨어 기능 개발, 데이터 구조 개선 및 안정화',
      en: 'C++/MFC Inspection Software Feature Development, Data Structure & Reliability',
    },
    summary: {
      ko: 'C++/MFC 기반 산업용 머신비전 검사 소프트웨어의 기존 코드베이스를 분석해 신규 ROI 판정 기능과 Variation 결과 분리 로깅 구조를 구현했습니다. 현재는 멀티스레드 결과 저장 구간의 메모리 오류 분석과 AI 기반 이상 탐지 적용 가능성 연구를 진행하고 있습니다.',
      en: 'Analyzed an existing C++/MFC industrial machine vision inspection codebase to implement good-condition ROI logic and separated Variation result logging. Currently investigating multi-threaded memory errors in the result-saving path and evaluating AI-based anomaly detection feasibility.',
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
      'Debugging',
      'Multithreading',
      'Machine Vision',
    ],
    cardContributions: [
      {
        ko: '양품조건 ROI 판정 기능: 기존 ROI 판정 및 실행 구조를 분석해 특정 영역 결과를 양품으로 처리하는 특수 ROI 조건을 C++/MFC 검사 로직에 통합',
        en: 'Good-Condition ROI Logic: Analyzed existing ROI decision flows and integrated a special ROI rule treating specified region results as good in C++/MFC.',
      },
      {
        ko: 'Variation 결과 로깅 개선: 검사 결과 데이터 구조에 전용 저장 필드를 추가하고 기존 처리 흐름을 유지하면서 Variation 결과를 구분 기록하도록 수정',
        en: 'Variation Result Logging: Extended the inspection result data structure with dedicated fields to record Variation outcomes separately without breaking existing flows.',
      },
      {
        ko: '안정화 및 디버깅(진행 중): 검사 결과 저장 스레드 관련 Heap Corruption 및 비정상 종료 문제의 원인을 객체 수명주기와 스레드 경계 중심으로 분석 중',
        en: 'Reliability & Debugging (In Progress): Investigating heap corruption and abnormal termination in the result-saving thread across object lifetimes and thread boundaries.',
      },
      {
        ko: '이상 탐지 적용성 연구(진행 중): 기존 통계적 이상 검사 구조를 분석하고 EfficientAD·PatchCore 기반 특징 추출 및 이상 점수 계산의 적용 가능성 검토 중',
        en: 'Anomaly Detection Feasibility (In Progress): Reviewing existing statistical inspection flows and comparing EfficientAD and PatchCore feature extraction and scoring.',
      },
    ],
    overview: {
      ko: '산업용 머신비전 검사장비에서 동작하는 C++/MFC Windows 애플리케이션의 기능 확장과 안정화를 담당하고 있습니다. 기존 검사 알고리즘의 실행 경로와 결과 저장 구조를 코드 레벨에서 분석한 뒤, 현장 검사 조건을 반영하는 신규 판정 기능과 로깅 구조를 기존 동작과 호환되도록 구현했습니다. 멀티스레드 환경의 비정상 종료 원인 분석과 딥러닝 기반 이상 탐지 적용성 검토는 현재 진행 중입니다.',
      en: 'Responsible for extending features and improving runtime reliability of a C++/MFC Windows application running on industrial machine vision inspection equipment. After analyzing the existing inspection execution paths and result persistence flow at the code level, I implemented new decision logic and separated logging while preserving backward compatibility. Multi-threaded crash investigation and deep-learning anomaly detection evaluation are currently in progress.',
    },
    scopeNote: {
      ko: '담당 범위: C++/MFC 검사 소프트웨어 내 양품조건 ROI 판정 통합, Variation 결과 데이터 구조·로깅 수정, 결과 저장 스레드 메모리 오류 분석(진행 중), 이상 탐지 알고리즘 적용성 검토(진행 중).',
      en: 'Scope: Good-condition ROI integration in C++/MFC, Variation result data structure and logging updates, result-saving thread memory error investigation (in progress), and anomaly detection feasibility study (in progress).',
    },
    problems: [
      {
        ko: '기존 검사 프로그램에 새로운 영역별 양품 판정 조건을 추가하면서도 기존 검사 파이프라인과 판정 일관성을 유지해야 했습니다.',
        en: 'New region-specific good-condition rules had to be added without disrupting the existing inspection pipeline or decision consistency.',
      },
      {
        ko: 'Variation 검사 결과가 다른 검사 항목과 분리되지 않아 별도 추적과 사후 분석이 어려웠습니다.',
        en: 'Variation inspection outcomes were not separated from other inspection results in the logging structure, complicating tracking and post-analysis.',
      },
      {
        ko: '멀티스레드로 동작하는 검사 결과 저장 구간에서 Heap Corruption 및 프로그램 비정상 종료가 간헐적으로 관찰되어 원인 특정이 필요합니다.',
        en: 'Intermittent heap corruption and abnormal termination observed around the multi-threaded result-saving path require root-cause isolation.',
      },
      {
        ko: '기존 통계적 이상 검사 방식의 한계를 보완할 수 있는 딥러닝 기반 이상 탐지 알고리즘의 현장 적용 가능성을 검토해야 합니다.',
        en: 'Deep-learning anomaly detection alternatives need structured evaluation against existing statistical methods under field inspection constraints.',
      },
    ],
    architecture: [
      {
        label: { ko: '영상 입력 및 검사 실행', en: 'Acquisition & Inspection' },
        description: {
          ko: '장비 영상 입력과 기존 C++/MFC 검사 알고리즘 실행 흐름',
          en: 'Image acquisition and existing C++/MFC inspection algorithm execution',
        },
      },
      {
        label: { ko: '양품조건 ROI 판정', en: 'Good-Condition ROI' },
        description: {
          ko: '검사 조건에 따라 특정 영역 결과를 양품으로 조정하는 판정 계층',
          en: 'Decision layer applying configurable good-condition rules to designated ROIs',
        },
      },
      {
        label: { ko: '결과 구조화 및 분리 로깅', en: 'Structured Result Logging' },
        description: {
          ko: '검사 결과 데이터 구조 내 전용 필드로 Variation 결과를 구분 기록',
          en: 'Recording Variation results separately via dedicated fields in the result structure',
        },
      },
      {
        label: { ko: '멀티스레드 결과 저장', en: 'Multi-Threaded Persistence' },
        description: {
          ko: '스레드 간 데이터 전달, 객체 수명주기 관리 및 저장 처리 경계',
          en: 'Inter-thread data handoff, object lifecycle management, and storage boundary',
        },
      },
    ],
    contributions: [
      {
        title: {
          ko: '양품조건 ROI 판정 기능 구현',
          en: 'Good-Condition ROI Decision Implementation',
        },
        bullets: [
          {
            ko: '기존 C++/MFC 검사 프로그램의 ROI 판정 분기와 검사 실행 순서를 분석',
            en: 'Analyzed ROI decision branches and inspection execution order in the existing C++/MFC codebase',
          },
          {
            ko: '특정 영역에서 발생한 검사 결과를 검사 조건에 따라 양품으로 처리하는 특수 ROI 기능 개발',
            en: 'Developed a special ROI mechanism that evaluates results in configured regions as good',
          },
          {
            ko: '기존 검사 로직 및 UI 설정 흐름과 충돌하지 않도록 신규 ROI 판정 조건 통합',
            en: 'Integrated the new ROI criteria cleanly into the existing inspection logic and configuration flow',
          },
        ],
      },
      {
        title: {
          ko: 'Variation 검사 결과 데이터 구조 및 로깅 개선',
          en: 'Variation Result Data Structure & Logging Improvement',
        },
        bullets: [
          {
            ko: '기존 검사 실행부터 결과 집계·저장까지의 데이터 처리 흐름 분석',
            en: 'Traced the end-to-end data flow from inspection execution to result aggregation and saving',
          },
          {
            ko: '검사 결과 데이터 구조에 Variation 결과 전용 저장 필드를 추가해 기존 항목과 분리',
            en: 'Added dedicated storage fields for Variation outcomes in the inspection result data structure',
          },
          {
            ko: '기존 결과 처리 호환성을 유지하면서 Variation 결과를 구분 기록하도록 로깅 로직 수정',
            en: 'Updated logging logic to record Variation results separately while preserving existing result compatibility',
          },
        ],
      },
      {
        title: {
          ko: '멀티스레드 실행 안정화 및 디버깅 (진행 중)',
          en: 'Multi-Threaded Reliability & Debugging (In Progress)',
        },
        bullets: [
          {
            ko: 'C++/MFC 코드베이스의 스레드 생성·동기화 및 데이터 공유 구조 분석',
            en: 'Analyzing thread creation, synchronization, and shared-data structures across the C++/MFC codebase',
          },
          {
            ko: '검사 결과 저장 스레드와 연관된 Heap Corruption 및 비정상 종료 현상 조사',
            en: 'Investigating heap corruption and abnormal termination associated with the result-saving thread',
          },
          {
            ko: '메모리 할당·해제 경계, 객체 수명주기, 스레드 간 데이터 전달 흐름을 점검하며 원인 분석 진행 중',
            en: 'Reviewing allocation/deallocation boundaries, object lifetimes, and inter-thread handoffs to isolate the root cause',
          },
        ],
      },
      {
        title: {
          ko: 'AI 기반 이상 탐지 알고리즘 적용 가능성 연구 (진행 중)',
          en: 'AI-Based Anomaly Detection Feasibility Research (In Progress)',
        },
        bullets: [
          {
            ko: '기존 통계 기반 Variation 검사 구조와 현장 적용 방식 분석',
            en: 'Analyzed the existing statistical Variation inspection architecture and operational usage',
          },
          {
            ko: 'EfficientAD 및 PatchCore 기반 이상 탐지 방식의 특징 추출·이상 점수 계산 구조 비교',
            en: 'Compared feature extraction and anomaly scoring designs of EfficientAD and PatchCore',
          },
          {
            ko: '기존 검사 소프트웨어 환경에서의 추론 특성 및 통합 가능성 평가 진행 중',
            en: 'Evaluating inference characteristics and integration feasibility for the existing inspection software',
          },
        ],
      },
    ],
    challenges: [
      {
        title: {
          ko: '결과 저장 스레드의 Heap Corruption 및 비정상 종료 분석',
          en: 'Heap Corruption & Crash Analysis in the Result-Saving Thread',
        },
        status: 'in-progress',
        problem: {
          ko: '검사 결과 저장 스레드와 연결된 멀티스레드 실행 구간에서 Heap Corruption 및 프로그램 비정상 종료 현상이 관찰되었습니다.',
          en: 'Heap corruption and abnormal termination have been observed in multi-threaded paths tied to the result-saving thread.',
        },
        approach: {
          ko: '단정적인 추정 대신 공유 객체의 소유권, 메모리 할당·해제 시점, 스레드 간 데이터 전달 경계를 단계적으로 추적하며 재현 조건을 좁히고 있습니다.',
          en: 'Rather than assuming a single cause prematurely, I am systematically tracing object ownership, memory lifetime boundaries, and inter-thread data transfers to isolate reproducible conditions.',
        },
        currentStatus: {
          ko: '원인 분석 진행 중 (아직 해결 완료로 단정하지 않으며, 재현·진단·검증 단계를 순차 진행 중입니다.)',
          en: 'Analysis in progress (not yet resolved; proceeding through reproduction, memory diagnostics, and boundary verification).',
        },
      },
      {
        title: {
          ko: '기존 검사 구조와 딥러닝 이상 탐지 알고리즘의 적용성 비교',
          en: 'Evaluating Deep-Learning Anomaly Detection vs. Existing Inspection',
        },
        status: 'in-progress',
        problem: {
          ko: '기존 Variation 방식의 적용 한계를 보완하되, 현장 검사 소프트웨어의 실시간성 및 운용 조건을 충족하는 대안 검토가 필요합니다.',
          en: 'Alternatives to complement the existing Variation method must fit the latency and operational constraints of production inspection software.',
        },
        approach: {
          ko: 'EfficientAD와 PatchCore의 특징 추출 구조, 메모리 사용 특성, 이상 점수 계산 방식을 비교 분석하고 있습니다.',
          en: 'Comparing EfficientAD and PatchCore across feature extraction architecture, memory footprint, and anomaly score computation.',
        },
        currentStatus: {
          ko: '적용 가능성 평가 진행 중 (검증된 성능 수치는 확정 전입니다.)',
          en: 'Feasibility assessment in progress (no production performance gains are claimed yet).',
        },
      },
    ],
    outcomes: [
      {
        ko: '구현 완료: 기존 C++/MFC 검사 로직의 호환성을 유지하면서 특정 영역을 양품 처리하는 양품조건 ROI 판정 기능을 통합했습니다.',
        en: 'Completed: Integrated good-condition ROI decision logic into the existing C++/MFC inspection flow while preserving compatibility.',
      },
      {
        ko: '구현 완료: 검사 결과 데이터 구조와 로깅 흐름을 수정해 Variation 검사 결과를 다른 검사 결과와 구분하여 기록할 수 있게 했습니다.',
        en: 'Completed: Extended the inspection result data structure and logging logic to record Variation outcomes separately.',
      },
      {
        ko: '진행 중: 결과 저장 스레드의 Heap Corruption 원인 분석과 EfficientAD·PatchCore 기반 이상 탐지 적용성 평가를 지속 수행하고 있습니다.',
        en: 'In Progress: Continuing root-cause analysis for result-saving thread heap corruption and feasibility evaluation of EfficientAD/PatchCore.',
      },
    ],
    techDetails: [
      {
        name: 'C++ / MFC / Windows',
        usage: {
          ko: '기존 산업용 머신비전 검사 애플리케이션 코드베이스 분석, ROI 판정 로직 통합 및 결과 데이터 구조 수정',
          en: 'Analyzing legacy industrial vision codebase, integrating ROI decision logic, and updating result data structures',
        },
      },
      {
        name: 'Multithreading / Debugging',
        usage: {
          ko: '결과 저장 스레드 간 데이터 전달 흐름, 객체 수명주기 및 Heap Corruption 원인 추적',
          en: 'Tracing inter-thread data flows, object lifecycles, and heap corruption in the result-saving path',
        },
      },
      {
        name: 'Machine Vision / PatchCore / EfficientAD',
        usage: {
          ko: '기존 ROI·Variation 검사 구조 분석 및 딥러닝 이상 탐지 알고리즘 적용 가능성 비교 검토',
          en: 'Analyzing existing ROI/Variation inspection pipelines and evaluating deep-learning anomaly detection models',
        },
      },
    ],
  },
  {
    id: 30,
    index: '02',
    title: {
      ko: 'Industrial Vision Intelligence Platform',
      en: 'Industrial Vision Intelligence Platform',
    },
    role: {
      ko: 'Full-Stack 개발 (Monitoring, Teaching, Engineering 및 설비 Client·서버·AI Worker 일부)',
      en: 'Full-Stack Development (Monitoring, Teaching, Engineering, Equipment Client, Server & AI Worker)',
    },
    summary: {
      ko: '공장 내부망에서 여러 Vision 검사 설비를 중앙 관리하고, 검사 데이터 분석과 AI 모델의 티칭·학습·평가·배포를 지원하는 통합 플랫폼입니다. 플랫폼의 4개 영역(Monitoring, Teaching, Engineering, Library) 중 Monitoring·Teaching·Engineering과 설비 Client·서버·AI Worker 연동 기능 개발에 참여했습니다.',
      en: 'An integrated factory-intranet platform for centralized management of Vision inspection machines, inspection data analytics, and AI model teaching, training, evaluation, and deployment. Among the platform’s four areas (Monitoring, Teaching, Engineering, Library), I developed features across Monitoring, Teaching, Engineering, and related equipment Client, server, and AI Worker components.',
    },
    eyebrow: {
      ko: 'Monitoring · Teaching · Engineering · Systems Integration',
      en: 'Monitoring · Teaching · Engineering · Systems Integration',
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
      'Windows IPC',
      'REST API',
      'HDBSCAN',
      'Gaussian KDE',
      'AI Engineering',
    ],
    cardContributions: [
      {
        ko: 'Monitoring · 설비 Client: 관리자 웹·API 연동, Python 설비 Client TUI, WebSocket·Windows Named Pipe IPC, AI 모델 무결성 검증·원자적 교체·장애 복구·자동 업데이트 구현',
        en: 'Monitoring & Equipment Client: Built Admin Web/API integration, Python Client TUI, WebSocket & Windows Named Pipe IPC, and verified atomic model deployment with crash recovery and auto-updates.',
      },
      {
        ko: '데이터 수집·통합 및 UI 안정화: 검사 이미지·로그 수집과 대용량 파일 스트리밍 구현, 기존 C# WPF Q-Log Analyzer의 Monitoring 통합 및 별도 스레드 처리로 로그 화면 프리징 해결',
        en: 'Data Collection & UI Stability: Built image/log collection and large-file streaming, integrated the C# WPF Q-Log Analyzer into Monitoring, and resolved log UI freezing via thread isolation.',
      },
      {
        ko: 'Teaching · 결함 분석: C# 기반 HDBSCAN·Gaussian KDE 결함 분석과 핫스팟 시각화, ROI Workbench·군집 라벨링·시그니처 검증 및 기존 Vision 검사 SW와의 DLL 연동 구현',
        en: 'Teaching & Defect Analytics: Developed C# HDBSCAN and Gaussian KDE defect/hotspot analysis, ROI Workbench, cluster labeling, signature verification, and DLL integration with the Vision SW.',
      },
      {
        ko: 'Engineering · AI 운영 워크플로: DINOv2·DINOv3·CNN Encoder 관리·임베딩, GOOD/NG 분류 Head 학습·평가, PCA·유사 이미지 검색, AI Worker·Experiment Lab 및 임베딩 레시피 운영 적용 구현',
        en: 'Engineering & AI Workflow: Built DINOv2/DINOv3/CNN Encoder management, GOOD/NG classification head training/eval, PCA and similarity search, AI Experiment Lab, and embedding recipe deployment.',
      },
    ],
    overview: {
      ko: '공장 내부망 환경에서 다수의 Vision 검사 설비를 중앙에서 모니터링하고, 수집된 검사 이미지·로그를 바탕으로 결함 분석(Teaching)과 AI 모델 학습·실험·운영 배포(Engineering)까지 일관되게 연결하는 통합 플랫폼 개발 프로젝트입니다. 전체 플랫폼은 Monitoring, Teaching, Engineering, Library의 4개 영역으로 구성됩니다.',
      en: 'An integrated platform project on a factory intranet that centrally monitors multiple Vision inspection machines and connects collected images and logs to defect analysis (Teaching) and AI model training, experimentation, and deployment (Engineering). The overall platform consists of four modules: Monitoring, Teaching, Engineering, and Library.',
    },
    scopeNote: {
      ko: '담당 범위: Monitoring, Teaching, Engineering 영역과 관련 설비 PC Client, 서버 API·AI Worker 일부 개발에 참여했습니다. (Library는 전체 플랫폼의 구성 요소이며 본인의 직접 개발 범위가 아닙니다.)',
      en: 'Scope: Participated in developing Monitoring, Teaching, and Engineering along with related equipment PC Client, server API, and AI Worker features. (Library is a platform component outside my direct development scope.)',
    },
    problems: [
      {
        ko: '분산된 현장 Vision 검사 설비의 상태 확인, 모델 배포, 대용량 이미지·로그 수집을 설비마다 수동으로 처리해야 하는 운영 부담이 있었습니다.',
        en: 'Checking machine status, deploying AI models, and collecting large inspection images and logs across distributed Vision equipment required manual per-machine intervention.',
      },
      {
        ko: '현장 설비 PC 환경에서는 네트워크 단절, 비정상 종료, 대용량 파일 전송, 연속 로그 출력 시 UI 멈춤 같은 시스템 안정성 문제를 함께 해결해야 했습니다.',
        en: 'Factory equipment PCs required resilience against network drops, abnormal shutdowns, large-file transfers, and UI freezes under continuous log streaming.',
      },
      {
        ko: '독립 도구(C# WPF Q-Log Analyzer)로 분산되어 있던 검사 로그 분석과 결함 분포 분석, AI 모델 실험·운영 반영 과정을 하나의 플랫폼 흐름으로 통합할 필요가 있었습니다.',
        en: 'Standalone log analysis (C# WPF Q-Log Analyzer), defect distribution analysis, and AI model experimentation needed to be unified into a single operational workflow.',
      },
    ],
    architecture: [
      {
        label: { ko: 'Monitoring', en: 'Monitoring' },
        description: {
          ko: '관리자 웹 대시보드, 설비·모델 관리, Q-Log 재집계 및 Excel·CSV 내보내기',
          en: 'Admin web dashboard, equipment/model management, Q-Log reaggregation, and Excel/CSV export',
        },
      },
      {
        label: { ko: '설비 Client & IPC', en: 'Equipment Client & IPC' },
        description: {
          ko: 'Python TUI, WebSocket·Heartbeat, Windows Named Pipe IPC, 모델 원자적 교체 및 업데이트',
          en: 'Python TUI, WebSocket/Heartbeat, Windows Named Pipe IPC, atomic model replacement, and updates',
        },
      },
      {
        label: { ko: 'Teaching & DLL', en: 'Teaching & DLL' },
        description: {
          ko: 'C# HDBSCAN·Gaussian KDE 결함 분석, 핫스팟·ROI Workbench 및 검사 SW DLL 연동',
          en: 'C# HDBSCAN/Gaussian KDE defect analytics, hotspot/ROI Workbench, and Vision SW DLL interface',
        },
      },
      {
        label: { ko: 'Engineering & Worker', en: 'Engineering & Worker' },
        description: {
          ko: 'DINOv2·DINOv3·CNN Encoder, GOOD/NG 분류 Head, Experiment Lab 및 임베딩 레시피 적용',
          en: 'DINOv2/DINOv3/CNN Encoders, GOOD/NG classification head, Experiment Lab, and recipe deployment',
        },
      },
    ],
    contributions: [
      {
        title: {
          ko: 'Monitoring — 설비 관리, Client 연동 및 데이터 수집',
          en: 'Monitoring — Equipment Management, Client IPC & Data Collection',
        },
        subSections: [
          {
            subtitle: {
              ko: '관리자 웹 및 검사 데이터 대시보드',
              en: 'Admin Web & Inspection Data Dashboard',
            },
            bullets: [
              {
                ko: '설비 관리자 웹 초기 구축 및 서버 REST API 연동',
                en: 'Initial build of the equipment Admin Web and server REST API integration',
              },
              {
                ko: '설비 계층 관리, 신규 Client 승인·반려, 운영 현황·수율·불량 통계 대시보드 구현',
                en: 'Implemented equipment hierarchy management, new Client approval/rejection, and yield/defect dashboards',
              },
              {
                ko: 'AI 모델 배포·로드·이력 조회 및 실시간 진행률 표시 기능 개발',
                en: 'Developed AI model deployment, loading, history tracking, and real-time progress reporting',
              },
              {
                ko: '독립적으로 개발했던 C# WPF Q-Log Analyzer의 불량 코드 재분류·LOT 형식 검증·통계 재집계 기능을 Monitoring에 통합 및 Excel·CSV 내보내기 지원',
                en: 'Integrated defect reclassification, LOT format validation, and statistical reaggregation from the standalone C# WPF Q-Log Analyzer into Monitoring with Excel/CSV export',
              },
            ],
          },
          {
            subtitle: {
              ko: '설비 Client, IPC 및 안정적 모델 배포',
              en: 'Equipment Client, IPC & Reliable Model Deployment',
            },
            bullets: [
              {
                ko: 'Python 기반 설비 PC Client TUI 개발 및 WebSocket·Heartbeat 연결 상태 관리',
                en: 'Developed Python-based equipment PC Client TUI with WebSocket and Heartbeat connection tracking',
              },
              {
                ko: 'Windows Named Pipe 기반 Vision 검사 SW–Client 간 IPC 구현 및 통신 실패 시 자동 재시도·세션 복구',
                en: 'Implemented Windows Named Pipe IPC between Vision inspection SW and Client with automatic retry and session recovery',
              },
              {
                ko: 'AI 모델 다운로드·무결성 검증·원자적 파일 교체·장애 복구 및 Velopack 기반 자동 업데이트·Windows 자동 실행 구현',
                en: 'Implemented model download integrity checks, atomic file replacement, crash recovery, Velopack auto-updates, and Windows auto-start',
              },
              {
                ko: '검사 이미지·로그 수집 및 대용량 파일 디스크 스트리밍 다운로드 구현, 별도 스레드 처리로 로그 화면 UI 프리징 해결',
                en: 'Implemented inspection image/log collection with large-file disk streaming and resolved Client log UI freezing via dedicated threading',
              },
            ],
          },
        ],
      },
      {
        title: {
          ko: 'Teaching — 결함 분포 분석, Workbench 및 DLL 연동',
          en: 'Teaching — Defect Distribution Analytics, Workbench & DLL Integration',
        },
        bullets: [
          {
            ko: 'C# 기반 HDBSCAN 군집 분석 및 2D Gaussian KDE 결함 분포·핫스팟 분석 엔진 개발',
            en: 'Developed C#-based HDBSCAN clustering and 2D Gaussian KDE defect distribution and hotspot engine',
          },
          {
            ko: '결함 히트맵·등고선·핫스팟 시각화, 미니맵 탐색 및 ROI별 영상 탐색·확대 뷰어 Workbench 구현',
            en: 'Implemented defect heatmap, contour, and hotspot visualizations with minimap navigation and per-ROI Workbench viewer',
          },
          {
            ko: '군집 단위 라벨링, 개별 라벨 수정, 예외 표본 검수 및 시그니처 결과 시각화·승인본 비교 검증 흐름 개발',
            en: 'Built cluster-level labeling, individual label editing, outlier review, and signature verification workflows',
          },
          {
            ko: '기존 Vision 검사 소프트웨어와 Teaching 분석 기능을 연결하는 DLL 인터페이스 구현',
            en: 'Implemented the DLL interface connecting the existing Vision inspection software with Teaching analysis capabilities',
          },
        ],
      },
      {
        title: {
          ko: 'Engineering — Encoder 관리, 분류 학습 및 Experiment Lab',
          en: 'Engineering — Encoder Management, Classification & Experiment Lab',
        },
        bullets: [
          {
            ko: '데이터셋 표본 관리·버전 고정·학습/검증/테스트 분할 및 DINOv2·DINOv3·CNN 기반 Encoder 등록·이미지 임베딩 관리 구현',
            en: 'Implemented dataset version pinning, train/val/test splits, and DINOv2/DINOv3/CNN Encoder registration with automated image embedding',
          },
          {
            ko: 'GOOD/NG 분류 Head 학습·점수 계산·저장 API와 PCA 임베딩 시각화·유사 이미지 검색·모델 성능 평가 기능 개발',
            en: 'Built GOOD/NG classification head training/scoring APIs alongside PCA visualization, similar-image search, and evaluation views',
          },
          {
            ko: 'AI Worker와 Experiment Lab 기반 다중 조건 실험(Matrix) 실행·모니터링·구성 복제·표현 품질 및 클러스터링 지표 비교 기능 개발',
            en: 'Developed AI Worker and Experiment Lab matrix runs with monitoring, config cloning, and embedding/clustering quality comparison',
          },
          {
            ko: '실험 결과를 운영용 임베딩 레시피로 저장하고 파생 Encoder 생성·재임베딩으로 연결하는 운영 적용 워크플로 구현',
            en: 'Built operational workflows saving experiment outcomes as embedding recipes linked to derived Encoder generation and re-embedding',
          },
        ],
      },
    ],
    challenges: [
      {
        title: {
          ko: '설비 Client 로그 표시로 인한 UI 프리징 해결',
          en: 'Resolving Equipment Client UI Freezing During Log Output',
        },
        status: 'completed',
        problem: {
          ko: '연속적인 설비 로그 처리와 TUI 화면 렌더링이 같은 실행 흐름에 묶여 로그량이 증가할 때 UI 프리징이 발생했습니다.',
          en: 'Continuous log ingestion and TUI rendering shared an execution thread, causing UI freezes under heavy log output.',
        },
        approach: {
          ko: '대용량 로그 처리 Worker와 화면 표시 스레드의 경계를 분리해 UI 갱신이 백그라운드 I/O에 블로킹되지 않도록 재구성했습니다.',
          en: 'Decoupled heavy log processing workers from display rendering on a separate thread so UI updates are never blocked by I/O.',
        },
        currentStatus: {
          ko: '해결 완료 — 로그 표시 처리를 별도 스레드로 분리하여 Client UI 프리징 문제를 해소했습니다.',
          en: 'Resolved — isolated log display processing onto a separate thread, eliminating Client UI freezes.',
        },
      },
      {
        title: {
          ko: '현장 모델 배포 안정성 및 대용량 파일 스트리밍',
          en: 'Reliable On-Site Model Deployment & Large-File Streaming',
        },
        status: 'completed',
        problem: {
          ko: '현장 설비 PC의 네트워크 단절이나 비정상 종료 시 모델 파일 손상 위험이 있었으며, 대용량 수집 파일 전송 시 메모리 급증을 방지해야 했습니다.',
          en: 'Network interruptions or unexpected shutdowns risked corrupted model files, while large inspection archives risked memory spikes during transfer.',
        },
        approach: {
          ko: '다운로드 무결성 검증, 원자적 파일 교체, 비정상 종료 후 작업 상태 복구와 디스크 기반 스트리밍 다운로드 구조를 설계했습니다.',
          en: 'Designed integrity verification, atomic file replacement, post-crash state recovery, and disk-based streaming downloads.',
        },
        currentStatus: {
          ko: '구현 완료 — 무결성 검증·원자적 교체·장애 복구 및 대용량 파일 스트리밍을 적용했습니다.',
          en: 'Implemented — verified atomic replacement, crash recovery, and large-file streaming are in place.',
        },
      },
      {
        title: {
          ko: 'Q-Log Analyzer 통합 시 필터 기준 통계 일관성 확보',
          en: 'Post-Filter Statistical Consistency After Q-Log Integration',
        },
        status: 'completed',
        problem: {
          ko: '독립 도구(C# WPF)로 개발했던 로그 분석 기능을 플랫폼 Monitoring에 통합할 때, 불량 코드 재분류 조건에 따라 대시보드·LOT 집계·내보내기 결과가 달라질 우려가 있었습니다.',
          en: 'Integrating standalone C# WPF log analysis risked divergent totals across dashboards, LOT summaries, and exports under defect reclassification rules.',
        },
        approach: {
          ko: '불량 코드 재분류, LOT 형식 검증, 통계 재집계를 단일 데이터 흐름으로 정리해 차트와 Excel·CSV 내보내기가 동일한 결과 집합을 참조하도록 통합했습니다.',
          en: 'Consolidated reclassification, LOT validation, and reaggregation into a single data pipeline consumed consistently by charts and Excel/CSV exports.',
        },
        currentStatus: {
          ko: '구현 완료 — 필터 및 재분류 기준이 화면과 리포트 내보내기에 일관되게 반영됩니다.',
          en: 'Implemented — filters and reclassification criteria apply consistently across views and exported reports.',
        },
      },
    ],
    outcomes: [
      {
        ko: 'Vision 검사 SW(Windows Named Pipe IPC · DLL), 설비 Client(Python TUI), 서버(WebSocket · REST API) 간 연동 흐름 구현',
        en: 'Implemented integration across Vision inspection SW (Windows Named Pipe IPC & DLL), Equipment Client (Python TUI), and Server (WebSocket & REST API).',
      },
      {
        ko: 'AI 모델 배포의 무결성 검증, 원자적 파일 교체, 장애 복구 및 Velopack 기반 자동 업데이트 구현',
        en: 'Implemented integrity-checked atomic AI model replacement, crash recovery, and Velopack-based auto-updates.',
      },
      {
        ko: '로그 표시 스레드 분리를 통해 설비 Client UI 프리징 문제 해결 및 대용량 검사 데이터 스트리밍 지원',
        en: 'Resolved Equipment Client UI freezing via thread isolation and enabled streaming for large inspection archives.',
      },
      {
        ko: 'C# 기반 HDBSCAN·Gaussian KDE 결함 분석·핫스팟 시각화, ROI Workbench 및 검사 SW DLL 인터페이스 구현',
        en: 'Implemented C# HDBSCAN/Gaussian KDE defect analytics, hotspot visualization, ROI Workbench, and Vision SW DLL interface.',
      },
      {
        ko: 'DINOv2·DINOv3·CNN Encoder 관리부터 GOOD/NG 분류 Head 학습·Experiment Lab 실험 비교·운영용 임베딩 레시피 적용까지 이어지는 워크플로 구현',
        en: 'Built the Engineering workflow from DINOv2/DINOv3/CNN Encoder management and GOOD/NG head training to Experiment Lab comparison and operational embedding recipes.',
      },
    ],
    techDetails: [
      {
        name: 'Python / WebSocket / Windows IPC / Velopack',
        usage: {
          ko: '설비 PC Client TUI, 서버 양방향 통신·Heartbeat, Windows Named Pipe IPC, 대용량 스트리밍 및 자동 업데이트',
          en: 'Equipment Client TUI, server WebSocket/Heartbeat, Windows Named Pipe IPC, streaming transfers, and auto-updates',
        },
      },
      {
        name: 'C++ / C# / HDBSCAN / Gaussian KDE',
        usage: {
          ko: '결함 군집·밀도 분포 분석 엔진, 기존 Vision 검사 SW 연동 DLL 인터페이스 및 Q-Log 분석 로직 통합',
          en: 'Defect clustering/density engine, DLL interface to existing Vision inspection SW, and Q-Log analytics integration',
        },
      },
      {
        name: 'REST API / AI Engineering (DINOv2, DINOv3, CNN)',
        usage: {
          ko: '관리자 웹·서버 연동, Encoder 및 임베딩 관리, GOOD/NG 분류 Head 학습·평가, AI Worker 및 Experiment Lab',
          en: 'Admin Web/API integration, Encoder and embedding management, GOOD/NG head training/eval, AI Worker, and Experiment Lab',
        },
      },
    ],
  },
];

export const getProfessionalProject = (id: number) =>
  professionalProjects.find((project) => project.id === id);
