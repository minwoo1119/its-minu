import type { LocalizedText } from '../i18n';

export type TrackId =
  | 'ai-service-engineer'
  | 'computer-vision'
  | 'app-dev'
  | 'software-engineer';

export interface ProjectCardInfo {
  id: number;
  category: string;
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  techs: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TrackData {
  id: TrackId;
  canonicalPath: string;
  aliases: string[];
  navTitle: LocalizedText;
  badge: LocalizedText;
  portalDescription: LocalizedText;
  heroTags: string[];
  intro: {
    title: LocalizedText;
    role: LocalizedText;
    name: LocalizedText;
    sub: LocalizedText;
  };
  competencies: {
    mini: LocalizedText;
    title: LocalizedText;
    items: {
      icon: string;
      title: LocalizedText;
      description: LocalizedText;
    }[];
  };
  techs: {
    options: string[];
    labels: Record<string, LocalizedText>;
    subText: LocalizedText;
    stacks: Record<string, TechItem[]>;
  };
  projects: {
    subText: LocalizedText;
    titleText: LocalizedText;
    categoryOptions: string[];
    categoryLabels: Record<string, LocalizedText>;
    items: ProjectCardInfo[];
    otherProjects?: {
      subText: LocalizedText;
      titleText: LocalizedText;
      categoryOptions: string[];
      categoryLabels: Record<string, LocalizedText>;
      items: ProjectCardInfo[];
    };
  };
  printableResume: {
    role: LocalizedText;
    bio: LocalizedText;
    summary: LocalizedText[];
    skills: {
      title: LocalizedText;
      items: string;
    }[];
    projects: {
      title: string;
      role: string;
      tech: string;
      bullets: LocalizedText[];
    }[];
    research?: LocalizedText[];
  };
  pdfFilename: {
    ko: string;
    en: string;
  };
}

// -------------------------------------------------------------
// All Project Card Definitions
// -------------------------------------------------------------
const allCards = {
  // Vision & Industrial C++
  industrialVision: (category: string): ProjectCardInfo => ({
    id: 20,
    category,
    imgUrl: '/img/tech/industrial_vision_mfc.png',
    title: {
      ko: 'Industrial Machine Vision Software : 산업용 비전 검사장비 C++ 소프트웨어 개발',
      en: 'Industrial Machine Vision Software : Production C++ Inspection System',
    },
    description: {
      ko: '산업용 비전 검사장비의 기존 C++ 코드베이스를 분석하고 신규 검사 기능 및 SW 기능을 개발 (Professional Experience @ Synapse Imaging · 보안상 소스코드 비공개)',
      en: 'Analyzing legacy C++ codebases for industrial vision inspection equipment and developing new inspection algorithms and features (Professional Experience @ Synapse Imaging · Source code confidential).',
    },
    techs: ['C++', 'MFC', 'OpenCV', 'HALCON', 'Multithreading', 'Synapse Imaging'],
  }),

  edgeAnomaly: (category: string): ProjectCardInfo => ({
    id: 21,
    category,
    imgUrl: '/img/tech/edge_anomaly_patchcore.png',
    title: {
      ko: 'Industrial Anomaly Detection on Edge : 산업용 비전 이상 탐지 및 Edge 추론 최적화',
      en: 'Industrial Anomaly Detection on Edge : PatchCore & Jetson TensorRT Inference',
    },
    description: {
      ko: 'PatchCore 비지도 이상 탐지 모델 학습 및 Jetson Orin Nano 타겟 TensorRT FP16/INT8 양자화 가속 (지연시간 14ms, 70 FPS 실시간 C++ 추론 엔진 구축)',
      en: 'PatchCore unsupervised anomaly detection with TensorRT FP16/INT8 quantization for ultra-low latency (14ms, 70 FPS) C++ inference on Jetson Orin Nano.',
    },
    techs: ['C++', 'TensorRT', 'Jetson Orin Nano', 'PatchCore', 'ONNX', 'CUDA'],
  }),

  pipetOcr: (category: string): ProjectCardInfo => ({
    id: 1,
    category,
    imgUrl: '/img/tech/pipet_detection.png',
    title: {
      ko: 'Micro-pipette Detection & Hybrid OCR System',
      en: 'Micro-pipette Detection & Hybrid OCR System',
    },
    description: {
      ko: 'YOLO 객체 검출 + Custom CNN + PaddleOCR 파이프라인의 TensorRT C++ 가속 최적화를 통한 추론 지연 시간 73% 단축 (300ms → 80ms) 및 정밀 수치 판독',
      en: 'Optimized hybrid vision pipeline with YOLO, Custom CNN, PaddleOCR, and TensorRT C++ acceleration, cutting latency by 73% (300ms -> 80ms).',
    },
    techs: ['C++', 'TensorRT', 'OpenCV', 'YOLO', 'PaddleOCR', 'ONNX', 'Python'],
  }),

  semParticle: (category: string): ProjectCardInfo => ({
    id: 2,
    category,
    imgUrl: '/img/tech/sem_analyzer_dashboard.png',
    title: {
      ko: 'SEM Particle Analyzer : 전자현미경 입자 정량 분석 소프트웨어',
      en: 'SEM Particle Analyzer : SEM Image Particle Quantitative Analysis',
    },
    description: {
      ko: 'OpenCV Watershed 입자 분할, 거리 변환(Distance Transform) 및 적응형 CLAHE 기반 나노/마이크로 응집 입자 분리 및 Feret Diameter 정량 계측',
      en: 'Automated SEM nano/micro particle quantitative analyzer applying OpenCV Watershed, Distance Transform, and CLAHE to measure Feret Diameters.',
    },
    techs: ['OpenCV', 'Watershed', 'Image Processing', 'CLAHE', 'C# .NET 8', 'ScottPlot'],
  }),

  sevenSegmentOcr: (category: string): ProjectCardInfo => ({
    id: 3,
    category,
    imgUrl: '/img/tech/seven_segment_ocr_dashboard.png',
    title: {
      ko: 'Video-based 7-Segment OCR System : 실시간 계측기 디지털 수치 인식',
      en: 'Video-based 7-Segment OCR System',
    },
    description: {
      ko: 'C++/MFC 멀티스레드 영상 링 버퍼 및 OpenCV 기반 연속 비디오 스트림에서 7-Segment 디스플레이 자동 검출 및 디지털 수치 고속 실시간 판독',
      en: 'High-speed C++/MFC multi-threaded ring buffer and OpenCV vision system detecting and reading 7-segment displays in real-time video streams.',
    },
    techs: ['C++', 'MFC', 'OpenCV', 'Multithreading', 'Ring Buffer', 'Template Matching'],
  }),

  qlogAnalyzer: (category: string): ProjectCardInfo => ({
    id: 4,
    category,
    imgUrl: '/img/tech/qlog_dashboard.png',
    title: {
      ko: 'Q-Log Analyzer & Vision System Utilities',
      en: 'Q-Log Analyzer & Vision System Utilities',
    },
    description: {
      ko: '산업용 비전 검사장비의 대용량 실시간 진단 로그 정규식 파싱, 이상 발생 통계 시각화 및 분석 리포트 자동 생성 유틸리티',
      en: 'High-throughput vision log parsing engine, real-time statistical anomaly visualization, and automated inspection report generator.',
    },
    techs: ['C#', 'WPF', 'Regex Engine', 'Vision Utilities', 'Data Visualization', 'Excel Export'],
  }),

  llmAlignment: (category: string): ProjectCardInfo => ({
    id: 5,
    category,
    imgUrl: '/img/tech/llm_alignment_pipeline.png',
    title: {
      ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계 연구',
      en: 'DPO Effectiveness & Limits in Instruction-Tuned LLMs',
    },
    description: {
      ko: 'Gemma 모델 기반 SFT와 DPO 정렬 효과를 MMLU, KLUE 및 LLM-as-a-Judge로 정량 검증한 연구',
      en: 'Empirical research analyzing SFT and DPO alignment boundaries using Gemma, KLUE, and LLM-as-a-Judge.',
    },
    techs: ['Python', 'PyTorch', 'Gemma', 'Unsloth', 'DPO', 'SFT', 'HuggingFace'],
  }),

  slowAgingLlm: (category: string): ProjectCardInfo => ({
    id: 15,
    category,
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: '저속노화 데이터셋 기반 LLM 파인튜닝',
      en: 'Slow-Aging Domain LLM Fine-Tuning',
    },
    description: {
      ko: '의학·건강 문헌을 정제한 도메인 특화 JSONL 데이터셋 구축 및 Unsloth LoRA 경량 파인튜닝 연구',
      en: 'Domain Q&A dataset pipeline and lightweight LoRA fine-tuning for health literature.',
    },
    techs: ['Python', 'Gemma', 'Unsloth', 'LoRA', 'JSONL', 'PyTorch'],
  }),

  // Mobile App Projects
  geumpumta: (category: string): ProjectCardInfo => ({
    id: 7,
    category,
    imgUrl: '/img/tech/geumpumta_wifi_ranking.png',
    title: {
      ko: '금품타 : 대학생 학습시간 인증 및 실시간 랭킹 모바일 앱',
      en: 'Geumpumta: Study Time Tracker & Live Leaderboard App',
    },
    description: {
      ko: 'iOS / Android 양대 마켓 출시. 교내 Wi-Fi IP 게이트웨이 인증, Heartbeat 무오차 타이머, iOS Screen Time API 연동',
      en: 'Live on App Store & Google Play. Campus Wi-Fi IP verification, zero-drift heartbeat timer, and Screen Time API.',
    },
    techs: ['Flutter', 'Dart', 'Riverpod', 'iOS Screen Time', 'App Store', 'Play Store'],
  }),

  uhdyl: (category: string): ProjectCardInfo => ({
    id: 8,
    category,
    imgUrl: '/img/tech/uhdyl.png',
    title: {
      ko: 'UhDyL : 못난이 농산물 모바일 직거래 커머스 플랫폼',
      en: 'UhDyL: Ugly Produce Direct-to-Consumer Mobile Commerce',
    },
    description: {
      ko: 'React Native & Expo 기반 농가-소비자 직거래 앱. Zustand 장바구니 전역 상태, 무한 스크롤 및 결제 UX',
      en: 'React Native & Expo direct-trade mobile app. Global Zustand cart management and infinite scroll pagination.',
    },
    techs: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Mobile UX'],
  }),

