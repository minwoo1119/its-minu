export interface ProjectDetailInfo {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  techs: string[];
  projectOutline: string;
  do: string[];
  achievements: string[];
  startDate: Date;
  endDate: Date;
}

export const projectDetailData: ProjectDetailInfo[] = [
  {
    id: 1,
    imgUrl: '/img/tech/pipet.jpg',
    title: '마이크로 피펫 분주량 자동 인식을 위한 OCR 시스템 개발',
    description:
      '마이크로 피펫의 분주량을 자동으로 인식하는 OCR 모델과 원하는 분주량까지 도달하는 모터 제어 시스템을 개발했습니다.',
    techs: ['Python', 'PyTorch', 'Jetson Orin Nano', 'OCR', 'YOLO'],
    projectOutline:
      '실험실에서 반복적으로 수행되는 피펫 분주량 측정 과정을 자동화하기 위해 OCR 인식과 모터 제어 알고리즘을 결합한 자동 제어 시스템을 구현했습니다.',
    do: [
      'PyTorch 기반 OCR 모델 학습 및 Jetson Orin Nano 최적화',
      'TensorRT 변환으로 지연 시간(latency)을 약 50ms대로 단축',
      '카메라 입력 영상에서 피펫 눈금 영역(ROI) 추출 및 실시간 인식',
      '인식된 수치를 기반으로 DC 모터 제어 알고리즘 설계 및 테스트',
    ],
    achievements: [
      '분주량 인식 정확도 85% 이상 달성',
      'Jetson 환경에서 실시간 제어 성공',
      'AI·임베디드 융합형 자동 제어 시스템 구축',
    ],
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-12-30'),
  },
  {
    id: 2,
    imgUrl: '/img/tech/uhdyl.png',
    title: 'UhDyL(어글리 딜리셔스) : 지역 기반 못난이 농산물 거래 서비스',
    description:
      '지역 내 못난이 농산물을 합리적인 가격으로 거래할 수 있도록 돕는 모바일 서비스입니다.',
    techs: ['React Native', 'Styled Components', 'Zustand', 'TanStack Query'],
    projectOutline:
      '못난이 농산물의 유통 불균형 문제를 해결하기 위해, 생산자와 소비자를 직접 연결하는 모바일 거래 플랫폼을 개발했습니다.',
    do: [
      'React Native 기반 크로스플랫폼 앱 개발',
      'Zustand를 활용한 경량 상태 관리로 UI 성능 최적화',
      '공통 컴포넌트 분리 및 코드 구조 개선을 통한 유지보수성 향상',
      '개발 전 과정을 단독으로 수행하며 앱 전체 구조 설계 경험',
      'Ollama와 FastAPI를 이용해 멀티모달 모델 환경 세팅',
    ],
    achievements: [
      '지역 농산물 거래 활성화를 위한 MVP 완성',
      '사용자 친화적 UI·UX 설계 및 배포',
      '카카오맵을 활용한 위치 기반 인증 구현',
    ],
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-08-30'),
  },
  {
    id: 3,
    imgUrl: '/img/tech/babzip.png',
    title: 'Babzip : 개인화된 맛집 아카이브 플랫폼',
    description: '나만의 맛집을 저장하고 관리할 수 있는 웹 플랫폼입니다.',
    techs: ['React', 'TypeScript', 'Module SCSS', 'Zustand'],
    projectOutline:
      '사용자가 개인의 취향에 맞는 맛집을 기록하고 관리할 수 있도록 태그 기반 맛집 아카이브 웹 서비스를 제작했습니다.',
    do: [
      'React + TypeScript 환경에서 웹 컴포넌트 구조 설계',
      'Zustand를 활용한 상태 관리 및 즐겨찾기 기능 구현',
      '모듈형 SCSS 기반 반응형 스타일링 적용',
    ],
    achievements: [
      'Zustand로 전역 상태 관리하여 서버 부하 감소',
      '사용자별 맛집 데이터 관리 기능 완성',
      '로컬 저장소 기반 데이터 유지 기능 구현',
      '사용자 피드백 반영 후 재배포 예정',
    ],
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-07-15'),
  },
  {
    id: 4,
    imgUrl: '/img/tech/jobforeigner.png',
    title: 'JobForeigner : 다국어 기반 외국인 구인구직 플랫폼',
    description: 'i18n을 활용한 다국어 지원 외국인 취업 플랫폼입니다.',
    techs: ['React', 'TypeScript', 'TanStack Query', 'Zod'],
    projectOutline:
      '다국적 근로자를 위한 다언어 구인구직 플랫폼을 개발하여, 언어 장벽으로 인한 취업 문제를 완화하고자 했습니다.',
    do: [
      '다국어 지원(i18n) 시스템 설계 및 적용',
      '채용 공고, 기업 정보 페이지 개발 담당',
      '주변 기업 정보 제공 기능 구현',
      'UI를 직관적이고 보기 좋게 개선',
      'TanStack Query로 비동기 데이터 처리 최적화',
      'Zod를 이용한 폼 입력 유효성 검사 로직 구현',
    ],
    achievements: [
      '다국어 전환 UI 완성으로 사용자 접근성 향상',
      'API 데이터 캐싱을 통한 UX 개선',
      '한국정보기술학회 대학생 논문경진대회 논문 투고',
    ],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-11-15'),
  },
  {
    id: 5,
    imgUrl: '/img/tech/plate_picks.png',
    title: 'Plate Picks : 익명 회식 메뉴 선정 시스템',
    description:
      '익명 투표를 통해 공정하게 회식 메뉴를 결정할 수 있는 개인 토이 프로젝트입니다.',
    techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Ubuntu'],
    projectOutline:
      '사용자 간 익명 투표를 통해 회식 메뉴를 공정하게 결정할 수 있는 웹 기반 투표 시스템을 개발했습니다.',
    do: [
      'React 기반 투표 인터페이스 설계 및 결과 통계 시각화',
      'NestJS + MySQL 백엔드 구축 및 REST API 통신',
      'Ubuntu 서버 환경에서 Docker 기반 배포',
    ],
    achievements: [
      '프론트엔드·백엔드 통합형 개인 프로젝트 완성',
      '실제 서버 환경에서 배포 및 동작 검증 완료',
    ],
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-05-10'),
  },
  {
    id: 6,
    imgUrl: '/img/tech/unsloth.png',
    title: '저속노화 데이터셋을 활용한 LLM 파인튜닝',
    description:
      '저속노화 관련 데이터셋을 수집·정제하여 Gemma 모델을 파인튜닝한 프로젝트입니다.',
    techs: ['Unsloth', 'Python', 'TensorFlow'],
    projectOutline:
      '노화 데이터셋을 기반으로 대규모 언어 모델(LLM)의 건강정보 이해 능력을 개선하기 위한 파인튜닝 실험을 수행했습니다.',
    do: [
      '저속노화 관련 데이터셋 수집 및 정제',
      'Gemma 모델 파인튜닝 및 성능 검증',
      'TensorFlow 기반 학습 파이프라인 구축',
    ],
    achievements: [
      '파인튜닝 모델의 문맥 이해도 향상',
      '사용자 설문에서 파인튜닝 모델 선호도 70% 이상 확인',
      '데이터 처리 및 LLM 파인튜닝 경험 확보',
      '한국정보기술학회 대학생 논문경진대회 은상 수상',
    ],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-05-15'),
  },
  {
    id: 7,
    imgUrl: '/img/tech/cake.png',
    title: '케이크공작소 : 개인 취향 공유형 소통 플랫폼',
    description:
      '해커톤 주제 “옴니보어(Omnivore)”에 맞춰 개인의 취향을 공유할 수 있는 SNS형 플랫폼입니다.',
    techs: ['React', 'TypeScript', 'Styled Components', 'React Calendar'],
    projectOutline:
      '사용자가 자신의 취향을 공유하고 일정을 기록할 수 있는 인터랙티브 SNS형 플랫폼을 해커톤 주제로 개발했습니다.',
    do: [
      'React 기반 게시글 업로드 및 달력 UI 구현',
      'Styled Components를 활용한 감성적 UI 디자인 구성',
      'React Calendar 커스터마이징 개발 경험',
    ],
    achievements: [
      '해커톤 프로젝트 완성 및 시연 성공',
      'UI 완성도 높은 협업 프로젝트로 평가',
    ],
    startDate: new Date('2025-01-20'),
    endDate: new Date('2025-02-15'),
  },
  {
    id: 8,
    imgUrl: '/img/tech/joinus.png',
    title: 'JoinUs : 멋쟁이사자처럼 아기사자 트랙 유형 테스트',
    description:
      '교내 동아리 “멋쟁이사자처럼” 홍보를 위해 제작한 유형 테스트 웹페이지입니다.',
    techs: ['React', 'Tailwind CSS'],
    projectOutline:
      '신입 아기사자들이 본인에게 맞는 트랙(프론트엔드, 백엔드, 기획 등)을 선택할 수 있도록 제작한 MBTI형 테스트 웹페이지입니다.',
    do: [
      'React 기반 결과 페이지 및 로직 설계',
      'Tailwind CSS를 이용한 반응형 스타일링',
      '결과 공유용 메타데이터 생성 기능 구현',
    ],
    achievements: [
      '신입 회원 모집 시 홍보 콘텐츠로 활용',
      '전년 대비 지원자 수 50명 증가',
      '해당 프로젝트를 통해 웹 개발에 흥미를 가진 동아리원 다수 배출',
    ],
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-04-30'),
  },
  {
    id: 9,
    imgUrl: '/img/tech/chripaid.png',
    title: 'Chrip-Aid : 투명성을 강조한 보육원 기부 플랫폼',
    description: '후원금의 투명성을 강조한 보육원 기부 앱입니다.',
    techs: ['Flutter', 'Riverpod', 'MVVM'],
    projectOutline:
      '보육원 후원금을 투명하게 관리하기 위해, 후원 내역 공개 및 검증 기능을 갖춘 모바일 기부 앱을 개발했습니다.',
    do: [
      'Flutter 기반 MVVM 구조 리팩터링',
      '관리자 전용 기능 추가',
      'Riverpod을 이용한 상태 관리 및 비동기 데이터 처리',
      'Firebase 연동을 통한 후원 내역 기록 기능 구현',
    ],
    achievements: [
      '투명한 기부 관리 구조 설계',
      '보다 직관적인 UI 설계 및 개선',
      'Flutter 전역 상태 관리 아키텍처 실무 적용',
      'KCI 논문 투고',
    ],
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-15'),
  },
];
