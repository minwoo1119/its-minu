import type { LocalizedText } from '../../src/i18n';

export type ProjectCategory = 'webFrontend' | 'backend' | 'app' | 'ai';

export interface ProjectInfo {
  id: number;
  category: ProjectCategory;
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  techs: string[];
}

export const projectsData: ProjectInfo[] = [
  {
    id: 1,
    category: 'app',
    imgUrl: '/img/tech/geumpumta.png',
    title: {
      ko: '금품타 : 대학생 학습시간 인증 & 실시간 랭킹 앱',
      en: 'Geumpumta: Verified Study-Time Tracking & Real-Time Ranking App',
    },
    description: {
      ko: '학교 Wi-Fi 인증, 실시간 랭킹, 정밀 타이머 로직을 결합해 공정한 학습 경쟁 경험을 제공하는 대학생 학습 관리 앱입니다.',
      en: 'A study management app for university students that combines school Wi-Fi verification, real-time rankings, and precise timer logic for fair study competition.',
    },
    techs: [
      'Flutter',
      'Riverpod',
      'MVVM',
      'Dio',
      'OAuth 2.0',
      'Deep Linking',
      'iOS Screen Time API',
    ],
  },
  {
    id: 2,
    category: 'ai',
    imgUrl: '/img/tech/pipet.jpg',
    title: {
      ko: '마이크로피펫 분주량 인식 OCR 및 목표값 제어 시스템',
      en: 'Micropipette OCR and Target-Value Control System',
    },
    description: {
      ko: 'Jetson Orin Nano 기반 엣지 환경에서 분주량을 자동 인식하고 목표값까지 정밀 제어하는 OCR·비전·모터 제어 통합 시스템입니다.',
      en: 'An integrated OCR, vision, and motor-control system that automatically recognizes micropipette volume and precisely controls it to a target value on Jetson Orin Nano.',
    },
    techs: [
      'Python',
      'PyTorch',
      'YOLO',
      'PaddleOCR',
      'Jetson Orin Nano',
      'ONNX',
      'TensorRT',
    ],
  },
  {
    id: 3,
    category: 'app',
    imgUrl: '/img/tech/uhdyl.png',
    title: {
      ko: 'UhDyL : 못난이 농산물 판매 앱',
      en: 'UhDyL: Mobile App for Imperfect Produce Commerce',
    },
    description: {
      ko: '못난이 농산물을 소비자와 연결하는 모바일 중개 플랫폼으로, 서비스형 크로스플랫폼 앱 구조를 직접 설계하고 구현한 프로젝트입니다.',
      en: 'A mobile commerce platform connecting consumers with imperfect produce, where I designed and implemented a service-grade cross-platform app architecture.',
    },
    techs: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'OAuth 2.0',
      'Expo Router',
    ],
  },
  // {
  //   id: 4,
  //   category: 'ai',
  //   imgUrl: '/img/tech/unsloth.png',
  //   title: {
  //     ko: '저속노화 데이터셋 기반 LLM 파인튜닝',
  //     en: 'LLM Fine-Tuning with a Slow-Aging Domain Dataset',
  //   },
  //   description: {
  //     ko: '웹 기사와 PDF 매거진 기반 데이터를 재구성해 저속노화 도메인에 특화된 질의응답 LLM을 구축한 프로젝트입니다.',
  //     en: 'A project that rebuilt web-article and PDF-magazine data into a dataset for a slow-aging domain-specific Q&A LLM.',
  //   },
  //   techs: [
  //     'Python',
  //     'Gemma',
  //     'Unsloth',
  //     'LoRA',
  //     'JSONL',
  //     'Data Preprocessing',
  //   ],
  // },
  {
    id: 5,
    category: 'webFrontend',
    imgUrl: '/img/tech/jobtalk.png',
    title: {
      ko: 'JobTalk : 외국인 근로자 구인구직 커뮤니티',
      en: 'JobTalk: Job & Community Platform for Foreign Workers',
    },
    description: {
      ko: '채용 공고, 기업 정보, 커뮤니티 기능을 통합하고 다국어·지도 기반 접근성을 강화한 외국인 근로자 대상 웹 플랫폼입니다.',
      en: 'A web platform for foreign workers that integrates job postings, company information, and community features with multilingual and map-based accessibility.',
    },
    techs: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'i18next',
      'Kakao Map API',
      'Module SCSS',
    ],
  },
  {
    id: 6,
    category: 'webFrontend',
    imgUrl: '/img/tech/joinus.png',
    title: {
      ko: 'JoinUs : 사용자 참여형 IT 동아리 트랙 추천 서비스',
      en: 'JoinUs: Interactive IT Club Track Recommendation Service',
    },
    description: {
      ko: '사용자 성향 질문을 기반으로 프론트엔드·백엔드·디자인·기획 트랙을 추천하는 인터랙티브 홍보 웹 서비스입니다.',
      en: 'An interactive promotional web service that recommends frontend, backend, design, and planning tracks based on user preference questions.',
    },
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 7,
    category: 'app',
    imgUrl: '/img/tech/chripaid.png',
    title: {
      ko: 'Chirp-aid : 투명성을 강조한 보육원 기부 앱',
      en: 'Chirp-aid: Donation App Focused on Transparency',
    },
    description: {
      ko: '보육원 기부 플랫폼의 관리자 기능 개선을 목표로, 레거시 Flutter 관리자 페이지를 리팩토링하고 구조를 재설계한 프로젝트입니다.',
      en: 'A project focused on improving the admin side of a childcare donation platform by refactoring a legacy Flutter admin page and redesigning its structure.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM', 'CRUD'],
  },
  {
    id: 8,
    category: 'webFrontend',
    imgUrl: '/img/tech/babzip.png',
    title: {
      ko: 'Babzip : 나만의 맛집 저장 서비스',
      en: 'Babzip: Personal Restaurant Bookmarking Service',
    },
    description: {
      ko: '지도 기반 검색, 맛집 CRUD, 개인 맞춤형 TOP 랭킹 기능을 제공하는 개인화 맛집 저장 웹 플랫폼입니다.',
      en: 'A personalized restaurant-saving web platform featuring map-based search, restaurant CRUD, and personalized top-ranking functionality.',
    },
    techs: [
      'React',
      'TypeScript',
      'Zustand',
      'Kakao OAuth',
      'Kakao Map API',
      'Responsive UI',
    ],
  },
  // {
  //   id: 9,
  //   category: 'webFrontend',
  //   imgUrl: '/img/tech/cake.png',
  //   title: {
  //     ko: '케이크공작소 : 옴니보어 트렌드 소셜 플랫폼',
  //     en: 'Cake Workshop: Omnivore Trend Social Platform',
  //   },
  //   description: {
  //     ko: '개인의 취향과 감정을 시각적 메타포로 표현하고 공유할 수 있도록 설계한 소셜 플랫폼입니다.',
  //     en: 'A social platform designed for expressing and sharing personal taste and emotion through visual metaphors.',
  //   },
  //   techs: [
  //     'React',
  //     'TypeScript',
  //     'Styled Components',
  //     'React Calendar',
  //     'GitHub Actions',
  //   ],
  // },
  // {
  //   id: 10,
  //   category: 'backend',
  //   imgUrl: '/img/tech/plate_picks.png',
  //   title: {
  //     ko: 'Plate Picks : 익명 회식 메뉴 선정 시스템',
  //     en: 'Plate Picks: Anonymous Team Meal Selection System',
  //   },
  //   description: {
  //     ko: '익명 투표와 결과 통계를 통해 조직 내 메뉴 선정 부담을 줄이는 웹 서비스입니다.',
  //     en: 'A web service that reduces the burden of team meal selection through anonymous voting and result analytics.',
  //   },
  //   techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Docker', 'Ubuntu'],
  // },
];
