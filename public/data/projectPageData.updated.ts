import type { LocalizedText } from '../../src/i18n';
import type { ProjectCategory } from './projectsData';

interface TechChoice {
  name: string;
  reason: LocalizedText;
}

export interface ProjectImage {
  imageUrl: string;
  caption: LocalizedText;
}

interface FeatureItem {
  title: LocalizedText;
  description: LocalizedText;
  images: ProjectImage[];
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
  overview: LocalizedText;
  startDate: Date;
  endDate: Date;
  teamInfo: LocalizedText;
  contribution: LocalizedText;
  images: ProjectImage[];
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

const buildImages = (projectKey: string, captions: Array<[string, string]>): ProjectImage[] =>
  captions.map(([ko, en], index) => ({
    imageUrl: `/img/projects/${projectKey}/${index + 1}.png`,
    caption: { ko, en },
  }));

export const projectPageData: ProjectPageInfo[] = [
  {
    id: 1,
    category: 'app',
    title: { ko: '금품타', en: 'Geumpumta' },
    oneLiner: {
      ko: '대학생의 실제 학습 시간을 검증하고 실시간 랭킹으로 동기를 만드는 학습 관리 앱',
      en: 'A study management app that verifies real study time and motivates users with live rankings.',
    },
    overview: {
      ko: 'Flutter 기반으로 로그인, 타이머, 랭킹, 학교 Wi-Fi 인증, iOS Screen Time 연동까지 구현하고 실제 배포와 운영까지 수행한 프로젝트입니다.',
      en: 'A Flutter project where I implemented login, timer, rankings, campus Wi-Fi verification, iOS Screen Time integration, and handled real deployment and operation.',
    },
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-12-31'),
    teamInfo: { ko: '앱 프론트엔드 중심 프로젝트', en: 'App frontend-focused project' },
    contribution: {
      ko: 'Flutter 기반 앱 프론트엔드 구조 설계 및 핵심 기능 구현, 소셜 로그인 연동, Wi-Fi 인증 로직 구현, 배포 및 운영 수행',
      en: 'Designed the Flutter app frontend architecture, implemented core features, integrated social login, built Wi-Fi verification logic, and handled release and operation.',
    },
    images: buildImages('geumpumta', [
      ['메인 학습 타이머 화면', 'Main study timer screen'],
      ['랭킹 및 학습 기록 화면', 'Ranking and study record screen'],
      ['로그인 또는 집중 지원 관련 화면', 'Login or focus-support screen'],
    ]),
    techChoices: [
      {
        name: 'Flutter',
        reason: {
          ko: '동일한 학습 경험을 iOS와 Android에 빠르게 제공하기 위해 선택했습니다.',
          en: 'Chosen to deliver the same study experience quickly on both iOS and Android.',
        },
      },
      {
        name: 'Riverpod',
        reason: {
          ko: '타이머, 랭킹, 인증 상태를 명확하게 분리해 유지보수하기 위해 사용했습니다.',
          en: 'Used to separate timer, ranking, and authentication state clearly for maintainability.',
        },
      },
      {
        name: 'MVVM',
        reason: {
          ko: 'UI와 로직 책임을 분리해 화면이 복잡해져도 구조를 안정적으로 유지하기 위해 적용했습니다.',
          en: 'Applied to separate UI and business logic so the structure remains stable as screens grow.',
        },
      },
      {
        name: 'iOS Screen Time API',
        reason: {
          ko: '단순 시간 측정이 아니라 실제 집중을 돕는 경험까지 제공하기 위해 연동했습니다.',
          en: 'Integrated to support not just time tracking but actual focus assistance.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '학습 시간 측정 및 집중 지원', en: 'Study-time tracking and focus support' },
        description: {
          ko: '시작 시각과 현재 시각 차이를 기반으로 타이머를 계산해 앱 상태 변화 이후에도 실제 경과 시간이 반영되도록 개선했습니다. 또한 iOS Screen Time API를 적용해 사용자가 설정한 앱을 공부 시간 동안 제한했습니다.',
          en: 'Improved the timer by calculating elapsed time from the start timestamp and current time so real study time is preserved after app state changes. Also applied the iOS Screen Time API to block selected apps during study sessions.',
        },
        images: buildImages('geumpumta', [
          ['학습 타이머 메인 화면', 'Study timer main screen'],
          ['집중 지원 설정 또는 제한 화면', 'Focus support or restriction screen'],
        ]),
      },
      {
        title: { ko: '학교 Wi-Fi 기반 학습 인증', en: 'Campus Wi-Fi based study verification' },
        description: {
          ko: '학교 Wi-Fi 환경을 기준으로 학습 기록의 유효성을 판단하는 Gateway IP 기반 인증 로직을 적용해 공정한 랭킹 데이터가 반영되도록 했습니다.',
          en: 'Applied Gateway-IP based verification against the campus Wi-Fi environment so only validated study records affect rankings.',
        },
        images: buildImages('geumpumta', [
          ['학습 인증 관련 흐름 화면', 'Study verification flow screen'],
        ]),
      },
      {
        title: { ko: '랭킹 및 API 호출 구조 개선', en: 'Ranking and API call optimization' },
        description: {
          ko: 'Riverpod 캐싱 구조를 활용해 이미 조회한 랭킹 데이터를 재사용하도록 개선하여 화면 재진입 시 불필요한 API 재호출을 줄였습니다.',
          en: 'Improved the ranking flow to reuse already fetched data through Riverpod caching, reducing unnecessary API calls when re-entering the screen.',
        },
        images: buildImages('geumpumta', [
          ['개인 또는 학과 랭킹 화면', 'Personal or department ranking screen'],
        ]),
      },
      {
        title: { ko: '소셜 로그인 및 사용자 상태 복원', en: 'Social login and user-state restoration' },
        description: {
          ko: 'Kakao, Google, Apple 로그인을 지원하고, SharedPreferences를 통해 앱 재실행 시 로그인 상태를 복원하도록 구현했습니다.',
          en: 'Implemented Kakao, Google, and Apple login, and restored login state on app relaunch through SharedPreferences.',
        },
        images: buildImages('geumpumta', [
          ['소셜 로그인 또는 온보딩 화면', 'Social login or onboarding screen'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '타이머, 랭킹, 로그인, 인증 흐름을 하나의 앱 경험으로 연결했습니다.',
        en: 'Connected timer, ranking, login, and verification into one cohesive app experience.',
      },
      {
        ko: 'iOS Screen Time API와 배포 이슈까지 직접 다루며 제품 완성도를 높였습니다.',
        en: 'Improved product completeness by handling iOS Screen Time API integration and release issues directly.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '앱 재시작이나 백그라운드 전환이 발생하면 타이머 값이 실제 학습 시간과 다르게 기록되는 오차가 발생할 수 있었습니다.',
          en: 'When the app restarted or moved to the background, timer values could drift from the actual study time.',
        },
        solution: {
          ko: '단순 누적 방식 대신 시작 시각과 현재 시각의 차이를 계산하는 방식으로 타이머 구조를 변경했습니다.',
          en: 'Reworked the timer to compute elapsed time from the start timestamp rather than by simple accumulated state.',
        },
        result: {
          ko: '앱 상태 변화 이후에도 실제 경과 시간이 반영되도록 개선해 신뢰도를 높였습니다.',
          en: 'Improved reliability by making sure real elapsed time was reflected even after app state changes.',
        },
      },
      {
        problem: {
          ko: '랭킹 화면 재진입 시 동일한 데이터에 대해 API가 반복 호출되며 로딩 지연이 발생할 수 있었습니다.',
          en: 'Repeated API calls for the same ranking data could cause loading delays when revisiting the screen.',
        },
        solution: {
          ko: 'Riverpod 캐싱 구조를 활용해 이미 조회한 데이터를 재사용하도록 구성했습니다.',
          en: 'Used Riverpod caching so previously fetched ranking data could be reused.',
        },
        result: {
          ko: '랭킹 화면의 응답성과 로딩 속도를 개선했습니다.',
          en: 'Improved responsiveness and loading speed on ranking screens.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 성과', en: 'Key outcome' },
        value: { ko: '실제 학습 시간 검증 로직 구현', en: 'Implemented real study-time verification logic' },
        description: {
          ko: '학교 Wi-Fi 기반 인증을 통해 공정한 랭킹 데이터 구조를 만들었습니다.',
          en: 'Built a fair ranking-data structure through campus Wi-Fi based verification.',
        },
      },
      {
        label: { ko: '배포', en: 'Release' },
        value: { ko: 'App Store / Google Play 운영', en: 'Operated on App Store / Google Play' },
        description: {
          ko: '실제 배포와 운영 경험까지 포함한 프로젝트였습니다.',
          en: 'This project included real deployment and operational experience.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '모바일 앱에서는 기능 구현뿐 아니라 OS 제약 안에서 신뢰성을 확보하는 설계가 중요하다는 점을 배웠습니다.',
        en: 'Learned that mobile apps require reliability-focused design under OS constraints, not just feature implementation.',
      },
    ],
    limitations: [
      {
        ko: '학습 패턴 분석과 리텐션 개선 기능은 후속 버전에서 더 확장할 여지가 있습니다.',
        en: 'There is still room to expand learning-pattern analysis and retention features in later versions.',
      },
    ],
    nextSteps: [
      {
        ko: '개인화 학습 리포트와 복습 알림 기능을 추가할 계획입니다.',
        en: 'Plan to add personalized study reports and review reminders.',
      },
    ],
    links: [
      { label: { ko: '앱스토어', en: 'App Store' }, url: 'https://apps.apple.com/kr/app/%EA%B8%88%ED%92%88%ED%83%80/id6755481890' },
      { label: { ko: '플레이스토어', en: 'Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.geumpumgalchwi.geumpumta&hl=ko' },
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 2,
    category: 'ai',
    title: { ko: '마이크로피펫 분주량 인식 OCR 및 목표값 제어 시스템', en: 'Micropipette OCR and Target-Value Control System' },
    oneLiner: {
      ko: 'Jetson Orin Nano 기반으로 분주량을 읽고 목표 용량까지 자동 제어하는 OCR-제어 통합 시스템',
      en: 'An OCR-control integrated system on Jetson Orin Nano that reads dispensing volume and automatically reaches a target value.',
    },
    overview: {
      ko: 'YOLO 기반 ROI 검출, Custom OCR, PaddleOCR 보완, UART 기반 모터 제어, ONNX/TensorRT 최적화를 통합해 실동작 가능한 폐루프 제어 시스템을 구현했습니다.',
      en: 'Implemented a working closed-loop system by integrating YOLO-based ROI detection, custom OCR, PaddleOCR fallback, UART motor control, and ONNX/TensorRT optimization.',
    },
    startDate: new Date('2025-05-01'),
    endDate: new Date('2026-02-28'),
    teamInfo: { ko: 'AI·제어 통합 팀 프로젝트', en: 'AI-control integration team project' },
    contribution: {
      ko: 'YOLO 기반 ROI 검출, OCR 파이프라인 설계, 목표값 제어 알고리즘 개발, UART 기반 모터 제어 및 추론 최적화 담당',
      en: 'Owned YOLO ROI detection, OCR pipeline design, target-value control algorithm development, UART motor control, and inference optimization.',
    },
    images: buildImages('micropipette', [
      ['분주량 인식 화면', 'Dispensing-volume recognition screen'],
      ['OCR 추론 결과 화면', 'OCR inference result screen'],
      ['모터 제어 또는 시스템 구성 화면', 'Motor control or system setup screen'],
    ]),
    techChoices: [
      {
        name: 'YOLO',
        reason: {
          ko: '여러 용량의 마이크로피펫에서 숫자 박스 위치가 달라지는 문제를 동적으로 처리하기 위해 사용했습니다.',
          en: 'Used to dynamically detect digit-box locations across micropipettes with different capacities.',
        },
      },
      {
        name: 'EfficientNet-B0',
        reason: {
          ko: '사전 학습 가중치를 활용해 제한된 데이터에서도 OCR 성능을 안정적으로 확보하기 위해 채택했습니다.',
          en: 'Chosen to leverage pretrained weights and achieve stable OCR performance with limited data.',
        },
      },
      {
        name: 'TensorRT',
        reason: {
          ko: '실시간 제어가 가능한 수준으로 latency를 줄이기 위해 도입했습니다.',
          en: 'Introduced to reduce latency to a level suitable for real-time control.',
        },
      },
      {
        name: 'UART Serial Communication',
        reason: {
          ko: '인식 결과가 실제 하드웨어 제어까지 이어지도록 모터와 직접 연결하기 위해 사용했습니다.',
          en: 'Used to connect recognition results directly to real motor control.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '위치 변동 대응 YOLO 기반 ROI 검출', en: 'YOLO-based ROI detection robust to position changes' },
        description: {
          ko: '여러 용량의 마이크로피펫을 선택해 사용할 때 분주량 인식부 위치가 일정하지 않아, 숫자 박스를 실시간으로 인식하는 YOLO 구조를 적용했습니다.',
          en: 'Since the digit-display position varies across micropipettes of different capacities, I applied a YOLO model to detect the numeric box in real time.',
        },
        images: buildImages('micropipette', [
          ['YOLO ROI 검출 결과', 'YOLO ROI detection result'],
        ]),
      },
      {
        title: { ko: 'Custom OCR + PaddleOCR 하이브리드 인식', en: 'Hybrid recognition with custom OCR and PaddleOCR' },
        description: {
          ko: 'EfficientNet-B0 기반 Custom OCR을 주 인식기로 사용하고, threshold 이하 결과는 PaddleOCR로 재검토하는 하이브리드 방식을 적용했습니다.',
          en: 'Used an EfficientNet-B0 based custom OCR as the primary recognizer and rechecked low-confidence outputs with PaddleOCR as a hybrid strategy.',
        },
        images: buildImages('micropipette', [
          ['OCR 결과 비교 화면', 'OCR result comparison screen'],
        ]),
      },
      {
        title: { ko: '목표값 기반 폐루프 모터 제어', en: 'Closed-loop motor control based on target values' },
        description: {
          ko: '현재 인식값과 목표 분주량의 오차를 바탕으로 DC 모터를 제어해 목표 용량까지 자동 조절하는 폐루프 제어 알고리즘을 구현했습니다.',
          en: 'Implemented a closed-loop control algorithm that drives a DC motor using the error between the recognized current value and the target dispensing volume.',
        },
        images: buildImages('micropipette', [
          ['제어 흐름 또는 시스템 구성도', 'Control flow or system diagram'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '비전 인식, 모델 최적화, 하드웨어 제어를 하나의 실험 자동화 루프로 통합했습니다.',
        en: 'Integrated vision recognition, model optimization, and hardware control into a single lab-automation loop.',
      },
      {
        ko: '엣지 환경에서 동작 가능한 추론 속도와 실제 제어 정확도를 동시에 확보하는 데 집중했습니다.',
        en: 'Focused on achieving both edge-deployable inference speed and real control accuracy.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '목표 분주량 도달을 위해 모터가 동작하는 동안 OCR이 실시간으로 수행되어야 했고, 조명 밝기에 따라 정확도가 크게 감소하는 문제가 있었습니다.',
          en: 'OCR had to run in real time while the motor was moving toward the target value, and accuracy dropped significantly under lighting changes.',
        },
        solution: {
          ko: 'PyTorch 모델을 ONNX → TensorRT로 최적화해 latency를 줄이고, threshold 이하 결과는 PaddleOCR로 재검토하는 하이브리드 구조를 적용했습니다.',
          en: 'Optimized the PyTorch model through ONNX to TensorRT to reduce latency, and applied a hybrid fallback with PaddleOCR for low-confidence predictions.',
        },
        result: {
          ko: '엣지 환경에서 실시간 제어가 가능한 수준의 추론 성능과 더 안정적인 OCR 품질을 확보했습니다.',
          en: 'Secured inference speed suitable for real-time control on edge hardware and improved OCR stability.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: 'OCR 정확도', en: 'OCR accuracy' },
        value: { ko: '98%', en: '98%' },
        description: {
          ko: '실험 환경에서 분주량 인식 정확도 98%를 달성했습니다.',
          en: 'Achieved 98% dispensing-volume recognition accuracy in the lab environment.',
        },
      },
      {
        label: { ko: '목표 제어 정확도', en: 'Target control accuracy' },
        value: { ko: '97%', en: '97%' },
        description: {
          ko: '목표 분주량 제어 정확도 97%를 달성했습니다.',
          en: 'Reached 97% target dispensing control accuracy.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '정확한 인식 모델만으로는 충분하지 않으며, 실제 제어 환경에 맞는 latency와 예외 처리까지 함께 설계해야 한다는 점을 배웠습니다.',
        en: 'Learned that recognition accuracy alone is not enough; latency and exception handling must also be designed for real control environments.',
      },
    ],
    limitations: [
      {
        ko: '조명 환경과 장비 종류가 더 다양해지면 추가적인 데이터 확장과 보정이 필요합니다.',
        en: 'Additional data expansion and calibration will be needed for wider lighting conditions and more hardware variants.',
      },
    ],
    nextSteps: [
      {
        ko: '더 다양한 피펫 환경에 대응할 수 있도록 도메인 적응 데이터셋과 제어 파라미터 자동 보정을 확장할 계획입니다.',
        en: 'Plan to expand domain-adapted datasets and automatic control-parameter tuning for more diverse pipette environments.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
      { label: { ko: '기술 문서', en: 'Technical Notes' }, note: noDocYetNote },
    ],
  },
  // id: 4, 9, 10 projects are intentionally omitted until detail content is ready.
  {
    id: 3,
    category: 'app',
    title: { ko: 'UhDyL', en: 'UhDyL' },
    oneLiner: {
      ko: '못난이 농산물을 소비자와 연결하는 모바일 중개 플랫폼',
      en: 'A mobile brokerage platform connecting imperfect produce with consumers.',
    },
    overview: {
      ko: '상품 탐색부터 등록·수정, OAuth 로그인, 이미지 업로드까지 프론트엔드 핵심 사용자 흐름을 단독으로 구현한 React Native 프로젝트입니다.',
      en: 'A React Native project where I independently implemented the core frontend user flows from product browsing to registration, editing, OAuth login, and image upload.',
    },
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-10-31'),
    teamInfo: { ko: '모바일 앱 프론트엔드 프로젝트', en: 'Mobile app frontend project' },
    contribution: {
      ko: 'React Native(Expo) 기반 앱 프론트엔드 구조 설계 및 단독 개발, 상품 흐름 구현, 로그인 및 상태 관리 구조 설계 담당',
      en: 'Designed and independently developed the React Native (Expo) frontend architecture, product flow, login, and state management structure.',
    },
    images: buildImages('uhdyl', [
      ['상품 목록 화면', 'Product list screen'],
      ['상품 상세 또는 등록 화면', 'Product detail or registration screen'],
      ['판매자 전환 또는 로그인 화면', 'Seller conversion or login screen'],
    ]),
    techChoices: [
      {
        name: 'React Native (Expo)',
        reason: {
          ko: '짧은 일정 안에 모바일 서비스형 앱 경험을 빠르게 구현하기 위해 선택했습니다.',
          en: 'Chosen to build a mobile service app experience quickly within a short schedule.',
        },
      },
      {
        name: 'Zustand',
        reason: {
          ko: '클라이언트 상태를 간결하게 관리하면서 화면 간 흐름을 자연스럽게 연결하기 위해 사용했습니다.',
          en: 'Used to keep client state lightweight and connect flows naturally across screens.',
        },
      },
      {
        name: 'TanStack Query',
        reason: {
          ko: '상품 목록, 상세, 수정 흐름에서 서버 상태를 분리해 관리하기 위해 적용했습니다.',
          en: 'Applied to separate and manage server state across product list, detail, and edit flows.',
        },
      },
      {
        name: 'Expo Router',
        reason: {
          ko: '상품 탐색과 등록·수정, 로그인 흐름을 명확한 화면 구조로 유지하기 위해 사용했습니다.',
          en: 'Used to keep browsing, editing, and login flows in a clear screen structure.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '사용자 타입에 따른 UI 및 권한 전환', en: 'UI and permission transitions by user type' },
        description: {
          ko: '일반 사용자와 판매자 타입에 따라 화면과 기능이 달라지도록 구현했고, 일반 사용자가 판매자로 전환할 때는 밭 위치 등록 및 인증을 거쳐 권한을 부여하는 흐름을 만들었습니다.',
          en: 'Implemented distinct screens and features for regular users and sellers, and built a seller-conversion flow that requires field-location registration and verification.',
        },
        images: buildImages('uhdyl', [
          ['사용자 타입 분기 화면', 'User-type branching screen'],
        ]),
      },
      {
        title: { ko: '상품 관리 흐름 구현', en: 'Product management flow' },
        description: {
          ko: '상품 목록, 상세, 등록, 수정 화면을 하나의 사용자 흐름으로 이어지도록 구성해 실제 중개 서비스에 가까운 경험을 만들었습니다.',
          en: 'Connected product list, detail, registration, and edit screens into one coherent user flow resembling a real brokerage service.',
        },
        images: buildImages('uhdyl', [
          ['상품 목록 또는 상세 화면', 'Product list or detail screen'],
          ['상품 등록 또는 수정 화면', 'Product registration or edit screen'],
        ]),
      },
      {
        title: { ko: 'STOMP 기반 채팅 구조 설계', en: 'STOMP-based chat architecture' },
        description: {
          ko: '사용자와 판매자가 실시간으로 소통할 수 있도록 채팅 구조를 설계하고, 상대 사용자 타입·내 권한·거래 상태에 따라 버튼과 안내 UI가 달라지는 로직을 구현했습니다.',
          en: 'Designed a real-time chat architecture for users and sellers, and implemented UI logic that changes according to counterpart type, my authority, and transaction status.',
        },
        images: buildImages('uhdyl', [
          ['채팅 화면', 'Chat screen'],
        ]),
      },
      {
        title: { ko: '상태 관리 및 화면 구조 설계', en: 'State management and screen architecture' },
        description: {
          ko: 'Zustand 기반 클라이언트 상태와 TanStack Query 기반 서버 상태를 분리하고 Expo Router 기반 화면 구조를 설계해 기능 확장에도 유지보수 가능한 구조를 만들었습니다.',
          en: 'Separated client state with Zustand from server state with TanStack Query and designed the screen architecture with Expo Router for better maintainability.',
        },
        images: buildImages('uhdyl', [
          ['앱 주요 흐름 화면', 'Main app flow screen'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '사용자 타입, 거래 상태, 등록/수정 흐름이 얽힌 복잡한 모바일 서비스를 단독 프론트엔드 구조로 정리했습니다.',
        en: 'Organized a complex mobile service with user types, transaction states, and edit flows as a solo frontend architecture.',
      },
      {
        ko: '상태 책임을 명확히 나눠 기능이 늘어나도 구조가 쉽게 무너지지 않도록 설계했습니다.',
        en: 'Designed clear state responsibilities so the structure stays stable as features grow.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '채팅 화면에서는 상대 타입, 내 권한, 거래 완료 여부가 함께 얽혀 UI 분기 로직이 복잡했습니다.',
          en: 'The chat screen had complex branching because counterpart type, my authority, and transaction completion all interacted together.',
        },
        solution: {
          ko: '채팅 참여자의 사용자 타입, 현재 로그인 사용자 권한, 거래 완료 여부를 기준으로 UI 분기 조건을 명확히 분리했습니다.',
          en: 'Separated UI conditions clearly based on participant type, current user authority, and transaction completion state.',
        },
        result: {
          ko: '판매자와 일반 사용자 각각에게 필요한 액션만 노출되도록 구성할 수 있었습니다.',
          en: 'Made it possible to show only the actions needed by each role.',
        },
      },
      {
        problem: {
          ko: '일반 사용자에서 판매자로 전환할 때 판매자에게 필요한 데이터가 없어 단순 권한 변경만으로는 처리할 수 없었습니다.',
          en: 'When converting a regular user into a seller, the seller-specific data was missing, so a simple permission switch was not enough.',
        },
        solution: {
          ko: '밭 위치 등록과 인증을 선행한 뒤 판매자 권한을 부여하는 흐름을 구현했습니다.',
          en: 'Implemented a flow that first collects and verifies field-location data before granting seller permissions.',
        },
        result: {
          ko: '권한 전환과 필요한 데이터 확보를 동시에 해결했습니다.',
          en: 'Solved both permission transition and required-data acquisition together.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 성과', en: 'Key outcome' },
        value: { ko: '상품 핵심 흐름 단독 구현', en: 'Independently implemented core product flows' },
        description: {
          ko: '상품 조회부터 등록·수정까지 이어지는 프론트엔드 핵심 경험을 완성했습니다.',
          en: 'Completed the core frontend experience spanning browsing, registration, and editing.',
        },
      },
      {
        label: { ko: '구조적 성과', en: 'Architectural outcome' },
        value: { ko: '클라이언트/서버 상태 분리 설계', en: 'Separated client/server state design' },
        description: {
          ko: '기능 확장에도 유지보수 가능한 구조를 만들었습니다.',
          en: 'Created a structure that remains maintainable as features expand.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '모바일 서비스형 앱은 화면 구현만이 아니라 권한, 상태, 데이터 흐름을 동시에 설계해야 완성도가 높아진다는 점을 배웠습니다.',
        en: 'Learned that service-style mobile apps require simultaneous design of permissions, state, and data flow, not just UI implementation.',
      },
    ],
    limitations: [
      {
        ko: '실제 서비스 운영 수준의 결제·주문 후속 기능은 더 확장될 수 있습니다.',
        en: 'Payment and post-order features for real operation can be expanded further.',
      },
    ],
    nextSteps: [
      {
        ko: '거래 후 리뷰, 주문 상태 추적, 운영자 관리 기능까지 확장할 계획입니다.',
        en: 'Plan to extend the system with post-transaction reviews, order tracking, and admin tools.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 8,
    category: 'webFrontend',
    title: { ko: 'Babzip', en: 'Babzip' },
    oneLiner: {
      ko: '저장한 맛집을 지도와 개인화된 TOP10 랭킹으로 관리하는 맛집 저장 서비스',
      en: 'A spot-saving service that manages favorite restaurants through maps and a personalized TOP10 ranking.',
    },
    overview: {
      ko: '사용자가 저장한 맛집을 목록이 아니라 지도와 랭킹 흐름 안에서 함께 관리하도록 설계한 React 기반 웹 플랫폼입니다.',
      en: 'A React-based web platform designed so users manage saved restaurants not just as a list, but through connected map and ranking flows.',
    },
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-11-30'),
    teamInfo: { ko: '프론트엔드 팀 주도 프로젝트', en: 'Frontend team-led project' },
    contribution: {
      ko: 'TOP10 기능 개발, 저장된 스팟 지도 표시 및 조회 기능 구현, Kakao Map API 연동, 지도 기반 UI 및 마커 오버레이 구현 담당',
      en: 'Owned TOP10 development, saved-spot map visualization, Kakao Map API integration, and map-based UI with marker overlays.',
    },
    images: buildImages('babzip', [
      ['TOP10 랭킹 화면', 'TOP10 ranking screen'],
      ['지도 기반 스팟 조회 화면', 'Map-based saved-spot screen'],
    ]),
    techChoices: [
      {
        name: 'React',
        reason: {
          ko: '지도 탐색과 랭킹 관리가 결합된 상호작용을 컴포넌트 단위로 유연하게 구현하기 위해 선택했습니다.',
          en: 'Chosen to build the combined interaction of map exploration and ranking management flexibly with components.',
        },
      },
      {
        name: 'TypeScript',
        reason: {
          ko: '스팟 데이터와 랭킹 상태를 명확하게 관리해 기능 확장 시 안정성을 높이기 위해 사용했습니다.',
          en: 'Used to manage spot data and ranking state clearly and improve stability as features expand.',
        },
      },
      {
        name: 'Zustand',
        reason: {
          ko: '사용자가 저장한 스팟과 개인 랭킹 상태를 단순한 구조로 관리하기 위해 사용했습니다.',
          en: 'Used to manage saved spots and personal ranking state in a simple structure.',
        },
      },
      {
        name: 'Kakao Map API',
        reason: {
          ko: '저장된 맛집을 위치 정보와 함께 직관적으로 확인할 수 있도록 하기 위해 연동했습니다.',
          en: 'Integrated so users can intuitively inspect saved restaurants together with location data.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'TOP10 기능 개발', en: 'TOP10 feature development' },
        description: {
          ko: '사용자가 저장한 맛집 중 선호하는 장소를 직접 순위화하고, 조회·추가·수정이 하나의 랭킹 관리 흐름 안에서 이어지도록 구현했습니다.',
          en: 'Implemented a flow where users rank preferred saved restaurants and manage viewing, adding, and editing within one unified ranking experience.',
        },
        images: buildImages('babzip', [
          ['TOP10 조회 또는 수정 화면', 'TOP10 view or edit screen'],
        ]),
      },
      {
        title: { ko: '저장된 스팟 지도 표시 및 조회', en: 'Saved-spot map visualization and lookup' },
        description: {
          ko: '저장된 스팟을 지도 위 마커로 표시하고, 마커 오버레이를 통해 장소 정보를 바로 확인할 수 있도록 구성했습니다.',
          en: 'Displayed saved spots as markers on the map and allowed users to inspect place information directly through overlays.',
        },
        images: buildImages('babzip', [
          ['지도 마커 및 오버레이 화면', 'Map marker and overlay screen'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '랭킹 관리와 지도 탐색이 분리되지 않도록 하나의 서비스 흐름으로 연결했습니다.',
        en: 'Connected ranking management and map exploration into one coherent service flow.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '초기 슬라이딩 랭킹 구조에서는 데이터가 많아질수록 사용자가 현재 순서를 직관적으로 파악하기 어려웠습니다.',
          en: 'In the initial sliding-ranking structure, it became harder for users to understand the current order as more items were added.',
        },
        solution: {
          ko: '현재 순서와 이동 흐름을 더 쉽게 인지할 수 있도록 슬라이딩 랭킹 UI를 수정하고, 조회·추가·수정 흐름을 하나로 정리했습니다.',
          en: 'Refined the sliding-ranking UI so users could grasp the current order and movement flow more easily, and unified view/add/edit into one flow.',
        },
        result: {
          ko: '사용자가 자신의 취향에 맞게 TOP10을 지속적으로 관리할 수 있는 경험을 만들었습니다.',
          en: 'Created an experience where users can continuously maintain their own TOP10 preferences.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 성과', en: 'Key outcome' },
        value: { ko: '지도와 랭킹이 결합된 사용자 흐름', en: 'Combined map-and-ranking user flow' },
        description: {
          ko: '저장된 맛집을 단순 목록이 아닌 위치 기반 데이터로 활용하도록 만들었습니다.',
          en: 'Made saved restaurants usable as location-based data rather than a simple list.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '개인화 기능은 조회 화면만이 아니라 사용자가 직접 수정하고 관리할 수 있는 흐름까지 설계해야 만족도가 높아진다는 점을 배웠습니다.',
        en: 'Learned that personalization becomes more valuable when users can actively edit and manage it, not just view it.',
      },
    ],
    limitations: [
      {
        ko: '협업, 리뷰, 외부 공유 등 커뮤니티성 기능은 더 확장할 여지가 있습니다.',
        en: 'Community features such as collaboration, reviews, and external sharing can be expanded further.',
      },
    ],
    nextSteps: [
      {
        ko: '리뷰, 친구 공유, 추천 알고리즘을 붙여 맛집 관리 플랫폼으로 확장할 계획입니다.',
        en: 'Plan to expand it into a fuller restaurant-management platform with reviews, friend sharing, and recommendation logic.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 6,
    category: 'webFrontend',
    title: { ko: 'JoinUs', en: 'JoinUs' },
    oneLiner: {
      ko: '사용자 참여형 설문 흐름으로 IT 동아리 트랙 추천과 지원 전환을 만든 웹 서비스',
      en: 'A participatory survey web service that recommends IT club tracks and improves application conversion.',
    },
    overview: {
      ko: '동아리 박람회 현장에서 학생들이 짧은 시간 안에 이해하고 참여할 수 있도록 첫 페이지, 설문 페이지, 반응형 흐름을 설계한 프로젝트입니다.',
      en: 'A project designed so students at a club fair can quickly understand and participate through a landing page, survey flow, and responsive UI.',
    },
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-03-31'),
    teamInfo: { ko: '웹 프론트엔드 프로젝트', en: 'Web frontend project' },
    contribution: {
      ko: '첫 페이지 개발, 설문 페이지 개발, 모바일/태블릿/데스크탑 반응형 작업, TailwindCSS 기반 UI 구현 담당',
      en: 'Owned the landing page, survey page, responsive work across mobile/tablet/desktop, and TailwindCSS-based UI implementation.',
    },
    images: buildImages('joinus', [
      ['첫 페이지 화면', 'Landing page screen'],
      ['설문 페이지 화면', 'Survey page screen'],
    ]),
    techChoices: [
      {
        name: 'React',
        reason: {
          ko: '질문 응답 흐름과 결과 페이지로 이어지는 상호작용을 빠르게 구성하기에 적합했습니다.',
          en: 'Well suited for quickly building the interaction from question flow to results.',
        },
      },
      {
        name: 'TypeScript',
        reason: {
          ko: '질문 흐름과 결과 연결 구조를 안정적으로 관리하기 위해 사용했습니다.',
          en: 'Used to manage question flow and result mappings more safely.',
        },
      },
      {
        name: 'TailwindCSS',
        reason: {
          ko: '다양한 기기에서 빠르게 반응형 UI를 맞추기 위해 채택했습니다.',
          en: 'Chosen to build responsive UI quickly across devices.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '첫 페이지 / 설문 페이지 개발', en: 'Landing page and survey page development' },
        description: {
          ko: '박람회 현장에서 학생들이 서비스를 처음 접했을 때 목적을 빠르게 이해하고 바로 참여할 수 있도록 핵심 메시지와 CTA 중심의 첫 페이지, 직관적인 설문 페이지 흐름을 구현했습니다.',
          en: 'Built a landing page centered on clear messaging and CTA so students at the fair could quickly understand the purpose, along with an intuitive survey flow.',
        },
        images: buildImages('joinus', [
          ['첫 페이지', 'Landing page'],
          ['설문 진행 화면', 'Survey flow screen'],
        ]),
      },
      {
        title: { ko: '반응형 작업', en: 'Responsive implementation' },
        description: {
          ko: '모바일, 태블릿, 데스크탑에서 설문 흐름이 끊기지 않도록 레이아웃, 간격, 텍스트 크기, 버튼 배치를 TailwindCSS로 조정했습니다.',
          en: 'Adjusted layout, spacing, typography, and button placement in TailwindCSS so the survey flow stays stable across mobile, tablet, and desktop.',
        },
        images: buildImages('joinus', [
          ['반응형 화면 예시', 'Responsive layout example'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '현장 체험형 서비스 특성을 고려해 짧은 체류 시간 안에서도 바로 참여가 일어나는 흐름을 설계했습니다.',
        en: 'Designed the flow for an event-style service so participation could happen within a short on-site session.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '박람회 현장에서는 사용자가 서비스 구조를 오래 학습할 시간이 없어, 첫 화면이나 설문 흐름이 복잡하면 이탈이 발생할 수 있었습니다.',
          en: 'At the fair, users had no time to study the service structure, so complexity on the landing page or survey flow could quickly cause drop-off.',
        },
        solution: {
          ko: '첫 화면은 목적 전달과 참여 유도에 집중해 단순화하고, 설문 페이지는 질문과 선택지 구성을 직관적으로 정리했습니다.',
          en: 'Simplified the landing page around clear purpose and participation, and organized survey questions and choices more intuitively.',
        },
        result: {
          ko: '짧은 현장 체험 시간 안에서도 자연스럽게 결과 페이지까지 이어지는 흐름을 만들었습니다.',
          en: 'Created a flow that naturally led users to the result page even within a short event experience.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '정량 성과', en: 'Quantitative outcome' },
        value: { ko: '지원자 수 약 2배 증가', en: 'Approx. 2x increase in applicants' },
        description: {
          ko: '사용자 유형 테스트 도입 이후 지원자 수 증가에 기여했습니다.',
          en: 'Contributed to applicant growth after introducing the user-type test.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '짧은 이벤트형 서비스일수록 첫 화면의 메시지 구조와 질문 흐름의 직관성이 성과에 큰 영향을 준다는 점을 배웠습니다.',
        en: 'Learned that in short-lived event services, the clarity of the first screen and question flow strongly affects outcomes.',
      },
    ],
    limitations: [
      {
        ko: '결과 리텐션과 후속 참여 유도 기능은 더 보강할 수 있습니다.',
        en: 'Retention after the result page and follow-up engagement features can be improved further.',
      },
    ],
    nextSteps: [
      {
        ko: '결과 저장, 공유, 재응답 분석 기능을 추가해 홍보 도구로 확장할 계획입니다.',
        en: 'Plan to expand it as a promotional tool with result saving, sharing, and repeat-response analytics.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 5,
    category: 'webFrontend',
    title: { ko: 'JobTalk', en: 'JobTalk' },
    oneLiner: {
      ko: '채용 공고, 기업 정보, 커뮤니티, 다국어, 지도 기능을 통합한 외국인 근로자 플랫폼',
      en: 'A platform for foreign workers integrating job posts, company info, community, multilingual support, and map features.',
    },
    overview: {
      ko: '외국인 근로자의 채용 정보 파편화 문제를 해결하기 위해 채용 공고·기업 정보·커뮤니티를 통합하고, 다국어 및 지도 기반 접근성을 강화한 웹 프론트엔드 프로젝트입니다.',
      en: 'A web frontend project for foreign workers that integrates job posts, company information, and community features while strengthening multilingual and map-based accessibility.',
    },
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-11-30'),
    teamInfo: { ko: '웹 플랫폼 프론트엔드 프로젝트', en: 'Web-platform frontend project' },
    contribution: {
      ko: 'React + TypeScript 기반 프론트엔드 구조 설계, 채용 공고/기업 정보/커뮤니티/내 주변 정보 페이지 구현, i18n 기반 다국어 UI 및 서버 번역 연동, 유지보수 수행',
      en: 'Designed the React + TypeScript frontend structure, implemented job/company/community/nearby pages, integrated i18n UI and server-side translation, and maintained the service.',
    },
    images: buildImages('jobtalk', [
      ['채용공고 화면', 'Job listing screen'],
      ['기업 정보 또는 내 주변 정보 화면', 'Company info or nearby-information screen'],
      ['커뮤니티 또는 다국어 화면', 'Community or multilingual screen'],
    ]),
    techChoices: [
      {
        name: 'React',
        reason: {
          ko: '페이지 수가 많고 상호작용이 다양한 플랫폼 구조를 컴포넌트 기반으로 정리하기 위해 선택했습니다.',
          en: 'Chosen to organize a large multi-page platform with varied interactions in a component-based way.',
        },
      },
      {
        name: 'TanStack Query',
        reason: {
          ko: '채용 공고, 기업 정보, 주변 정보 등 서버 상태를 분리해 안정적으로 관리하기 위해 사용했습니다.',
          en: 'Used to manage server state for jobs, company info, and nearby data in a stable way.',
        },
      },
      {
        name: 'Zustand',
        reason: {
          ko: '클라이언트 상태와 서버 상태를 분리해 유지보수 가능한 구조를 만들기 위해 적용했습니다.',
          en: 'Applied to separate client state from server state and improve maintainability.',
        },
      },
      {
        name: 'i18n',
        reason: {
          ko: '외국인 근로자 대상 서비스에서 정적 UI 문구를 빠르게 언어 전환하기 위해 사용했습니다.',
          en: 'Used to switch static UI copy quickly for a service targeting foreign workers.',
        },
      },
      {
        name: 'Kakao Map API',
        reason: {
          ko: '내 주변 생활 정보와 위치 기반 탐색 경험을 직관적으로 제공하기 위해 연동했습니다.',
          en: 'Integrated to provide intuitive nearby-life information and location-based exploration.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '채용공고 및 기업 정보 페이지', en: 'Job posting and company information pages' },
        description: {
          ko: '채용 공고 목록/상세와 기업 정보 페이지를 구현하고, 사용자가 채용 조건과 기업 정보를 함께 비교할 수 있도록 정보 구조와 화면 흐름을 설계했습니다.',
          en: 'Implemented job list/detail pages and company information pages, designing the information structure so users can compare job conditions and company details together.',
        },
        images: buildImages('jobtalk', [
          ['채용공고 목록 또는 상세 화면', 'Job list or detail screen'],
          ['기업 정보 화면', 'Company information screen'],
        ]),
      },
      {
        title: { ko: '내 주변 정보 페이지', en: 'Nearby information page' },
        description: {
          ko: '사용자 주변의 음식점, 문화생활 장소 등을 지도와 장소 정보 기반으로 조회할 수 있는 페이지를 구현했습니다.',
          en: 'Implemented a page that lets users explore nearby restaurants and cultural places using maps and place information.',
        },
        images: buildImages('jobtalk', [
          ['내 주변 정보 지도 화면', 'Nearby info map screen'],
        ]),
      },
      {
        title: { ko: '커뮤니티 페이지 구현', en: 'Community page implementation' },
        description: {
          ko: '외국인 근로자가 실제 생활 경험과 정보를 교류할 수 있도록 게시글 기반 커뮤니티 페이지를 구현하고, 채용 정보 중심 서비스와 자연스럽게 이어지도록 구조를 정리했습니다.',
          en: 'Implemented a post-based community page so foreign workers can exchange real-life experiences and information, while keeping it naturally connected to the job-oriented service.',
        },
        images: buildImages('jobtalk', [
          ['커뮤니티 페이지 화면', 'Community page screen'],
        ]),
      },
      {
        title: { ko: '다국어 지원 기능', en: 'Multilingual support' },
        description: {
          ko: 'i18n 기반 다국어 UI 구조를 설계하고, 정적 UI는 i18n으로, 동적 콘텐츠는 서버 번역으로 처리해 화면 문구와 실제 데이터가 함께 다국어로 제공되도록 구성했습니다.',
          en: 'Designed an i18n-based multilingual UI, handling static copy with i18n and dynamic content through server-side translation so both UI and data become multilingual.',
        },
        images: buildImages('jobtalk', [
          ['언어 전환 화면', 'Language-switching screen'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '채용, 기업, 커뮤니티, 생활 정보처럼 서로 다른 목적의 화면을 하나의 플랫폼 경험으로 통합했습니다.',
        en: 'Integrated screens with different purposes—jobs, companies, community, and daily-life info—into one platform experience.',
      },
      {
        ko: '다국어와 지도 접근성을 함께 강화해 실제 외국인 사용자 맥락에 맞는 정보 구조를 설계했습니다.',
        en: 'Designed the information structure around real foreign-user contexts by strengthening both multilingual and map accessibility.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '채용 정보 중심 서비스에 커뮤니티 기능이 함께 들어가면 전체 서비스 구조가 산만해지고 일관성이 떨어질 수 있었습니다.',
          en: 'Adding community features to a job-centered service could make the overall structure feel cluttered and inconsistent.',
        },
        solution: {
          ko: '채용 정보, 기업 정보, 커뮤니티가 각각 독립적으로 동작하면서도 하나의 플랫폼 안에서 자연스럽게 이어지도록 페이지 관계를 정리했습니다.',
          en: 'Organized page relationships so jobs, company info, and community could remain independent yet still feel connected within one platform.',
        },
        result: {
          ko: '서비스 목적은 유지하면서도 사용자 간 정보 교류 기능을 함께 제공할 수 있었습니다.',
          en: 'Preserved the service purpose while also enabling user-to-user information exchange.',
        },
      },
      {
        problem: {
          ko: '정적 문구만 번역하는 방식으로는 서버에서 내려오는 동적 데이터까지 일관되게 다국어로 제공하기 어려웠습니다.',
          en: 'Translating only static UI text made it difficult to provide server-delivered dynamic content consistently in multiple languages.',
        },
        solution: {
          ko: '서버 측 데이터도 번역할 수 있도록 AI 모델을 FastAPI로 구성하고, 백엔드가 번역된 데이터를 내려줄 수 있는 구조를 적용했습니다.',
          en: 'Structured an AI model through FastAPI so server-side data could also be translated and delivered in the selected language.',
        },
        result: {
          ko: '정적 UI와 동적 콘텐츠가 함께 다국어로 제공되는 경험을 구현했습니다.',
          en: 'Implemented a multilingual experience covering both static UI and dynamic content.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 성과', en: 'Key outcome' },
        value: { ko: '채용·기업·커뮤니티 통합 구조 구현', en: 'Integrated jobs, companies, and community' },
        description: {
          ko: '흩어진 정보를 하나의 플랫폼 경험으로 연결했습니다.',
          en: 'Connected fragmented information into one platform experience.',
        },
      },
      {
        label: { ko: '운영 성과', en: 'Operational outcome' },
        value: { ko: '공동 개발자 이탈 이후 단독 유지보수', en: 'Solo maintenance after a teammate left' },
        description: {
          ko: '프론트엔드 구조를 안정적으로 유지하며 개발을 이어갔습니다.',
          en: 'Continued development while maintaining frontend stability as a solo maintainer.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '다국어 서비스는 번역 기능만이 아니라 정보 구조, 서버 데이터 흐름, 페이지 관계까지 함께 설계해야 한다는 점을 배웠습니다.',
        en: 'Learned that multilingual services require redesigning information structure, server data flow, and page relationships—not just translation.',
      },
    ],
    limitations: [
      {
        ko: '지원 언어가 더 늘어나면 번역 검수 및 운영 도구가 추가로 필요합니다.',
        en: 'If support expands to more languages, additional translation review and operational tooling will be needed.',
      },
    ],
    nextSteps: [
      {
        ko: '비자 조건, 지역 필터링, 커뮤니티 추천 기능을 더 정교하게 확장할 계획입니다.',
        en: 'Plan to expand visa conditions, regional filtering, and community recommendation features more precisely.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 7,
    category: 'app',
    title: { ko: 'Chrip-aid', en: 'Chrip-aid' },
    oneLiner: {
      ko: '보육원 기부 플랫폼의 관리자 기능과 레거시 구조를 개선한 Flutter 프로젝트',
      en: 'A Flutter project focused on improving admin features and legacy structure in an orphanage donation platform.',
    },
    overview: {
      ko: '문서화되지 않은 레거시 Flutter 코드베이스를 직접 분석해 관리자 페이지를 확장하고, 삭제 이후 데이터 갱신 문제를 해결하며 구조적 일관성과 유지보수성을 높인 프로젝트입니다.',
      en: 'A Flutter project where I analyzed an undocumented legacy codebase, extended the admin page, fixed post-deletion refresh issues, and improved structural consistency and maintainability.',
    },
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-28'),
    teamInfo: { ko: '레거시 유지보수 중심 앱 프로젝트', en: 'Legacy-maintenance focused app project' },
    contribution: {
      ko: 'Flutter 기반 관리자 페이지 개발, 게시물/사용자/신고 관리 기능 구현, 삭제 이후 데이터 재조회 구조 적용, 레거시 코드 분석 및 구조 파악 담당',
      en: 'Owned Flutter admin-page development, post/user/report management, post-deletion refetch logic, and legacy code analysis.',
    },
    images: buildImages('chrip-aid', [
      ['관리자 페이지 화면', 'Admin page screen'],
      ['게시물/사용자/신고 관리 화면', 'Post/user/report management screen'],
    ]),
    techChoices: [
      {
        name: 'Flutter',
        reason: {
          ko: '기존 관리자 페이지 구조가 Flutter 기반이었기 때문에 같은 코드베이스 안에서 기능을 확장하기 위해 사용했습니다.',
          en: 'Used because the existing admin page was already built in Flutter and needed to be extended within the same codebase.',
        },
      },
      {
        name: 'Riverpod',
        reason: {
          ko: '기존 프로젝트의 상태 관리 흐름을 유지하면서 기능을 안정적으로 확장하기 위해 맞춰 사용했습니다.',
          en: 'Used to align with the existing state-management flow and extend features without breaking structure.',
        },
      },
      {
        name: 'MVVM',
        reason: {
          ko: '레거시 구조를 읽고 기능을 추가할 때 책임 분리가 어떻게 되어 있는지 파악하는 핵심 기준이었습니다.',
          en: 'Served as a key structural reference while reading the legacy code and adding features.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '관리자 페이지 개발', en: 'Admin page development' },
        description: {
          ko: '게시물 관리, 사용자 관리, 신고 관리 페이지를 구현하고 각 항목에 대해 삭제 조치를 수행할 수 있도록 구성했습니다.',
          en: 'Implemented post management, user management, and report management pages with deletion actions for each item.',
        },
        images: buildImages('chrip-aid', [
          ['관리자 대시보드', 'Admin dashboard'],
          ['관리 항목 화면', 'Management item screen'],
        ]),
      },
      {
        title: { ko: '레거시 코드 분석', en: 'Legacy code analysis' },
        description: {
          ko: '문서화된 자료 없이 남겨진 코드베이스를 직접 분석하며 MVVM 구조, Riverpod 사용 여부, 싱글톤 패턴으로 관리되는 사용자 정보 구조를 파악한 뒤 기능 개발을 이어갔습니다.',
          en: 'Analyzed an undocumented codebase to identify the MVVM structure, Riverpod usage, and singleton-managed user info before continuing feature development.',
        },
        images: buildImages('chrip-aid', [
          ['기존 구조를 분석한 관리자 흐름', 'Admin flow analyzed from legacy structure'],
        ]),
      },
    ],
    roleDetails: [
      {
        ko: '문서가 없는 레거시 프로젝트에서도 구조를 먼저 이해한 뒤 기능을 확장하는 방식을 택했습니다.',
        en: 'Took a structure-first approach before extending features in an undocumented legacy project.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '삭제 기능 수행 뒤에도 화면에서는 삭제된 데이터가 즉시 반영되지 않고 그대로 남아 있는 문제가 있었습니다.',
          en: 'After deletion, removed items still remained on screen instead of reflecting the latest server data.',
        },
        solution: {
          ko: '삭제 요청 이후 화면 상태만 바꾸는 대신 다시 GET 요청을 보내 최신 데이터를 재조회하도록 수정했습니다.',
          en: 'Changed the logic to refetch the latest data with a new GET request instead of only mutating local screen state.',
        },
        result: {
          ko: '삭제 이후 화면이 실제 서버 데이터와 동일하게 갱신되도록 개선했습니다.',
          en: 'Improved the flow so the screen refreshes to match actual server data after deletion.',
        },
      },
      {
        problem: {
          ko: '문서화된 자료가 없고 TODO 기능이 많은 코드베이스라 구조를 이해하지 못한 상태에서 바로 개발에 들어가면 기존 흐름을 깨뜨릴 위험이 있었습니다.',
          en: 'Because the codebase was undocumented and full of TODOs, jumping into development without understanding the structure risked breaking the existing flow.',
        },
        solution: {
          ko: '직접 코드를 읽으며 상태 관리 방식과 구조적 패턴을 먼저 파악한 뒤 그 흐름에 맞춰 기능을 확장했습니다.',
          en: 'Read through the code first to understand state management and structural patterns, then extended features in line with that flow.',
        },
        result: {
          ko: '기존 구조의 일관성을 유지하면서 필요한 관리자 기능을 추가할 수 있었습니다.',
          en: 'Was able to add required admin features while preserving the consistency of the existing structure.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 성과', en: 'Key outcome' },
        value: { ko: '관리자 기능 및 삭제 조치 구현', en: 'Implemented admin features and deletion actions' },
        description: {
          ko: '게시물, 사용자, 신고 관리 기능을 실제 운영 관점에서 사용할 수 있게 만들었습니다.',
          en: 'Made post, user, and report management usable from a real operational perspective.',
        },
      },
      {
        label: { ko: '구조적 성과', en: 'Structural outcome' },
        value: { ko: '레거시 구조 파악 후 기능 확장', en: 'Extended features after understanding legacy structure' },
        description: {
          ko: '문서 없는 코드베이스에서도 유지보수 가능한 방향으로 개선했습니다.',
          en: 'Improved maintainability even in an undocumented codebase.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '레거시 프로젝트에서는 새 기능 구현보다 먼저 기존 설계 의도를 읽어내는 과정이 더 중요할 수 있다는 점을 배웠습니다.',
        en: 'Learned that in legacy projects, understanding the original design intent can be more important than implementing new features immediately.',
      },
    ],
    limitations: [
      {
        ko: '레거시 프로젝트 전반의 문서화와 테스트 코드는 여전히 더 보강할 필요가 있습니다.',
        en: 'Documentation and test coverage across the broader legacy project still need further improvement.',
      },
    ],
    nextSteps: [
      {
        ko: '관리자 액션 로그, 권한 세분화, 구조 문서화를 추가해 운영성과 유지보수성을 더 높일 계획입니다.',
        en: 'Plan to improve operations and maintainability further with admin action logs, finer permissions, and structural documentation.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
];
