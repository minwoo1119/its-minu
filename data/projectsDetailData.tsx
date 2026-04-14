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
      ko: '금품타 : 대학생 학습시간 인증 & 실시간 랭킹 앱',
      en: 'Geumpumta: Verified Study-Time Tracking & Real-Time Ranking App',
    },
    description: {
      ko: '대학생의 실제 학습 시간을 검증하고 학과·개인 단위 랭킹을 제공하는 학습 관리 앱입니다.',
      en: 'A study management app that verifies real study time and provides department- and individual-based rankings for university students.',
    },
    techs: [
      'Flutter',
      'Riverpod',
      'MVVM',
      'Dio',
      'OAuth 2.0',
      'Deep Linking',
      'iOS Screen Time API',
      'Google Play Console',
      'App Store Connect',
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
      ko: '학습 타이머의 단순 기록을 넘어, 학교 Wi-Fi 인증과 실시간 랭킹을 결합해 공정한 경쟁 구조를 제공하는 서비스형 앱을 설계했습니다. Flutter 기반 앱 구조 설계부터 인증, 타이머, 배포와 운영까지 전 과정을 주도했습니다.',
      en: 'Designed a service-oriented app that goes beyond simple study timers by combining school Wi-Fi verification with real-time rankings. I led the full lifecycle from Flutter architecture and authentication to timer logic, release, and operations.',
    },
    do: [
      {
        ko: 'Flutter + Riverpod + MVVM 기반으로 로그인, 타이머, 랭킹 기능을 포함한 앱 구조를 설계하고 구현',
        en: 'Designed and implemented the app architecture with Flutter, Riverpod, and MVVM, covering login, timer, and ranking features.',
      },
      {
        ko: 'Gateway IP 기반 학교 Wi-Fi 인증 로직을 구현해 실제 학습 시간 검증 신뢰도를 강화',
        en: 'Implemented gateway IP-based school Wi-Fi verification to strengthen the reliability of real study-time validation.',
      },
      {
        ko: 'Kakao·Google·Apple 소셜 로그인 흐름을 연동하고 모바일 환경에 맞는 인증 UX를 구성',
        en: 'Integrated Kakao, Google, and Apple sign-in flows and built a mobile-optimized authentication UX.',
      },
      {
        ko: 'iOS Screen Time API를 연동해 학습 중 앱 사용 제한 기능을 구현하고 서비스 몰입도를 높임',
        en: 'Integrated the iOS Screen Time API to restrict distracting app usage during study sessions and improve focus.',
      },
      {
        ko: '앱 재시작 시 발생하던 타이머 오차를 시간 계산 방식으로 개선하고, 랭킹 API 호출 구조를 최적화해 UI 로딩 속도와 안정성을 향상',
        en: 'Improved timer drift after app restarts through a time-calculation approach and optimized ranking API calls to enhance UI loading speed and stability.',
      },
    ],
    achievements: [
      {
        ko: 'Android/iOS 양대 마켓에 직접 배포하고 운영하며 서비스형 앱의 End-to-End 개발 경험 확보',
        en: 'Released and operated the app on both Android and iOS, gaining end-to-end product development experience.',
      },
      {
        ko: '정확한 시간 측정과 인증 로직을 결합해 공정한 학습 경쟁 구조를 구현',
        en: 'Built a fair study competition system by combining accurate time tracking with verification logic.',
      },
      {
        ko: '복잡한 모바일 인증, 상태 관리, 운영 안정성을 함께 설계한 프로젝트로 앱 아키텍처 역량을 강화',
        en: 'Strengthened app architecture skills by handling mobile authentication, state management, and operational stability together.',
      },
    ],
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-12-31'),
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
      ko: '마이크로피펫 분주량을 자동 인식하고 목표값까지 정밀 제어하는 OCR+모터 제어 기반 랩 오토메이션 시스템입니다.',
      en: 'A lab automation system that automatically recognizes micropipette volume and precisely controls it to a target value using OCR and motor control.',
    },
    techs: [
      'Python',
      'PyTorch',
      'YOLO',
      'PaddleOCR',
      'Jetson Orin Nano',
      'ONNX',
      'TensorRT',
      'UART',
    ],
    projectOutline: {
      ko: '실험실에서 수작업으로 수행되던 분주량 설정 과정을 자동화하기 위해, OCR 인식과 물리 제어를 결합한 통합 AI 시스템을 구축했습니다. 제한된 엣지 환경에서도 실시간으로 동작하도록 인식 정확도와 제어 안정성을 함께 최적화했습니다.',
      en: 'Built an integrated AI system that combines OCR and physical control to automate manual micropipette volume adjustment in labs. The system was optimized for both recognition accuracy and control stability under constrained edge-device environments.',
    },
    do: [
      {
        ko: 'Jetson Orin Nano 기반 엣지 환경에서 YOLO ROI 검출 + Custom OCR + PaddleOCR 하이브리드 인식 파이프라인을 설계',
        en: 'Designed a hybrid recognition pipeline on Jetson Orin Nano using YOLO ROI detection, custom OCR, and PaddleOCR.',
      },
      {
        ko: '분주량 인식값과 목표값 간 오차를 계산하는 폐루프 제어 알고리즘과 UART 기반 DC 모터 제어 로직을 구현',
        en: 'Implemented a closed-loop control algorithm that computes the error between recognized and target values, along with UART-based DC motor control logic.',
      },
      {
        ko: 'ONNX 변환 및 TensorRT 엔진 빌드를 적용해 추론 성능을 최적화하고 엣지 환경 실시간성을 확보',
        en: 'Applied ONNX conversion and TensorRT engine building to optimize inference performance and secure real-time behavior on edge devices.',
      },
      {
        ko: '반복 실험 기반 보정 과정을 통해 OCR 인식과 제어 오차를 함께 줄이는 통합 튜닝 파이프라인을 구축',
        en: 'Built an iterative calibration pipeline to reduce both OCR recognition error and control error through repeated experiments.',
      },
    ],
    achievements: [
      {
        ko: 'OCR 인식 정확도 98%, 목표 분주량 제어 정확도 97%를 달성',
        en: 'Achieved 98% OCR recognition accuracy and 97% target-volume control accuracy.',
      },
      {
        ko: 'AI 인식 모델과 물리 제어 시스템을 결합한 실험 자동화 파이프라인을 직접 구현',
        en: 'Built an experimental automation pipeline that combines AI recognition models with physical control systems.',
      },
      {
        ko: '제한된 엣지 디바이스 환경에서 비전 추론과 제어 로직을 함께 안정적으로 운영한 경험 확보',
        en: 'Gained hands-on experience operating both vision inference and control logic reliably in constrained edge-device environments.',
      },
    ],
    startDate: new Date('2025-05-01'),
    endDate: new Date('2026-02-28'),
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
    projectOutline: {
      ko: '버려지는 농산물의 새로운 판매 채널을 만들고 소비자에게는 더 합리적인 선택지를 제공하기 위해, 실제 서비스 운영을 고려한 모바일 커머스 앱 구조를 설계했습니다. 프론트엔드를 전담하며 데이터 흐름, 인증, 화면 구조를 체계화했습니다.',
      en: 'Designed a mobile commerce architecture with real service operation in mind, creating a new sales channel for imperfect produce while offering consumers better-value choices. I owned the frontend, structuring data flow, authentication, and screen architecture.',
    },
    do: [
      {
        ko: 'React Native(Expo) + TypeScript 기반으로 프로젝트를 구성하고 크로스플랫폼 앱 구조를 설계',
        en: 'Structured the project with React Native (Expo) and TypeScript, designing a cross-platform app architecture.',
      },
      {
        ko: 'Zustand를 활용한 클라이언트 상태 관리와 TanStack Query 기반 서버 상태 캐싱 전략을 적용해 데이터 흐름을 체계화',
        en: 'Systematized data flow using Zustand for client state and TanStack Query for server-state caching.',
      },
      {
        ko: '상품 목록·상세·등록·수정 등 핵심 커머스 화면 전반을 구현',
        en: 'Implemented core commerce screens including product list, detail, create, and edit flows.',
      },
      {
        ko: 'Kakao·Google·Apple OAuth 로그인, 이미지 업로드, 알림 기능, Expo Router 기반 화면 구조를 구현',
        en: 'Implemented Kakao, Google, and Apple OAuth sign-in, image upload, notifications, and Expo Router-based screen structure.',
      },
    ],
    achievements: [
      {
        ko: '실제 서비스형 모바일 앱 수준의 구조 설계와 핵심 사용자 흐름 구현 경험을 확보',
        en: 'Built experience designing service-grade mobile app architecture and implementing key user flows.',
      },
      {
        ko: '인증, 상태 관리, 이미지 처리 등 복합 기능이 결합된 앱을 안정적으로 통합',
        en: 'Integrated complex app features including authentication, state management, and image handling in a stable way.',
      },
      {
        ko: '크로스플랫폼 환경에서 유지보수 가능한 프론트엔드 구조 설계 역량을 강화',
        en: 'Strengthened maintainable frontend architecture skills in a cross-platform environment.',
      },
    ],
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-10-31'),
  },
  {
    id: 4,
    category: 'ai',
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: '저속노화 데이터셋 기반 LLM 파인튜닝',
      en: 'LLM Fine-Tuning with a Slow-Aging Domain Dataset',
    },
    description: {
      ko: '웹 기사와 PDF 매거진 기반 데이터를 재구성해 저속노화 도메인에 특화된 질의응답 LLM을 구축한 프로젝트입니다.',
      en: 'A project that rebuilt web-article and PDF-magazine data into a dataset for a slow-aging domain-specific Q&A LLM.',
    },
    techs: [
      'Python',
      'Gemma',
      'Unsloth',
      'LoRA',
      'JSONL',
      'Data Preprocessing',
      'LLM Fine-Tuning',
    ],
    projectOutline: {
      ko: '범용 LLM의 도메인 지식 부족 문제를 해결하기 위해, 저속노화 관련 비정형 데이터를 수집·정제하고 Instruction Tuning용 데이터셋으로 재구성했습니다. 제한된 GPU 환경에서도 학습이 가능하도록 경량 파인튜닝 전략을 설계하고 성능 검증까지 수행했습니다.',
      en: 'To address the lack of domain knowledge in general-purpose LLMs, I collected and refined slow-aging-related unstructured data and rebuilt it into an instruction-tuning dataset. I also designed a lightweight fine-tuning strategy for limited GPU environments and validated the resulting model quality.',
    },
    do: [
      {
        ko: '웹 기사와 PDF 매거진 기반 비정형 데이터를 수집·정제하고 Q&A 형식의 JSONL 데이터셋으로 재구성',
        en: 'Collected and refined unstructured data from web articles and PDF magazines, then rebuilt it into a Q&A-style JSONL dataset.',
      },
      {
        ko: 'Unsloth 기반 Gemma 모델에 LoRA 경량 파인튜닝을 적용하고 학습 파라미터 및 랭크를 조정해 메모리 사용량을 최적화',
        en: 'Applied LoRA-based lightweight fine-tuning to a Gemma model with Unsloth, tuning parameters and rank to optimize memory usage.',
      },
      {
        ko: '파인튜닝 전후 블라인드 비교, 30명 대상 정성 평가, 할루시네이션 및 문맥 일관성 분석을 통해 성능을 검증',
        en: 'Validated the model through before/after blind comparisons, qualitative evaluation with 30 participants, and hallucination/context-consistency analysis.',
      },
    ],
    achievements: [
      {
        ko: '기본 모델 대비 응답의 전문성과 구체성을 향상',
        en: 'Improved response specificity and professionalism compared with the base model.',
      },
      {
        ko: '데이터 수집부터 모델 학습, 평가까지 LLM 파이프라인 전 과정을 직접 수행',
        en: 'Executed the full LLM pipeline from data collection to training and evaluation.',
      },
      {
        ko: '한국정보기술학회(KIIT) 대학생논문경진대회 은상 수상',
        en: 'Won Silver Prize at the KIIT Undergraduate Paper Competition.',
      },
    ],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-05-31'),
  },
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
    projectOutline: {
      ko: '외국인 근로자가 겪는 채용 정보 파편화와 언어 장벽 문제를 해결하기 위해, 채용·기업·커뮤니티 기능을 하나로 묶은 웹 플랫폼을 설계했습니다. 프론트엔드 구조 설계부터 핵심 페이지 구현, 서비스 지속 운영 기반 마련까지 주도했습니다.',
      en: 'Designed a web platform that unifies jobs, company information, and community features to solve fragmented hiring information and language barriers for foreign workers. I led frontend architecture design, core page development, and the groundwork for sustained service operation.',
    },
    do: [
      {
        ko: 'React + TypeScript 기반 프로젝트 구조를 설계하고 유지보수성을 고려한 프론트엔드 개발 환경을 구축',
        en: 'Designed the React + TypeScript project structure and built a maintainable frontend development environment.',
      },
      {
        ko: 'TanStack Query로 서버 상태 캐싱 전략을 구성하고, Zustand로 클라이언트 전역 상태를 분리 관리',
        en: 'Set up a server-state caching strategy with TanStack Query and separated client global state with Zustand.',
      },
      {
        ko: '채용 공고, 기업 정보, 커뮤니티 핵심 페이지 3종을 구현하고 사용자 흐름을 연결',
        en: 'Implemented three core page groups—job postings, company information, and community—and connected the full user flow.',
      },
      {
        ko: 'Kakao Map API 연동과 i18n 기반 다국어 UI 구조를 설계해 위치·언어 접근성을 강화',
        en: 'Integrated the Kakao Map API and designed an i18n-based multilingual UI structure to improve location and language accessibility.',
      },
      {
        ko: '공동 개발자 이탈 이후 단독으로 프론트엔드를 유지·개발하며 서비스 지속 운영 기반을 마련',
        en: 'Maintained and advanced the frontend solo after a collaborator left, securing the foundation for continued service operation.',
      },
    ],
    achievements: [
      {
        ko: '복잡한 상태 관리와 외부 API 연동이 결합된 실서비스형 웹 구조 설계 경험 확보',
        en: 'Gained experience designing a real-service web architecture that combines complex state management with external API integration.',
      },
      {
        ko: '다국어 및 지도 기반 UX를 통해 외국인 사용자의 접근성을 높인 플랫폼 구현',
        en: 'Built a platform that improves accessibility for foreign users through multilingual and map-based UX.',
      },
      {
        ko: '개발 리소스가 줄어든 상황에서도 프론트엔드 지속 개발과 운영 안정성을 유지',
        en: 'Sustained frontend development and operational stability even under reduced development resources.',
      },
    ],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-11-30'),
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
    deployUrl: [
      { title: 'JoinUs', url: 'https://joinus-kit-likelion.netlify.app/' },
    ],
    projectOutline: {
      ko: '교내 동아리 홍보 효과를 높이기 위해 단순 소개 페이지 대신 사용자 참여형 테스트 경험을 기획했습니다. 박람회 현장 사용성과 즉각적 피드백 UX를 중심으로 설계해 실제 지원 전환으로 이어지도록 만들었습니다.',
      en: 'Created a participatory test experience instead of a static promo page to improve club outreach. The service was designed around fair-site usability and fast-feedback UX to drive real applicant conversion.',
    },
    do: [
      {
        ko: 'React + TypeScript + Tailwind CSS 기반으로 프론트엔드를 주도 개발',
        en: 'Led frontend development with React, TypeScript, and Tailwind CSS.',
      },
      {
        ko: '사용자 성향 질문을 기반으로 개발 트랙을 추천하는 인터랙티브 흐름과 결과 UI를 구현',
        en: 'Built an interactive flow and result UI that recommends development tracks based on user preference questions.',
      },
      {
        ko: '모바일·태블릿 시연 환경을 고려한 반응형 UI와 즉각적 피드백 인터랙션을 설계',
        en: 'Designed responsive UI and fast-feedback interactions for mobile and tablet demo environments.',
      },
      {
        ko: '디자이너 피드백을 반영해 UX를 개선하고 박람회 현장 사용성을 높임',
        en: 'Improved UX by incorporating designer feedback and increased on-site usability during the fair.',
      },
    ],
    achievements: [
      {
        ko: '사용자 유형 테스트 도입 후 동아리 지원자 수를 전년 대비 약 2배 증가시키는 데 기여',
        en: 'Contributed to roughly doubling club applicants year over year after introducing the user-type test.',
      },
      {
        ko: '짧은 체류 시간의 오프라인 홍보 환경에서도 높은 참여율을 이끌어낸 UX를 구현',
        en: 'Built a UX that achieved strong engagement even in short-stay offline promotion settings.',
      },
      {
        ko: '기획, 구현, 현장 활용까지 이어지는 실전형 프로모션 웹 개발 경험을 확보',
        en: 'Gained hands-on experience building a promotional web service from planning to implementation and on-site usage.',
      },
    ],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-03-31'),
  },
  {
    id: 7,
    category: 'app',
    imgUrl: '/img/tech/chirpaid.png',
    title: {
      ko: 'Chirp-aid : 투명성을 강조한 보육원 기부 앱',
      en: 'Chirp-aid: Donation App Focused on Transparency',
    },
    description: {
      ko: '보육원 기부 플랫폼의 관리자 기능 개선을 목표로, 레거시 Flutter 관리자 페이지를 리팩토링하고 구조를 재설계한 프로젝트입니다.',
      en: 'A project focused on improving the admin side of a childcare donation platform by refactoring a legacy Flutter admin page and redesigning its structure.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM', 'CRUD'],
    projectOutline: {
      ko: '기존 관리자 페이지의 복잡한 의존성과 스파게티 코드를 정리하고, 운영 안정성과 유지보수성을 높이기 위해 구조 재설계와 기능 정상화를 진행했습니다. 단순 UI 수정이 아니라 관리자 도메인 전체의 데이터 흐름을 정리한 리팩토링 중심 프로젝트입니다.',
      en: 'Refactored the admin experience to untangle complex dependencies and spaghetti code, improving both operational stability and maintainability. This was not just a UI cleanup, but a structural redesign of the admin-side data flow.',
    },
    do: [
      {
        ko: 'Flutter + Riverpod + MVVM 기반으로 관리자 페이지 구조를 재설계하고 책임 분리를 강화',
        en: 'Redesigned the admin page structure with Flutter, Riverpod, and MVVM to strengthen responsibility separation.',
      },
      {
        ko: 'ViewModel 책임 분리와 API 응답 데이터 가공 로직 정리를 통해 코드 일관성을 개선',
        en: 'Improved code consistency by separating ViewModel responsibilities and reorganizing API response transformation logic.',
      },
      {
        ko: '게시글·사용자 관리 CRUD 기능을 구현해 관리자 핵심 기능을 정상화',
        en: 'Implemented post and user management CRUD features to restore core admin functionality.',
      },
      {
        ko: '실시간 데이터 반영 버그와 의존성 문제를 해결해 운영 안정성을 높임',
        en: 'Resolved real-time data reflection bugs and dependency issues to improve operational stability.',
      },
    ],
    achievements: [
      {
        ko: '레거시 코드 리팩토링을 통해 관리자 기능 정상화와 UI 안정화에 기여',
        en: 'Contributed to restoring admin functionality and stabilizing the UI through legacy code refactoring.',
      },
      {
        ko: '복잡한 Flutter 프로젝트에서 구조적 일관성과 유지보수성을 높인 경험 확보',
        en: 'Gained experience improving structural consistency and maintainability in a complex Flutter project.',
      },
      {
        ko: '실제 운영용 관리자 페이지 관점에서 데이터 흐름과 상태 관리를 재정비',
        en: 'Reorganized data flow and state management from the perspective of a production admin system.',
      },
    ],
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-28'),
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
    projectOutline: {
      ko: '개인이 직접 검증한 맛집만 저장하고 관리할 수 있는 서비스를 목표로, 지도 탐색과 기록 기능을 결합한 웹 플랫폼을 개발했습니다. 해커톤 출품 이후에도 리팩토링을 이어가며 실제 사용 가능한 수준의 완성도를 높였습니다.',
      en: 'Built a web platform that combines map exploration with personal restaurant archiving so users can manage only places they personally trust. After the initial hackathon version, the project continued through refactoring toward real-world usability.',
    },
    do: [
      {
        ko: 'React + TypeScript 기반으로 개인 맞춤형 맛집 저장·관리 웹 플랫폼을 개발',
        en: 'Developed a personalized restaurant-saving and management web platform with React and TypeScript.',
      },
      {
        ko: '지도 기반 검색, 맛집 CRUD, 사용자 맞춤형 TOP 랭킹 기능을 구현해 핵심 사용자 흐름을 설계',
        en: 'Implemented map-based search, restaurant CRUD, and personalized top-ranking features to build the core user flow.',
      },
      {
        ko: 'Kakao OAuth 로그인과 Kakao Map API를 연동하고 Zustand 기반 전역 상태 관리를 적용',
        en: 'Integrated Kakao OAuth and the Kakao Map API while applying Zustand-based global state management.',
      },
      {
        ko: '모바일 환경을 고려한 반응형 UI를 설계하고 상태 복잡도가 높은 화면 구조를 안정화',
        en: 'Designed responsive UI for mobile environments and stabilized screens with high state complexity.',
      },
    ],
    achievements: [
      {
        ko: '해커톤 출품작을 지속 리팩토링해 실제 사용자로부터 정식 서비스 요청을 받을 정도의 완성도를 확보',
        en: 'Refined the hackathon submission until it reached a quality level where real users requested it as a formal service.',
      },
      {
        ko: '인증, 지도, 상태 관리가 결합된 복합 프론트엔드 구조 설계 경험을 확보',
        en: 'Gained experience designing a complex frontend architecture that combines authentication, maps, and state management.',
      },
      {
        ko: '사용자 중심의 개인화 기록 서비스 UX를 구현하며 웹 서비스 설계 역량을 강화',
        en: 'Strengthened web product design skills by building a user-centered personalized archive experience.',
      },
    ],
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-11-30'),
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
      ko: '개인의 취향과 감정을 시각적 메타포로 표현하고 공유할 수 있도록 설계한 소셜 플랫폼입니다.',
      en: 'A social platform designed for expressing and sharing personal taste and emotion through visual metaphors.',
    },
    techs: [
      'React',
      'TypeScript',
      'Styled Components',
      'React Calendar',
      'GitHub Actions',
    ],
    projectOutline: {
      ko: '해커톤 환경에서 2025년 트렌드인 옴니보어를 주제로, 텍스트 중심이 아닌 시각적 경험 중심의 SNS를 구현했습니다. 짧은 개발 기간 안에 차별화된 콘셉트와 완성도 있는 인터랙션을 동시에 보여주는 데 집중했습니다.',
      en: 'Built a visually driven social platform around the 2025 omnivore trend in a hackathon setting. The focus was on delivering both a differentiated concept and polished interactions within a short development cycle.',
    },
    do: [
      {
        ko: 'React Calendar를 커스터마이징해 감정 기록에 특화된 캘린더 기반 UI를 구현',
        en: 'Customized React Calendar to build a calendar-based UI tailored to emotion tracking.',
      },
      {
        ko: 'Styled Components 기반 동적 스타일링으로 일관된 디자인 시스템과 인터랙션을 설계',
        en: 'Designed a consistent design system and interactions using Styled Components-based dynamic styling.',
      },
      {
        ko: '복잡한 모달 및 오버레이 상태 로직을 분리해 사용자 흐름을 안정적으로 구현',
        en: 'Separated complex modal and overlay state logic to implement a stable user flow.',
      },
      {
        ko: 'GitHub Issue 템플릿과 PR 규칙을 도입해 협업 프로세스를 정리',
        en: 'Organized the collaboration process by introducing GitHub issue templates and PR rules.',
      },
    ],
    achievements: [
      {
        ko: '제한된 해커톤 기간 안에 차별화된 콘셉트와 높은 완성도의 UI/UX를 구현',
        en: 'Delivered a differentiated concept and polished UI/UX within hackathon time constraints.',
      },
      {
        ko: '시각적 메타포 기반 서비스 기획과 프론트엔드 구현 역량을 함께 보여준 프로젝트',
        en: 'Demonstrated both service planning and frontend execution skills through a visual-metaphor-based product.',
      },
      {
        ko: '협업 규칙과 리뷰 문화를 정리하며 팀 개발 생산성을 높인 경험 확보',
        en: 'Gained experience improving team productivity by organizing collaboration rules and review culture.',
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
      ko: 'Plate Picks : 익명 회식 메뉴 선정 시스템',
      en: 'Plate Picks: Anonymous Team Meal Selection System',
    },
    description: {
      ko: '익명 투표와 결과 통계를 통해 조직 내 메뉴 선정 부담을 줄이는 웹 서비스입니다.',
      en: 'A web service that reduces the burden of team meal selection through anonymous voting and result analytics.',
    },
    techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Docker', 'Ubuntu'],
    projectOutline: {
      ko: '조직 내 회식 메뉴 선정 과정에서 발생하는 눈치와 비효율을 줄이기 위해, 익명 투표 기반 의사결정 시스템을 구축했습니다. 프론트엔드, 백엔드, 배포를 모두 직접 다루며 풀스택 개발 역량을 확장한 프로젝트입니다.',
      en: 'Built an anonymous voting-based decision-making system to reduce pressure and inefficiency in team meal selection. This project expanded my full-stack capability by covering frontend, backend, and deployment end to end.',
    },
    do: [
      {
        ko: 'React 기반으로 직관적인 투표 인터페이스와 결과 확인 UI를 구현',
        en: 'Implemented an intuitive voting interface and result-checking UI with React.',
      },
      {
        ko: 'NestJS와 MySQL을 활용해 익명 투표 처리 및 결과 집계용 REST API를 구축',
        en: 'Built REST APIs for anonymous voting and result aggregation using NestJS and MySQL.',
      },
      {
        ko: 'Docker 기반으로 서비스를 컨테이너화하고 Ubuntu 서버 배포 환경을 구성',
        en: 'Containerized the service with Docker and configured the deployment environment on Ubuntu.',
      },
      {
        ko: '프론트엔드, 백엔드, 배포 단계를 하나의 흐름으로 연결해 실제 운영 가능한 구조를 설계',
        en: 'Connected frontend, backend, and deployment into one flow to design an operationally viable architecture.',
      },
    ],
    achievements: [
      {
        ko: '프론트엔드부터 백엔드, 배포까지 전 과정을 직접 수행하며 풀스택 개발 경험을 확보',
        en: 'Gained full-stack development experience by handling frontend, backend, and deployment end to end.',
      },
      {
        ko: '익명성 보장과 결과 시각화를 결합한 실사용형 웹 서비스 구조를 구현',
        en: 'Built a practical web service structure that combines anonymity with result visualization.',
      },
      {
        ko: 'NestJS, MySQL, Docker, Ubuntu를 연계한 서비스 운영 흐름을 직접 경험',
        en: 'Built hands-on experience operating a service workflow connecting NestJS, MySQL, Docker, and Ubuntu.',
      },
    ],
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-05-10'),
  },
];
