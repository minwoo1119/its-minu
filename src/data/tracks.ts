import type { LocalizedText } from '../i18n';

export type TrackId = 'computer-vision' | 'app-dev' | 'software-engineer';

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
  // Vision & AI
  pipetOcr: (category: string): ProjectCardInfo => ({
    id: 1,
    category,
    imgUrl: '/img/tech/pipet_detection.png',
    title: {
      ko: 'Micro-pipette Detection & Hybrid OCR System',
      en: 'Micro-pipette Detection & Hybrid OCR System',
    },
    description: {
      ko: 'YOLO, Custom CNN, PaddleOCR, TensorRT를 결합한 마이크로피펫 객체 탐지 및 OCR 시스템 (300ms → 80ms 가속)',
      en: 'A micro-pipette detection and OCR system combining YOLO, custom CNN, PaddleOCR, and TensorRT (300ms -> 80ms).',
    },
    techs: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'PaddleOCR', 'TensorRT', 'ONNX'],
  }),

  semParticle: (category: string): ProjectCardInfo => ({
    id: 2,
    category,
    imgUrl: '/img/tech/pipet.jpg',
    title: {
      ko: 'SEM Particle Analyzer : 전자현미경 입자 정량 분석 소프트웨어',
      en: 'SEM Particle Analyzer : SEM Image Particle Quantitative Analysis',
    },
    description: {
      ko: 'C# .NET 8 WPF(MVVM)와 OpenCvSharp 기반 전자현미경(SEM) 나노/마이크로 입자 크기·형상 자동 분석 시스템',
      en: 'An automated SEM nano/micro particle size and morphology analyzer built with C# .NET 8 WPF and OpenCvSharp.',
    },
    techs: ['C#', '.NET 8 WPF', 'OpenCvSharp', 'OpenCV', 'Watershed', 'ScottPlot'],
  }),

  sevenSegmentOcr: (category: string): ProjectCardInfo => ({
    id: 3,
    category,
    imgUrl: '/img/tech/pipet.jpg',
    title: {
      ko: 'Video-based 7-Segment OCR System : 실시간 계측기 디지털 수치 인식',
      en: 'Video-based 7-Segment OCR System',
    },
    description: {
      ko: 'C++ MFC와 OpenCV 기반 연속 영상 스트림에서 7-Segment 디스플레이를 자동 검출하고 수치를 고속 판독하는 비전 시스템',
      en: 'A C++ MFC and OpenCV vision system detecting and reading 7-segment displays in real-time video streams.',
    },
    techs: ['C++', 'MFC', 'OpenCV', 'Template Matching', 'Video Processing'],
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
      ko: 'C# WPF 기반 대용량 비전 검사 로그 파싱, 실시간 통계 시각화 및 엑셀 리포트 내보내기 유틸리티',
      en: 'A C# WPF desktop utility for high-throughput vision log parsing, statistical visualization, and Excel report export.',
    },
    techs: ['C#', 'WPF', 'Regex Engine', 'Data Visualization', 'LiveCharts', 'Excel Export'],
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
};