  chirpaid: (category: string): ProjectCardInfo => ({
    id: 9,
    category,
    imgUrl: '/img/tech/chripaid.png',
    title: {
      ko: 'Chirp-aid : 투명성을 강조한 보육원 기부 & 채팅 앱 (KCI 논문)',
      en: 'Chirp-aid: Transparent Orphanage Donation & Chat App (KCI Paper)',
    },
    description: {
      ko: '기부 투명성 제고를 위한 Flutter 모바일 앱. 1:1 실시간 채팅, 영수증 인증 피드 (KCI 등재 학술지 논문 게재)',
      en: 'Flutter mobile app ensuring donation transparency with real-time chat and verified feeds (KCI-indexed paper).',
    },
    techs: ['Flutter', 'Dart', 'Riverpod', 'WebSocket', 'KCI Indexed'],
  }),

  yeSang: (category: string): ProjectCardInfo => ({
    id: 16,
    category,
    imgUrl: '/img/tech/yesang_main.png',
    title: {
      ko: '예상 (Yesang) : 경조사 금전 기록 및 일정 관리 모바일 장부 앱',
      en: 'Yesang: Family Event Expense & Schedule Management Mobile App',
    },
    description: {
      ko: 'React Native & Expo Router 기반 개인 장부 앱. 서버 API / 게스트 모드 SecureStore 도메인 추상화, TanStack Query, Zod 폼 검증',
      en: 'React Native & Expo Router personal expense ledger with unified domain abstraction for server APIs and guest SecureStore caching.',
    },
    techs: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'TanStack Query', 'SecureStore', 'Zod'],
  }),

  saSang: (category: string): ProjectCardInfo => ({
    id: 17,
    category,
    imgUrl: '/img/tech/chripaid.png',
    title: {
      ko: 'SaSang (사상) : 사진으로 기록하는 개인 여행 지도 모바일 앱',
      en: 'SaSang: Personalized Photo Travel Map Mobile App',
    },
    description: {
      ko: 'GIS 행정경계 벡터 데이터와 react-native-svg ClipPath를 활용해 방문 지역을 여행 사진으로 채우는 인터랙티브 여행 지도 앱',
      en: 'Interactive React Native travel map dynamically clipping photos into GIS vector boundaries using SVG ClipPath and Reanimated.',
    },
    techs: ['React Native', 'Expo', 'TypeScript', 'react-native-svg', 'Reanimated', 'Zustand', 'Turborepo'],
  }),

  // Software Engineering & Full-stack Projects
  platePicks: (category: string): ProjectCardInfo => ({
    id: 10,
    category,
    imgUrl: '/img/tech/plate_picks.png',
    title: {
      ko: 'Plate Picks : 회식 메뉴 익명 투표 및 통계 분석 풀스택 플랫폼',
      en: 'Plate Picks: Anonymous Dining Vote & Statistical Analytics Platform',
    },
    description: {
      ko: 'React + NestJS + MySQL + Docker 풀스택 시스템. JWT 인증, 동시성 트랜잭션 격리, 실시간 차트 통계 분석',
      en: 'Full-stack platform in React, NestJS, MySQL, and Docker with JWT auth, ACID voting transactions, and live charts.',
    },
    techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Docker', 'TypeORM'],
  }),

  jobForeigner: (category: string): ProjectCardInfo => ({
    id: 6,
    category,
    imgUrl: '/img/tech/jobforeigner.png',
    title: {
      ko: 'JobForeigner (JobTalk) : 외국인 구인구직 다국어 채용 플랫폼',
      en: 'JobForeigner (JobTalk): Multilingual Employment Platform',
    },
    description: {
      ko: 'React + TS + FastAPI 기반 외국인 대상 다국어 채용 플랫폼. Kakao Map 기반 위치 필터링, TanStack Query 캐싱',
      en: 'Multilingual job portal in React, TS, and FastAPI with Kakao Map geospatial filtering and TanStack Query.',
    },
    techs: ['React', 'TypeScript', 'FastAPI', 'TanStack Query', 'Kakao Map'],
  }),

  joinUs: (category: string): ProjectCardInfo => ({
    id: 11,
    category,
    imgUrl: '/img/tech/joinus.png',
    title: {
      ko: 'JoinUs : 참여형 IT 트랙 추천 및 동아리 리크루팅 웹 서비스',
      en: 'JoinUs: Interactive IT Track Recommendation & Recruiting Service',
    },
    description: {
      ko: '동아리 지원자를 위한 성향 진단 및 트랙 추천 웹 서비스. 전년 대비 지원자 160% 증가 달성',
      en: 'Interactive personality assessment and track recommendation web app, boosting applicants by 160%.',
    },
    techs: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
  }),

  babzip: (category: string): ProjectCardInfo => ({
    id: 12,
    category,
    imgUrl: '/img/tech/babzip.png',
    title: {
      ko: 'Babzip : 나만의 맛집 저장 및 지도 아카이빙 웹 서비스',
      en: 'Babzip: Personal Restaurant Archive & Map-based Web Service',
    },
    description: {
      ko: 'Kakao Map API와 Zustand를 활용한 개인화 맛집 아카이빙 서비스. 장소 검색, 카테고리별 마커 클러스터링',
      en: 'Personalized food archive with Kakao Map API and Zustand, supporting search and marker clustering.',
    },
    techs: ['React', 'TypeScript', 'Zustand', 'Kakao Map API'],
  }),

  cakeWorkshop: (category: string): ProjectCardInfo => ({
    id: 13,
    category,
    imgUrl: '/img/tech/cake.png',
    title: {
      ko: '케이크공작소 : 해커톤 소셜 인터랙션 & 롤링페이퍼 플랫폼',
      en: 'Cake Workshop: Hackathon Social Interaction Platform',
    },
    description: {
      ko: '커스텀 캘린더와 반응형 편지 인터랙션을 제공하는 이벤트 플랫폼. 무중단 해커톤 배포 및 트래픽 대응',
      en: 'Event platform with custom calendar and responsive letter UI, deployed during a fast-paced hackathon.',
    },
    techs: ['React', 'JavaScript', 'Styled-components', 'Vite'],
  }),

  dograc: (category: string): ProjectCardInfo => ({
    id: 18,
    category,
    imgUrl: '/img/tech/dograc_main.jpg',
    title: {
      ko: 'dograc : 사내 기밀 유출 제로 로컬 오픈소스 데스크톱-웹 RAG 플랫폼',
      en: 'dograc: Zero Data Egress Local Desktop-Web Hybrid RAG Platform',
    },
    description: {
      ko: '외부 전송 데이터량 0 바이트 보장, 로컬 LLM/임베딩, 원클릭 데스크톱 런처 및 Docker/SQLite 자동 폴백 RAG 플랫폼',
      en: 'Zero Data Egress desktop-web hybrid RAG platform with local LLM, on-device embeddings, one-click launcher, and Docker/SQLite auto-fallback.',
    },
    techs: ['Next.js 14', 'FastAPI', 'Python', 'Qdrant', 'Ollama', 'bge-m3', 'Tkinter', 'Docker'],
  }),

  chwieolUpAi: (category: string): ProjectCardInfo => ({
    id: 19,
    category,
    imgUrl: '/img/tech/chwieolup_ai_main.png',
    title: {
      ko: '취얼업 AI (ChwieolUp-AI) : 채용 메일 분류 & 맞춤형 면접 회고 질문 생성 AI 서빙 시스템',
      en: 'ChwieolUp-AI: Recruitment Email Classification & Interview Retrospective AI Microservice',
    },
    description: {
      ko: 'Ollama(Gemma) & FastAPI 기반 채용 메일 전형 분석, 칸반 이동 추천 및 면접 회고 질문 생성 AI 서버 (Ubuntu Server 24.04 LTS / Docker 배포)',
      en: 'FastAPI & Ollama AI microservice for recruitment email stage classification, kanban updates, and retrospective question generation on Ubuntu Server & Docker.',
    },
    techs: ['Python', 'FastAPI', 'Ollama', 'Gemma', 'Pydantic v2', 'Docker', 'Ubuntu Server'],
  }),
};

