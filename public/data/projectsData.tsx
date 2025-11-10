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
    imgUrl: '/img/tech/pipet.jpg',
    title: '마이크로 피펫 분주량 자동인식을 위한 OCR 시스템 개발',
    description:
      '마이크로 피펫의 분주량을 인식하는 OCR모델을 개발하고, 원하는 분주량까지 도달하는 모터 동작 시스템을 개발했어요.',
    techs: ['python', 'pytorch', 'jetson orin nano', 'ocr'],
  },
  //   {
  // id:1,
  //     imgUrl: '',
  //     title: '컴퓨터공학전공 웹 페이지 개발',
  //     description:
  //       '금오공과대학교 컴퓨터공학전공 웹페이지 프론트엔드 개발을 담당했어요.',
  //     techs: [],
  //   },
  {
    id: 2,
    imgUrl: '/img/tech/uhdyl.png',
    title: 'UhDyL(어글리딜리셔스) : 지역기반 못난이 농산물 판매 서비스',
    description:
      '지역 사회 못난이 농산물을 합리적인 가격에 거래할 수 있게 하는 서비스에요.',
    techs: ['React Native', 'Styled-Component', 'Zustand', 'Tanstack Query'],
  },
  {
    id: 3,
    imgUrl: '/img/tech/babzip.png',
    title: 'Babzip : 개인화된 맛집 저장 플랫폼',
    description: '나만의 맛집을 저장하고 관리할 수 있는 플랫폼이에요.',
    techs: ['React', 'TypeScript', 'Module Scss', 'Zustand'],
  },
  {
    id: 4,
    imgUrl: '/img/tech/jobforeigner.png',
    title: 'JobForeigner : 외국인 구인구직 플랫폼',
    description: 'i8n을 사용한 언어친화적 외국인 구인구직 플랫폼이에요.',
    techs: ['React', 'TypeScript', 'Tanstack Query', 'Zod'],
  },
  {
    id: 5,
    imgUrl: '/img/tech/plate_picks.png',
    title: 'Plate Picks : 익명 회식메뉴 선정 시스템',
    description: '익명으로 회식메뉴를 선정할 수 있는 개인 토이프로젝트에요.',
    techs: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Ubuntu'],
  },
  {
    id: 6,
    imgUrl: '/img/tech/unsloth.png',
    title: '저속노화 데이터셋을 활용한 LLM 파인튜닝',
    description:
      '저속노화에 대한 데이터셋을 수집하여 Gemma 모델을 파인튜닝한 프로젝트에요.',
    techs: ['Unsloth', 'Python', 'Tensorflow'],
  },
  {
    id: 7,
    imgUrl: '/img/tech/cake.png',
    title: '케이크공작소 : 본인만의 취향을 공유하는 소통형 플랫폼',
    description:
      '해커톤 주제 "옴니보어"에 맞춰 본인만의 취향을 공유할 수 있는 플랫폼이에요.',
    techs: ['React', 'TypeScript', 'Styled-Component', 'React-Calendar'],
  },
  {
    id: 8,
    imgUrl: '/img/tech/joinus.png',
    title: 'JoinUs : 멋쟁이사자처럼 아기사자 트랙 유형 테스트',
    description:
      '교내 동아리 "멋쟁이사자처럼"의 홍보를 위해 제작했던 유형 테스트 페이지에요.',
    techs: ['React', 'TailwindCss'],
  },
  {
    id: 9,
    imgUrl: '/img/tech/chripaid.png',
    title: 'Chrip-aid : 투명성을 강조한 보육원 기부 플랫폼',
    description: '투명성을 강조한 보육원 기부 앱이에요.',
    techs: ['Flutter', 'Riverpod', 'mvvm'],
  },
];
