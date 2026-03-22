export interface ProjectInfo {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  techs: string[];
}

export const projectsData: ProjectInfo[] = [
  {
    id: 1,
    imgUrl: '/img/tech/geumpumta.png',
    title: '금품타 : 대학생 학습 시간 기록 & 실시간 랭킹 서비스',
    description:
      '랭킹 시스템과 고신뢰성 타이머를 갖춘 대학생 학습 동기부여 앱이에요. 양대 마켓 배포를 완료했어요.',
    techs: ['Flutter', 'Riverpod', 'MVVM', 'Dio'],
  },
  {
    id: 2,
    imgUrl: '/img/tech/pipet.jpg',
    title: '마이크로 피펫 분주량 자동 인식을 위한 OCR 시스템 개발',
    description:
      '엣지 디바이스에서 피펫 눈금을 인식하고 모터를 제어하는 랩 오토메이션 시스템이에요.',
    techs: ['Python', 'PyTorch', 'Jetson Orin Nano', 'OCR', 'TensorRT'],
  },
  {
    id: 3,
    imgUrl: '/img/tech/uhdyl.png',
    title: 'UhDyL(어글리딜리셔스) : 지역 기반 못난이 농산물 직거래 커머스',
    description:
      '지역 농가의 못난이 농산물을 합리적인 가격에 거래할 수 있는 크로스 플랫폼 모바일 마켓이에요.',
    techs: ['React Native', 'Expo', 'Styled Components', 'Zustand'],
  },
  {
    id: 4,
    imgUrl: '/img/tech/unsloth.png',
    title: '저속노화 지식 기반 LLM 파인튜닝 프로젝트',
    description:
      '저속노화 전문 데이터를 학습시켜 도메인에 특화된 질의응답 AI를 구축한 프로젝트에요.',
    techs: ['Python', 'Gemma', 'Unsloth', 'Fine-tuning'],
  },
  {
    id: 5,
    imgUrl: '/img/tech/jobforeigner.png',
    title: 'JobForeigner : 외국인 전용 다국어 구인구직 플랫폼',
    description:
      'i18n 다국어 지원과 지도 시각화를 통해 외국인 채용 장벽을 낮춘 웹 서비스에요.',
    techs: ['React', 'TypeScript', 'TanStack Query', 'i18next'],
  },
  {
    id: 6,
    imgUrl: '/img/tech/joinus.png',
    title: 'JoinUs : 동아리 트랙 추천 서비스',
    description:
      'MBTI 형식의 심리 테스트로 예비 부원에게 적합한 개발 트랙을 추천해주는 홍보 웹이에요.',
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 7,
    imgUrl: '/img/tech/chripaid.png',
    title: 'Chrip-Aid : 투명한 후원 문화를 위한 기부 플랫폼',
    description:
      '후원금 내역 공개와 실시간 소통으로 투명성을 확보한 보육원 기부 앱이에요.',
    techs: ['Flutter', 'Riverpod', 'MVVM'],
  },
  {
    id: 8,
    imgUrl: '/img/tech/babzip.png',
    title: 'Babzip : 나만의 맛집 지도 아카이브',
    description:
      '지도 위에 나만의 맛집을 기록하고 랭킹을 매겨 관리하는 개인화 서비스에요.',
    techs: ['React', 'TypeScript', 'Zustand', 'Kakao Map'],
  },
  {
    id: 9,
    imgUrl: '/img/tech/cake.png',
    title: '케이크공작소 : 옴니보어 트렌드 소셜 플랫폼',
    description:
      '케이크 메타포를 활용해 개인의 취향과 기분을 시각적으로 공유하는 SNS에요.',
    techs: ['React', 'TypeScript', 'Styled Components'],
  },
  // {
  //   id: 10,
  //   imgUrl: '/img/tech/plate_picks.png',
  //   title: 'Plate Picks : 투명한 익명 회식 메뉴 선정 시스템',
  //   description:
  //     '조직 내 공정한 메뉴 선정을 위해 익명 투표와 결과 통계를 제공하는 풀스택 웹이에요.',
  //   techs: ['React', 'NestJS', 'MySQL', 'Docker'],
  // },
];
