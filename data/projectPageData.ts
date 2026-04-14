import type { LocalizedText } from '../../src/i18n';
import type { ProjectCategory } from './projectsData';

interface TechChoice {
  name: string;
  reason: LocalizedText;
}

interface FeatureVisual {
  imageUrl: string;
  caption: LocalizedText;
}

interface FeatureItem {
  title: LocalizedText;
  description: LocalizedText;
  visual: FeatureVisual;
}

interface TroubleShootingItem {
  problem: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
}

interface ResultMetric {
  label: LocalizedText;
  value: LocalizedText;
  description: LocalizedText;
}

interface ProjectLinkResource {
  label: LocalizedText;
  url?: string;
  note?: LocalizedText;
}

export interface ProjectPageInfo {
  id: number;
  category: ProjectCategory;
  title: LocalizedText;
  oneLiner: LocalizedText;
  heroImageUrl: string;
  overview: LocalizedText;
  startDate: Date;
  endDate: Date;
  teamInfo: LocalizedText;
  contribution: LocalizedText;
  techChoices: TechChoice[];
  keyFeatures: FeatureItem[];
  roleDetails: LocalizedText[];
  troubleshooting: TroubleShootingItem[];
  resultMetrics: ResultMetric[];
  lessonsLearned: LocalizedText[];
  limitations: LocalizedText[];
  nextSteps: LocalizedText[];
  links: ProjectLinkResource[];
}

const privateRepoNote: LocalizedText = {
  ko: '저장소는 비공개이거나 정리 후 공개 예정입니다.',
  en: 'The repository is private or will be published after cleanup.',
};

const noDocYetNote: LocalizedText = {
  ko: '관련 기록은 아직 정리 중입니다.',
  en: 'Related documentation is still being organized.',
};