// -------------------------------------------------------------
// Tracks Data
// -------------------------------------------------------------
export const tracksData: Record<TrackId, TrackData> = {
  // 0. Edge AI & AI Systems (SECONDARY)
  'ai-service-engineer': {
    id: 'ai-service-engineer',
    canonicalPath: '/ai-service-engineer',
    aliases: ['ai', 'applied-ai', 'ai-engineer', 'ai-service', 'ai-solution', 'llm', 'ax', 'ai-systems'],
    navTitle: {
      ko: 'Edge AI & AI Systems',
      en: 'Edge AI & AI Systems',
    },
    badge: {
      ko: 'Secondary Track · AI Systems',
      en: 'Secondary Track · AI Systems',
    },
    portalDescription: {
      ko: 'FastAPI/Docker 온프레미스 AI 서빙(ChwieolUp-AI), 엔터프라이즈 RAG 플랫폼(dograc), LLM SFT/DPO 정렬 연구(KIIT 금상)',
      en: 'On-premise AI serving microservices with FastAPI & Docker, enterprise RAG platforms, and LLM SFT/DPO alignment research.',
    },
    heroTags: ['LLM Fine-Tuning', 'RAG / Vector DB', 'FastAPI', 'Docker & Ubuntu', 'Ollama & vLLM', 'TensorRT'],
    intro: {
      title: {
        ko: '비전 엔지니어링을 확장하여 AI 서빙과 시스템을 완성하는 ',
        en: 'Scaling Vision Systems into On-Premise AI Serving Pipelines, ',
      },
      role: {
        ko: 'Edge AI & AI Systems Engineer',
        en: 'Edge AI & AI Systems Engineer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: 'C++ 및 비전 엔지니어링을 바탕으로, 온프레미스 AI 서빙(FastAPI, Docker, Ubuntu)과 LLM 파인튜닝/RAG 시스템을 구축하는 확장 역량입니다. 외부 클라우드 API 종속과 비용 없이 로컬 GPU와 온프레미스 인프라 상에서 안정적으로 동작하는 엔드투엔드 AI 시스템을 구현합니다.',
        en: 'Extending core C++ and vision expertise into on-premise AI serving (FastAPI, Docker, Ubuntu) and LLM fine-tuning/RAG pipelines, delivering self-hosted, air-gapped AI solutions without cloud token overhead.',
      },
    },
    competencies: {
      mini: {
        ko: 'Core Competencies',
        en: 'Core Competencies',
      },
      title: {
        ko: '주요 역량',
        en: 'Key Strengths',
      },
      items: [
        {
          icon: 'LLM',
          title: {
            ko: 'LLM Fine-Tuning & Alignment',
            en: 'LLM Fine-Tuning & Alignment',
          },
          description: {
            ko: 'Gemma 기반 LoRA/QLoRA 4-bit 경량 파인튜닝, SFT 및 DPO 선호도 정렬, 환각(Hallucination) 분석 및 LLM-as-a-Judge 자동 평가 프레임워크 구축 (2026 KIIT 학술대회 금상 수상)',
            en: 'Gemma-based LoRA/QLoRA fine-tuning, SFT & DPO preference alignment, hallucination analysis, and LLM-as-a-Judge automated evaluation pipelines (2026 KIIT Gold Award).',
          },
        },
        {
          icon: 'FastAPI',
          title: {
            ko: 'RAG Pipeline & Model Serving',
            en: 'RAG Pipeline & Model Serving',
          },
          description: {
            ko: '문서 업로드 → 파싱 → 임베딩(bge-m3) → Qdrant Vector DB → RAG 검색 → LLM 응답 인라인 인용 추적(Trace) 파이프라인 단독 구축. FastAPI 비동기 서빙 및 Pydantic v2 데이터 검증',
            en: 'Engineered modular RAG pipelines: document parsing, bge-m3 embedding, Qdrant Vector DB retrieval, and citation tracing. High-throughput async FastAPI serving with Pydantic v2.',
          },
        },
        {
          icon: 'Docker',
          title: {
            ko: '인프라 배포 & 실서비스 시스템 통합',
            en: 'Infra Deployment & Service Integration',
          },
          description: {
            ko: 'Ubuntu Server 24.04 LTS 및 Docker 기반의 컨테이너화 배포, Ollama 온프레미스 런타임 최적화. Next.js/React 프론트엔드 및 Spring Boot 백엔드와의 유기적 AI 서빙 연동',
            en: 'Orchestrating Ubuntu Server 24.04 LTS & Docker containerization with local Ollama runtimes, integrating AI microservices seamlessly with Next.js/React and Spring Boot systems.',
          },
        },
      ],
    },
    techs: {
      options: ['aiLlm', 'servingBackend', 'edgeVision'],
      labels: {
        aiLlm: {
          ko: 'LLM & AI Core',
          en: 'LLM & AI Core',
        },
        servingBackend: {
          ko: 'Serving & Infrastructure',
          en: 'Serving & Infrastructure',
        },
        edgeVision: {
          ko: 'Vision AI & Edge',
          en: 'Vision AI & Edge',
        },
      },
      subText: {
        ko: 'AI 모델 파인튜닝부터 서빙, 클라우드/온프레미스 배포, 서비스 통합에 활용되는 기술 스택입니다.',
        en: 'Tech stack applied across AI fine-tuning, model serving, Docker/Ubuntu deployment, and full-stack integration.',
      },
      stacks: {
        aiLlm: [
          { name: 'Ollama', icon: 'ollama' },
          { name: 'Qdrant', icon: 'qdrant' },
          { name: 'bge-m3', icon: 'huggingface' },
          { name: 'PyTorch', icon: 'pytorch' },
          { name: 'Unsloth', icon: 'python' },
          { name: 'Gemma', icon: 'google' },
          { name: 'LoRA / QLoRA', icon: 'python' },
          { name: 'SFT / DPO', icon: 'pytorch' },
          { name: 'HuggingFace', icon: 'huggingface' },
          { name: 'vLLM', icon: 'python' },
        ],
        servingBackend: [
          { name: 'FastAPI', icon: 'fastapi' },
          { name: 'Python', icon: 'python' },
          { name: 'Docker', icon: 'docker' },
          { name: 'Ubuntu Server', icon: 'ubuntu' },
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MinIO', icon: 'minio' },
          { name: 'NestJS', icon: 'nestjs' },
          { name: 'Redis', icon: 'redis' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'Git', icon: 'git' },
        ],
        edgeVision: [
          { name: 'YOLO', icon: 'yolo' },
          { name: 'TensorRT', icon: 'nvidia' },
          { name: 'ONNX', icon: 'onnx' },
          { name: 'OpenCV', icon: 'opencv' },
          { name: 'PaddleOCR', icon: 'baidu' },
          { name: 'CUDA', icon: 'nvidia' },
          { name: 'C++', icon: 'cplusplus' },
        ],
      },
    },
    projects: {
      subText: {
        ko: '모델 파인튜닝, RAG 파이프라인, 서빙 서버 및 서비스 개발 프로젝트 포트폴리오입니다.',
        en: 'AI model fine-tuning, modular RAG pipelines, serving microservices, and end-to-end applications.',
      },
      titleText: {
        ko: 'AI 서비스 프로젝트 포트폴리오',
        en: 'AI Service Project Portfolio',
      },
      categoryOptions: ['all'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
      },
      items: [
        allCards.dograc('all'),
        allCards.chwieolUpAi('all'),
        allCards.llmAlignment('all'),
        allCards.slowAgingLlm('all'),
        allCards.jobForeigner('all'),
      ],
    },
    printableResume: {
      role: {
        ko: 'AI 서비스 개발자 (Applied AI Engineer / AI Solution Developer)',
        en: 'AI Service Developer (Applied AI Engineer / AI Solution Developer)',
      },
      bio: {
        ko: 'AI 모델 파인튜닝/최적화부터 FastAPI 서빙, Docker/Ubuntu 온프레미스 인프라 배포, 사용자 서비스 연동까지 전 과정을 하나의 파이프라인으로 연결하는 AI 서비스 개발자 이민우입니다.',
        en: 'Applied AI Engineer specializing in bridging AI models to real-world services: from LLM fine-tuning to high-throughput FastAPI serving, Docker/Ubuntu deployment, and frontend integration.',
      },
      summary: [
        {
          ko: 'Next.js 14 + FastAPI + Qdrant + Ollama 기반 사내 기밀 유출 제로(Zero Data Egress) 데스크톱-웹 RAG 플랫폼 "dograc" 단독 구축 (원클릭 런처, Docker/SQLite 자동 폴백, pytest 59건 통과)',
          en: 'Solely architected Zero Data Egress desktop-web hybrid RAG platform "dograc" with Next.js 14, FastAPI, Qdrant, Ollama, one-click launcher, and Docker/SQLite fallback (59 pytests passed).',
        },
        {
          ko: 'Ubuntu Server 24.04 LTS 및 Docker 기반 Ollama(Gemma) 채용 메일 전형 분석 & 면접 회고 질문 생성 AI 서빙 서버 "ChwieolUp-AI" 구축 및 백엔드 연동',
          en: 'Engineered & deployed Ollama AI microservice "ChwieolUp-AI" on Ubuntu Server 24.04 LTS via Docker for email analysis and question generation.',
        },
        {
          ko: 'Gemma 기반 SFT / DPO 선호도 정렬 및 LLM-as-a-Judge 자동 평가 연구로 한국정보기술학회(KIIT) 2026 하계 금상, 2025 추계 은상 2년 연속 수상',
          en: 'Won consecutive KIIT Best Paper Awards (2026 Gold, 2025 Silver) for empirical Gemma SFT/DPO alignment and LLM-as-a-Judge evaluation.',
        },
        {
          ko: 'YOLO, Custom CNN, PaddleOCR 파이프라인의 ONNX 및 TensorRT FP16/INT8 가속 엔진 최적화를 통한 추론 지연 시간 73% 단축 (300ms → 80ms)',
          en: 'Accelerated YOLO/OCR pipelines by 73% (300ms -> 80ms) using ONNX Runtime and TensorRT FP16/INT8 engines on edge environments.',
        },
        {
          ko: 'FastAPI / NestJS 백엔드 API, Docker 컨테이너 오케스트레이션, React / Flutter 크로스플랫폼을 아우르는 엔드투엔드 서비스 통합 역량 보유',
          en: 'Demonstrated end-to-end integration across FastAPI/NestJS backends, Docker orchestration, and React/Flutter client applications.',
        },
      ],
      skills: [
        {
          title: { ko: 'AI & LLM Engineering', en: 'AI & LLM Engineering' },
          items: 'Ollama, vLLM, Qdrant (Vector DB), BAAI/bge-m3, RAG Pipeline, Gemma, LoRA/QLoRA (Unsloth), SFT/DPO, PyTorch, HuggingFace',
        },
        {
          title: { ko: 'Model Serving & Backend', en: 'Model Serving & Backend' },
          items: 'FastAPI, Pydantic v2, Python, NestJS, PostgreSQL, MySQL, MinIO, RESTful API, Redis, TypeORM',
        },
        {
          title: { ko: 'Vision AI & Edge Acceleration', en: 'Vision AI & Edge Acceleration' },
          items: 'YOLO, TensorRT, ONNX Runtime, OpenCV, PaddleOCR, CUDA, C++',
        },
        {
          title: { ko: 'Infrastructure & Deployment', en: 'Infrastructure & Deployment' },
          items: 'Docker, Docker Compose, Ubuntu Server 24.04 LTS, Nginx, Linux, Git, GitHub Actions',
        },
      ],
      projects: [
        {
          title: 'dograc (사내 기밀 유출 제로 로컬 데스크톱-웹 RAG 플랫폼)',
          role: 'Full-Stack & AI Engineer (1인 단독 개발, 100%)',
          tech: 'Next.js 14, FastAPI 0.115, Python, Qdrant, Ollama(Qwen2.5), bge-m3, Tkinter, Velopack, Docker/SQLite',
          bullets: [
            {
              ko: '사내 기밀 유출 제로(Zero Data Egress) 원칙 하에 로컬 LLM/임베딩 기반 데스크톱-웹 하이브리드 RAG 플랫폼 100% 단독 구축',
              en: 'Solely architected Zero Data Egress desktop-web hybrid RAG platform powered by local LLMs and on-device embeddings.',
            },
            {
              ko: '원클릭 Tkinter 런처(파이프 데드락 방지, 1초 헬스체크), Docker/SQLite 무중단 자동 폴백, 인라인 인용 배지 및 Trace 감사 드로어 구현 (pytest 59건 전건 통과)',
              en: 'Implemented one-click Tkinter launcher, Docker/SQLite auto-fallback, inline citation badges, and Trace audit drawer with 59 pytests passing 100%.',
            },
          ],
        },
        {
          title: 'ChwieolUp-AI (취업 준비 플랫폼 AI 서빙 마이크로서비스)',
          role: 'AI Engineer & MLOps (AI 서빙 전담)',
          tech: 'Python, FastAPI, Ollama, Gemma, Pydantic v2, Docker, Ubuntu Server 24.04 LTS',
          bullets: [
            {
              ko: 'Ollama(Gemma) 기반 채용 메일 전형 단계 자동 분류 및 맞춤형 면접 회고 질문 생성 파이프라인 개발',
              en: 'Developed Ollama (Gemma) pipeline for recruitment email stage classification and interview retrospective question generation.',
            },
            {
              ko: 'Ubuntu Server 24.04 LTS 환경에서 Docker 컨테이너화 배포 및 Spring Boot 백엔드 연동 지원',
              en: 'Containerized and deployed on Ubuntu Server 24.04 LTS via Docker, integrating with Spring Boot backend.',
            },
          ],
        },
        {
          title: 'LLM Alignment & Domain Fine-Tuning Research',
          role: 'AI Researcher (KIIT 금상/은상 2년 연속 수상)',
          tech: 'Python, PyTorch, Gemma, Unsloth, DPO, SFT, LoRA, HuggingFace',
          bullets: [
            {
              ko: 'Instruction-Tuned Gemma 모델 SFT 및 DPO 선호도 정렬 효과 실증 분석 (2026 KIIT 하계 학술대회 금상)',
              en: 'Empirical analysis on SFT and DPO preference alignment in Gemma instruction-tuned models (2026 KIIT Gold Award).',
            },
            {
              ko: '저속노화 의학 문헌 도메인 특화 JSONL 데이터셋 정제 및 LoRA 경량 파인튜닝 연구 (2025 KIIT 추계 은상)',
              en: 'Domain-specific JSONL dataset curation and lightweight LoRA fine-tuning for health literature (2025 KIIT Silver Award).',
            },
          ],
        },
        {
          title: 'Micro-pipette Detection & Hybrid OCR System',
          role: 'AI & Vision Engineer (100%)',
          tech: 'Python, OpenCV, PyTorch, YOLO, PaddleOCR, TensorRT, ONNX',
          bullets: [
            {
              ko: 'YOLO 객체 검출과 Custom CNN/PaddleOCR 결합 하이브리드 파이프라인 설계',
              en: 'Designed hybrid vision pipeline combining YOLO object detection with custom CNN and PaddleOCR.',
            },
            {
              ko: 'ONNX 변환 및 TensorRT FP16/INT8 최적화를 통한 추론 시간 73% 단축 (300ms → 80ms)',
              en: 'Accelerated edge inference by 73% (300ms -> 80ms) via ONNX Runtime and TensorRT FP16/INT8 optimization.',
            },
          ],
        },
        {
          title: 'JobForeigner (JobTalk) 다국어 채용 플랫폼',
          role: 'Frontend & API Integration Lead',
          tech: 'React, TypeScript, FastAPI, TanStack Query, Kakao Map',
          bullets: [
            {
              ko: 'FastAPI 백엔드와 연동된 외국인 구인구직 및 Kakao Map 공간 필터링 프론트엔드 총괄',
              en: 'Led frontend development for multilingual employment platform integrated with FastAPI and Kakao Maps.',
            },
          ],
        },
      ],
      research: [
        {
          ko: '2026 한국정보기술학회(KIIT) 하계 학술대회 금상 (DPO 정렬 연구)',
          en: '2026 KIIT Summer Conference Best Paper Gold Award (DPO Alignment)',
        },
        {
          ko: '2025 한국정보기술학회(KIIT) 추계 학술대회 은상 (저속노화 도메인 LLM 파인튜닝)',
          en: '2025 KIIT Fall Conference Best Paper Silver Award (Domain LLM Fine-Tuning)',
        },
        {
          ko: 'KCI 등재 학술지 논문 게재 (모바일 기부 플랫폼 투명성 연구)',
          en: 'KCI-Indexed Journal Publication (Mobile Transparency Architecture)',
        },
      ],
    },
    pdfFilename: {
      ko: '이민우_AI_Service_Developer_Applied_AI_Engineer.pdf',
      en: 'Minwoo_Lee_Applied_AI_Engineer.pdf',
    },
  },

  // 1. Computer Vision & C++ Software Engineer (PRIMARY)
  'computer-vision': {
    id: 'computer-vision',
    canonicalPath: '/computer-vision',
    aliases: ['computervision', 'vision', 'cv', 'cpp-vision'],
    navTitle: {
      ko: 'C++ Vision & Systems',
      en: 'C++ Vision & Systems',
    },
    badge: {
      ko: 'Primary Track · C++ / Vision / Systems',
      en: 'Primary Track · C++ / Vision / Systems',
    },
    portalDescription: {
      ko: '산업용 비전 검사장비의 고속 C++/MFC 소프트웨어를 개발하며, 영상처리 파이프라인부터 Jetson 엣지 가속, 그리고 방산·로봇 지향 미션 크리티컬 시스템 SW로 확장',
      en: 'Building high-performance C++/MFC industrial vision systems, scaling across real-time pipelines, Jetson edge AI acceleration, and defense/robotics systems.',
    },
    heroTags: [
      'C++',
      'Computer Vision',
      'OpenCV',
      'Multithreading',
      'TensorRT',
      'Jetson Orin Nano',
      'HALCON',
      'Real-Time Systems',
    ],
    intro: {
      title: {
        ko: '실시간 컴퓨터 비전 및 시스템 SW를 구축하는 ',
        en: 'Building Real-Time Computer Vision & Systems Software, ',
      },
      role: {
        ko: 'C++ 컴퓨터 비전 & 시스템 SW 엔지니어',
        en: 'C++ Computer Vision & Systems Software Engineer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: '산업용 비전 검사장비의 고속 C++/MFC 소프트웨어를 개발하며, 영상 수집 링 버퍼 파이프라인부터 OpenCV/HALCON 기반 서브픽셀 정밀 계측 및 결함 검출, TensorRT Edge AI 추론 가속까지 실시간 시스템을 구축해왔습니다. 결함 검출률 100%와 결정론적 초저지연 실행(Deterministic Low-Latency)을 지향하며, 향후 방위산업(Defense Systems), 로보틱스(Robotics), 스마트 팩토리 검사장비 등 미션 크리티컬한 고성능 시스템 소프트웨어와 알고리즘 최적화 영역으로 전문성을 지속 확장하고 있습니다.',
        en: 'Developing high-speed C++/MFC software for industrial vision inspection systems, with hands-on expertise spanning real-time ring buffer pipelines, OpenCV/HALCON sub-pixel precision measurement, and TensorRT edge AI acceleration. Focused on deterministic low-latency execution and zero-defect reliability, actively advancing into mission-critical systems engineering across defense systems, robotics, and industrial automation.',
      },
    },
    competencies: {
      mini: {
        ko: 'Core Competencies',
        en: 'Core Competencies',
      },
      title: {
        ko: '핵심 역량 및 엔지니어링 지향점',
        en: 'Core Competencies & Engineering Focus',
      },
      items: [
        {
          icon: 'C++',
          title: {
            ko: 'Real-Time Vision & High-Performance C++',
            en: 'Real-Time Vision & High-Performance C++',
          },
          description: {
            ko: 'C++/MFC 기반 산업용 비전 검사장비 소프트웨어 개발, 고속 영상 수집 링 버퍼 멀티스레드 동기화, 메모리 릭 제로 및 CPU 캐시 친화적 시스템 SW 설계',
            en: 'Developing high-speed C++/MFC industrial vision software, multi-threaded ring buffer synchronization, zero-leak memory management, and cache-friendly systems architecture.',
          },
        },
        {
          icon: 'OpenCV',
          title: {
            ko: 'Precision Computer Vision & Measurement',
            en: 'Precision Computer Vision & Measurement',
          },
          description: {
            ko: 'OpenCV / HALCON 기반 서브픽셀 엣지 검출, Watershed 입자 분할, 거리 변환, Feret Diameter 및 2D/3D 기하 형상 정밀 치수 계측 알고리즘 구현',
            en: 'Implementing sub-pixel edge detection, Watershed segmentation, distance transforms, and precise 2D/3D geometric measurement algorithms via OpenCV and HALCON.',
          },
        },
        {
          icon: 'TensorRT',
          title: {
            ko: 'Edge AI Acceleration & Embedded Inference',
            en: 'Edge AI Acceleration & Embedded Inference',
          },
          description: {
            ko: 'PyTorch → ONNX → TensorRT FP16/INT8 양자화 가속 엔진 빌드, Jetson Orin Nano 타겟 C++ 런타임 최적화로 14ms 초저지연 실시간 이상 탐지 달성',
            en: 'Exporting PyTorch models to ONNX and compiling TensorRT FP16/INT8 engines, achieving 14ms low-latency anomaly detection on Jetson Orin Nano.',
          },
        },
        {
          icon: 'C++',
          title: {
            ko: 'Mission-Critical Reliability (방산·로봇·제조)',
            en: 'Mission-Critical Reliability (Defense / Robotics / Manufacturing)',
          },
          description: {
            ko: '방위산업, 자율 로봇, 24/7 생산 라인의 무중단 연속 구동을 위한 강력한 예외 처리, 고속 IPC 통신 및 대규모 레거시 C++ 코드베이스 분석·유지보수',
            en: 'Ensuring 24/7 mission-critical uptime for defense systems, robotics, and production lines through robust exception isolation, IPC, and large-scale legacy C++ refactoring.',
          },
        },
      ],
    },
    techs: {
      options: ['coreCpp', 'visionAi', 'inspection', 'systems'],
      labels: {
        coreCpp: {
          ko: 'Core C++ & Systems (실무 주력)',
          en: 'Core C++ & Systems',
        },
        visionAi: {
          ko: 'Vision AI & Edge (로봇/엣지 가속)',
          en: 'Vision AI & Edge',
        },
        inspection: {
          ko: 'Computer Vision & Inspection (영상 계측)',
          en: 'Vision & Inspection',
        },
        systems: {
          ko: 'Defense/Robotics & Tools (시스템/도구)',
          en: 'Systems & Infrastructure',
        },
      },
      subText: {
        ko: 'C++/OpenCV/MFC 기반 고성능 실시간 비전 시스템을 코어로 하며, Jetson 엣지 가속과 임베디드·로봇·방산 지향 시스템 소프트웨어 및 메모리 최적화로 확장하고 있습니다.',
        en: 'Anchored in high-performance C++/OpenCV/MFC real-time vision systems, scaling across Jetson edge acceleration, embedded robotics/defense systems, and low-level memory optimization.',
      },
      stacks: {
        coreCpp: [
          { name: 'C++ (C++17/20)', icon: 'cplusplus' },
          { name: 'Multithreading', icon: 'cplusplus' },
          { name: 'Memory Optimization', icon: 'cplusplus' },
          { name: 'OpenCV', icon: 'opencv' },
          { name: 'MFC', icon: 'cplusplus' },
          { name: 'Visual Studio', icon: 'visualstudio' },
          { name: 'Win32 API', icon: 'windows' },
        ],
        visionAi: [
          { name: 'TensorRT (FP16/INT8)', icon: 'nvidia' },
          { name: 'CUDA', icon: 'nvidia' },
          { name: 'Jetson Orin Nano', icon: 'nvidia' },
          { name: 'ONNX Runtime', icon: 'onnx' },
          { name: 'YOLO', icon: 'yolo' },
          { name: 'PyTorch', icon: 'pytorch' },
          { name: 'Python', icon: 'python' },
        ],
        inspection: [
          { name: 'HALCON', icon: 'opencv' },
          { name: 'Watershed / Morphology', icon: 'opencv' },
          { name: 'Sub-pixel Measurement', icon: 'opencv' },
          { name: 'Ring Buffer Pipeline', icon: 'cplusplus' },
          { name: 'PaddleOCR', icon: 'python' },
          { name: 'Defect Inspection', icon: 'opencv' },
        ],
        systems: [
          { name: 'Linux / Ubuntu', icon: 'linux' },
          { name: 'CMake', icon: 'cmake' },
          { name: 'Git', icon: 'git' },
          { name: 'Socket / IPC', icon: 'linux' },
          { name: 'Docker', icon: 'docker' },
          { name: 'C# / WPF', icon: 'dotnet' },
        ],
      },
    },
    projects: {
      subText: {
        ko: 'C++, 컴퓨터 비전, 영상처리, 실시간 시스템 및 임베디드 엣지 추론 가속에 집중된 핵심 엔지니어링 프로젝트입니다. 알고리즘 설계와 프레임 레이트/지연시간 최적화 과정을 중점적으로 다룹니다.',
        en: 'High-impact engineering projects focused on C++, computer vision, image processing, real-time systems, and edge AI inference optimization.',
      },
      titleText: {
        ko: 'Core Vision & Systems Projects (핵심 프로젝트)',
        en: 'Core Vision & Systems Projects',
      },
      categoryOptions: ['all', 'featured'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
        featured: { ko: '산업용 비전 & 엣지 가속', en: 'Vision & Edge Acceleration' },
      },
      items: [
        allCards.edgeAnomaly('featured'),
        allCards.pipetOcr('featured'),
        allCards.semParticle('featured'),
        allCards.sevenSegmentOcr('featured'),
        allCards.qlogAnalyzer('featured'),
      ],
      otherProjects: {
        subText: {
          ko: '소프트웨어 엔지니어링 역량을 확장하며 수행한 온프레미스 AI/RAG 플랫폼, 모바일 실서비스 앱, 풀스택 웹 개발 및 학술 연구 프로젝트입니다.',
          en: 'Complementary engineering endeavors spanning on-premise AI/RAG platforms, shipped production mobile apps, full-stack web platforms, and academic research.',
        },
        titleText: {
          ko: 'Other Projects & Experiments (기타 프로젝트 & 실험실)',
          en: 'Other Projects & Experiments',
        },
        categoryOptions: ['all', 'ai', 'mobile', 'web'],
        categoryLabels: {
          all: { ko: '전체 (All)', en: 'All' },
          ai: { ko: 'AI / RAG / 연구', en: 'AI & Research' },
          mobile: { ko: '모바일 실서비스 앱', en: 'Mobile Apps' },
          web: { ko: '웹 & 풀스택 시스템', en: 'Web & Full-Stack' },
        },
        items: [
          // AI & RAG
          allCards.dograc('ai'),
          allCards.chwieolUpAi('ai'),
          allCards.llmAlignment('ai'),
          allCards.slowAgingLlm('ai'),
          // Mobile Apps
          allCards.geumpumta('mobile'),
          allCards.yeSang('mobile'),
          allCards.saSang('mobile'),
          allCards.uhdyl('mobile'),
          allCards.chirpaid('mobile'),
          // Web & Full-Stack
          allCards.jobForeigner('web'),
          allCards.joinUs('web'),
          allCards.babzip('web'),
          allCards.cakeWorkshop('web'),
        ],
      },
    },
    printableResume: {
      role: {
        ko: 'C++ Computer Vision & Systems Software Engineer',
        en: 'C++ Computer Vision & Systems Software Engineer',
      },
      bio: {
        ko: '산업용 비전 검사장비의 C++/MFC 소프트웨어를 개발하며, 영상 수집 링 버퍼 파이프라인부터 OpenCV/HALCON 기반 정밀 계측 및 TensorRT 엣지 가속까지 구축해온 실무 엔지니어 이민우입니다. 방위산업, 로보틱스, 지능형 검사 시스템 등 미션 크리티컬한 고성능 시스템 소프트웨어와 비전 알고리즘을 지향합니다.',
        en: 'Developing C++/MFC software for industrial vision inspection equipment, with expertise spanning real-time ring buffers, OpenCV/HALCON precision measurement, and TensorRT edge AI acceleration, advancing toward mission-critical defense and robotics systems.',
      },
      summary: [
        {
          ko: 'C++/MFC 기반 산업용 비전 검사장비 소프트웨어 개발 및 대규모 레거시 코드베이스 분석·유지보수 실무 수행 (Synapse Imaging)',
          en: 'Developing C++/MFC software for industrial machine vision inspection equipment and maintaining large-scale codebases (Synapse Imaging).',
        },
        {
          ko: 'PatchCore 비지도 이상 탐지 모델 학습, ONNX 변환 및 Jetson Orin Nano 타겟 TensorRT FP16/INT8 양자화 C++ 실시간 추론 (14ms, 70 FPS)',
          en: 'Optimized PatchCore unsupervised anomaly detection via TensorRT FP16/INT8 quantization for low-latency (<14ms) C++ edge inference on Jetson Orin Nano.',
        },
        {
          ko: 'YOLO 및 CNN 모델의 ONNX 변환 및 TensorRT 최적화를 통한 추론 시간 73% 단축 (300ms → 80ms)',
          en: 'Accelerated YOLO/CNN inference by 73% (300ms -> 80ms) using ONNX Runtime and TensorRT engines.',
        },
        {
          ko: 'CLAHE, Distance Transform, Watershed 기반 나노/마이크로 입자 정밀 분할 및 Feret Diameter 정량 산출',
          en: 'Engineered precision nano/micro particle segmentation and Feret Diameter measurement pipelines using Watershed.',
        },
        {
          ko: '한국정보기술학회(KIIT) 2년 연속 우수논문상(2026 금상, 2025 은상) 수상 및 KCI 등재 학술지 논문 게재',
          en: 'Won consecutive KIIT Best Paper Awards (2026 Gold, 2025 Silver) and published in KCI-indexed journal.',
        },
      ],
      skills: [
        {
          title: { ko: 'Core C++ & Systems', en: 'Core C++ & Systems' },
          items: 'C++ (C++17/20), OpenCV, Multithreading & Concurrency, Memory Optimization, MFC, Visual Studio, Win32 API',
        },
        {
          title: { ko: 'Vision AI & Edge Acceleration', en: 'Vision AI & Edge Acceleration' },
          items: 'TensorRT (FP16/INT8), CUDA, NVIDIA Jetson Orin Nano, ONNX Runtime, YOLO, PyTorch, Python',
        },
        {
          title: { ko: 'Computer Vision & Inspection', en: 'Computer Vision & Inspection' },
          items: 'HALCON, Watershed / Morphology, Sub-pixel Measurement, Ring Buffer Pipeline, Defect Inspection',
        },
        {
          title: { ko: 'Systems & Infrastructure', en: 'Systems & Infrastructure' },
          items: 'Linux / Ubuntu, Socket / IPC, CMake, Git, Docker, C# / WPF',
        },
      ],
      projects: [
        {
          title: 'Industrial Anomaly Detection on Edge',
          role: 'AI & Performance Engineer (100%)',
          tech: 'C++, PatchCore, ONNX, TensorRT, Jetson Orin Nano, PyTorch',
          bullets: [
            {
              ko: '정상 샘플 기반 PatchCore 이상 탐지 모델 학습 및 CoreSet 10% 희소 샘플링 메모리 뱅크 압축',
              en: 'Trained PatchCore anomaly detection on normal samples with 10% CoreSet memory bank compression.',
            },
            {
              ko: 'TensorRT INT8 양자화 및 C++ 추론 파이프라인으로 Jetson Orin Nano 상 14.3ms(69.9 FPS) 실시간 달성',
              en: 'Achieved 14.3ms (69.9 FPS) real-time inference on Jetson Orin Nano via TensorRT INT8 C++ runtime.',
            },
          ],
        },
        {
          title: 'Micro-pipette Detection & Hybrid OCR System',
          role: 'AI & Vision Engineer (100%)',
          tech: 'C++, TensorRT, OpenCV, YOLO, PaddleOCR, ONNX, Python',
          bullets: [
            {
              ko: '마이크로피펫 객체 탐지 및 수치 OCR 파이프라인 구축 및 C++ 런타임 최적화',
              en: 'Built end-to-end detection and OCR pipeline for micro-pipettes with C++ runtime.',
            },
            {
              ko: 'TensorRT 최적화로 추론 시간 300ms에서 80ms로 73% 단축',
              en: 'Reduced inference latency from 300ms to 80ms (73% speedup) with TensorRT.',
            },
          ],
        },
        {
          title: 'SEM Particle Analyzer',
          role: 'Vision SW Engineer (100%)',
          tech: 'OpenCV, Watershed, Image Processing, CLAHE, C# .NET 8, ScottPlot',
          bullets: [
            {
              ko: '전자현미경(SEM) 이미지 나노 입자 크기·형상 자동 분석 시스템 구축',
              en: 'Constructed automated SEM nano-particle morphology and size analyzer.',
            },
            {
              ko: 'Watershed 정밀 분할 및 픽셀 캘리브레이션 기반 Feret Diameter 정량 산출',
              en: 'Implemented calibrated Watershed segmentation for Feret Diameter computation.',
            },
          ],
        },
        {
          title: 'Video-based 7-Segment OCR System',
          role: 'Vision Engineer (100%)',
          tech: 'C++, MFC, OpenCV, Multithreading, Ring Buffer',
          bullets: [
            {
              ko: 'C++ MFC 멀티스레드 링 버퍼 기반 실시간 영상 스트림 7-Segment 자동 판독 시스템 구현',
              en: 'Implemented real-time 7-segment digital display reader in C++ MFC multi-threaded ring buffer.',
            },
          ],
        },
        {
          title: 'Q-Log Analyzer & Vision System Utilities',
          role: 'Vision SW Researcher',
          tech: 'C#, WPF, Regex Engine, LiveCharts, Excel Export, Synapse Imaging',
          bullets: [
            {
              ko: '정규표현식 컴파일 및 스트리밍 파서로 대용량 비전 로그 파싱 속도 4배 가속 및 메모리 90% 절감',
              en: 'Accelerated high-throughput vision log parsing 4x with compiled regex streaming parser and 90% memory reduction.',
            },
            {
              ko: 'IQR 기반 지연 이상치 자동 검출 및 검사 통계·Tact Time 차트 시각화 및 엑셀 리포트 자동 생성',
              en: 'Automated IQR latency outlier detection, inspection statistics charting, and Excel report generation.',
            },
          ],
        },
      ],
      research: [
        {
          ko: '2026 한국정보기술학회(KIIT) 하계 학술대회 금상 (DPO 정렬 연구)',
          en: '2026 KIIT Summer Conference Best Paper Gold Award (DPO Alignment)',
        },
        {
          ko: '2025 한국정보기술학회(KIIT) 추계 학술대회 은상 (도메인 특화 LLM 파인튜닝)',
          en: '2025 KIIT Fall Conference Best Paper Silver Award (Domain LLM Fine-Tuning)',
        },
        {
          ko: 'KCI 등재 학술지 논문 게재 (한국정보기술학회논문지)',
          en: 'KCI-Indexed Journal Publication (KIIT Journal)',
        },
        {
          ko: 'LG Aimers 6기 과정 수료 (LG AI Research)',
          en: 'LG Aimers 6th Generation AI Professional Certificate (LG AI Research)',
        },
      ],
    },
    pdfFilename: {
      ko: '이민우_Computer_Vision_CPP_Software_Engineer.pdf',
      en: 'Minwoo_Lee_Computer_Vision_Engineer.pdf',
    },
  },

  // 2. Previous Work — Mobile Applications
  'app-dev': {
    id: 'app-dev',
    canonicalPath: '/app-dev',
    aliases: ['app', 'mobile', 'appdev'],
    navTitle: {
      ko: '모바일 앱',
      en: 'Mobile Apps',
    },
    badge: {
      ko: 'Mobile Apps',
      en: 'Mobile Apps',
    },
    portalDescription: {
      ko: 'Flutter & React Native 크로스플랫폼, iOS Screen Time 연동, 양대 마켓 정식 출시 및 실서비스 운영 경험',
      en: 'Cross-platform mobile applications in Flutter & React Native, dual app store launches, iOS Screen Time integration, and production operation.',
    },
    heroTags: ['Flutter', 'React Native', 'Riverpod', 'Zustand', 'iOS Screen Time', 'App Store'],
    intro: {
      title: {
        ko: '실제 사용자를 위한 서비스를 배포하고 운영한 ',
        en: 'Shipping and Operating Production Mobile Services, ',
      },
      role: {
        ko: 'Mobile Application Developer',
        en: 'Mobile Application Developer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: 'Flutter 및 React Native를 기반으로 iOS와 Android 양대 마켓에 정식 출시된 실서비스를 구축하고 운영했습니다. 실제 사용자를 대상으로 한 모바일 소프트웨어 배포, Riverpod/Zustand 상태 관리, 네이티브 OS API(iOS Screen Time) 연동 경험을 보유하고 있습니다.',
        en: 'Shipped production mobile applications to both App Store and Google Play using Flutter and React Native. Demonstrates proven ability to ship, maintain, and operate user-facing software at scale.',
      },
    },
    competencies: {
      mini: {
        ko: 'Core Competencies',
        en: 'Core Competencies',
      },
      title: {
        ko: '주요 역량',
        en: 'Key Strengths',
      },
      items: [
        {
          icon: 'Flutter',
          title: {
            ko: '크로스플랫폼 모바일 아키텍처',
            en: 'Cross-Platform Architecture',
          },
          description: {
            ko: 'Flutter(Riverpod) 및 React Native(Zustand) 기반 계층형 MVVM 구조 설계. 상태와 비즈니스 로직을 완벽 분리하여 안정적인 UI 렌더링 보장',
            en: 'Designing layered MVVM architecture in Flutter and React Native, cleanly isolating business logic from UI rendering.',
          },
        },
        {
          icon: 'iOS',
          title: {
            ko: '네이티브 연동 & 시스템 API',
            en: 'Native Integration & System APIs',
          },
          description: {
            ko: 'iOS Screen Time(FamilyControls/ManagedSettings) 네이티브 채널 연동, 교내 Wi-Fi IP 게이트웨이 검증 및 무오차 백그라운드 타이머 구현',
            en: 'Integrating native iOS Screen Time APIs, campus Wi-Fi IP gateway verification, and drift-free background timer synchronization.',
          },
        },
        {
          icon: 'App Store',
          title: {
            ko: '양대 마켓 배포 & 프로덕션 운영',
            en: 'Store Deployment & Production Ops',
          },
          description: {
            ko: 'App Store Connect & Google Play Console 심사 가이드라인 대응, 인증서/프로비저닝 프로파일 관리 및 유저 피드백 기반 지속적 업데이트',
            en: 'Managing end-to-end App Store and Play Store releases, handling store review guidelines, signing certificates, and iterative updates.',
          },
        },
      ],
    },
    techs: {
      options: ['mobileCore', 'platformApi', 'mobileTools'],
      labels: {
        mobileCore: {
          ko: 'Mobile Core & State',
          en: 'Mobile Core & State',
        },
        platformApi: {
          ko: 'Platform & APIs',
          en: 'Platform & APIs',
        },
        mobileTools: {
          ko: 'DevOps & Tooling',
          en: 'DevOps & Tooling',
        },
      },
      subText: {
        ko: '모바일 애플리케이션 개발 및 마켓 출시에 사용되는 기술 스택입니다.',
        en: 'Tech stack for cross-platform app development and store delivery.',
      },
      stacks: {
        mobileCore: [
          { name: 'Flutter', icon: 'flutter' },
          { name: 'Dart', icon: 'dart' },
          { name: 'React Native', icon: 'react' },
          { name: 'Expo', icon: 'expo' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Riverpod', icon: 'flutter' },
          { name: 'Zustand', icon: 'react' },
        ],
        platformApi: [
          { name: 'iOS', icon: 'apple' },
          { name: 'Android', icon: 'android' },
          { name: 'WebSocket', icon: 'socketdotio' },
          { name: 'REST API', icon: 'fastapi' },
          { name: 'SQLite', icon: 'sqlite' },
        ],
        mobileTools: [
          { name: 'App Store', icon: 'apple' },
          { name: 'Google Play', icon: 'googleplay' },
          { name: 'Figma', icon: 'figma' },
          { name: 'Git', icon: 'git' },
          { name: 'GitHub', icon: 'github' },
        ],
      },
    },
    projects: {
      subText: {
        ko: '주요 모바일 앱 및 기타 프로젝트 개발 경험입니다.',
        en: 'Featured mobile apps and cross-domain engineering projects.',
      },
      titleText: {
        ko: '모바일 프로젝트 포트폴리오',
        en: 'Mobile Projects Portfolio',
      },
      categoryOptions: ['all'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
      },
      items: [
        allCards.geumpumta('all'),
        allCards.uhdyl('all'),
        allCards.chirpaid('all'),
        allCards.yeSang('all'),
        allCards.saSang('all'),
      ],
    },
    printableResume: {
      role: {
        ko: '모바일 애플리케이션 개발자 (Flutter & React Native)',
        en: 'Mobile Application Developer (Flutter & React Native)',
      },
      bio: {
        ko: 'Flutter와 React Native 크로스플랫폼을 기반으로 양대 마켓에 서비스를 배포하고 사용자 가치를 창출하는 모바일 앱 개발자 이민우입니다.',
        en: 'Mobile developer experienced in deploying production apps to App Store & Google Play using Flutter and React Native with clean MVVM state architectures.',
      },
      summary: [
        {
          ko: 'Flutter 기반 대학생 학습 인증 및 랭킹 서비스 "금품타" iOS/Android 양대 마켓 정식 출시 및 서비스 운영',
          en: 'Shipped & maintained "Geumpumta" study-tracking app on App Store & Google Play using Flutter.',
        },
        {
          ko: 'iOS Screen Time API(ManagedSettings) 네이티브 채널 연동 및 교내 Wi-Fi IP 게이트웨이 검증 아키텍처 구축',
          en: 'Integrated iOS Screen Time APIs and campus Wi-Fi IP validation architecture.',
        },
        {
          ko: 'React Native & Expo 기반 못난이 농산물 모바일 커머스 "UhDyL" 장바구니 전역 상태(Zustand) 및 무한 스크롤 구현',
          en: 'Engineered React Native / Expo direct-trade commerce app "UhDyL" with Zustand global state.',
        },
        {
          ko: 'KCI 등재 학술지 논문 게재 (기부 투명성 모바일 애플리케이션 아키텍처 연구)',
          en: 'Published in KCI-indexed journal on transparent mobile donation architectures.',
        },
      ],
      skills: [
        {
          title: { ko: 'Mobile Technologies', en: 'Mobile Technologies' },
          items: 'Flutter, Dart, React Native, Expo, TypeScript, Riverpod, Zustand, Provider',
        },
        {
          title: { ko: 'Platform & APIs', en: 'Platform & APIs' },
          items: 'iOS Screen Time API, FamilyControls, Android Services, REST API, WebSocket, SQLite',
        },
        {
          title: { ko: 'Deployment & Tools', en: 'Deployment & Tools' },
          items: 'App Store Connect, Google Play Console, TestFlight, Figma, Git, GitHub',
        },
      ],
      projects: [
        {
          title: 'Geumpumta (금품타)',
          role: 'Lead Mobile Developer',
          tech: 'Flutter, Dart, Riverpod, iOS Screen Time API, Wi-Fi Verification',
          bullets: [
            {
              ko: 'App Store & Google Play 양대 마켓 정식 출시 및 서비스 운영',
              en: 'Launched and operated on both App Store and Google Play.',
            },
            {
              ko: 'Heartbeat 기반 무오차 백그라운드 타이머 및 교내 IP 게이트웨이 인증 시스템 구축',
              en: 'Implemented zero-drift heartbeat background timer and campus IP verification.',
            },
          ],
        },
        {
          title: 'UhDyL (어딜)',
          role: 'Mobile Frontend Developer',
          tech: 'React Native, Expo, TypeScript, Zustand',
          bullets: [
            {
              ko: '못난이 농산물 모바일 직거래 커머스 플랫폼 프론트엔드 구축',
              en: 'Built mobile D2C agricultural commerce platform in React Native.',
            },
            {
              ko: 'Zustand 기반 장바구니 전역 상태 관리 및 인터랙티브 결제 UX 구현',
              en: 'Engineered global Zustand cart state and smooth checkout interaction.',
            },
          ],
        },
        {
          title: 'Chirp-aid',
          role: 'Mobile App Developer',
          tech: 'Flutter, Dart, Riverpod, WebSocket',
          bullets: [
            {
              ko: '보육원 기부 투명성 모바일 앱 개발 및 KCI 등재 학술지 논문 게재',
              en: 'Developed transparent donation app and published paper in KCI journal.',
            },
          ],
        },
        {
          title: 'Yesang (예상)',
          role: 'Solo Mobile Developer (100%)',
          tech: 'React Native, Expo, TypeScript, Zustand, TanStack Query, SecureStore',
          bullets: [
            {
              ko: '경조사 금전 기록 모바일 장부 앱 개발 및 서버 API / 게스트 모드 공통 도메인 추상화',
              en: 'Architected mobile expense ledger with unified domain abstraction for server APIs and guest SecureStore.',
            },
            {
              ko: 'React Query 캐싱, Zod 폼 검증, Axios 토큰 갱신 및 AdMob 수익화 연동',
              en: 'Integrated React Query caching, Zod form validations, token rotation, and AdMob monetization.',
            },
          ],
        },
        {
          title: 'SaSang (사상)',
          role: 'Solo Mobile Developer (100%)',
          tech: 'React Native, Expo, TypeScript, SVG, Reanimated, Zustand, Turborepo',
          bullets: [
            {
              ko: 'GIS 행정경계 벡터 데이터 전처리 파이프라인 및 SVG ClipPath 기반 커스텀 포토 렌더러 개발',
              en: 'Engineered GIS vector pre-processing pipeline and SVG ClipPath custom photo-first map renderer.',
            },
            {
              ko: 'Reanimated 60fps 핀치 줌/팬 제스처 인터랙션 및 Local-first 오프라인 사진 아카이브 구축',
              en: 'Delivered 60fps pinch-and-pan gestures with Reanimated and local-first offline photo storage.',
            },
          ],
        },
      ],
      research: [
        {
          ko: 'KCI 등재 학술지 논문 게재 (모바일 기부 플랫폼 투명성 연구)',
          en: 'KCI-Indexed Journal Publication (Mobile Transparency Architecture)',
        },
        {
          ko: '2026 한국정보기술학회(KIIT) 하계 학술대회 금상',
          en: '2026 KIIT Summer Conference Best Paper Gold Award',
        },
      ],
    },
    pdfFilename: {
      ko: '이민우_Mobile_App_Developer.pdf',
      en: 'Minwoo_Lee_Mobile_App_Developer.pdf',
    },
  },

  // 3. Previous Work — Web & Full-Stack Projects
  'software-engineer': {
    id: 'software-engineer',
    canonicalPath: '/software-engineer',
    aliases: ['software-enginner', 'softwareengineer', 'software', 'se', 'web-fullstack'],
    navTitle: {
      ko: '웹 & 풀스택',
      en: 'Web & Full-Stack',
    },
    badge: {
      ko: 'Web & Full-Stack',
      en: 'Web & Full-Stack',
    },
    portalDescription: {
      ko: 'React/TypeScript 프론트엔드부터 NestJS/FastAPI 백엔드, MySQL ACID 트랜잭션, Docker 배포까지의 풀스택 시스템 아키텍처',
      en: 'Full-stack software engineering spanning React/TypeScript, NestJS/FastAPI backends, MySQL ACID transactions, and Docker containerization.',
    },
    heroTags: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'Docker', 'MySQL', 'Full-Stack'],
    intro: {
      title: {
        ko: '사용자 인터페이스부터 백엔드 인프라까지 구축한 ',
        en: 'Delivering Cohesive Software Architectures from UI to Backend, ',
      },
      role: {
        ko: 'Web & Full-Stack Software Engineer',
        en: 'Web & Full-Stack Software Engineer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: '사용자 친화적 React/TypeScript 웹 프론트엔드와 NestJS/FastAPI 기반의 모듈형 백엔드, MySQL 데이터 모델링 및 Docker 컨테이너 배포를 아우르는 풀스택 시스템 구축 경험입니다.',
        en: 'Full-stack software engineering background covering modular React/TS frontends, RESTful backends, relational data modeling, and containerized deployments.',
      },
    },
    competencies: {
      mini: {
        ko: 'Core Competencies',
        en: 'Core Competencies',
      },
      title: {
        ko: '주요 역량',
        en: 'Key Strengths',
      },
      items: [
        {
          icon: 'React',
          title: {
            ko: '견고한 웹 & 프론트엔드 아키텍처',
            en: 'Modern Frontend Architecture',
          },
          description: {
            ko: 'React, TypeScript, TanStack Query 기반 선언형 데이터 패칭 및 캐싱 최적화. 모듈형 컴포넌트 설계와 접근성 높은 반응형 UI 구현',
            en: 'Declarative data fetching and caching with React, TS, and TanStack Query, paired with modular component design and responsive UX.',
          },
        },
        {
          icon: 'NestJS',
          title: {
            ko: '모듈형 백엔드 & 동시성 제어',
            en: 'Modular Backend & Concurrency',
          },
          description: {
            ko: 'NestJS, FastAPI, MySQL, TypeORM 기반의 RESTful API 설계. 트랜잭션 격리 수준을 고려한 안전한 투표 동시성 제어 및 인증 시스템 구축',
            en: 'Designing scalable RESTful APIs with NestJS, FastAPI, and MySQL, handling concurrent transactions and JWT auth with ACID guarantees.',
          },
        },
        {
          icon: 'Docker',
          title: {
            ko: '클라우드 인프라 & AI 파이프라인',
            en: 'Cloud DevOps & AI Integration',
          },
          description: {
            ko: 'Docker 기반 컨테이너화 및 Nginx 리버스 프록시 구성. PyTorch / ONNX / TensorRT / Unsloth 모델 파인튜닝 및 서빙 파이프라인 연동',
            en: 'Docker containerization, Nginx reverse proxying, and integrating fine-tuned PyTorch/ONNX/TensorRT AI serving pipelines.',
          },
        },
      ],
    },
    techs: {
      options: ['frontendWeb', 'backendCloud', 'aiSystems'],
      labels: {
        frontendWeb: {
          ko: 'Frontend & Mobile',
          en: 'Frontend & Mobile',
        },
        backendCloud: {
          ko: 'Backend & DevOps',
          en: 'Backend & DevOps',
        },
        aiSystems: {
          ko: 'AI & Systems',
          en: 'AI & Systems',
        },
      },
      subText: {
        ko: '풀스택 소프트웨어 엔지니어링 전반에 활용되는 기술 스택입니다.',
        en: 'Full-stack software engineering technologies and infrastructure.',
      },
      stacks: {
        frontendWeb: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'Flutter', icon: 'flutter' },
          { name: 'React Native', icon: 'react' },
          { name: 'TanStack Query', icon: 'reactquery' },
          { name: 'Zustand', icon: 'react' },
          { name: 'TailwindCSS', icon: 'tailwindcss' },
        ],
        backendCloud: [
          { name: 'FastAPI', icon: 'fastapi' },
          { name: 'NestJS', icon: 'nestjs' },
          { name: 'Python', icon: 'python' },
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MySQL', icon: 'mysql' },
          { name: 'Docker', icon: 'docker' },
          { name: 'MinIO', icon: 'minio' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'TypeORM', icon: 'typeorm' },
        ],
        aiSystems: [
          { name: 'Qdrant', icon: 'qdrant' },
          { name: 'Ollama', icon: 'ollama' },
          { name: 'PyTorch', icon: 'pytorch' },
          { name: 'ONNX', icon: 'onnx' },
          { name: 'TensorRT', icon: 'nvidia' },
          { name: 'OpenCV', icon: 'opencv' },
          { name: 'C++', icon: 'cplusplus' },
          { name: 'C# WPF', icon: 'csharp' },
        ],
      },
    },
    projects: {
      subText: {
        ko: '웹, 백엔드, 풀스택 및 AI 연구 프로젝트 포트폴리오입니다.',
        en: 'Full-stack web, backend systems, and AI research projects.',
      },
      titleText: {
        ko: '소프트웨어 프로젝트 포트폴리오',
        en: 'Software Projects Portfolio',
      },
      categoryOptions: ['all'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
      },
      items: [
        allCards.dograc('all'),
        allCards.jobForeigner('all'),
        allCards.joinUs('all'),
        allCards.babzip('all'),
        allCards.cakeWorkshop('all'),
        allCards.qlogAnalyzer('all'),
      ],
    },
    printableResume: {
      role: {
        ko: '소프트웨어 엔지니어 (Full-Stack & Systems)',
        en: 'Software Engineer (Full-Stack & Systems)',
      },
      bio: {
        ko: 'React/TypeScript 프론트엔드부터 NestJS/FastAPI 백엔드, Docker 인프라, AI 파이프라인 연동까지 유기적으로 시스템을 완성하는 소프트웨어 엔지니어 이민우입니다.',
        en: 'Full-stack software engineer delivering end-to-end systems from React/TS frontends to NestJS/FastAPI backends, Docker environments, and AI serving pipelines.',
      },
      summary: [
        {
          ko: 'Next.js 14 + FastAPI + Qdrant 기반 사내 기밀 유출 제로(Zero Data Egress) 데스크톱-웹 RAG 플랫폼 "dograc" 단독 구축 (원클릭 런처, Docker/SQLite 자동 폴백)',
          en: 'Solely architected Zero Data Egress desktop-web hybrid RAG platform "dograc" with Next.js 14, FastAPI, Qdrant, one-click launcher, and Docker/SQLite fallback.',
        },
        {
          ko: 'Ubuntu Server 24.04 LTS 및 Docker 기반 채용 메일 분석·회고 질문 생성 AI 서버 "ChwieolUp-AI" 구축 및 백엔드 연동',
          en: 'Engineered & deployed Ollama AI microservice "ChwieolUp-AI" on Ubuntu Server 24.04 LTS via Docker for backend integration.',
        },
        {
          ko: 'FastAPI / NestJS 백엔드 API, Docker 컨테이너 오케스트레이션, React / Flutter 풀스택 및 서비스 연동 역량',
          en: 'Comprehensive full-stack engineering across FastAPI/NestJS backends, Docker containers, and React/Flutter clients.',
        },
        {
          ko: '외국인 다국어 채용 플랫폼 "JobForeigner" 프론트엔드 총괄 (TanStack Query, Kakao Map 공간 필터링)',
          en: 'Led frontend for multilingual job portal "JobForeigner" with TanStack Query and Kakao Maps.',
        },
        {
          ko: '한국정보기술학회(KIIT) 2년 연속 우수논문상(2026 금상, 2025 은상) 수상 및 KCI 등재 학술지 논문 게재',
          en: 'Won consecutive KIIT Best Paper Awards (2026 Gold, 2025 Silver) and published in KCI journal.',
        },
        {
          ko: 'Flutter 모바일 실서비스 양대 마켓(App Store & Google Play) 정식 출시 및 배포 운영 경험',
          en: 'Shipped production Flutter applications to both App Store and Google Play.',
        },
      ],
      skills: [
        {
          title: { ko: 'Frontend & Mobile', en: 'Frontend & Mobile' },
          items: 'React, TypeScript, JavaScript, Flutter, React Native, TanStack Query, Zustand, TailwindCSS',
        },
        {
          title: { ko: 'Backend & Cloud', en: 'Backend & Cloud' },
          items: 'FastAPI, NestJS, Python, PostgreSQL, MySQL, Qdrant, MinIO, Docker, Ubuntu Server, Nginx, TypeORM, RESTful API, JWT',
        },
        {
          title: { ko: 'AI & Systems', en: 'AI & Systems' },
          items: 'Ollama, vLLM, BAAI/bge-m3, RAG Pipeline, PyTorch, TensorRT, ONNX, OpenCV, C++, C# WPF, Git, GitHub Actions',
        },
      ],
      projects: [
        {
          title: 'dograc (사내 기밀 유출 제로 로컬 데스크톱-웹 RAG 플랫폼)',
          role: 'Full-Stack & AI Engineer (1인 단독 개발, 100%)',
          tech: 'Next.js 14, FastAPI 0.115, Python, Qdrant, Ollama, bge-m3, Tkinter, Velopack, Docker/SQLite',
          bullets: [
            {
              ko: '외부 전송 데이터 0 바이트 보장 데스크톱-웹 하이브리드 RAG 플랫폼 단독 구축 및 Windows 원클릭 런처 패키징',
              en: 'Solo architected Zero Data Egress desktop-web hybrid RAG platform with Windows one-click desktop launcher packaging.',
            },
            {
              ko: 'Docker 가동/미가동 환경 적응형 무중단 자동 폴백(Postgres/Qdrant ↔ SQLite/In-Memory), 인라인 인용 배지 및 Trace 감사 드로어 개발 (pytest 59건 통과)',
              en: 'Developed adaptive Docker/SQLite auto-fallback, inline citation badges, and Trace audit drawer (59 pytests passing 100%).',
            },
          ],
        },
        {
          title: 'ChwieolUp-AI (취업 준비 플랫폼 AI 서빙 마이크로서비스)',
          role: 'AI Engineer & MLOps (AI 서빙 전담 개발)',
          tech: 'Python, FastAPI, Ollama, Gemma, Pydantic v2, Docker, Ubuntu Server 24.04 LTS',
          bullets: [
            {
              ko: 'Ollama(Gemma) 기반 채용 메일 전형 단계 자동 분류 및 맞춤형 면접 회고 질문 생성 파이프라인 개발',
              en: 'Developed Ollama (Gemma) pipeline for recruitment email stage classification and interview retrospective question generation.',
            },
            {
              ko: 'Ubuntu Server 24.04 LTS 환경에서 Docker 컨테이너화 배포 및 Spring Boot 백엔드 연동 지원',
              en: 'Containerized and deployed on Ubuntu Server 24.04 LTS via Docker, integrating with Spring Boot backend.',
            },
          ],
        },
        {
          title: 'JoinUs (참여형 IT 동아리 트랙 추천 서비스)',
          role: 'Frontend & UI Engineer',
          tech: 'React, TypeScript, TailwindCSS, Vite',
          bullets: [
            {
              ko: 'MBTI형 문답 인터랙션 및 가중치 계산 엔진 설계로 동아리 지원자 전환율 160% 달성',
              en: 'Designed interactive question flow and scoring engine, achieving 160% growth in applicant conversion.',
            },
            {
              ko: '카카오톡 동적 결과 공유 연동 및 순수 함수 기반 문답 데이터 파서 분리로 유지보수성 확보',
              en: 'Implemented dynamic Kakao share cards and decoupled scoring logic into pure functions.',
            },
          ],
        },
        {
          title: 'JobForeigner (JobTalk)',
          role: 'Frontend Lead',
          tech: 'React, TypeScript, FastAPI, TanStack Query, Kakao Map',
          bullets: [
            {
              ko: '외국인 구인구직 다국어 채용 플랫폼 프론트엔드 구축',
              en: 'Built multilingual job search platform with location-based filtering.',
            },
            {
              ko: 'TanStack Query 캐싱 최적화로 불필요한 네트워크 요청 40% 절감',
              en: 'Reduced redundant network queries by 40% via TanStack Query caching.',
            },
          ],
        },
        {
          title: 'LLM Alignment & Domain Fine-Tuning Research',
          role: 'AI Researcher (KIIT Gold & Silver Awards)',
          tech: 'Python, PyTorch, Gemma, Unsloth, DPO, SFT, LoRA',
          bullets: [
            {
              ko: 'DPO 정렬 한계 분석 및 도메인 Q&A 모델 학습 연구로 KIIT 학술대회 2년 연속 수상',
              en: 'Won 2026 Gold and 2025 Silver at KIIT for empirical LLM alignment and fine-tuning research.',
            },
          ],
        },
      ],
      research: [
        {
          ko: '2026 한국정보기술학회(KIIT) 하계 학술대회 금상 (DPO 정렬 연구)',
          en: '2026 KIIT Summer Conference Best Paper Gold Award (DPO Alignment)',
        },
        {
          ko: '2025 한국정보기술학회(KIIT) 추계 학술대회 은상 (저속노화 도메인 LLM 파인튜닝)',
          en: '2025 KIIT Fall Conference Best Paper Silver Award (Domain LLM Fine-Tuning)',
        },
        {
          ko: 'KCI 등재 학술지 논문 게재 (모바일 기부 플랫폼 투명성 연구)',
          en: 'KCI-Indexed Journal Publication (Mobile Transparency Architecture)',
        },
      ],
    },
    pdfFilename: {
      ko: '이민우_Software_Engineer.pdf',
      en: 'Minwoo_Lee_Software_Engineer.pdf',
    },
  },
};
