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
      ko: '금품타 : 대학생 학습 시간 기록 & 실시간 랭킹 서비스',
      en: 'Geumpumta: Study Timer and Real-Time Ranking App for University Students',
    },
    description: {
      ko: '랭킹 시스템과 고신뢰성 타이머를 갖춘 대학생 학습 동기부여 앱이에요. 양대 마켓 배포를 완료했어요.',
      en: 'A motivation app for college students with a ranking system and a highly reliable timer, shipped to both app stores.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM', 'Dio'],
  },
  {
    id: 2,
    category: 'ai',
    imgUrl: '/img/tech/pipet.jpg',
    title: {
      ko: '마이크로 피펫 분주량 자동 인식을 위한 OCR 시스템 개발',
      en: 'OCR System for Automatic Micropipette Volume Recognition',
    },
    description: {
      ko: '엣지 디바이스에서 피펫 눈금을 인식하고 모터를 제어하는 랩 오토메이션 시스템이에요.',
      en: 'A lab automation system that reads pipette scales and controls motors on an edge device.',
    },
    techs: ['Python', 'PyTorch', 'Jetson Orin Nano', 'OCR', 'TensorRT'],
  },
  {
    id: 3,
    category: 'app',
    imgUrl: '/img/tech/uhdyl.png',
    title: {
      ko: 'UhDyL(어글리딜리셔스) : 지역 기반 못난이 농산물 직거래 커머스',
      en: 'UhDyL: Local Marketplace for Imperfect Produce',
    },
    description: {
      ko: '지역 농가의 못난이 농산물을 합리적인 가격에 거래할 수 있는 크로스 플랫폼 모바일 마켓이에요.',
      en: 'A cross-platform mobile marketplace for buying imperfect local produce at reasonable prices.',
    },
    techs: ['React Native', 'Expo', 'Styled Components', 'Zustand'],
  },
  {
    id: 4,
    category: 'ai',
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: '저속노화 지식 기반 LLM 파인튜닝 프로젝트',
      en: 'Domain-Specific LLM Fine-Tuning for Slow Aging Knowledge',
    },
    description: {
      ko: '저속노화 전문 데이터를 학습시켜 도메인에 특화된 질의응답 AI를 구축한 프로젝트에요.',
      en: 'A project that trained on slow-aging knowledge to build a domain-focused Q&A AI.',
    },
    techs: ['Python', 'Gemma', 'Unsloth', 'Fine-tuning'],
  },
  {
    id: 5,
    category: 'webFrontend',
    imgUrl: '/img/tech/jobforeigner.png',
    title: {
      ko: 'JobForeigner : 외국인 전용 다국어 구인구직 플랫폼',
      en: 'JobForeigner: Multilingual Job Platform for Foreign Residents',
    },
    description: {
      ko: 'i18n 다국어 지원과 지도 시각화를 통해 외국인 채용 장벽을 낮춘 웹 서비스에요.',
      en: 'A web service that lowers hiring barriers for foreign residents with i18n and map-based visualization.',
    },
    techs: ['React', 'TypeScript', 'TanStack Query', 'i18next'],
  },
  {
    id: 6,
    category: 'webFrontend',
    imgUrl: '/img/tech/joinus.png',
    title: {
      ko: 'JoinUs : 동아리 트랙 추천 서비스',
      en: 'JoinUs: Interactive Club Track Recommendation Service',
    },
    description: {
      ko: 'MBTI 형식의 심리 테스트로 예비 부원에게 적합한 개발 트랙을 추천해주는 홍보 웹이에요.',
      en: 'A promotional web app that recommends development tracks through an MBTI-style test.',
    },
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 7,
    category: 'app',
    imgUrl: '/img/tech/chripaid.png',
    title: {
      ko: 'Chrip-Aid : 투명한 후원 문화를 위한 기부 플랫폼',
      en: 'Chrip-Aid: Donation Platform for Transparent Giving',
    },
    description: {
      ko: '후원금 내역 공개와 실시간 소통으로 투명성을 확보한 보육원 기부 앱이에요.',
      en: 'A donation app for childcare support with transparent donation history and real-time communication.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM'],
  },
  {
    id: 8,
    category: 'webFrontend',
    imgUrl: '/img/tech/babzip.png',
    title: {
      ko: 'Babzip : 나만의 맛집 지도 아카이브',
      en: 'Babzip: Personal Restaurant Map Archive',
    },
    description: {
      ko: '지도 위에 나만의 맛집을 기록하고 랭킹을 매겨 관리하는 개인화 서비스에요.',
      en: 'A personalized service for saving, ranking, and managing favorite restaurants on a map.',
    },
    techs: ['React', 'TypeScript', 'Zustand', 'Kakao Map'],
  },
  {
    id: 9,
    category: 'webFrontend',
    imgUrl: '/img/tech/cake.png',
    title: {
      ko: '케이크공작소 : 옴니보어 트렌드 소셜 플랫폼',
      en: 'Cake Workshop: Omnivore Trend Social Platform',
    },
    description: {
      ko: '케이크 메타포를 활용해 개인의 취향과 기분을 시각적으로 공유하는 SNS에요.',
      en: 'A social platform that uses cake metaphors to visually share moods and tastes.',
    },
    techs: ['React', 'TypeScript', 'Styled Components'],
  },
  {
    id: 10,
    category: 'backend',
    imgUrl: '/img/tech/plate_picks.png',
    title: {
      ko: 'Plate Picks : 투명한 익명 회식 메뉴 선정 시스템',
      en: 'Plate Picks: Anonymous Team Meal Voting System',
    },
    description: {
      ko: '조직 내 공정한 메뉴 선정을 위해 익명 투표와 결과 통계를 제공하는 풀스택 웹이에요.',
      en: 'A full-stack web app for fair menu selection with anonymous voting and result analytics.',
    },
    techs: ['React', 'NestJS', 'MySQL', 'Docker'],
  },
];