export const projectPageData: ProjectPageInfo[] = [
  {
    id: 1,
    category: 'app',
    title: {
      ko: '금품타',
      en: 'Geumpumta',
    },
    oneLiner: {
      ko: '공정한 공부 시간 기록과 실시간 경쟁으로 학습 습관을 만드는 스터디 타이머 앱',
      en: 'A study timer app that builds habits with reliable tracking and live competition.',
    },
    heroImageUrl: '/img/tech/geumpumta.png',
    overview: {
      ko: '기획부터 앱 구조 설계, 인증, 타이머 신뢰성 확보, 양대 마켓 배포까지 전 과정을 주도한 모바일 프로젝트입니다.',
      en: 'A mobile project I led end to end, from planning and architecture to authentication, timer reliability, and store release.',
    },
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-03-01'),
    teamInfo: {
      ko: '개인 프로젝트',
      en: 'Solo project',
    },
    contribution: {
      ko: '기획, Flutter 앱 개발, 상태 관리 설계, 소셜 로그인 연동, 배포 및 심사 대응 100%',
      en: '100% ownership of planning, Flutter app development, state management, social login integration, and release handling.',
    },
    techChoices: [
      {
        name: 'Flutter',
        reason: {
          ko: 'Android와 iOS를 동시에 안정적으로 운영하기 위해 단일 코드베이스를 선택했습니다.',
          en: 'Chosen to ship Android and iOS reliably from a single codebase.',
        },
      },
      {
        name: 'Riverpod',
        reason: {
          ko: '타이머, 인증, 랭킹 상태가 얽히는 구조에서 의존성 분리를 명확히 하기 위해 채택했습니다.',
          en: 'Used to keep dependencies clear across timer, auth, and ranking state.',
        },
      },
      {
        name: 'MVVM',
        reason: {
          ko: '뷰와 비즈니스 로직을 분리해 배포 이후 유지보수 비용을 낮추기 위해 적용했습니다.',
          en: 'Applied to separate view and business logic and reduce maintenance cost after launch.',
        },
      },
      {
        name: 'Dio',
        reason: {
          ko: 'Interceptor 기반의 공통 에러 처리와 토큰 재발급 흐름을 정리하기 위해 사용했습니다.',
          en: 'Used to centralize error handling and token refresh flows through interceptors.',
        },
      },
    ],
    keyFeatures: [
      {
        title: {
          ko: '고신뢰성 공부 타이머',
          en: 'Reliable study timer',
        },
        description: {
          ko: '앱 백그라운드 전환이나 종료 상황에서도 서버 기준 시간 보정으로 누락 없는 타이머 경험을 구현했습니다.',
          en: 'Implemented a timer that stays reliable even through backgrounding or app termination by correcting against server time.',
        },
        visual: {
          imageUrl: '/img/tech/geumpumta.png',
          caption: {
            ko: '공부 시간 측정 메인 화면',
            en: 'Main study-timer screen',
          },
        },
      },
      {
        title: {
          ko: '학교/학과별 랭킹',
          en: 'School and department ranking',
        },
        description: {
          ko: '같은 집단 안에서 경쟁 구도를 만들도록 학교와 학과 기준의 실시간 랭킹 UI를 구성했습니다.',
          en: 'Built real-time ranking UI scoped by school and department to create meaningful competition.',
        },
        visual: {
          imageUrl: '/img/tech/geumpumta.png',
          caption: {
            ko: '랭킹과 통계 중심의 동기부여 화면',
            en: 'Motivation screen focused on rankings and stats',
          },
        },
      },
      {
        title: {
          ko: '소셜 로그인과 배포 파이프라인',
          en: 'Social login and release pipeline',
        },
        description: {
          ko: '카카오, 구글, 애플 로그인을 붙이고 TestFlight 및 Play Console 심사 흐름까지 연결했습니다.',
          en: 'Integrated Kakao, Google, and Apple login and connected the full TestFlight and Play Console review flow.',
        },
        visual: {
          imageUrl: '/img/tech/geumpumta.png',
          caption: {
            ko: '로그인 및 온보딩 흐름',
            en: 'Login and onboarding flow',
          },
        },
      },
    ],
    roleDetails: [
      {
        ko: 'Heartbeat API와 로컬 오프셋 계산을 조합해 타이머 정확도를 보장했습니다.',
        en: 'Guaranteed timer accuracy by combining a heartbeat API with local offset calculations.',
      },
      {
        ko: 'MVVM과 Riverpod을 기준으로 화면, 상태, 네트워크 계층의 책임을 분리했습니다.',
        en: 'Separated screen, state, and network responsibilities with MVVM and Riverpod.',
      },
      {
        ko: '앱스토어 심사 대응과 배포용 설정값 관리까지 직접 처리했습니다.',
        en: 'Handled app-store review responses and release configuration management directly.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '사용자가 앱을 백그라운드로 보내거나 종료하면 로컬 타이머 기준 시간이 흔들려 누적 공부 시간이 틀어졌습니다.',
          en: 'Accumulated study time drifted when the app was backgrounded or closed because the local timer became unreliable.',
        },
        solution: {
          ko: '서버 heartbeat 시점의 기준 시간을 받아 로컬 시계와의 오프셋을 계산하고, 재진입 시 해당 차이만큼 시간을 보정했습니다.',
          en: 'Calculated an offset between local time and server heartbeat time, then corrected elapsed time when the user returned.',
        },
        result: {
          ko: '앱 상태 변화와 무관하게 일관된 기록을 제공해 사용자의 신뢰를 확보했습니다.',
          en: 'Delivered consistent time records regardless of app state changes, improving user trust.',
        },
      },
    ],
    resultMetrics: [
      {
        label: {
          ko: '배포 범위',
          en: 'Release scope',
        },
        value: {
          ko: 'iOS / Android 동시 출시',
          en: 'Released on both iOS and Android',
        },
        description: {
          ko: '기획부터 스토어 등록까지 전 과정을 직접 수행했습니다.',
          en: 'Handled the full path from planning to store submission.',
        },
      },
      {
        label: {
          ko: '핵심 성과',
          en: 'Core outcome',
        },
        value: {
          ko: '신뢰도 높은 백그라운드 타이머 확보',
          en: 'High-confidence background timer',
        },
        description: {
          ko: '핵심 UX였던 공부 시간 측정의 정확도를 서비스 강점으로 만들었습니다.',
          en: 'Turned timer accuracy, the core UX, into a product strength.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '모바일 앱은 기능 구현보다도 OS 제약 안에서 신뢰성을 확보하는 설계가 중요하다는 점을 배웠습니다.',
        en: 'Learned that mobile apps depend as much on reliability under OS constraints as on feature implementation.',
      },
      {
        ko: '스토어 배포 경험은 제품 완성도를 코드 바깥의 운영 관점까지 확장해 생각하게 만들었습니다.',
        en: 'Store release experience pushed me to think about product quality beyond code alone.',
      },
    ],
    limitations: [
      {
        ko: '푸시 알림과 리텐션 분석 체계는 초기 버전에서 깊게 다루지 못했습니다.',
        en: 'Push notifications and retention analytics were not deeply addressed in the first version.',
      },
    ],
    nextSteps: [
      {
        ko: '학습 패턴 기반 개인화 리포트와 복습 알림 기능을 추가할 계획입니다.',
        en: 'Plan to add personalized study reports and review reminders based on learning patterns.',
      },
    ],
    links: [
      {
        label: { ko: '앱스토어', en: 'App Store' },
        url: 'https://apps.apple.com/kr/app/%EA%B8%88%ED%92%88%ED%83%80/id6755481890',
      },
      {
        label: { ko: '플레이스토어', en: 'Google Play' },
        url: 'https://play.google.com/store/apps/details?id=com.geumpumgalchwi.geumpumta&hl=ko',
      },
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 2,
    category: 'ai',
    title: {
      ko: '마이크로 피펫 OCR 시스템',
      en: 'Micropipette OCR System',
    },
    oneLiner: {
      ko: '피펫 눈금을 읽고 모터를 제어해 실험 준비를 자동화한 엣지 AI 시스템',
      en: 'An edge AI system that reads pipette scales and controls motors to automate lab setup.',
    },
    heroImageUrl: '/img/tech/pipet.jpg',
    overview: {
      ko: '비전 모델과 임베디드 제어를 하나의 루프로 엮어 실제 실험 환경에서 동작 가능한 자동화 시스템으로 구현했습니다.',
      en: 'Connected vision models and embedded control into a single loop that can operate in a real lab setting.',
    },
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-12-30'),
    teamInfo: {
      ko: '팀 프로젝트 3인',
      en: '3-person team project',
    },
    contribution: {
      ko: 'OCR 모델 최적화, ROI 추출 로직, Jetson 배포, 인식 결과 기반 모터 제어 루프 구현 주도',
      en: 'Led OCR optimization, ROI extraction, Jetson deployment, and recognition-driven motor control.',
    },
    techChoices: [
      {
        name: 'PyTorch',
        reason: {
          ko: '실험 단계에서 모델 구조를 빠르게 바꾸고 검증하기 쉬워 선택했습니다.',
          en: 'Chosen for fast experimentation and easy iteration on model architecture.',
        },
      },
      {
        name: 'Jetson Orin Nano',
        reason: {
          ko: '고성능 서버 없이 현장 장비에서 추론까지 끝내기 위한 엣지 환경이 필요했습니다.',
          en: 'Needed an edge environment that could run inference on-site without a high-end server.',
        },
      },
      {
        name: 'TensorRT',
        reason: {
          ko: '실시간 제어를 위해 추론 지연 시간을 줄이는 최적화가 필수였기 때문에 도입했습니다.',
          en: 'Introduced to reduce inference latency, which was essential for real-time control.',
        },
      },
    ],
    keyFeatures: [
      {
        title: {
          ko: '피펫 영역 자동 검출',
          en: 'Automatic pipette ROI detection',
        },
        description: {
          ko: '카메라 입력에서 숫자 인식에 필요한 영역만 빠르게 분리해 인식 안정성을 높였습니다.',
          en: 'Isolated only the necessary region from camera input to improve recognition stability.',
        },
        visual: {
          imageUrl: '/img/tech/pipet.jpg',
          caption: {
            ko: '피펫 스케일 인식 대상 화면',
            en: 'Pipette scale recognition target view',
          },
        },
      },
      {
        title: {
          ko: '실시간 숫자 인식',
          en: 'Real-time digit recognition',
        },
        description: {
          ko: '실험자가 목표 수치를 맞출 수 있도록 낮은 지연 시간의 OCR 추론 파이프라인을 만들었습니다.',
          en: 'Built a low-latency OCR inference pipeline so operators can match target values in real time.',
        },
        visual: {
          imageUrl: '/img/tech/pipet.jpg',
          caption: {
            ko: 'OCR 추론 결과 시각화',
            en: 'Visualization of OCR inference results',
          },
        },
      },
      {
        title: {
          ko: '모터 피드백 제어',
          en: 'Motor feedback control',
        },
        description: {
          ko: '인식값과 목표값 차이를 바탕으로 모터를 미세 조정하는 제어 로직을 설계했습니다.',
          en: 'Designed control logic that finely adjusts the motor using the gap between recognized and target values.',
        },
        visual: {
          imageUrl: '/img/tech/pipet.jpg',
          caption: {
            ko: '인식값 기반 제어 루프',
            en: 'Recognition-driven control loop',
          },
        },
      },
    ],
    roleDetails: [
      {
        ko: '실험 환경에서 노이즈가 심한 입력 영상을 처리할 수 있도록 전처리와 ROI 추출 전략을 정교화했습니다.',
        en: 'Refined preprocessing and ROI extraction to handle noisy image inputs in lab environments.',
      },
      {
        ko: 'Jetson 배포 시 메모리와 지연 시간 제약을 고려해 모델 경량화와 추론 최적화를 함께 진행했습니다.',
        en: 'Handled model compression and inference optimization together under Jetson memory and latency constraints.',
      },
      {
        ko: 'AI 인식 결과가 실제 하드웨어 제어까지 이어지도록 소프트웨어와 모터 제어 흐름을 연결했습니다.',
        en: 'Connected AI recognition results to actual hardware control in the end-to-end loop.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '데스크탑 환경에서는 동작하던 OCR 모델이 Jetson에서 목표 속도를 내지 못해 실시간 제어가 어려웠습니다.',
          en: 'The OCR model that worked on desktop did not hit the required speed on Jetson, making real-time control difficult.',
        },
        solution: {
          ko: 'TensorRT 변환과 입력 파이프라인 정리를 통해 병목 구간을 줄이고, ROI 범위를 좁혀 처리량을 확보했습니다.',
          en: 'Reduced bottlenecks through TensorRT conversion and pipeline cleanup, then narrowed ROI scope to increase throughput.',
        },
        result: {
          ko: '50ms대 추론 지연 시간을 확보해 실시간 제어 흐름을 안정화했습니다.',
          en: 'Stabilized the real-time control loop by reaching roughly 50 ms inference latency.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '인식 정확도', en: 'Recognition accuracy' },
        value: { ko: '85%+', en: '85%+' },
        description: {
          ko: '실험 환경 기준으로 실사용 가능 수준의 인식 성능을 달성했습니다.',
          en: 'Reached recognition performance that was practical for the lab environment.',
        },
      },
      {
        label: { ko: '지연 시간', en: 'Latency' },
        value: { ko: '약 50ms', en: 'About 50 ms' },
        description: {
          ko: '실시간 모터 제어에 필요한 반응 속도를 확보했습니다.',
          en: 'Secured the response speed required for real-time motor control.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: 'AI 성능 평가는 정확도만이 아니라 배포 환경의 속도와 제어 안정성까지 함께 봐야 한다는 점을 배웠습니다.',
        en: 'Learned that AI evaluation must include deployment speed and control stability, not just accuracy.',
      },
    ],
    limitations: [
      {
        ko: '조명 변화와 피펫 종류가 더 다양해질 경우 데이터셋 보강이 추가로 필요합니다.',
        en: 'More dataset expansion is needed for wider lighting variation and more pipette types.',
      },
    ],
    nextSteps: [
      {
        ko: '도메인 적응 데이터셋을 늘리고 제어 파라미터를 자동 보정하는 방향으로 확장할 계획입니다.',
        en: 'Plan to expand domain-adapted datasets and automate control parameter tuning.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
      {
        label: { ko: '기술 문서', en: 'Technical Notes' },
        note: noDocYetNote,
      },
    ],
  },
  {
    id: 3,
    category: 'app',
    title: {
      ko: 'UhDyL',
      en: 'UhDyL',
    },
    oneLiner: {
      ko: '못난이 농산물 거래를 더 쉽게 만드는 지역 기반 모바일 커머스',
      en: 'A location-aware mobile commerce app for imperfect produce.',
    },
    heroImageUrl: '/img/tech/uhdyl.png',
    overview: {
      ko: '지역 농가와 가치소비 사용자를 연결하는 모바일 거래 경험을 MVP 수준으로 구현한 앱 프로젝트입니다.',
      en: 'An MVP mobile commerce project connecting local farms with sustainability-minded consumers.',
    },
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-08-30'),
    teamInfo: {
      ko: '팀 프로젝트 4인',
      en: '4-person team project',
    },
    contribution: {
      ko: 'React Native 앱 UI 구현, 상태 관리 설계, 공통 컴포넌트 모듈화, 성능 리팩터링 담당',
      en: 'Handled React Native UI, state management, shared component modularization, and performance refactoring.',
    },
    techChoices: [
      {
        name: 'React Native + Expo',
        reason: {
          ko: '짧은 개발 기간 안에 양 플랫폼을 동시에 검증하기 위해 선택했습니다.',
          en: 'Chosen to validate both platforms within a short development cycle.',
        },
      },
      {
        name: 'Zustand',
        reason: {
          ko: '장바구니와 사용자 상태를 간결하게 관리하면서도 보일러플레이트를 줄이기 위해 도입했습니다.',
          en: 'Introduced to manage cart and user state simply while avoiding boilerplate.',
        },
      },
      {
        name: 'Styled Components',
        reason: {
          ko: '컴포넌트 단위 스타일 재사용성과 테마 확장성을 확보하기 위해 사용했습니다.',
          en: 'Used for component-level style reuse and future theming flexibility.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '상품 탐색과 상세 페이지', en: 'Product browsing and detail pages' },
        description: {
          ko: '농산물 정보와 판매자 스토리를 함께 보여주는 탐색 흐름을 설계했습니다.',
          en: 'Designed browsing flows that present produce information alongside seller stories.',
        },
        visual: {
          imageUrl: '/img/tech/uhdyl.png',
          caption: { ko: '상품 탐색 메인 화면', en: 'Main product discovery screen' },
        },
      },
      {
        title: { ko: '장바구니 상태 관리', en: 'Cart state management' },
        description: {
          ko: '여러 화면에서 참조하는 장바구니 상태를 전역으로 관리해 사용 흐름을 단순화했습니다.',
          en: 'Managed cart state globally across screens to simplify the user flow.',
        },
        visual: {
          imageUrl: '/img/tech/uhdyl.png',
          caption: { ko: '구매 전환 흐름 예시', en: 'Example purchase-conversion flow' },
        },
      },
      {
        title: { ko: '재사용 가능한 UI 컴포넌트', en: 'Reusable UI components' },
        description: {
          ko: '카드, 버튼, 입력 폼을 공통화해 빠른 화면 확장이 가능하도록 구성했습니다.',
          en: 'Standardized cards, buttons, and form inputs to make screen expansion faster.',
        },
        visual: {
          imageUrl: '/img/tech/uhdyl.png',
          caption: { ko: '공통 디자인 컴포넌트 활용 화면', en: 'Screen using shared design components' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '상태와 뷰를 느슨하게 연결해 기능이 늘어나도 화면 복잡도가 급격히 올라가지 않도록 구성했습니다.',
        en: 'Kept state and view loosely coupled so UI complexity would not spike as features grew.',
      },
      {
        ko: '공통 컴포넌트 기준을 세워 팀 내 디자인 일관성과 개발 속도를 동시에 확보했습니다.',
        en: 'Defined shared component standards to improve both consistency and development speed.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '여러 화면에서 장바구니 상태를 각각 관리하면서 동기화 누락과 불필요한 리렌더링이 발생했습니다.',
          en: 'Managing cart state separately across screens caused sync gaps and unnecessary rerenders.',
        },
        solution: {
          ko: 'Zustand 스토어로 장바구니와 사용자 상태를 통합하고 selector 단위로 필요한 상태만 구독하도록 바꿨습니다.',
          en: 'Unified cart and user state in a Zustand store and switched screens to subscribe only to required slices.',
        },
        result: {
          ko: '상태 변경 흐름이 단순해졌고 화면 간 데이터 일관성이 높아졌습니다.',
          en: 'State transitions became simpler and data consistency across screens improved.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '제품 단계', en: 'Product stage' },
        value: { ko: 'MVP 구현 완료', en: 'MVP completed' },
        description: {
          ko: '핵심 거래 흐름을 검증할 수 있는 수준의 기능을 완성했습니다.',
          en: 'Completed the feature set needed to validate the core commerce flow.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '커머스 앱은 데이터 흐름이 길기 때문에 초기에 상태 경계를 잘 잡는 것이 중요하다는 점을 체감했습니다.',
        en: 'Learned that commerce apps need carefully defined state boundaries early because data flows are long.',
      },
    ],
    limitations: [
      {
        ko: '결제와 주문 관리까지는 MVP 범위에서 제외되었습니다.',
        en: 'Payment and full order management were excluded from the MVP scope.',
      },
    ],
    nextSteps: [
      {
        ko: '실제 농가 운영을 고려한 재고, 배송, 결제 플로우를 보강할 계획입니다.',
        en: 'Plan to extend the flow with inventory, delivery, and payment features for real operation.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 4,
    category: 'ai',
    title: {
      ko: '저속노화 LLM 파인튜닝',
      en: 'Slow-Aging LLM Fine-Tuning',
    },
    oneLiner: {
      ko: '도메인 지식 부족을 보완하기 위해 저속노화 전문 데이터를 학습한 질의응답 AI',
      en: 'A domain-specialized Q&A AI trained on slow-aging knowledge.',
    },
    heroImageUrl: '/img/tech/unsloth.png',
    overview: {
      ko: '데이터 수집부터 정제, 학습, 평가까지 하나의 파이프라인으로 연결한 도메인 특화 LLM 프로젝트입니다.',
      en: 'A domain-focused LLM project that connected collection, preprocessing, training, and evaluation into one pipeline.',
    },
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-05-15'),
    teamInfo: {
      ko: '팀 프로젝트 2인',
      en: '2-person team project',
    },
    contribution: {
      ko: '데이터 수집/정제, JSONL 데이터셋 구축, Unsloth 기반 학습 파이프라인, 평가 실험 담당',
      en: 'Handled data collection and cleaning, JSONL dataset creation, Unsloth training pipeline, and evaluation.',
    },
    techChoices: [
      {
        name: 'Gemma',
        reason: {
          ko: '경량성과 성능 균형이 좋아 제한된 환경에서 실험하기 적합했습니다.',
          en: 'Fit limited-resource experimentation well due to its balance of size and performance.',
        },
      },
      {
        name: 'Unsloth',
        reason: {
          ko: '적은 자원으로도 빠르게 파인튜닝 실험을 반복하기 위해 도입했습니다.',
          en: 'Introduced to iterate fine-tuning experiments quickly on modest resources.',
        },
      },
      {
        name: 'LoRA',
        reason: {
          ko: '전체 모델 재학습 대신 효율적으로 도메인 적응을 시키기 위해 선택했습니다.',
          en: 'Used to adapt the model efficiently without retraining every parameter.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '도메인 데이터셋 구축', en: 'Domain dataset construction' },
        description: {
          ko: '웹 자료와 문헌을 기반으로 저속노화 관련 질의응답 데이터를 구조화했습니다.',
          en: 'Structured slow-aging Q&A data from web sources and literature.',
        },
        visual: {
          imageUrl: '/img/tech/unsloth.png',
          caption: { ko: '학습 데이터 파이프라인 개요', en: 'Training data pipeline overview' },
        },
      },
      {
        title: { ko: '효율적 파인튜닝', en: 'Efficient fine-tuning' },
        description: {
          ko: '제한된 자원 안에서 실험 반복 속도를 높이는 학습 파이프라인을 구성했습니다.',
          en: 'Built a training pipeline that improved iteration speed under limited resources.',
        },
        visual: {
          imageUrl: '/img/tech/unsloth.png',
          caption: { ko: '모델 학습 및 검증 흐름', en: 'Model training and validation flow' },
        },
      },
      {
        title: { ko: '답변 품질 검증', en: 'Answer quality evaluation' },
        description: {
          ko: '정확도와 문맥 이해도를 중심으로 파인튜닝 전후의 차이를 비교했습니다.',
          en: 'Compared pre- and post-fine-tuning quality with a focus on accuracy and contextual understanding.',
        },
        visual: {
          imageUrl: '/img/tech/unsloth.png',
          caption: { ko: '도메인 응답 품질 비교', en: 'Domain answer quality comparison' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '문서 원천별 품질 편차가 커서 수집 후 정제 규칙을 세분화해 데이터셋 일관성을 높였습니다.',
        en: 'Improved dataset consistency by refining cleaning rules across uneven document sources.',
      },
      {
        ko: '실험 자원이 제한적이어서 한 번의 학습 비용보다 반복 가능성을 우선하는 구조를 설계했습니다.',
        en: 'Designed the workflow to prioritize repeatability over single-run scale because compute resources were limited.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '원천 자료가 웹 문서와 PDF로 흩어져 있어 형식이 제각각이었고 그대로는 학습 데이터로 쓰기 어려웠습니다.',
          en: 'Source materials were scattered across web pages and PDFs in inconsistent formats, making them unfit for training as-is.',
        },
        solution: {
          ko: '수집 단계에서 문서 유형별 전처리 규칙을 분리하고, JSONL 포맷으로 일관되게 변환하는 파이프라인을 만들었습니다.',
          en: 'Separated preprocessing rules by document type and built a pipeline that normalized everything into JSONL.',
        },
        result: {
          ko: '학습 데이터 품질이 안정화되면서 모델 응답의 문맥 일관성이 개선되었습니다.',
          en: 'Stabilized training data quality and improved contextual consistency in model answers.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '수상', en: 'Award' },
        value: { ko: 'KIIT 은상', en: 'KIIT Silver Prize' },
        description: {
          ko: '기술적 완성도와 주제 적합성을 인정받았습니다.',
          en: 'Recognized for technical quality and relevance of the topic.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: 'LLM 프로젝트의 품질은 모델보다 데이터셋 설계에 더 크게 좌우될 수 있다는 점을 배웠습니다.',
        en: 'Learned that LLM quality can depend more on dataset design than on the model alone.',
      },
    ],
    limitations: [
      {
        ko: '정량 평가 지표를 더 체계적으로 수집하지 못한 점이 아쉬웠습니다.',
        en: 'A limitation was not collecting more systematic quantitative evaluation metrics.',
      },
    ],
    nextSteps: [
      {
        ko: 'RAG와 비교 실험을 진행해 파인튜닝 대비 장단점을 더 명확히 정리할 계획입니다.',
        en: 'Plan to compare this approach against RAG to clarify tradeoffs more clearly.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
      {
        label: { ko: '연구 기록', en: 'Research Notes' },
        note: noDocYetNote,
      },
    ],
  },
  {
    id: 5,
    category: 'webFrontend',
    title: {
      ko: 'JobForeigner',
      en: 'JobForeigner',
    },
    oneLiner: {
      ko: '언어 장벽과 위치 정보 문제를 함께 풀어낸 외국인 구인구직 플랫폼',
      en: 'A multilingual job platform designed around language and location barriers.',
    },
    heroImageUrl: '/img/tech/jobforeigner.png',
    overview: {
      ko: '다국어 전환, 채용 데이터 탐색, 지도 시각화를 한 화면 경험으로 엮은 프론트엔드 중심 프로젝트입니다.',
      en: 'A frontend-led project combining multilingual switching, job exploration, and map visualization into one experience.',
    },
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-11-15'),
    teamInfo: {
      ko: '팀 프로젝트 5인',
      en: '5-person team project',
    },
    contribution: {
      ko: '다국어 시스템 구축, 지도 시각화 UI, 서버 데이터 캐싱 구조, 채용 상세 UI 구현 담당',
      en: 'Owned the multilingual system, map-based UI, server caching structure, and job detail screens.',
    },
    techChoices: [
      {
        name: 'react-i18next',
        reason: {
          ko: '실시간 언어 전환과 도메인 문구 관리 체계를 동시에 가져가기 위해 선택했습니다.',
          en: 'Chosen to support real-time language switching and structured domain copy management.',
        },
      },
      {
        name: 'TanStack Query',
        reason: {
          ko: '목록과 상세를 오가는 사용 흐름에서 서버 상태 캐싱과 재요청 제어가 필요했습니다.',
          en: 'Needed caching and request control for users moving repeatedly between lists and details.',
        },
      },
      {
        name: 'Kakao Map API',
        reason: {
          ko: '국내 위치 기반 탐색 경험을 직관적으로 제공하기 위해 지도 시각화가 핵심이었습니다.',
          en: 'Map visualization was essential to provide intuitive location-based exploration in Korea.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '다국어 UI 전환', en: 'Multilingual UI switching' },
        description: {
          ko: '한국어와 영어를 즉시 전환하면서도 번역 키 체계를 유지하도록 구성했습니다.',
          en: 'Enabled instant Korean and English switching while keeping translation keys maintainable.',
        },
        visual: {
          imageUrl: '/img/tech/jobforeigner.png',
          caption: { ko: '다국어 채용 탐색 화면', en: 'Multilingual job discovery screen' },
        },
      },
      {
        title: { ko: '지도 기반 채용 탐색', en: 'Map-based job discovery' },
        description: {
          ko: '리스트만으로는 파악하기 어려운 위치 정보를 지도에서 바로 이해할 수 있게 했습니다.',
          en: 'Made location information easier to understand than list-only browsing by using map visualization.',
        },
        visual: {
          imageUrl: '/img/tech/jobforeigner.png',
          caption: { ko: '주변 채용 위치 시각화', en: 'Visualization of nearby job locations' },
        },
      },
      {
        title: { ko: '상세 페이지와 캐싱 구조', en: 'Detail pages and caching structure' },
        description: {
          ko: '목록과 상세를 오가도 데이터가 안정적으로 유지되도록 서버 상태를 분리해 관리했습니다.',
          en: 'Structured server state so data stays stable while moving between lists and detail pages.',
        },
        visual: {
          imageUrl: '/img/tech/jobforeigner.png',
          caption: { ko: '채용 상세 정보 화면', en: 'Job detail information screen' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '지도와 리스트 UX가 분리되지 않도록 상호작용 흐름을 조정했습니다.',
        en: 'Adjusted interaction flows so the map and list experience would not feel disconnected.',
      },
      {
        ko: '번역 리소스 구조를 정리해 기능 추가 시 문구 누락이 덜 발생하도록 관리했습니다.',
        en: 'Organized translation resources to reduce copy omissions when adding features.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '목록, 상세, 지도 오버레이가 각각 별도 요청을 만들면서 같은 데이터가 반복 호출되는 문제가 있었습니다.',
          en: 'List views, detail views, and map overlays each triggered separate requests, causing repeated fetching of the same data.',
        },
        solution: {
          ko: 'TanStack Query 키 설계를 정리하고 상세 진입에 필요한 데이터를 캐시 우선으로 읽도록 바꿨습니다.',
          en: 'Refined TanStack Query key design and changed detail views to read from cache first when possible.',
        },
        result: {
          ko: '탐색 흐름이 더 부드러워졌고 불필요한 네트워크 호출이 줄었습니다.',
          en: 'Navigation became smoother and unnecessary network calls were reduced.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 가치', en: 'Core value' },
        value: { ko: '언어 장벽 완화', en: 'Reduced language barriers' },
        description: {
          ko: '외국인 사용자에게 필요한 정보 구조를 더 직관적으로 제공했습니다.',
          en: 'Provided a more intuitive information structure for foreign job seekers.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '다국어 서비스는 번역만이 아니라 정보 구조와 탐색 방식까지 함께 재설계해야 한다는 점을 배웠습니다.',
        en: 'Learned that multilingual services require redesigning information architecture, not just translating strings.',
      },
    ],
    limitations: [
      {
        ko: '지원 언어가 더 늘어날 경우 번역 운영 도구가 추가로 필요합니다.',
        en: 'If more languages are added, dedicated translation operations tooling will be needed.',
      },
    ],
    nextSteps: [
      {
        ko: '지역과 비자 조건 기반 필터링을 강화해 실제 구직 맥락을 더 잘 반영할 계획입니다.',
        en: 'Plan to improve filtering by region and visa conditions to better reflect real job-seeking contexts.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 6,
    category: 'webFrontend',
    title: { ko: 'JoinUs', en: 'JoinUs' },
    oneLiner: {
      ko: '테스트형 인터랙션으로 동아리 지원 전환을 만든 추천 서비스',
      en: 'An interactive recommendation service that improved club application conversion.',
    },
    heroImageUrl: '/img/tech/joinus.png',
    overview: {
      ko: '정적인 홍보 페이지 대신 참여형 테스트 경험을 통해 사용자의 흥미와 전환을 동시에 끌어낸 웹 프로젝트입니다.',
      en: 'A web project that replaced a static promo page with an interactive test experience to drive both interest and conversion.',
    },
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-04-30'),
    teamInfo: { ko: '팀 프로젝트 3인', en: '3-person team project' },
    contribution: {
      ko: '테스트 플로우 UI, 점수 계산 로직, 결과 페이지, 공유 기능 구현 담당',
      en: 'Implemented the test-flow UI, score calculation logic, result page, and sharing features.',
    },
    techChoices: [
      {
        name: 'React',
        reason: {
          ko: '질문 흐름과 결과 화면 전환이 많은 인터랙션을 상태 기반으로 다루기 적합했습니다.',
          en: 'Well suited for state-driven interaction across many question and result transitions.',
        },
      },
      {
        name: 'Tailwind CSS',
        reason: {
          ko: '짧은 일정 안에 반응형 UI를 빠르게 구현하기 위해 채택했습니다.',
          en: 'Chosen to build responsive UI quickly under a short schedule.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'MBTI형 질문 플로우', en: 'MBTI-style question flow' },
        description: {
          ko: '질문 응답을 재미 요소로 바꾸면서도 최종 트랙 추천으로 자연스럽게 연결했습니다.',
          en: 'Turned question answering into an engaging experience that naturally led into track recommendations.',
        },
        visual: {
          imageUrl: '/img/tech/joinus.png',
          caption: { ko: '질문 응답 인터랙션 화면', en: 'Question interaction screen' },
        },
      },
      {
        title: { ko: '트랙 추천 결과', en: 'Track recommendation result' },
        description: {
          ko: '응답 가중치 계산 결과를 기반으로 FE, BE 등 적합한 트랙을 안내했습니다.',
          en: 'Recommended suitable tracks such as FE and BE based on weighted response scoring.',
        },
        visual: {
          imageUrl: '/img/tech/joinus.png',
          caption: { ko: '맞춤형 결과 페이지', en: 'Personalized result page' },
        },
      },
      {
        title: { ko: '카카오 공유와 링크 복사', en: 'Kakao share and link copy' },
        description: {
          ko: '결과를 외부로 퍼뜨릴 수 있게 해 홍보 전파력을 높였습니다.',
          en: 'Made it easy to spread results externally to amplify promotion reach.',
        },
        visual: {
          imageUrl: '/img/tech/joinus.png',
          caption: { ko: '결과 공유 액션 영역', en: 'Result sharing action area' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '짧은 이벤트성 서비스라도 사용자의 몰입 흐름이 끊기지 않도록 질문 템포와 화면 전환을 다듬었습니다.',
        en: 'Tuned question pacing and screen transitions so even an event-style service would feel cohesive.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '테스트 결과 계산이 화면 컴포넌트에 섞여 있어 질문이 늘어날수록 유지보수가 어려워졌습니다.',
          en: 'Result calculation was mixed into UI components, making maintenance harder as questions increased.',
        },
        solution: {
          ko: '점수 계산 규칙을 별도 로직으로 분리하고 결과 매핑을 데이터 기반으로 재구성했습니다.',
          en: 'Separated score rules into independent logic and rebuilt result mapping as data-driven configuration.',
        },
        result: {
          ko: '질문 추가와 결과 수정이 더 쉬워졌고 테스트 흐름이 명확해졌습니다.',
          en: 'Adding questions and adjusting results became easier, and the test flow became clearer.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '지원자 증가', en: 'Applicant growth' },
        value: { ko: '전년 대비 160%', en: '160% YoY' },
        description: {
          ko: '정량적 홍보 성과를 확인한 프로젝트였습니다.',
          en: 'A project with clear measurable promotional impact.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '재미 요소가 있는 인터랙션도 결국은 전환 목표와 연결될 때 더 강한 제품 경험이 된다는 점을 배웠습니다.',
        en: 'Learned that playful interaction becomes stronger when clearly tied to a conversion goal.',
      },
    ],
    limitations: [
      {
        ko: '결과 추천 근거를 더 시각적으로 풀어내지 못한 점은 아쉬웠습니다.',
        en: 'A limitation was not expressing the recommendation rationale more visually.',
      },
    ],
    nextSteps: [
      {
        ko: '결과 공유 카드 커스터마이징과 관리자용 통계 대시보드를 붙이고 싶습니다.',
        en: 'Would like to add customizable share cards and an admin analytics dashboard.',
      },
    ],
    links: [
      {
        label: { ko: '라이브 데모', en: 'Live Demo' },
        url: 'https://joinus-kit-likelion.netlify.app/',
      },
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 7,
    category: 'app',
    title: { ko: 'Chrip-Aid', en: 'Chrip-Aid' },
    oneLiner: {
      ko: '후원금 사용 내역의 투명성을 높이기 위한 보육원 기부 앱',
      en: 'A donation app focused on transparent contribution tracking for childcare support.',
    },
    heroImageUrl: '/img/tech/chripaid.png',
    overview: {
      ko: '기부자와 시설 간 신뢰 문제를 줄이기 위해 기록 공개와 소통 기능을 함께 설계한 모바일 프로젝트입니다.',
      en: 'A mobile project designed to improve trust between donors and care facilities through transparent records and communication.',
    },
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-15'),
    teamInfo: { ko: '팀 프로젝트 4인', en: '4-person team project' },
    contribution: {
      ko: '레거시 코드 분석, Riverpod 기반 상태 관리 재정비, 관리자 데이터 동기화 버그 수정, 채팅 기능 구현 담당',
      en: 'Handled legacy code analysis, Riverpod state cleanup, admin sync bug fixes, and chat feature implementation.',
    },
    techChoices: [
      {
        name: 'Flutter',
        reason: {
          ko: '모바일 중심 서비스에서 동일한 UI 품질을 빠르게 확보하기 위해 선택했습니다.',
          en: 'Chosen to achieve consistent UI quality quickly across mobile platforms.',
        },
      },
      {
        name: 'Riverpod',
        reason: {
          ko: '레거시 구조를 정리하면서 상태 흐름을 예측 가능하게 만들기 위해 도입했습니다.',
          en: 'Introduced to make state flow more predictable while cleaning up legacy structure.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '후원 내역 공개', en: 'Donation record transparency' },
        description: {
          ko: '기부 사용 내역을 확인할 수 있는 화면 구조를 만들어 서비스 신뢰도를 높였습니다.',
          en: 'Raised service trust by building interfaces that expose how donations are used.',
        },
        visual: {
          imageUrl: '/img/tech/chripaid.png',
          caption: { ko: '후원 내역 확인 화면', en: 'Donation history view' },
        },
      },
      {
        title: { ko: '시설과의 실시간 채팅', en: 'Real-time chat with facilities' },
        description: {
          ko: '후원자와 시설이 직접 소통할 수 있는 기능을 더해 관계 형성을 강화했습니다.',
          en: 'Added real-time communication between donors and facilities to strengthen relationships.',
        },
        visual: {
          imageUrl: '/img/tech/chripaid.png',
          caption: { ko: '후원자-시설 커뮤니케이션 화면', en: 'Donor-facility communication screen' },
        },
      },
      {
        title: { ko: '관리자 데이터 검증', en: 'Admin data validation' },
        description: {
          ko: '운영자 관점의 동기화와 검증 흐름을 정리해 실제 운영 가능성을 높였습니다.',
          en: 'Improved operational readiness by organizing admin sync and validation flows.',
        },
        visual: {
          imageUrl: '/img/tech/chripaid.png',
          caption: { ko: '운영 데이터 처리 관점 화면', en: 'Operational data handling view' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '기존 레거시 코드의 상태 흐름을 추적하고 점진적으로 구조를 정리했습니다.',
        en: 'Tracked legacy state flow and refactored the structure incrementally.',
      },
      {
        ko: '데이터 무결성이 깨지는 관리자 화면 이슈를 우선적으로 해결해 운영 안정성을 높였습니다.',
        en: 'Prioritized admin data integrity issues to improve operational stability.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '관리자 페이지에서 데이터 수정 후 일부 화면에 갱신이 반영되지 않아 잘못된 정보가 노출됐습니다.',
          en: 'After admin edits, some screens failed to reflect updated data and exposed stale information.',
        },
        solution: {
          ko: '상태 소유권을 재정리하고 Riverpod provider 갱신 시점을 명확히 분리했습니다.',
          en: 'Reorganized state ownership and clearly separated provider refresh timing in Riverpod.',
        },
        result: {
          ko: '관리자 수정 이후 사용자 화면에 더 일관된 데이터가 노출되도록 개선했습니다.',
          en: 'Improved consistency so user screens reflected admin updates more reliably.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '대외 성과', en: 'External outcome' },
        value: { ko: 'KCI 논문 게재', en: 'Published in KCI journal' },
        description: {
          ko: '프로젝트의 사회적 가치와 기술적 완성도를 함께 인정받았습니다.',
          en: 'The project was recognized for both social value and technical quality.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '레거시 개선은 새 기능 추가보다 먼저 데이터 흐름과 책임 경계를 명확히 하는 작업이 중요하다는 점을 배웠습니다.',
        en: 'Learned that legacy improvement starts with clarifying data flow and ownership before adding new features.',
      },
    ],
    limitations: [
      {
        ko: '기부 흐름의 장기적인 리텐션을 측정할 분석 도구는 충분히 붙이지 못했습니다.',
        en: 'Did not fully implement analytics for long-term donation retention.',
      },
    ],
    nextSteps: [
      {
        ko: '관리자 감사 로그와 후원 리포트 자동화 기능을 추가하고 싶습니다.',
        en: 'Would like to add admin audit logs and automated donation reports.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 8,
    category: 'webFrontend',
    title: { ko: 'Babzip', en: 'Babzip' },
    oneLiner: {
      ko: '광고성 리뷰 대신 내 기준으로 맛집을 관리하는 개인 지도 아카이브',
      en: 'A personal restaurant map archive built around your own ranking logic.',
    },
    heroImageUrl: '/img/tech/babzip.png',
    overview: {
      ko: '지도, 인증, 랭킹 인터랙션을 조합해 개인 취향 기록에 집중한 프라이빗 서비스 경험을 만든 프로젝트입니다.',
      en: 'A project that combined maps, auth, and ranking interaction into a private archive experience for personal taste records.',
    },
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-07-15'),
    teamInfo: { ko: '개인 프로젝트', en: 'Solo project' },
    contribution: {
      ko: '기획, React 프론트엔드, 로그인, 전역 상태 관리, 지도 인터랙션, CRUD 구현 100%',
      en: '100% ownership of planning, React frontend, auth, global state, map interaction, and CRUD.',
    },
    techChoices: [
      {
        name: 'Zustand',
        reason: {
          ko: '지도 UI 상태와 사용자 상태를 가볍게 관리하기 위해 선택했습니다.',
          en: 'Chosen to keep map UI state and user state lightweight and simple.',
        },
      },
      {
        name: 'Kakao Map API',
        reason: {
          ko: '맛집 기록의 핵심은 위치 맥락이기 때문에 지도 경험이 필수였습니다.',
          en: 'Map experience was essential because location context is central to restaurant logging.',
        },
      },
      {
        name: 'OAuth 2.0',
        reason: {
          ko: '개인화 서비스에서 로그인 진입 장벽을 낮추기 위해 소셜 로그인을 도입했습니다.',
          en: 'Added social login to reduce friction in a personalized service.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '지도 기반 맛집 저장', en: 'Map-based restaurant saving' },
        description: {
          ko: '직접 검증한 맛집만 저장한다는 컨셉을 지도 중심 경험으로 풀어냈습니다.',
          en: 'Expressed the idea of saving only personally verified restaurants through a map-centered experience.',
        },
        visual: {
          imageUrl: '/img/tech/babzip.png',
          caption: { ko: '맛집 마커가 배치된 지도 화면', en: 'Map view with restaurant markers' },
        },
      },
      {
        title: { ko: '드래그 앤 드롭 랭킹', en: 'Drag-and-drop ranking' },
        description: {
          ko: '단순 즐겨찾기를 넘어서 개인 취향의 우선순위를 정할 수 있게 했습니다.',
          en: 'Moved beyond basic bookmarking by letting users prioritize their favorites.',
        },
        visual: {
          imageUrl: '/img/tech/babzip.png',
          caption: { ko: '개인 랭킹 편집 인터랙션', en: 'Personal ranking editing interaction' },
        },
      },
      {
        title: { ko: '모바일 친화적 UI', en: 'Mobile-friendly UI' },
        description: {
          ko: '웹뷰 환경을 고려한 레이아웃과 모달 흐름으로 사용성을 높였습니다.',
          en: 'Improved usability with layouts and modal flows optimized for webview-like mobile environments.',
        },
        visual: {
          imageUrl: '/img/tech/babzip.png',
          caption: { ko: '모바일 중심 탐색 화면', en: 'Mobile-first discovery screen' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '개인 아카이브 성격에 맞게 복잡한 소셜 기능보다 기록과 정리에 초점을 맞췄습니다.',
        en: 'Focused on recording and organization over social complexity to match the private-archive concept.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '지도 상태, 로그인 상태, 모달 상태가 얽히면서 특정 동작에서 불필요한 리렌더링이 늘어났습니다.',
          en: 'Map state, auth state, and modal state became entangled and caused unnecessary rerenders in some interactions.',
        },
        solution: {
          ko: 'Zustand 스토어를 관심사별로 나누고 화면에서 필요한 slice만 구독하도록 정리했습니다.',
          en: 'Split Zustand stores by concern and changed screens to subscribe only to the slices they needed.',
        },
        result: {
          ko: '인터랙션이 더 가벼워졌고 상태 흐름을 추적하기 쉬워졌습니다.',
          en: 'Interactions felt lighter and state transitions became easier to trace.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 구현', en: 'Core implementation' },
        value: { ko: '로그인 + CRUD + 지도 시각화', en: 'Auth + CRUD + map visualization' },
        description: {
          ko: '서비스 핵심 루프를 완결된 형태로 구현했습니다.',
          en: 'Implemented the core service loop in a complete form.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '개인화 서비스일수록 데이터 구조보다 UX 맥락 설계가 더 크게 체감 품질을 좌우한다는 점을 배웠습니다.',
        en: 'Learned that UX context design can influence perceived quality more than raw data structure in personalized products.',
      },
    ],
    limitations: [
      {
        ko: '리뷰 작성 경험과 검색 기능은 더 확장할 여지가 있습니다.',
        en: 'Review-writing and search experience still have room for expansion.',
      },
    ],
    nextSteps: [
      {
        ko: '장소 검색과 태그 기반 분류를 강화해 아카이브 탐색성을 높일 계획입니다.',
        en: 'Plan to improve archive discoverability with location search and tag-based categorization.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 9,
    category: 'webFrontend',
    title: { ko: '케이크공작소', en: 'Cake Workshop' },
    oneLiner: {
      ko: '취향과 기분을 케이크 메타포로 표현한 해커톤 소셜 플랫폼',
      en: 'A hackathon social platform that expresses taste and mood through cake metaphors.',
    },
    heroImageUrl: '/img/tech/cake.png',
    overview: {
      ko: '짧은 해커톤 일정 안에서 콘셉트, UI 실험, 협업 프로세스까지 압축적으로 경험한 프론트엔드 프로젝트입니다.',
      en: 'A frontend project built in a short hackathon window, covering concept work, UI experimentation, and team process.',
    },
    startDate: new Date('2025-01-20'),
    endDate: new Date('2025-02-15'),
    teamInfo: { ko: '해커톤 팀 프로젝트 4인', en: '4-person hackathon team project' },
    contribution: {
      ko: '캘린더 UI 커스터마이징, 동적 스타일 설계, 협업 규칙 정리, 모달/오버레이 상태 관리 담당',
      en: 'Handled calendar customization, dynamic styling, collaboration rules, and modal/overlay state management.',
    },
    techChoices: [
      {
        name: 'Styled Components',
        reason: {
          ko: '짧은 일정 안에서 실험적인 비주얼을 빠르게 조정하기 쉬웠습니다.',
          en: 'Made it easy to iterate on experimental visuals quickly under time pressure.',
        },
      },
      {
        name: 'React Calendar',
        reason: {
          ko: '감정 기록 중심 UI를 직접 구현하는 비용을 줄이면서도 충분히 커스터마이징할 수 있었습니다.',
          en: 'Reduced implementation cost for a mood-centric calendar while keeping enough customization room.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '감정 기록 캘린더', en: 'Mood logging calendar' },
        description: {
          ko: '날짜별 감정 기록을 한눈에 파악할 수 있는 캘린더 기반 UX를 만들었습니다.',
          en: 'Created a calendar-based UX that makes emotion logs readable at a glance.',
        },
        visual: {
          imageUrl: '/img/tech/cake.png',
          caption: { ko: '감정 기록 캘린더 화면', en: 'Mood logging calendar screen' },
        },
      },
      {
        title: { ko: '케이크 메타포 기반 표현', en: 'Cake-metaphor expression' },
        description: {
          ko: '텍스트 설명보다 시각적 메타포를 앞세워 취향 공유 경험을 차별화했습니다.',
          en: 'Differentiated the sharing experience by prioritizing visual metaphor over plain text.',
        },
        visual: {
          imageUrl: '/img/tech/cake.png',
          caption: { ko: '비주얼 중심 취향 표현 화면', en: 'Visual-first taste expression screen' },
        },
      },
      {
        title: { ko: '협업 친화적 프로세스', en: 'Collaboration-friendly process' },
        description: {
          ko: 'Issue 템플릿과 PR 규칙을 정리해 짧은 일정에서도 협업 비용을 줄였습니다.',
          en: 'Reduced collaboration overhead in a short schedule by setting issue templates and PR rules.',
        },
        visual: {
          imageUrl: '/img/tech/cake.png',
          caption: { ko: '기능 흐름과 상태 설계 예시', en: 'Example of feature flow and state design' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '비주얼 콘셉트가 과하지 않으면서도 서비스 개성을 유지하도록 컴포넌트 스타일 기준을 잡았습니다.',
        en: 'Set component styling rules so the visual concept stayed distinctive without becoming excessive.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '모달과 오버레이가 겹치는 화면에서 상태가 꼬여 닫힘 순서와 포커스 흐름이 불안정했습니다.',
          en: 'On screens with overlapping modals and overlays, close order and focus flow became unstable.',
        },
        solution: {
          ko: '오버레이 우선순위를 명시하고, 상태 전환을 단일 흐름으로 모아 화면 레이어를 제어했습니다.',
          en: 'Defined overlay priority and centralized transitions into a single flow to control UI layers.',
        },
        result: {
          ko: '복잡한 UI에서도 예측 가능한 상호작용을 유지할 수 있었습니다.',
          en: 'Maintained predictable interaction even in more complex UI states.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '프로젝트 환경', en: 'Project context' },
        value: { ko: '해커톤 완주', en: 'Hackathon delivery' },
        description: {
          ko: '제한된 시간 안에 완성도 있는 사용자 경험을 구현했습니다.',
          en: 'Delivered a polished user experience within strict hackathon constraints.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '강한 콘셉트의 서비스일수록 시각적 실험과 사용성 균형을 맞추는 감각이 중요하다는 점을 배웠습니다.',
        en: 'Learned that concept-heavy products require careful balance between visual experimentation and usability.',
      },
    ],
    limitations: [
      {
        ko: '해커톤 일정 특성상 사용자 테스트를 충분히 진행하지 못했습니다.',
        en: 'Could not run enough user testing due to hackathon time limits.',
      },
    ],
    nextSteps: [
      {
        ko: '감정 기록의 회고 기능과 친구 간 상호작용 요소를 더 정교하게 다듬고 싶습니다.',
        en: 'Would like to refine reflection features and friend interactions around mood logs.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 10,
    category: 'backend',
    title: { ko: 'Plate Picks', en: 'Plate Picks' },
    oneLiner: {
      ko: '눈치 보지 않는 회식 메뉴 선정을 위한 익명 투표 시스템',
      en: 'An anonymous voting system for pressure-free team meal decisions.',
    },
    heroImageUrl: '/img/tech/plate_picks.png',
    overview: {
      ko: '프론트엔드, 백엔드, 배포를 모두 직접 연결해 실제 운영 가능한 익명 투표 서비스를 구축한 풀스택 프로젝트입니다.',
      en: 'A full-stack project where I connected frontend, backend, and deployment into a production-like anonymous voting service.',
    },
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-05-10'),
    teamInfo: { ko: '개인 프로젝트', en: 'Solo project' },
    contribution: {
      ko: 'React 프론트엔드, NestJS API, MySQL 모델링, Docker 배포까지 100% 담당',
      en: '100% ownership from React frontend and NestJS API to MySQL modeling and Docker deployment.',
    },
    techChoices: [
      {
        name: 'NestJS',
        reason: {
          ko: '모듈 구조가 명확해 인증, 투표, 통계 기능을 도메인 단위로 분리하기 좋았습니다.',
          en: 'Its modular structure made it easy to separate auth, voting, and analytics by domain.',
        },
      },
      {
        name: 'MySQL',
        reason: {
          ko: '투표 데이터와 집계 구조를 관계형 모델로 관리하기 적합했습니다.',
          en: 'Fit well for relational modeling of vote data and aggregate results.',
        },
      },
      {
        name: 'Docker',
        reason: {
          ko: '개발 환경과 배포 환경 차이를 줄이고 운영 재현성을 높이기 위해 사용했습니다.',
          en: 'Used to reduce drift between local and production environments and improve reproducibility.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '익명 투표 인터페이스', en: 'Anonymous voting interface' },
        description: {
          ko: '심리적 부담 없이 선택할 수 있도록 간결한 투표 플로우를 구성했습니다.',
          en: 'Built a streamlined voting flow so users could choose without social pressure.',
        },
        visual: {
          imageUrl: '/img/tech/plate_picks.png',
          caption: { ko: '메뉴 선택 투표 화면', en: 'Menu selection voting screen' },
        },
      },
      {
        title: { ko: '결과 통계 시각화', en: 'Result analytics visualization' },
        description: {
          ko: '단순 결과 나열이 아니라 표와 그래프로 의사결정 과정을 읽기 쉽게 만들었습니다.',
          en: 'Made the decision process easier to read with tables and charts rather than plain results.',
        },
        visual: {
          imageUrl: '/img/tech/plate_picks.png',
          caption: { ko: '결과 통계 대시보드', en: 'Result analytics dashboard' },
        },
      },
      {
        title: { ko: '컨테이너 기반 배포', en: 'Container-based deployment' },
        description: {
          ko: '백엔드와 데이터베이스를 운영 가능한 형태로 패키징해 서버 환경에 배포했습니다.',
          en: 'Packaged backend and database services into a deployable container setup.',
        },
        visual: {
          imageUrl: '/img/tech/plate_picks.png',
          caption: { ko: '서비스 운영 관점의 구성', en: 'Service setup from an operations perspective' },
        },
      },
    ],
    roleDetails: [
      {
        ko: '프론트엔드와 백엔드가 따로 놀지 않도록 API 스펙과 UI 흐름을 동시에 설계했습니다.',
        en: 'Designed API contracts and UI flows together so frontend and backend would evolve coherently.',
      },
      {
        ko: '배포까지 직접 경험하며 운영 관점에서 필요한 설정과 구조를 익혔습니다.',
        en: 'Learned the operational requirements and structure by handling deployment directly.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '투표 결과 집계 로직이 프론트엔드와 백엔드에 나뉘어 있어 결과 일관성을 보장하기 어려웠습니다.',
          en: 'Vote aggregation logic was split between frontend and backend, making consistency difficult to guarantee.',
        },
        solution: {
          ko: '집계 책임을 백엔드로 단일화하고 프론트엔드는 서버가 내려준 결과만 렌더링하도록 구조를 정리했습니다.',
          en: 'Centralized aggregation responsibility in the backend and limited the frontend to rendering server-provided results.',
        },
        result: {
          ko: '결과 계산 기준이 하나로 정리돼 데이터 신뢰성과 유지보수성이 좋아졌습니다.',
          en: 'With one source of truth for calculations, data reliability and maintainability improved.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '개발 범위', en: 'Development scope' },
        value: { ko: '풀스택 + 배포', en: 'Full-stack + deployment' },
        description: {
          ko: '제품 흐름 전체를 혼자 설계하고 구현한 경험을 축적했습니다.',
          en: 'Built experience designing and implementing the full product flow independently.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '풀스택 프로젝트에서는 기능 구현보다 책임 분리와 데이터 기준점 정의가 더 중요할 수 있다는 점을 배웠습니다.',
        en: 'Learned that in full-stack projects, clear responsibility boundaries and data ownership can matter more than raw feature count.',
      },
    ],
    limitations: [
      {
        ko: '실사용 조직 단위의 권한 관리와 로그 분석 기능은 아직 확장 여지가 있습니다.',
        en: 'Organization-level permissions and log analytics still have room for expansion.',
      },
    ],
    nextSteps: [
      {
        ko: '조직별 멀티테넌시와 관리용 대시보드를 더해 서비스 운영성을 높일 계획입니다.',
        en: 'Plan to improve operability with multi-tenancy and richer admin dashboards.',
      },
    ],
    links: [
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
];
