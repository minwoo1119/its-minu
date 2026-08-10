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
  startDate: Date | null;
  endDate: Date | null;
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

const pImg = (
  projectKey: string,
  fileName: string,
  ko: string,
  en: string
): ProjectImage => ({
  imageUrl: `/img/projects/${projectKey}/${fileName}`,
  caption: { ko, en },
});

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
    images: [
      pImg('geumpumta', 'hero.png', '메인 학습 타이머 화면', 'Main study timer screen'),
    ],
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
        images: [
          pImg('geumpumta', 'feature-1.png', '학습 타이머 및 집중 지원 화면', 'Study timer & focus support screen'),
        ],
      },
      {
        title: { ko: '학교 Wi-Fi 기반 학습 인증', en: 'Campus Wi-Fi based study verification' },
        description: {
          ko: '학교 Wi-Fi 환경을 기준으로 학습 기록의 유효성을 판단하는 Gateway IP 기반 인증 로직을 적용해 공정한 랭킹 데이터가 반영되도록 했습니다.',
          en: 'Applied Gateway-IP based verification against the campus Wi-Fi environment so only validated study records affect rankings.',
        },
        images: [
          pImg('geumpumta', 'feature-2.png', '학교 Wi-Fi 인증 흐름 화면', 'Campus Wi-Fi verification screen'),
        ],
      },
      {
        title: { ko: '랭킹 및 API 호출 구조 개선', en: 'Ranking and API call optimization' },
        description: {
          ko: 'Riverpod 캐싱 구조를 활용해 이미 조회한 랭킹 데이터를 재사용하도록 개선하여 화면 재진입 시 불필요한 API 재호출을 줄였습니다.',
          en: 'Improved the ranking flow to reuse already fetched data through Riverpod caching, reducing unnecessary API calls when re-entering the screen.',
        },
        images: [
          pImg('geumpumta', 'feature-3.png', '실시간 랭킹 및 학습 기록 화면', 'Live ranking & study record screen'),
        ],
      },
      {
        title: { ko: '소셜 로그인 및 사용자 상태 복원', en: 'Social login and user-state restoration' },
        description: {
          ko: 'Kakao, Google, Apple 로그인을 지원하고, SharedPreferences를 통해 앱 재실행 시 로그인 상태를 복원하도록 구현했습니다.',
          en: 'Implemented Kakao, Google, and Apple login, and restored login state on app relaunch through SharedPreferences.',
        },
        images: [
          pImg('geumpumta', 'feature-4.png', '소셜 로그인 및 온보딩 화면', 'Social login & onboarding screen'),
        ],
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
  {
    id: 9,
    category: 'desktop',
    title: { ko: '7-Segment OCR', en: '7-Segment OCR' },
    oneLiner: {
      ko: '영상 내 7-Segment 디스플레이를 지정 간격으로 자동 인식·분석하는 WPF 데스크톱 프로그램',
      en: 'A WPF desktop tool that automatically recognizes and analyzes 7-segment display values from video.',
    },
    overview: {
      ko: '영상에 기록된 7-Segment 계측값을 사람이 직접 확인하고 기록하는 작업을 자동화하기 위해 개발했습니다. OpenCvSharp 기반 ROI 프레임 추출 파이프라인과 ONNX Runtime 기반 LightSVTR 전용 OCR 모델을 결합해, 별도 Python 추론 서버 없이 C# 내부에서 로컬 완결형으로 계측값 변화 추이를 분석하는 WPF 데스크톱 프로그램입니다.',
      en: 'Developed to automate the manual recording of 7-segment display values from video. Combines an OpenCvSharp ROI extraction pipeline with an ONNX Runtime-powered LightSVTR OCR model, running fully local inference in C# without a separate Python server.',
    },
    startDate: new Date('2026-08-01'),
    endDate: null,
    teamInfo: { ko: 'C# / WPF 데스크톱 프로그램 단독 개발', en: 'Solo C# / WPF desktop application development' },
    contribution: {
      ko: 'WPF 애플리케이션 구조 설계 및 MVVM 기반 UI 개발, OpenCvSharp 기반 ROI 프레임 추출 파이프라인 구현, LightSVTR 모델 ONNX 변환 및 전/후처리(CTC Greedy Decoding) 개발, 다중 OCR 모델 벤치마크 수행',
      en: 'Designed the WPF MVVM architecture, implemented the OpenCvSharp ROI extraction pipeline, integrated the LightSVTR ONNX model with CTC greedy decoding, and benchmarked multiple OCR models.',
    },
    images: [
      pImg('seven-segment-ocr', 'hero.png', '7-Segment OCR 메인 분석 화면', '7-Segment OCR main analysis screen'),
    ],
    techChoices: [
      {
        name: 'C# / WPF',
        reason: {
          ko: '영상 로드, 재생, ROI 지정, DataGrid 및 차트 시각화가 결합된 고성능 데스크톱 분석 툴을 MVVM 패턴으로 구축하기 위해 선택했습니다.',
          en: 'Chosen to build a high-performance desktop tool with video playback, ROI selection, and DataGrid/chart visualization using MVVM.',
        },
      },
      {
        name: 'ONNX Runtime',
        reason: {
          ko: 'Python 추론 서버에 의존하지 않고 C# 데스크톱 프로그램 내부에서 로컬 완결형으로 빠른 딥러닝 추론을 수행하기 위해 도입했습니다.',
          en: 'Introduced to achieve fast, fully local deep learning inference inside the C# application without a separate Python server.',
        },
      },
      {
        name: 'OpenCvSharp',
        reason: {
          ko: '영상 로드, 프레임 단위 탐색 및 사용자 지정 ROI 영역을 효율적으로 추출해 전처리 텐서로 변환하기 위해 사용했습니다.',
          en: 'Used to handle video loading, frame-by-frame seeking, and efficient ROI extraction for tensor preprocessing.',
        },
      },
      {
        name: 'LightSVTR',
        reason: {
          ko: '다양한 공개 모델 벤치마크 결과, 7-Segment 숫자 인식에서 가장 가볍고 안정적인 인식 성능을 보여 최종 모델로 선정했습니다.',
          en: 'Selected as the primary model after benchmarking public models, showing the most lightweight and reliable 7-segment recognition.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '영상 로드 및 ROI 기반 프레임 추출 파이프라인', en: 'Video loading and ROI frame extraction pipeline' },
        description: {
          ko: 'OpenCvSharp를 활용해 영상에서 사용자가 지정한 7-Segment 디스플레이 영역을 추출하고, 설정된 시간 간격으로 프레임을 샘플링해 OCR 입력 데이터로 변환합니다.',
          en: 'Extracts the user-defined 7-segment ROI from video using OpenCvSharp and samples frames at configurable intervals for OCR input.',
        },
        images: [
          pImg('seven-segment-ocr', 'feature-1.png', 'ROI 지정 및 영상 프레임 추출 화면', 'ROI selection and frame extraction screen'),
        ],
      },
      {
        title: { ko: 'LightSVTR 기반 7-Segment OCR 및 ONNX Runtime 통합', en: 'LightSVTR 7-segment OCR & ONNX Runtime integration' },
        description: {
          ko: 'Grayscale 변환, 비율 유지 Resize, Padding, Normalization을 거쳐 ONNX Runtime으로 모델을 추론하고 CTC Greedy Decoding을 통해 최종 숫자를 인식합니다.',
          en: 'Runs ONNX Runtime inference through grayscale conversion, aspect-ratio-preserving resize, padding, and normalization, recognizing digits via CTC greedy decoding.',
        },
        images: [
          pImg('seven-segment-ocr', 'feature-2.png', 'OCR 추론 및 CTC 디코딩 화면', 'OCR inference and CTC decoding screen'),
        ],
      },
      {
        title: { ko: '시계열 데이터 시각화 및 결과 분석 (DataGrid & Chart)', en: 'Time-series data visualization & trend analysis' },
        description: {
          ko: '시간별 OCR 인식값, Confidence 스코어, 추론 속도 및 오류 상태를 기록하고 DataGrid와 그래프를 통해 계측값 변화 추이를 실시간으로 확인할 수 있도록 구성했습니다.',
          en: 'Records timestamped OCR values, confidence, latency, and error states, visualizing trends in real time through DataGrid and charts.',
        },
        images: [
          pImg('seven-segment-ocr', 'feature-3.png', '시간별 계측값 그래프 및 DataGrid 화면', 'Time-series chart and DataGrid screen'),
        ],
      },
      {
        title: { ko: '다중 모델 벤치마크 및 추론 엔진 추상화', en: 'Multi-model benchmarking & engine abstraction' },
        description: {
          ko: 'Google Colab에서 LightSVTR, CRNN, TFLite 등 여러 모델을 동일 조건으로 비교 검증했으며, OCR 인터페이스 추상화를 통해 향후 다른 ONNX 모델로 손쉽게 교체 가능한 구조를 설계했습니다.',
          en: 'Benchmarked LightSVTR, CRNN, and TFLite under identical conditions in Colab, designing an abstracted OCR interface for easy future model replacement.',
        },
        images: [
          pImg('seven-segment-ocr', 'feature-4.png', '모델 비교 벤치마크 및 엔진 구조', 'Model benchmarking and engine architecture'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'WPF와 MVVM 구조를 기반으로 영상 로드, 재생, ROI 지정, OCR 분석, 결과 조회 및 내보내기까지 연결되는 전체 데스크톱 프로그램을 단독으로 개발했습니다.',
        en: 'Independently developed the full desktop application using WPF and MVVM, covering video playback, ROI selection, OCR analysis, and result export.',
      },
      {
        ko: 'Python Colab 환경과 C# WPF 환경의 추론 결과를 단계별로 비교 분석하며 텐서 전처리와 디코딩 오차를 정밀하게 디버깅했습니다.',
        en: 'Step-by-step analyzed and debugged inference discrepancies between Python Colab and C# WPF across tensor preprocessing and decoding stages.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: 'Colab Python 환경과 WPF C# 환경에서 동일 모델을 실행했음에도 특정 프레임에서 OCR 인식 결과 편차가 발생하는 문제가 있었습니다.',
          en: 'Inference discrepancies occurred on specific frames between Python Colab and C# WPF despite running the same model.',
        },
        solution: {
          ko: '프레임 추출 시점, ROI 좌표 계산, Resize 보간 방식, Tensor 정규화 계수 및 CTC 출력값 디코딩 과정을 단계별로 비교하며 전처리 오차를 정밀하게 보정했습니다.',
          en: 'Compared frame timestamps, ROI coordinates, resize interpolation, tensor normalization factors, and CTC decoding step by step to calibrate preprocessing differences.',
        },
        result: {
          ko: 'Colab 추론 결과와 C# ONNX Runtime 추론 결과의 일치성을 확보하고 인식 신뢰도를 크게 높였습니다.',
          en: 'Achieved complete parity between Colab and C# ONNX Runtime inference outputs, ensuring high recognition reliability.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '로컬 완결형 추론', en: 'Local inference' },
        value: { ko: 'No Python Server', en: 'No Python Server' },
        description: {
          ko: '외부 파이썬 추론 서버 없이 C# WPF 애플리케이션 내부에서 온디바이스로 OCR 추론을 완결했습니다.',
          en: 'Completed on-device OCR inference locally within C# WPF without an external Python server.',
        },
      },
      {
        label: { ko: '모델 최적화', en: 'Model optimization' },
        value: { ko: 'LightSVTR 탑재', en: 'LightSVTR embedded' },
        description: {
          ko: '실제 7-Segment 영상 벤치마크를 통해 특화된 경량 모델을 선정하고 통합했습니다.',
          en: 'Selected and embedded a specialized lightweight model through real 7-segment video benchmarking.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: 'Python 연구 환경에서 검증된 딥러닝 모델을 실제 C# 데스크톱 프로그램으로 이식할 때, 영상 전처리와 텐서 변환 단계의 정밀한 일치가 모델 성능에 결정적임을 배웠습니다.',
        en: 'Learned that exact parity in image preprocessing and tensor transformation is critical when porting deep learning models from Python to C# desktop apps.',
      },
    ],
    limitations: [
      {
        ko: '극심한 조명 반사나 디스플레이 기울어짐이 큰 영상의 경우 원근 보정(Perspective Transform) 기능이 추가로 보완될 수 있습니다.',
        en: 'Perspective transformation can be further added for footage with severe glare or angled display perspectives.',
      },
    ],
    nextSteps: [
      {
        ko: '자동 원근 보정 및 다중 ROI 동시 계측 기능과 엑셀/CSV 내보내기 자동화 리포트 기능을 추가할 계획입니다.',
        en: 'Plan to add automatic perspective correction, multi-ROI simultaneous tracking, and automated Excel/CSV export reporting.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 11,
    category: 'desktop',
    title: { ko: 'SEM Particle Analyzer', en: 'SEM Particle Analyzer' },
    oneLiner: {
      ko: 'SEM·현미경 이미지에서 ROI와 크기·형상·밝기 조건으로 미세 입자를 자동 검출·측정하는 Windows 비전 분석 프로그램',
      en: 'A Windows vision analysis application that detects and measures microscopic particles in SEM images using ROI, size, shape, and intensity criteria.',
    },
    overview: {
      ko: 'SEM 및 현미경 이미지의 미세 입자를 상용 비전 SDK 없이 분석할 수 있도록 개발한 Windows 데스크톱 프로그램입니다. 사용자가 지정한 ROI 안에서 입자를 검출하고 크기·형상·밝기 특성을 측정하며, 분석 설정과 결과를 함께 저장해 동일 조건의 분석을 재현할 수 있도록 설계했습니다.',
      en: 'Developed a Windows desktop application for analyzing microscopic particles in SEM and microscope images without relying on commercial vision SDKs. It detects particles within a user-defined ROI, measures their size, shape, and intensity properties, and preserves both settings and results for reproducible analysis.',
    },
    startDate: new Date('2026-07-24'),
    endDate: new Date('2026-08-09'),
    teamInfo: { ko: 'Windows 데스크톱 비전 분석 프로그램 단독 개발', en: 'Solo Windows desktop vision analysis application development' },
    contribution: {
      ko: '.NET 10 / WPF / MVVM 기반 애플리케이션 아키텍처 설계, OpenCvSharp 기반 입자 검출·Watershed 분리 파이프라인 구현, 9종 기하·통계 파라미터 계산 엔진 개발, 히스토그램 및 Overlay UI 구현, xUnit 기반 34개 자동화 테스트 구축',
      en: 'Designed .NET 10 / WPF / MVVM architecture, implemented OpenCvSharp particle detection & watershed pipeline, built 9 geometric/statistical measurement engine, created histogram & overlay UI, and authored 34 xUnit automated tests.',
    },
    images: [
      pImg('sem-particle-analyzer', 'hero.png', 'SEM Particle Analyzer 메인 분석 화면', 'SEM Particle Analyzer main analysis screen'),
    ],
    techChoices: [
      {
        name: 'C# / .NET 10 & WPF',
        reason: {
          ko: '고해상도 SEM 이미지 렌더링, 실시간 ROI 조작, DataGrid 및 오버레이 시각화를 MVVM 패턴으로 안정적으로 구축하기 위해 선택했습니다.',
          en: 'Chosen to build a high-performance desktop UI with high-resolution SEM rendering, real-time ROI manipulation, and overlay visualization using MVVM.',
        },
      },
      {
        name: 'OpenCvSharp',
        reason: {
          ko: '상용 비전 SDK 없이 CLAHE, Threshold, Morphology, Watershed 등 정밀 영상 처리 파이프라인을 네이티브 성능으로 구현하기 위해 사용했습니다.',
          en: 'Used to implement precise image-processing pipelines—CLAHE, thresholding, morphology, watershed—with native performance without commercial vision SDKs.',
        },
      },
      {
        name: 'xUnit',
        reason: {
          ko: '형상 계산 공식, 축척 변환, Watershed 분리 등 핵심 분석 알고리즘의 신뢰성을 합성 이미지 기반 34개 단위·분석 테스트로 검증하기 위해 도입했습니다.',
          en: 'Introduced to verify geometric formulas, scale conversions, and watershed separation through 34 automated unit and analysis tests on synthetic images.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '영상 전처리 및 입자 검출·Watershed 분리 파이프라인', en: 'Image preprocessing, particle detection & watershed pipeline' },
        description: {
          ko: 'Rectangle ROI, GV Threshold, Gaussian Blur, CLAHE, Morphology 및 Watershed를 조합해 뭉쳐진 입자까지 정밀하게 분리·검출하는 비전 파이프라인을 구현했습니다.',
          en: 'Implemented a particle detection and separation pipeline combining rectangular ROI, GV thresholding, Gaussian blur, CLAHE, morphology, and watershed to accurately separate touching particles.',
        },
        images: [
          pImg('sem-particle-analyzer', 'feature-1.png', '입자 검출 및 Watershed 분리 화면', 'Particle detection and watershed separation screen'),
        ],
      },
      {
        title: { ko: '다각도 기하·형상·밝기 파라미터 측정 엔진', en: 'Multi-parametric geometric, shape & intensity measurement engine' },
        description: {
          ko: '면적, 둘레, 등가원 직경, Feret 직경, 장·단축, 종횡비, 원형도, Solidity 및 GV 통계를 계산하고 실제 길이 단위(μm, nm)로 자동 변환합니다.',
          en: 'Calculates area, perimeter, equivalent diameter, Feret diameters, major/minor axes, aspect ratio, circularity, solidity, and GV statistics with automatic real-world unit conversion.',
        },
        images: [
          pImg('sem-particle-analyzer', 'feature-2.png', '입자 측정 파라미터 및 통계 화면', 'Particle measurement parameters and statistics screen'),
        ],
      },
      {
        title: { ko: '대화형 객체 검토 및 히스토그램/오버레이 UI', en: 'Interactive object inspection, histogram & overlay UI' },
        description: {
          ko: '검출된 객체 선택·확대, 수동 포함/제외(Override), 탈락 사유 추적 기능과 함께 크기 분포 Histogram 및 Accepted/Rejected 오버레이 뷰를 제공합니다.',
          en: 'Provides object selection/zooming, manual inclusion/exclusion override, rejection-reason tracking, size-distribution histogram, and accepted/rejected overlay views.',
        },
        images: [
          pImg('sem-particle-analyzer', 'feature-3.png', '히스토그램 및 검출 오버레이 화면', 'Histogram and detection overlay screen'),
        ],
      },
      {
        title: { ko: '재현 가능한 프리셋 및 다중 포맷 보고서 내보내기', en: 'Reproducible presets & multi-format report export' },
        description: {
          ko: '분석 조건 Preset과 원본·ROI·Mask·Overlay 이미지, CSV, JSON 데이터 및 독립 실행 가능한 로컬 HTML 종합 분석 보고서를 저장합니다.',
          en: 'Exports analysis presets, source/ROI/mask/overlay images, CSV/JSON data, and a standalone local HTML comprehensive analysis report.',
        },
        images: [
          pImg('sem-particle-analyzer', 'feature-4.png', '분석 프리셋 및 HTML 보고서 내보내기', 'Analysis preset and HTML report export'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '.NET 10, WPF, MVVM 구조를 기반으로 이미지 로드부터 분석·검토·보고서 내보내기까지 이어지는 전체 워크플로우를 단독으로 설계하고 개발했습니다.',
        en: 'Independently designed and built the complete desktop analysis workflow from image loading and processing to review and reporting with .NET 10, WPF, and MVVM.',
      },
      {
        ko: '비동기 처리와 CancellationToken, 명시적 OpenCV 리소스 수명 관리를 적용해 대용량 이미지 반복 분석 시에도 메모리 누수와 UI 멈춤이 없는 구조를 구축했습니다.',
        en: 'Applied asynchronous processing, CancellationToken support, and explicit OpenCV memory management to ensure zero memory leaks and responsive UI during batch analysis.',
      },
      {
        ko: '형상 공식, 축척 변환, 경계 객체 판정, Watershed 분리 등 핵심 분석 기능을 합성 이미지 기반 34개 단위·분석 테스트로 100% 검증했습니다.',
        en: 'Verified geometric formulas, scale conversion, border handling, and watershed separation with 34 automated xUnit tests on synthetic test images.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '인접한 미세 입자들이 하나의 덩어리로 병합되어 개별 입자의 크기와 개수가 왜곡되는 과소 검출 문제가 있었습니다.',
          en: 'Touching microscopic particles merged into single blobs, distorting individual particle size and count statistics.',
        },
        solution: {
          ko: '거리 변환(Distance Transform)과 마커 기반 Watershed 알고리즘을 연계하고, 전처리로 CLAHE와 Morphological 연산을 조합해 경계 분리력을 강화했습니다.',
          en: 'Combined distance transforms with marker-controlled watershed segmentation and layered CLAHE with morphological operations for enhanced edge separation.',
        },
        result: {
          ko: '접촉 입자의 개별 분리율을 크게 높이고 정확한 입도 분포 측정을 가능하게 했습니다.',
          en: 'Significantly improved the separation of clustered particles and achieved accurate particle size distribution measurements.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '자동화 테스트', en: 'Automated tests' },
        value: { ko: '34 Tests Passing', en: '34 Tests Passing' },
        description: {
          ko: '형상 공식, 축척 변환, Watershed 분리 등 핵심 분석 기능에 대해 34개의 xUnit 테스트를 100% 통과했습니다.',
          en: 'Achieved 100% pass rate across 34 xUnit tests covering geometry, scale conversion, and watershed separation.',
        },
      },
      {
        label: { ko: 'SDK 독립성', en: 'SDK independence' },
        value: { ko: '100% Open Source', en: '100% Open Source' },
        description: {
          ko: '상용 유료 라이브러리 없이 OpenCvSharp와 .NET 10만으로 상용 수준의 분석 파이프라인을 구축했습니다.',
          en: 'Built a production-grade vision analysis pipeline using only OpenCvSharp and .NET 10 without commercial SDKs.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '정밀 비전 분석 프로그램에서는 영상 처리 알고리즘 구현뿐 아니라 분석 조건의 재현성(Preset/Hash)과 자동화된 단위 테스트를 통한 신뢰성 확보가 필수적임을 배웠습니다.',
        en: 'Learned that precision vision tools require not just algorithms, but condition reproducibility (presets/hashes) and automated unit testing for trustworthiness.',
      },
    ],
    limitations: [
      {
        ko: '비정형 타원이나 복잡하게 얽힌 응집체 입자의 경우 딥러닝 기반 인스턴스 세그멘테이션(Mask R-CNN 등) 결합을 통해 추가 고도화될 수 있습니다.',
        en: 'Irregular or heavily agglomerated particles can be further improved by incorporating deep learning instance segmentation models.',
      },
    ],
    nextSteps: [
      {
        ko: '배치(Batch) 일괄 이미지 분석 모드와 딥러닝 기반 불량 입자 자동 분류 기능을 추가할 계획입니다.',
        en: 'Plan to add batch multi-image analysis mode and deep-learning-based defective particle classification.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 10,
    category: 'ai',
    title: {
      ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계에 대한 실험적 분석',
      en: 'An Empirical Study on the Effectiveness and Limitations of DPO in Instruction-Tuned Language Models',
    },
    oneLiner: {
      ko: 'Instruction-Tuned 언어모델에 SFT와 DPO를 적용해 추가 정렬의 실효성과 한계를 다각도로 규명한 LLM 연구 (한국정보기술학회 금상)',
      en: 'An empirical LLM study evaluating the effectiveness and limitations of additional SFT and DPO alignment on instruction-tuned models (KIIT Gold Award).',
    },
    overview: {
      ko: '최근 공개되는 대형 언어모델은 이미 Instruction Tuning을 통해 높은 수준으로 정렬되어 있어, 이러한 모델에 추가적인 DPO를 적용하는 것이 실제 성능 향상으로 이어지는지는 명확하지 않습니다. 이를 검증하기 위해 Gemma-4-E2B-it을 기반 모델로 선정하고, 한국어 Instruction 데이터 기반 SFT와 Preference Pair 기반 DPO를 순차적으로 적용했습니다. 이후 Base, SFT, DPO 세 모델을 200개의 평가 문항에 대해 문자열 기반 자동 평가와 GPT-5-mini 기반 LLM-as-a-Judge 평가로 비교하여, 초기 모델의 정렬 수준과 Preference 데이터 품질이 DPO 효과에 미치는 영향을 실증적으로 분석했습니다.',
      en: 'Modern large language models are often released after extensive instruction tuning, making it unclear whether applying additional DPO provides meaningful gains. Gemma-4-E2B-it was used as the base model and sequentially trained with Korean SFT and preference DPO. The Base, SFT, and DPO models were evaluated on 200 samples using automatic metrics and GPT-5-mini LLM-as-a-Judge to analyze the effects of initial alignment and preference data quality.',
    },
    startDate: null,
    endDate: null,
    teamInfo: {
      ko: 'LLM 정렬(Alignment) 연구 프로젝트 · 2026 한국정보기술학회 하계대학생논문경진대회 금상 수상',
      en: 'LLM Alignment Research Project · Won Gold Prize at 2026 KIIT Summer Undergraduate Paper Competition',
    },
    contribution: {
      ko: 'Gemma-4-E2B-it 기반 SFT → DPO 순차 학습 파이프라인 구축, 4-bit QLoRA 경량 파인튜닝 환경 설계, 200문항 벤치마크 데이터셋 구축, Exact/Contains Match 자동 평가 및 GPT-5-mini 기반 LLM-as-a-Judge 다차원 평가 프레임워크 구축, 학술 논문 작성',
      en: 'Constructed sequential SFT-to-DPO pipeline on Gemma-4-E2B-it, designed 4-bit QLoRA fine-tuning, curated 200-sample benchmark, developed automatic & GPT-5-mini LLM-as-a-Judge evaluation framework, and authored the research paper.',
    },
    images: [
      pImg('dpo-llm-analysis', 'hero.png', 'DPO 연구 파이프라인 및 평가 결과 요약', 'DPO research pipeline and evaluation summary'),
    ],
    techChoices: [
      {
        name: 'Gemma-4-E2B-it & QLoRA',
        reason: {
          ko: '사전 정렬된 고성능 소형 LLM을 대상으로 4-bit 양자화와 LoRA를 적용해 단일 GPU 자원에서도 효율적인 SFT 및 DPO 정렬 학습을 수행하기 위해 선택했습니다.',
          en: 'Chosen to perform efficient SFT and DPO alignment on a pre-aligned instruction model under resource constraints using 4-bit quantization and LoRA.',
        },
      },
      {
        name: 'Direct Preference Optimization (DPO)',
        reason: {
          ko: '별도의 Reward Model 학습 없이 선호도(Prompt-Chosen-Rejected) 데이터를 직접 최적화하여 정렬 효과를 정밀하게 분석하기 위해 도입했습니다.',
          en: 'Introduced to directly optimize preference pairs without separate reward modeling and examine fine-grained alignment behavior.',
        },
      },
      {
        name: 'LLM-as-a-Judge (GPT-5-mini)',
        reason: {
          ko: '단순 문자열 매칭의 한계를 넘어 정확성, 자연스러움, 유용성, 종합 품질의 4가지 차원에서 모델 응답을 정밀하게 다면 평가하기 위해 구축했습니다.',
          en: 'Built to evaluate model responses multidimensionally across accuracy, fluency, helpfulness, and overall quality beyond simple string matching.',
        },
      },
      {
        name: '다각도 벤치마크 (MMLU / MMMLU / KLUE)',
        reason: {
          ko: '지식, 추론, 한국어 이해 및 일반 지시 이행 능력을 균형 있게 측정하기 위해 200개의 평가 데이터셋을 종합 설계했습니다.',
          en: 'Designed a 200-sample benchmark combining MMLU, MMMLU, KLUE, and open-ended instructions to balance knowledge, reasoning, and Korean comprehension.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'SFT 및 DPO 2단계 정렬 파이프라인 구축', en: 'Two-stage SFT & DPO alignment pipeline' },
        description: {
          ko: '7,000개 이상의 한국어 Instruction 데이터 기반 SFT와 약 1,200개의 Prompt-Chosen-Rejected 선호도 쌍을 활용한 DPO를 순차적으로 적용하는 학습 파이프라인을 구축했습니다.',
          en: 'Built a sequential training pipeline applying SFT on 7,000+ Korean instruction samples followed by DPO on ~1,200 prompt-chosen-rejected pairs.',
        },
        images: [
          pImg('dpo-llm-analysis', 'feature-1.png', 'SFT 및 DPO 학습 파이프라인 구성도', 'SFT and DPO training pipeline diagram'),
        ],
      },
      {
        title: { ko: '4-bit QLoRA 기반 고효율 정렬 학습 환경', en: 'High-efficiency 4-bit QLoRA training environment' },
        description: {
          ko: 'LoRA 파라미터 효율적 파인튜닝과 4-bit 양자화 및 bfloat16 정밀도를 조합해 단일 GPU 환경에서도 안정적인 대규모 언어모델 정렬 실험을 완결했습니다.',
          en: 'Combined LoRA PEFT with 4-bit quantization and bfloat16 precision to achieve stable LLM alignment experiments on a single GPU.',
        },
        images: [
          pImg('dpo-llm-analysis', 'feature-2.png', 'QLoRA 학습 하이퍼파라미터 및 손실 곡선', 'QLoRA training hyperparameters and loss curves'),
        ],
      },
      {
        title: { ko: 'LLM-as-a-Judge 및 자동 평가 프레임워크', en: 'LLM-as-a-Judge & automated evaluation framework' },
        description: {
          ko: 'Exact Match, Contains Match 등 문자열 기반 자동 평가와 함께 GPT-5-mini를 활용한 LLM-as-a-Judge로 정확성, 자연스러움, 유용성, 종합 품질을 다면 평가했습니다.',
          en: 'Combined string-based exact/contains match with GPT-5-mini LLM-as-a-Judge to evaluate accuracy, fluency, helpfulness, and overall quality.',
        },
        images: [
          pImg('dpo-llm-analysis', 'feature-3.png', 'LLM-as-a-Judge 평가 차원 및 결과 비교', 'LLM-as-a-Judge evaluation dimensions and comparison'),
        ],
      },
      {
        title: { ko: '정렬 효과와 데이터 품질 한계 실증 분석', en: 'Empirical analysis on alignment effects & data limits' },
        description: {
          ko: '이미 충분히 정렬된 모델에서는 추가 SFT/DPO가 성능 향상으로 직결되지 않으며, 선호 데이터 품질과 태스크 분포 차이가 정렬 효과를 좌우한다는 핵심 인사이트를 도출했습니다.',
          en: 'Empirically revealed that additional SFT/DPO does not guarantee gains on well-aligned models, highlighting the impact of preference quality and distribution mismatch.',
        },
        images: [
          pImg('dpo-llm-analysis', 'feature-4.png', '모델별 성능 비교 및 분포 차이 분석 그래프', 'Model performance comparison and distribution analysis'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'Gemma-4-E2B-it 기반 SFT 및 DPO 학습 파이프라인 구축과 데이터 전처리, 평가 프레임워크 구축 및 논문 작성을 전담했습니다.',
        en: 'Independently handled dataset preprocessing, SFT and DPO training pipeline development on Gemma-4-E2B-it, evaluation framework design, and paper authoring.',
      },
      {
        ko: '단순 성능 수치 측정을 넘어, 선호도 데이터 품질과 초기 정렬 수준이 DPO에 미치는 한계점을 실증적으로 밝혀 학술적 가치를 인정받아 금상을 수상했습니다.',
        en: 'Awarded Gold Prize for providing meaningful empirical insights into how initial alignment levels and preference pair quality constrain DPO effectiveness.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '이미 높은 수준으로 튜닝된 Instruction 모델에 추가 DPO를 적용했을 때, 일반 지시 수행 능력은 유지되나 특정 지식·추론 태스크에서 응답 품질이 저하되는 현상이 발생했습니다.',
          en: 'Applying additional DPO to a well-tuned instruction model retained general instruction following but caused degradation in specific knowledge and reasoning tasks.',
        },
        solution: {
          ko: 'Base, SFT, DPO 모델의 출력을 MMLU, KLUE, 생성 문항 등 문항 카테고리별로 분리하고 문자열 매칭과 LLM-as-a-Judge 결과를 교차 검증하여, 학습 데이터(대화형 지시)와 평가 데이터(지식·추론) 간의 분포 불일치 및 Chosen-Rejected 품질 격차 부족을 원인으로 규명했습니다.',
          en: 'Cross-validated string matching and LLM-as-a-Judge across MMLU, KLUE, and open-ended sets, identifying distribution mismatch and narrow chosen-rejected margins as root causes.',
        },
        result: {
          ko: 'DPO의 맹목적 적용 한계를 밝히고, 선호도 데이터 정제 기준과 도메인 맞춤형 정렬 전략의 필요성을 학술 논문으로 정립했습니다.',
          en: 'Demonstrated the boundaries of blind DPO adoption and established requirements for high-quality preference filtering and domain-tailored alignment.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '학술 경진대회 성과', en: 'Competition outcome' },
        value: { ko: '2026 KIIT 금상 수상', en: '2026 KIIT Gold Prize' },
        description: {
          ko: '2026 한국정보기술학회 하계대학생논문경진대회에서 연구 우수성을 인정받아 금상을 수상했습니다.',
          en: 'Awarded Gold Prize at the 2026 KIIT Summer Undergraduate Paper Competition for empirical research excellence.',
        },
      },
      {
        label: { ko: '평가 데이터셋', en: 'Evaluation dataset' },
        value: { ko: '200 Samples / 4 Dimensions', en: '200 Samples / 4 Dimensions' },
        description: {
          ko: 'MMLU, MMMLU, KLUE 및 생성 문항을 망라한 200문항 벤치마크와 4대 지표 평가를 완결했습니다.',
          en: 'Evaluated models across 200 benchmark questions combining MMLU, MMMLU, KLUE, and open-ended queries.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '최신 LLM 파인튜닝 및 정렬 기법에서는 무조건적인 추가 학습보다 기반 모델의 기존 정렬 수준과 데이터셋 간의 분포 정합성을 파악하는 것이 훨씬 중요하다는 점을 깊이 체득했습니다.',
        en: 'Learned that understanding base model alignment status and training-evaluation distribution alignment is far more critical than unconditionally applying additional fine-tuning.',
      },
    ],
    limitations: [
      {
        ko: '더 큰 파라미터 규모(7B 이상)의 모델과 Direct Preference Optimization 외의 KTO, ORPO, SimPO 등 최신 정렬 알고리즘과의 비교 연구로 확장될 수 있습니다.',
        en: 'Can be further extended to larger scale models (7B+) and newer preference optimization algorithms like KTO, ORPO, and SimPO.',
      },
    ],
    nextSteps: [
      {
        ko: '다양한 정렬 기법(ORPO, SimPO) 비교 및 도메인 특화 선호도 데이터셋 자동 합성 파이프라인 연구로 발전시킬 계획입니다.',
        en: 'Plan to compare ORPO/SimPO alignment methods and develop automated domain-specific preference synthetic data pipelines.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
];
