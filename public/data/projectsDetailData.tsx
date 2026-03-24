import type { LocalizedText } from '../../src/i18n';
import type { ProjectCategory } from './projectsData';

export interface ProjectDetailInfo {
  id: number;
  category: ProjectCategory;
  imgUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  techs: string[];
  projectOutline: LocalizedText;
  do: LocalizedText[];
  achievements: LocalizedText[];
  deployUrl?: { title: string; url: string }[] | null;
  startDate: Date;
  endDate: Date;
}

export const projectDetailData: ProjectDetailInfo[] = [
  {
    id: 1,
    category: 'app',
    imgUrl: '/img/tech/geumpumta.png',
    title: {
      ko: '금품타 : 대학생 학습 시간 기록 & 실시간 랭킹 서비스',
      en: 'Geumpumta: Study Timer and Real-Time Ranking App for University Students',
    },
    description: {
      ko: '공정한 학습 시간 기록과 실시간 랭킹 경쟁을 통해 대학생들의 학습 동기를 부여하는 모바일 플랫폼입니다.',
      en: 'A mobile platform that motivates university students through fair study-time tracking and real-time rankings.',
    },
    techs: [
      'Flutter',
      'Riverpod',
      'MVVM',
      'Dio',
      'OAuth 2.0',
      'Google Play Console',
      'TestFlight',
    ],
    deployUrl: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/kr/app/%EA%B8%88%ED%92%88%ED%83%80/id6755481890',
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.geumpumgalchwi.geumpumta&hl=ko',
      },
    ],
    projectOutline: {
      ko: '기존 학습 타이머 앱의 한계를 넘어, 정확한 시간 측정과 학교/학과별 랭킹 시스템을 도입하여 대학생들에게 강력한 학습 동기를 제공하고자 개발했습니다. 기획부터 Android/iOS 양대 마켓 배포까지 전 과정을 주도했습니다.',
      en: 'Built to go beyond basic study timer apps by combining precise time tracking with school and department rankings. I led the full process from planning to release across both Android and iOS stores.',
    },
    do: [
      {
        ko: 'Google Play(내부/비공개 테스트) 및 App Store(TestFlight) 배포 파이프라인 구축 및 심사 대응',
        en: 'Built release pipelines for Google Play and App Store TestFlight, including review handling.',
      },
      {
        ko: '서버 Heartbeat API와 오프셋 계산 로직을 결합하여 앱 종료 시에도 누락 없는 고신뢰성 타이머 구현',
        en: 'Implemented a reliable timer by combining a server heartbeat API with offset calculations, even when the app closes.',
      },
      {
        ko: 'Flutter WebAuth2 및 딥링크를 활용한 카카오/구글/애플 소셜 로그인 연동',
        en: 'Integrated Kakao, Google, and Apple login using Flutter WebAuth2 and deep links.',
      },
      {
        ko: 'MVVM 아키텍처와 Dio Interceptor를 도입하여 유지보수성 높은 코드 구조 및 에러 핸들링 시스템 설계',
        en: 'Designed a maintainable codebase and error handling flow with MVVM and Dio interceptors.',
      },
      {
        ko: '실시간 학과별 랭킹 및 일간/주간/월간 학습 통계 시각화 그래프 구현',
        en: 'Built real-time department rankings and daily, weekly, and monthly study analytics charts.',
      },
    ],
    achievements: [
      {
        ko: 'Android/iOS 양대 마켓 스토어 배포 완료 (End-to-End 개발 경험)',
        en: 'Released on both Android and iOS stores with full end-to-end ownership.',
      },
      {
        ko: '안정적인 백그라운드 타이머 로직으로 사용자 신뢰도 확보',
        en: 'Improved user trust with stable background timer behavior.',
      },
      {
        ko: '복잡한 소셜 로그인 인증 프로세스를 모바일 환경에 맞게 최적화',
        en: 'Optimized complex social authentication flows for mobile environments.',
      },
    ],
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-03-01'),
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
      ko: '비전 AI를 활용해 마이크로 피펫의 눈금을 자동으로 인식하고 모터를 제어하는 랩 오토메이션 시스템입니다.',
      en: 'A lab automation system that uses vision AI to read micropipette markings and control a motor.',
    },
    techs: ['Python', 'PyTorch', 'Jetson Orin Nano', 'OCR', 'YOLO', 'TensorRT'],
    projectOutline: {
      ko: '수작업으로 이루어지던 실험실 피펫 설정 과정을 자동화하여 휴먼 에러를 방지하고 실험 효율을 높이기 위해, 엣지 디바이스 기반의 AI 제어 시스템을 구축했습니다.',
      en: 'Created an edge-device AI control system to automate pipette setup, reduce human error, and improve lab efficiency.',
    },
    do: [
      {
        ko: 'Jetson Orin Nano 엣지 환경에서 PyTorch 기반 OCR 모델 최적화 및 구동',
        en: 'Optimized and deployed a PyTorch OCR model on Jetson Orin Nano.',
      },
      {
        ko: 'TensorRT 변환을 통해 추론 지연 시간(Latency)을 50ms대로 단축하여 실시간성 확보',
        en: 'Reduced inference latency to around 50ms with TensorRT for real-time operation.',
      },
      {
        ko: '카메라 입력 영상에서 피펫 눈금 영역(ROI) 자동 추출 및 실시간 수치 인식 알고리즘 구현',
        en: 'Built ROI extraction and real-time digit recognition for pipette scales from camera input.',
      },
      {
        ko: '인식된 수치와 목표값의 차이를 계산하여 DC 모터를 정밀 제어하는 피드백 루프 설계',
        en: 'Designed a feedback loop that precisely controls a DC motor based on the gap between recognized and target values.',
      },
    ],
    achievements: [
      {
        ko: '분주량 인식 정확도 85% 이상 달성 및 실시간 모터 제어 성공',
        en: 'Achieved over 85% volume recognition accuracy and successful real-time motor control.',
      },
      {
        ko: '고성능 PC가 아닌 소형 엣지 디바이스(Jetson)에서의 AI 모델 경량화 및 최적화 노하우 확보',
        en: 'Built hands-on experience in model compression and optimization on compact Jetson hardware.',
      },
      {
        ko: 'AI 소프트웨어와 임베디드 하드웨어를 결합한 융합형 프로젝트 수행 능력 입증',
        en: 'Demonstrated the ability to execute hybrid projects combining AI software and embedded hardware.',
      },
    ],
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-12-30'),
  },
  {
    id: 3,
    category: 'app',
    imgUrl: '/img/tech/uhdyl.png',
    title: {
      ko: 'UhDyL(어글리 딜리셔스) : 못난이 농산물 직거래 커머스',
      en: 'UhDyL: Direct-Commerce App for Imperfect Produce',
    },
    description: {
      ko: '가치소비를 지향하는 소비자와 지역 농가를 연결하는 못난이 농산물 전용 모바일 마켓입니다.',
      en: 'A mobile marketplace that connects local farms with consumers who value sustainable purchasing.',
    },
    techs: ['React Native', 'Expo', 'Styled Components', 'Zustand'],
    projectOutline: {
      ko: '외형적 기준 때문에 버려지는 농산물의 판로를 개척하고 소비자에게는 저렴한 가격을 제공하기 위해, 직관적이고 편리한 모바일 직거래 플랫폼을 개발했습니다.',
      en: 'Built a mobile marketplace to open a new sales channel for imperfect produce while offering better prices to consumers.',
    },
    do: [
      {
        ko: 'React Native와 Expo를 활용한 크로스 플랫폼(Android/iOS) 앱 개발',
        en: 'Built a cross-platform Android and iOS app with React Native and Expo.',
      },
      {
        ko: 'Zustand 기반의 전역 상태 관리로 장바구니, 사용자 정보 등을 효율적으로 처리',
        en: 'Managed cart and user state efficiently with Zustand.',
      },
      {
        ko: '공통 UI 컴포넌트(버튼, 입력 폼, 카드 등) 모듈화를 통해 개발 생산성 및 디자인 일관성 유지',
        en: 'Modularized shared UI components to improve development speed and design consistency.',
      },
      {
        ko: '불필요한 리렌더링 방지를 위한 코드 리팩토링 및 성능 최적화',
        en: 'Refactored code and optimized performance to reduce unnecessary rerenders.',
      },
    ],
    achievements: [
      {
        ko: '지역 농산물 거래를 위한 MVP(Minimum Viable Product) 앱 완성',
        en: 'Delivered an MVP app for local produce trading.',
      },
      {
        ko: '컴포넌트 재사용성을 높여 유지보수가 용이한 프론트엔드 아키텍처 설계',
        en: 'Designed a maintainable frontend architecture with strong component reuse.',
      },
      {
        ko: '실제 모바일 환경에서의 사용자 경험(UX)을 고려한 인터페이스 구현',
        en: 'Implemented interfaces tuned for real mobile user experience.',
      },
    ],
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-08-30'),
  },
  {
    id: 4,
    category: 'ai',
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: '저속노화 지식 기반 LLM 파인튜닝 프로젝트',
      en: 'Slow-Aging Knowledge-Based LLM Fine-Tuning Project',
    },
    description: {
      ko: 'Gemma 모델을 파인튜닝하여 저속노화(Slow Aging) 도메인에 특화된 질의응답 AI를 구축했습니다.',
      en: 'Fine-tuned Gemma to build a Q&A AI specialized for the slow-aging domain.',
    },
    techs: ['Python', 'Gemma', 'Unsloth', 'Web Crawling', 'Data Preprocessing'],
    projectOutline: {
      ko: '범용 거대언어모델(LLM)의 특정 도메인 지식 부족 문제를 해결하기 위해, 저속노화 관련 전문 데이터를 수집하고 효율적인 파인튜닝 기법을 적용하여 모델을 최적화했습니다.',
      en: 'Collected specialized slow-aging data and applied efficient fine-tuning methods to improve domain knowledge in a general-purpose LLM.',
    },
    do: [
      {
        ko: '웹 크롤링 및 PDF 문헌 분석을 통해 저속노화 관련 비정형 데이터 수집 및 학습용 데이터셋(JSONL) 구축',
        en: 'Collected unstructured slow-aging data through web crawling and PDF analysis, then built JSONL training datasets.',
      },
      {
        ko: 'Unsloth 프레임워크와 LoRA(Low-Rank Adaptation) 기법을 활용하여 Gemma 모델 효율적 파인튜닝',
        en: 'Fine-tuned Gemma efficiently with Unsloth and LoRA.',
      },
      {
        ko: '학습된 모델의 답변 정확도 및 문맥 이해도 평가 및 검증',
        en: 'Evaluated and validated answer accuracy and contextual understanding.',
      },
    ],
    achievements: [
      {
        ko: '한국정보기술학회(KIIT) 대학생논문경진대회 은상 수상',
        en: 'Won Silver Prize at the KIIT Undergraduate Paper Competition.',
      },
      {
        ko: '데이터 수집부터 모델 학습, 평가까지 AI 프로젝트 전체 파이프라인 경험',
        en: 'Covered the full AI pipeline from data collection to training and evaluation.',
      },
      {
        ko: '제한된 컴퓨팅 리소스 환경에서의 LLM 최적화 기술(Unsloth) 습득',
        en: 'Built experience optimizing LLMs under limited compute resources using Unsloth.',
      },
    ],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-05-15'),
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
      ko: '언어 장벽 없는 채용 시장을 위해 i18n 다국어 지원과 지도 기반 정보 제공을 결합한 웹 플랫폼입니다.',
      en: 'A web platform that combines multilingual i18n support with map-based information to reduce language barriers in hiring.',
    },
    techs: [
      'React',
      'TypeScript',
      'TanStack Query',
      'i18next',
      'Kakao Map API',
      'Module SCSS',
    ],
    projectOutline: {
      ko: '국내 거주 외국인들이 겪는 채용 정보의 파편화와 언어 문제를 해결하고자, 다국어 번역과 위치 기반 시각화 기능을 갖춘 통합 구인구직 서비스를 개발했습니다.',
      en: 'Built an integrated job platform with multilingual translation and location-based visualization for foreign residents in Korea.',
    },
    do: [
      {
        ko: 'react-i18next 라이브러리를 도입하여 실시간 한국어/영어 전환이 가능한 다국어 시스템 구축',
        en: 'Introduced react-i18next to support real-time Korean and English switching.',
      },
      {
        ko: 'Kakao Map API를 커스텀하여 사용자 위치 주변의 기업 정보를 마커와 오버레이로 시각화',
        en: 'Customized the Kakao Map API to visualize nearby companies with markers and overlays.',
      },
      {
        ko: 'TanStack Query(React Query)를 활용해 서버 데이터 캐싱 및 비동기 상태 관리 최적화',
        en: 'Optimized server caching and async state management with TanStack Query.',
      },
      {
        ko: '채용 공고 리스트, 상세 페이지 등 핵심 도메인 기능 개발 및 UI/UX 개선',
        en: 'Built core domain features such as job listings and detail pages, and improved the UI/UX.',
      },
    ],
    achievements: [
      {
        ko: '언어 장벽을 낮춘 사용자 친화적 UI로 외국인 구직자의 접근성 대폭 개선',
        en: 'Improved accessibility for foreign job seekers with a user-friendly interface that reduces language barriers.',
      },
      {
        ko: '지도 API와 채용 데이터를 결합한 직관적인 정보 전달 경험 제공',
        en: 'Provided a clearer information experience by combining map APIs with job data.',
      },
      {
        ko: '관련 기술 및 성과를 정리하여 학술 대회 논문 투고',
        en: 'Documented the work and submitted it as an academic conference paper.',
      },
    ],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-11-15'),
  },
  {
    id: 6,
    category: 'webFrontend',
    imgUrl: '/img/tech/joinus.png',
    title: {
      ko: 'JoinUs : 인터랙티브 동아리 트랙 추천 서비스',
      en: 'JoinUs: Interactive Club Track Recommendation Service',
    },
    description: {
      ko: 'MBTI 형식의 심리 테스트를 통해 예비 부원들에게 적합한 개발 트랙을 추천해주는 홍보용 인터랙티브 웹입니다.',
      en: 'An interactive promotional website that recommends development tracks using an MBTI-style test.',
    },
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
    projectOutline: {
      ko: '동아리 홍보 효과를 극대화하기 위해, 단순 정보 전달이 아닌 사용자 참여형 콘텐츠(테스트)를 기획하고 결과에 따라 맞춤형 트랙(FE/BE 등)을 제안했습니다.',
      en: 'Created a participatory test experience instead of a static brochure and suggested tailored tracks based on the results.',
    },
    do: [
      {
        ko: '사용자 응답에 따른 가중치 계산 및 트랙 매칭 알고리즘을 프론트엔드 단에서 구현',
        en: 'Implemented weighted scoring and track matching logic on the frontend.',
      },
      {
        ko: 'Tailwind CSS를 활용하여 모바일과 데스크탑 등 다양한 디바이스에 대응하는 반응형 UI 설계',
        en: 'Designed a responsive UI for mobile and desktop with Tailwind CSS.',
      },
      {
        ko: '결과 페이지에서 카카오톡 공유 및 링크 복사 등 바이럴 마케팅 기능 구현',
        en: 'Added viral-sharing features such as KakaoTalk sharing and copy-link on the result page.',
      },
    ],
    achievements: [
      {
        ko: '전년 대비 동아리 지원자 160% (50명) 증가라는 정량적 성과 달성',
        en: 'Achieved a 160% increase in club applicants year over year, reaching 50 applicants.',
      },
      {
        ko: '흥미로운 사용자 경험(UX)을 제공하여 교내 홍보 박람회에서 높은 참여율 기록',
        en: 'Drove high participation at the campus promotion fair with an engaging UX.',
      },
      {
        ko: '기획부터 배포, 홍보 활용까지 서비스의 실질적인 비즈니스 임팩트 경험',
        en: 'Covered the full service impact from planning and deployment to promotional use.',
      },
    ],
    deployUrl: [
      { title: 'JoinUs', url: 'https://joinus-kit-likelion.netlify.app/' },
    ],
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-04-30'),
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
      ko: '후원금 사용 내역의 투명한 공개와 기부자-시설 간의 소통을 지원하는 모바일 애플리케이션입니다.',
      en: 'A mobile application that supports transparent donation records and communication between donors and care facilities.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM'],
    projectOutline: {
      ko: '기부금 유용에 대한 불신을 해소하기 위해 블록체인 아이디어(투명성)를 차용하여, 누구나 후원 내역을 쉽게 확인하고 보육원과 직접 소통할 수 있는 플랫폼을 구축했습니다.',
      en: 'Built a platform inspired by transparency principles so anyone can verify donation records and communicate directly with childcare facilities.',
    },
    do: [
      {
        ko: '관리자 페이지의 데이터 동기화 버그 해결을 통해 서비스 데이터의 무결성 확보',
        en: 'Resolved admin-page synchronization bugs to improve data integrity.',
      },
      {
        ko: 'Flutter Riverpod을 활용한 전역 상태 관리 및 MVVM 아키텍처 적용으로 코드 유지보수성 향상',
        en: 'Improved maintainability through Riverpod-based state management and MVVM architecture.',
      },
      {
        ko: '기부자와 보육원 간의 실시간 채팅 기능 및 후원 인증 시스템 개발',
        en: 'Developed real-time chat and donation verification features between donors and childcare facilities.',
      },
    ],
    achievements: [
      {
        ko: '프로젝트의 기술적 완성도와 사회적 가치를 인정받아 KCI 등재 학술지에 논문 게재',
        en: 'Published in a KCI-indexed journal in recognition of both technical quality and social value.',
      },
      {
        ko: '실제 운영을 고려한 관리자 기능 및 데이터 검증 로직 구현',
        en: 'Implemented admin functions and validation logic with real operational use in mind.',
      },
      {
        ko: '기존 레거시 코드를 분석하고 개선하는 리팩토링 역량 강화',
        en: 'Strengthened refactoring skills by analyzing and improving legacy code.',
      },
    ],
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-15'),
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
      ko: '지도 위에 나만의 맛집을 기록하고 랭킹을 매겨 관리하는 개인화된 맛집 기록 서비스입니다.',
      en: 'A personalized restaurant logging service for saving and ranking favorite places on a map.',
    },
    techs: [
      'React',
      'TypeScript',
      'Zustand',
      'Kakao Map API',
      'OAuth 2.0',
      'Module SCSS',
    ],
    projectOutline: {
      ko: '포털 사이트의 광고성 리뷰에 지친 사용자들을 위해, 자신이 직접 검증한 맛집만을 지도에 저장하고 관리할 수 있는 프라이빗 아카이빙 플랫폼을 기획했습니다.',
      en: 'Planned a private archiving platform for users who want to save only personally verified restaurants instead of relying on ad-driven reviews.',
    },
    do: [
      {
        ko: 'Zustand를 이용해 사용자 정보와 UI 상태를 효율적으로 관리하여 불필요한 렌더링 최소화',
        en: 'Managed user and UI state efficiently with Zustand to minimize unnecessary rerenders.',
      },
      {
        ko: 'OAuth 2.0(카카오/네이버) 기반의 소셜 로그인 구현으로 인증 보안 강화',
        en: 'Strengthened authentication security with OAuth 2.0 social login via Kakao and Naver.',
      },
      {
        ko: '사용자가 직접 순위를 매기는 드래그 앤 드롭 랭킹 시스템 및 지도 마커 인터랙션 개발',
        en: 'Built drag-and-drop ranking and interactive map marker features.',
      },
    ],
    achievements: [
      {
        ko: '로그인부터 데이터 저장(CRUD), 지도 시각화까지 웹 서비스의 핵심 기능 완성',
        en: 'Completed key service flows from login and CRUD to map visualization.',
      },
      {
        ko: '전역 상태 관리 라이브러리(Zustand) 도입을 통한 성능 최적화 경험',
        en: 'Gained practical performance optimization experience through Zustand adoption.',
      },
      {
        ko: '웹뷰 환경을 고려한 모달 디자인 및 모바일 친화적 UI 구현',
        en: 'Implemented modal design and mobile-friendly UI tuned for webview environments.',
      },
    ],
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-07-15'),
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
      ko: '개인의 취향과 그날의 기분을 케이크와 컵케이크로 표현하여 소통하는 이색 소셜 네트워크 서비스입니다.',
      en: 'A social network where people communicate through visual cake and cupcake metaphors for mood and taste.',
    },
    techs: [
      'React',
      'TypeScript',
      'Styled Components',
      'React Calendar',
      'GitHub Actions',
    ],
    projectOutline: {
      ko: '2025년 트렌드인 "옴니보어"를 주제로 한 해커톤 프로젝트로, 텍스트가 아닌 시각적 메타포(케이크)를 통해 서로의 취향을 공유하는 독창적인 SNS를 개발했습니다.',
      en: 'Built a hackathon project around the 2025 omnivore trend, using visual cake metaphors instead of plain text to share tastes.',
    },
    do: [
      {
        ko: 'React Calendar 라이브러리를 커스터마이징하여 감정 기록에 특화된 캘린더 UI 구현',
        en: 'Customized React Calendar to create a calendar UI tailored to mood tracking.',
      },
      {
        ko: 'Styled Components를 활용해 동적 스타일링 및 일관된 디자인 시스템 적용',
        en: 'Used Styled Components for dynamic styling and a more consistent design system.',
      },
      {
        ko: 'Github Issue 템플릿 및 PR 규칙을 도입하여 팀 협업 프로세스 효율화',
        en: 'Improved team collaboration with GitHub issue templates and PR rules.',
      },
      {
        ko: '복잡한 모달(Modal)과 오버레이(Overlay) 상태 관리 로직 설계',
        en: 'Designed state management logic for complex modal and overlay behavior.',
      },
    ],
    achievements: [
      {
        ko: '제한된 시간(해커톤) 내에 완성도 높은 UI/UX를 구현하여 주제 적합성 인정',
        en: 'Delivered polished UI/UX within hackathon time limits and matched the theme well.',
      },
      {
        ko: '팀원 간의 원활한 소통과 코드 리뷰 문화를 주도하며 협업 능력 증명',
        en: 'Demonstrated strong collaboration by driving communication and code review culture.',
      },
    ],
    startDate: new Date('2025-01-20'),
    endDate: new Date('2025-02-15'),
  },
  {
    id: 10,
    category: 'backend',
    imgUrl: '/img/tech/plate_picks.png',
    title: {
      ko: 'Plate Picks : 투명한 익명 회식 메뉴 선정 시스템',
      en: 'Plate Picks: Transparent Anonymous Team Meal Selection System',
    },
    description: {
      ko: '조직 내 눈치 보지 않는 메뉴 선정을 위해 익명 투표와 결과 통계를 제공하는 웹 서비스입니다.',
      en: 'A web service that provides anonymous voting and result analytics for pressure-free team meal selection.',
    },
    techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Docker', 'Ubuntu'],
    projectOutline: {
      ko: '수직적인 조직 문화에서 발생할 수 있는 메뉴 선정의 어려움을 해결하고자, 풀스택 개발을 통해 익명성이 보장되는 투표 시스템을 구축했습니다.',
      en: 'Built a full-stack anonymous voting system to solve menu selection problems in hierarchical team cultures.',
    },
    do: [
      {
        ko: 'React로 직관적인 투표 인터페이스 및 실시간 결과 그래프 구현',
        en: 'Implemented an intuitive voting interface and real-time result graphs in React.',
      },
      {
        ko: 'NestJS와 MySQL을 사용하여 안정적인 REST API 백엔드 서버 구축',
        en: 'Built a stable REST API backend with NestJS and MySQL.',
      },
      {
        ko: 'Docker 컨테이너 기술을 활용하여 Ubuntu 서버에 배포 및 운영 환경 구성',
        en: 'Deployed and configured the production environment on Ubuntu using Docker containers.',
      },
    ],
    achievements: [
      {
        ko: '프론트엔드부터 백엔드, 배포까지 웹 개발의 전 과정을 혼자 수행하며 풀스택 역량 배양',
        en: 'Built full-stack capability by handling frontend, backend, and deployment end to end.',
      },
      {
        ko: '실제 사용 가능한 수준의 안정적인 투표 및 통계 시스템 완성',
        en: 'Delivered a stable voting and analytics system at a production-usable level.',
      },
    ],
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-05-10'),
  },
];