// -------------------------------------------------------------
// Tracks Data
// -------------------------------------------------------------
export const tracksData: Record<TrackId, TrackData> = {
  // 1. Computer Vision & Image Processing
  'computer-vision': {
    id: 'computer-vision',
    canonicalPath: '/computer-vision',
    aliases: ['computervision', 'vision', 'cv'],
    navTitle: {
      ko: '컴퓨터 비전',
      en: 'Computer Vision',
    },
    badge: {
      ko: 'Computer Vision & AI',
      en: 'Computer Vision & AI',
    },
    portalDescription: {
      ko: 'C++ MFC, C# WPF, OpenCV, TensorRT 기반 산업용 비전 검사 및 정량 분석 시스템',
      en: 'Industrial vision inspection & quantitative analysis systems built with C++ MFC, C# WPF, OpenCV, and TensorRT.',
    },
    heroTags: ['C++ MFC', 'C# WPF', 'OpenCV', 'TensorRT', 'Watershed', 'YOLO'],
    intro: {
      title: {
        ko: '현실의 문제를 데이터로 정량화하는 ',
        en: 'Quantifying Real-World Vision Challenges, ',
      },
      role: {
        ko: 'Computer Vision & Image Processing Engineer',
        en: 'Computer Vision & Image Processing Engineer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: '전통 영상처리(Filtering, Morphological, Watershed)부터 딥러닝(YOLO, Custom CNN) 및 고속 추론 엔진(TensorRT, ONNX)까지 폭넓게 다룹니다. 산업 현장에서 신뢰할 수 있는 고성능 비전 검사 및 정량 분석 시스템을 구축합니다.',
        en: 'From classical image processing (Filtering, Morphology, Watershed) to deep learning (YOLO, Custom CNN) and high-throughput inference engines (TensorRT, ONNX), I build robust vision inspection and calibrated quantitative analysis systems for mission-critical industry environments.',
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
          icon: 'C++',
          title: {
            ko: '실시간 비전 SW 아키텍처',
            en: 'Real-time Vision Architecture',
          },
          description: {
            ko: 'C++ MFC 및 C# .NET 8 WPF(MVVM) 기반 고속 비전 시스템 설계. 멀티스레드 영상 수집과 안정적인 프레임 버퍼 파이프라인 구축',
            en: 'Designing high-throughput vision software in C++ MFC and C# WPF (MVVM) with multi-threaded frame acquisition and resilient buffering.',
          },
        },
        {
          icon: 'OpenCV',
          title: {
            ko: '정밀 분할 & 정량 분석',
            en: 'Precision Segmentation & Metrics',
          },
          description: {
            ko: 'CLAHE, Distance Transform, Watershed 기반 응집 객체 정밀 분할 및 픽셀 캘리브레이션을 통한 물리적 형상 지표(Feret Diameter) 산출',
            en: 'Segmenting overlapping particles via CLAHE, Distance Transform, and Watershed algorithms, computing calibrated physical metrics like Feret Diameter.',
          },
        },
        {
          icon: 'TensorRT',
          title: {
            ko: 'AI 모델 경량화 & 추론 최적화',
            en: 'AI Optimization & Acceleration',
          },
          description: {
            ko: 'YOLO 및 CNN 모델의 ONNX 변환 및 TensorRT FP16/INT8 엔진 최적화. 추론 지연 시간 73% 단축 (300ms → 80ms) 실현',
            en: 'Accelerating YOLO and CNN pipelines via ONNX and TensorRT FP16/INT8 engines, achieving 73% latency reduction (300ms -> 80ms).',
          },
        },
      ],
    },
    techs: {
      options: ['visionAi', 'visionSw', 'supplementary'],
      labels: {
        visionAi: {
          ko: 'Computer Vision & AI',
          en: 'Computer Vision & AI',
        },
        visionSw: {
          ko: 'Vision SW Engineering',
          en: 'Vision SW Engineering',
        },
        supplementary: {
          ko: 'Supplementary Engineering',
          en: 'Supplementary Engineering',
        },
      },
      subText: {
        ko: '산업용 비전 시스템 구축에 필요한 기술 스택입니다.',
        en: 'Tech stack applied in industrial computer vision systems.',
      },
      stacks: {
        visionAi: [
          { name: 'C++', icon: 'cplusplus' },
          { name: 'OpenCV', icon: 'opencv' },
          { name: 'Python', icon: 'python' },
          { name: 'PyTorch', icon: 'pytorch' },
          { name: 'ONNX', icon: 'onnx' },
          { name: 'TensorRT', icon: 'nvidia' },
          { name: 'CUDA', icon: 'nvidia' },
        ],
        visionSw: [
          { name: 'C#', icon: 'csharp' },
          { name: '.NET 8 WPF', icon: 'dotnet' },
          { name: 'C++ MFC', icon: 'cplusplus' },
          { name: 'OpenCvSharp', icon: 'opencv' },
          { name: 'ScottPlot', icon: 'dotnet' },
        ],
        supplementary: [
          { name: 'Git', icon: 'git' },
          { name: 'GitHub', icon: 'github' },
          { name: 'Docker', icon: 'docker' },
          { name: 'Linux', icon: 'linux' },
          { name: 'CMake', icon: 'cmake' },
        ],
      },
    },
    projects: {
      subText: {
        ko: '주요 프로젝트 및 기타 개발 경험입니다.',
        en: 'Featured vision projects and engineering highlights.',
      },
      titleText: {
        ko: '프로젝트 포트폴리오',
        en: 'Project Portfolio',
      },
      categoryOptions: ['all', 'main', 'other'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
        main: { ko: '비전 & AI', en: 'Vision & AI' },
        other: { ko: '기타 프로젝트', en: 'Other' },
      },
      items: [
        // Main (Vision & AI)
        allCards.pipetOcr('main'),
        allCards.semParticle('main'),
        allCards.sevenSegmentOcr('main'),
        allCards.qlogAnalyzer('main'),
        allCards.llmAlignment('main'),
        allCards.slowAgingLlm('main'),

        // Other
        allCards.geumpumta('other'),
        allCards.uhdyl('other'),
        allCards.chirpaid('other'),
        allCards.platePicks('other'),
        allCards.jobForeigner('other'),
        allCards.joinUs('other'),
        allCards.babzip('other'),
        allCards.cakeWorkshop('other'),
      ],
    },
    printableResume: {
      role: {
        ko: '컴퓨터 비전 & 영상처리 엔지니어',
        en: 'Computer Vision & Image Processing Engineer',
      },
      bio: {
        ko: '전통 영상처리 알고리즘과 딥러닝 최적화 엔진을 결합하여 정밀한 산업용 비전 검사 및 정량 분석 시스템을 구현하는 엔지니어 이민우입니다.',
        en: 'Computer Vision Engineer specializing in combining classical image processing algorithms with deep learning acceleration to deliver industrial-grade inspection systems.',
      },
      summary: [
        {
          ko: 'C++ MFC / C# WPF 기반의 산업용 실시간 비전 검사 및 정량 분석 데스크톱 애플리케이션 아키텍처 설계',
          en: 'Architected industrial real-time vision inspection and analysis desktop apps in C++ MFC and C# WPF.',
        },
        {
          ko: 'CLAHE, Distance Transform, Watershed 기반 나노/마이크로 입자 정밀 분할 및 Feret Diameter 정량 산출',
          en: 'Engineered precision nano/micro particle segmentation and Feret Diameter measurement pipelines using Watershed.',
        },
        {
          ko: 'YOLO 및 CNN 모델의 ONNX 변환 및 TensorRT FP16/INT8 최적화를 통한 추론 시간 73% 단축 (300ms → 80ms)',
          en: 'Accelerated YOLO/CNN inference by 73% (300ms -> 80ms) using ONNX Runtime and TensorRT FP16/INT8.',
        },
        {
          ko: '한국정보기술학회(KIIT) 2년 연속 우수논문상(2026 금상, 2025 은상) 수상 및 KCI 등재 학술지 논문 게재',
          en: 'Won consecutive KIIT Best Paper Awards (2026 Gold, 2025 Silver) and published in KCI-indexed journal.',
        },
      ],
      skills: [
        {
          title: { ko: 'Computer Vision & AI', en: 'Computer Vision & AI' },
          items: 'C++, OpenCV, Python, PyTorch, YOLO, PaddleOCR, TensorRT, ONNX Runtime, CUDA',
        },
        {
          title: { ko: 'Vision SW Engineering', en: 'Vision SW Engineering' },
          items: 'C# (.NET 8 WPF, MVVM), C++ MFC, OpenCvSharp, ScottPlot, Multi-threading, Frame Buffering',
        },
        {
          title: { ko: 'Tools & DevOps', en: 'Tools & DevOps' },
          items: 'Git, GitHub, Docker, Linux, CMake, Visual Studio, VS Code',
        },
      ],
      projects: [
        {
          title: 'Micro-pipette Detection & Hybrid OCR System',
          role: 'AI & Vision Engineer (100%)',
          tech: 'Python, OpenCV, PyTorch, YOLO, PaddleOCR, TensorRT, ONNX',
          bullets: [
            {
              ko: '마이크로피펫 객체 탐지 및 수치 OCR 파이프라인 구축',
              en: 'Built end-to-end detection and OCR pipeline for micro-pipettes.',
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
          tech: 'C#, .NET 8 WPF, OpenCvSharp, Watershed, ScottPlot',
          bullets: [
            {
              ko: '전자현미경(SEM) 이미지 나노 입자 크기·형상 자동 분석 시스템 구축',
              en: 'Constructed automated SEM nano-particle morphology and size analyzer.',
            },
            {
              ko: 'Watershed 정밀 분할 및 픽셀 캘리브레이션 기반 Feret Diameter 산출',
              en: 'Implemented calibrated Watershed segmentation for Feret Diameter computation.',
            },
          ],
        },
        {
          title: 'Video-based 7-Segment OCR System',
          role: 'Vision Engineer (100%)',
          tech: 'C++, MFC, OpenCV, Template Matching',
          bullets: [
            {
              ko: 'C++ MFC 기반 실시간 영상 스트림 7-Segment 자동 판독 시스템 구현',
              en: 'Implemented real-time 7-segment digital display reader in C++ MFC.',
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
          ko: 'KCI 등재 학술지 논문 게재 (모바일 기부 플랫폼 신뢰성 아키텍처 연구)',
          en: 'KCI-Indexed Journal Publication (Mobile Transparency Architecture)',
        },
      ],
    },
    pdfFilename: {
      ko: '이민우_Computer_Vision_Image_Processing_Engineer.pdf',
      en: 'Minwoo_Lee_Computer_Vision_Engineer.pdf',
    },
  },

  // 2. Mobile App Developer
  'app-dev': {
    id: 'app-dev',
    canonicalPath: '/app-dev',
    aliases: ['app', 'mobile', 'appdev'],
    navTitle: {
      ko: '모바일 앱',
      en: 'Mobile App',
    },
    badge: {
      ko: 'Mobile App Developer',
      en: 'Mobile App Developer',
    },
    portalDescription: {
      ko: 'Flutter & React Native 크로스플랫폼, iOS Screen Time 연동, 양대 마켓 배포 및 실서비스 운영',
      en: 'Cross-platform mobile apps in Flutter & React Native, iOS Screen Time integration, and production store launches.',
    },
    heroTags: ['Flutter', 'React Native', 'Riverpod', 'Zustand', 'iOS Screen Time', 'App Store'],
    intro: {
      title: {
        ko: '사용자의 일상에 가치를 전하는 ',
        en: 'Crafting High-Performance Mobile Experiences, ',
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
        ko: 'Flutter 및 React Native 크로스플랫폼을 기반으로 iOS와 Android 양대 마켓에 정식 출시된 실서비스를 구축하고 운영했습니다. 복잡한 비즈니스 로직을 Riverpod / Zustand로 안정화하고 네이티브 OS API와의 긴밀한 연동을 구현합니다.',
        en: 'Specializing in cross-platform mobile engineering with Flutter and React Native. Experienced in launching production apps to both App Store and Google Play, architecting state with Riverpod/Zustand, and bridging native OS APIs like iOS Screen Time.',
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
      categoryOptions: ['all', 'main', 'other'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
        main: { ko: '모바일 앱', en: 'Mobile Apps' },
        other: { ko: '기타 프로젝트', en: 'Other' },
      },
      items: [
        // Main (Mobile Apps)
        allCards.geumpumta('main'),
        allCards.uhdyl('main'),
        allCards.chirpaid('main'),
        allCards.yeSang('main'),
        allCards.saSang('main'),

        // Other
        allCards.pipetOcr('other'),
        allCards.semParticle('other'),
        allCards.sevenSegmentOcr('other'),
        allCards.qlogAnalyzer('other'),
        allCards.platePicks('other'),
        allCards.jobForeigner('other'),
        allCards.joinUs('other'),
        allCards.babzip('other'),
        allCards.cakeWorkshop('other'),
        allCards.llmAlignment('other'),
        allCards.slowAgingLlm('other'),
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

  // 3. Software Engineer
  'software-engineer': {
    id: 'software-engineer',
    canonicalPath: '/software-engineer',
    aliases: ['software-enginner', 'softwareengineer', 'software', 'se'],
    navTitle: {
      ko: '소프트웨어 엔지니어',
      en: 'Software Engineer',
    },
    badge: {
      ko: 'Full-Stack & Systems',
      en: 'Full-Stack & Systems',
    },
    portalDescription: {
      ko: 'React/TypeScript 프론트엔드부터 NestJS/FastAPI 백엔드, Docker 배포, AI 모델 서빙까지 아우르는 풀스택 엔지니어링',
      en: 'Full-stack engineering spanning React/TypeScript, NestJS/FastAPI, Docker infrastructure, and AI model serving.',
    },
    heroTags: ['React', 'TypeScript', 'NestJS', 'FastAPI', 'Docker', 'MySQL', 'AI Serving'],
    intro: {
      title: {
        ko: '엔드투엔드 가치를 설계하고 구현하는 ',
        en: 'Engineering Resilient Systems from Frontend to Backend, ',
      },
      role: {
        ko: 'Software Engineer',
        en: 'Software Engineer',
      },
      name: {
        ko: ' 이민우입니다.',
        en: ' Minwoo Lee.',
      },
      sub: {
        ko: 'React/TypeScript 중심의 사용자 친화적 프론트엔드부터 NestJS/FastAPI 기반의 견고한 백엔드 API, Docker 컨테이너 오케스트레이션, 그리고 LLM/비전 모델 서빙까지 유기적으로 연결된 전체 시스템을 주도적으로 구축합니다.',
        en: 'Designing and building cohesive software systems end-to-end: responsive React/TypeScript frontends, modular NestJS/FastAPI backends with ACID concurrency control, containerized Docker deployments, and low-latency AI model serving.',
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
          { name: 'NestJS', icon: 'nestjs' },
          { name: 'FastAPI', icon: 'fastapi' },
          { name: 'Python', icon: 'python' },
          { name: 'MySQL', icon: 'mysql' },
          { name: 'Docker', icon: 'docker' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'TypeORM', icon: 'typeorm' },
        ],
        aiSystems: [
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
      categoryOptions: ['all', 'main', 'other'],
      categoryLabels: {
        all: { ko: '전체', en: 'All' },
        main: { ko: '소프트웨어 & 풀스택', en: 'Software & Full-Stack' },
        other: { ko: '기타 프로젝트', en: 'Other' },
      },
      items: [
        // Main (Software & Full-Stack)
        allCards.platePicks('main'),
        allCards.jobForeigner('main'),
        allCards.geumpumta('main'),
        allCards.joinUs('main'),
        allCards.babzip('main'),
        allCards.cakeWorkshop('main'),
        allCards.llmAlignment('main'),
        allCards.slowAgingLlm('main'),

        // Other
        allCards.pipetOcr('other'),
        allCards.semParticle('other'),
        allCards.sevenSegmentOcr('other'),
        allCards.qlogAnalyzer('other'),
        allCards.uhdyl('other'),
        allCards.chirpaid('other'),
        allCards.yeSang('other'),
        allCards.saSang('other'),
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
          ko: 'React + NestJS + MySQL + Docker 기반 익명 투표 풀스택 플랫폼 "Plate Picks" 아키텍처 100% 단독 구축',
          en: 'Solely architected full-stack voting platform "Plate Picks" in React, NestJS, MySQL, and Docker.',
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
          items: 'NestJS, FastAPI, Python, MySQL, TypeORM, Docker, Nginx, RESTful API, JWT',
        },
        {
          title: { ko: 'AI & Systems', en: 'AI & Systems' },
          items: 'PyTorch, TensorRT, ONNX, OpenCV, C++, C# WPF, Git, GitHub Actions',
        },
      ],
      projects: [
        {
          title: 'Plate Picks',
          role: 'Full-Stack Engineer (100%)',
          tech: 'React, TypeScript, NestJS, MySQL, Docker, TypeORM',
          bullets: [
            {
              ko: 'React + NestJS + Docker 풀스택 단독 설계 및 개발',
              en: 'Designed and built full-stack platform in React, NestJS, and Docker.',
            },
            {
              ko: '트랜잭션 격리 수준을 적용한 익명 투표 동시성 제어 및 실시간 통계 시각화',
              en: 'Implemented ACID transaction isolation for voting concurrency and live analytics.',
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
