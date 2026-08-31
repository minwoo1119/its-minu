import type { LocalizedText } from '../i18n';

export interface AwardItem {
  id: string;
  badge: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  organization: LocalizedText;
  date: string;
  description: LocalizedText;
  tags: string[];
}

export const awardsData: AwardItem[] = [
  {
    id: 'kiit-gold-2026',
    badge: {
      ko: '학술대회 금상',
      en: 'Gold Award',
    },
    title: {
      ko: '2026 한국정보기술학회(KIIT) 하계 학술대회 금상',
      en: '2026 KIIT Summer Conference Gold Award (Best Paper)',
    },
    subtitle: {
      ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계에 대한 실험적 분석',
      en: 'An Empirical Study on the Effectiveness and Limitations of DPO in Instruction-Tuned Language Models',
    },
    organization: {
      ko: '한국정보기술학회 (KIIT)',
      en: 'Korean Institute of Information Technology',
    },
    date: '2026',
    description: {
      ko: '대형 언어모델(Gemma)에 SFT와 DPO를 순차 적용하고 선호도 정렬의 일반화 한계를 정량 분석하여 학술적 가치를 인정받아 금상(우수논문상)을 수상했습니다.',
      en: 'Awarded the Best Paper Gold Prize for empirically analyzing sequential SFT and DPO preference alignment on Gemma LLMs.',
    },
    tags: ['KIIT Gold', 'LLM Alignment', 'DPO', 'SFT', 'LLM-as-a-Judge'],
  },
  {
    id: 'kiit-silver-2025',
    badge: {
      ko: '학술대회 은상',
      en: 'Silver Award',
    },
    title: {
      ko: '2025 한국정보기술학회(KIIT) 추계 학술대회 은상',
      en: '2025 KIIT Fall Conference Silver Award',
    },
    subtitle: {
      ko: '저속노화 도메인 특화 데이터셋 구축 및 경량 LLM 파인튜닝 연구',
      en: 'Domain-specific Dataset Engineering and Lightweight LLM Fine-Tuning for Slow-Aging Knowledge',
    },
    organization: {
      ko: '한국정보기술학회 (KIIT)',
      en: 'Korean Institute of Information Technology',
    },
    date: '2025',
    description: {
      ko: '비정형 의료/건강 문헌을 정제하여 도메인 특화 JSONL 데이터셋을 구축하고 Unsloth LoRA로 경량 파인튜닝한 연구로 은상을 수상했습니다.',
      en: 'Awarded the Silver Prize for domain dataset preprocessing and parameter-efficient fine-tuning with Unsloth LoRA.',
    },
    tags: ['KIIT Silver', 'Gemma', 'Unsloth', 'LoRA', 'Dataset Pipeline'],
  },
  {
    id: 'kci-journal-paper',
    badge: {
      ko: 'KCI 등재 논문',
      en: 'KCI Journal',
    },
    title: {
      ko: 'KCI 등재 학술지 논문 게재',
      en: 'Published in KCI-Indexed Academic Journal',
    },
    subtitle: {
      ko: '모바일 기부 플랫폼의 투명성 향상을 위한 아키텍처 및 소통 시스템 연구',
      en: 'A Study on Architecture and Communication Systems for Transparency in Mobile Donation Platforms',
    },
    organization: {
      ko: '한국정보기술학회논문지 (KCI 등재지)',
      en: 'Journal of Korean Institute of Information Technology (KCI Indexed)',
    },
    date: '2025',
    description: {
      ko: '보육원 기부 내역의 투명한 공개와 실시간 소통을 결합한 모바일 애플리케이션 구조 및 신뢰성 개선 효과를 검증한 연구 논문이 등재 학술지에 게재되었습니다.',
      en: 'Published research in a KCI-indexed journal verifying mobile architectures that improve donor transparency and real-time community trust.',
    },
    tags: ['KCI Indexed', 'Flutter', 'Mobile Architecture', 'Donation Transparency'],
  },
  {
    id: 'lg-aimers',
    badge: {
      ko: '전문가 과정 수료',
      en: 'Certification',
    },
    title: {
      ko: 'LG Aimers AI 전문가 과정 수료',
      en: 'LG Aimers AI Intensive Certificate',
    },
    subtitle: {
      ko: '산업용 AI/머신러닝 문제 해결 및 고급 모델링 실무 교육',
      en: 'Industrial AI/ML Problem Solving and Advanced Modeling',
    },
    organization: {
      ko: 'LG AI Research',
      en: 'LG AI Research',
    },
    date: '2024 - 2025',
    description: {
      ko: '국내 최고 수준의 AI 연구진이 진행하는 머신러닝, 딥러닝, 최적화 이론 및 산업 현장 데이터 분석 해커톤 과정을 수료했습니다.',
      en: 'Completed comprehensive AI intensive program covering ML/DL theory, computer vision optimization, and industrial hackathons.',
    },
    tags: ['LG Aimers', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
  },
];
