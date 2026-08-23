import type { LocalizedText } from '../../src/i18n';

export type ProjectCategory = 'featuredVision' | 'other' | 'research';

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
    category: 'featuredVision',
    imgUrl: '/img/tech/pipet.jpg',
    title: {
      ko: 'Micro-pipette Detection & Hybrid OCR System',
      en: 'Micro-pipette Detection & Hybrid OCR System',
    },
    description: {
      ko: 'YOLO와 Custom CNN, PaddleOCR을 결합하고 TensorRT 최적화로 300ms 추론을 80ms까지 단축한 마이크로피펫 객체 탐지 및 OCR 시스템입니다.',
      en: 'A micro-pipette detection and OCR system combining YOLO, custom CNN, PaddleOCR, and TensorRT optimization that reduced inference latency from 300ms to 80ms.',
    },
    techs: [
      'YOLO & Custom CNN',
      'TensorRT',
      'ONNX Runtime',
      'PaddleOCR / CTC',
      'C++ / CUDA',
    ],
  },
  {
    id: 2,
    category: 'featuredVision',
    imgUrl: '/img/tech/plate_picks.png',
    title: {
      ko: 'SEM Particle Analyzer',
      en: 'SEM Particle Analyzer',
    },
    description: {
      ko: 'OpenCvSharp 기반 SEM 미세입자 자동 검출, Watershed 접촉 입자 분리, Calibration 기반 형상 정량 분석을 제공하는 WPF 데스크톱 솔루션입니다.',
      en: 'A WPF desktop solution for SEM particle detection, watershed-based touching-particle separation, and calibrated quantitative shape analysis using OpenCvSharp.',
    },
    techs: [
      'OpenCvSharp / OpenCV',
      'C# .NET 8 WPF',
      'Distance Transform & Watershed',
      'Calibration',
      'xUnit',
    ],
  },
  {
    id: 3,
    category: 'featuredVision',
    imgUrl: '/img/tech/cake.png',
    title: {
      ko: 'Video-based 7-Segment OCR System',
      en: 'Video-based 7-Segment OCR System',
    },
    description: {
      ko: 'LightSVTR와 ONNX Runtime을 WPF에 통합하고 ROI 프레임 처리와 시간축 보정으로 LED 플리커 및 조명 변화 오인식을 줄인 영상 OCR 애플리케이션입니다.',
      en: 'A video OCR application integrating LightSVTR and ONNX Runtime with ROI frame processing and time-series calibration to reduce LED flicker and lighting-related misreads.',
    },
    techs: [
      'LightSVTR',
      'ONNX Runtime',
      'OpenCvSharp',
      'Time-Series Calibration',
      'Clean Architecture',
    ],
  },
  {
    id: 4,
    category: 'featuredVision',
    imgUrl: '/img/tech/jobforeigner.png',
    title: {
      ko: 'Q-Log Analyzer & Vision System Utilities',
      en: 'Q-Log Analyzer & Vision System Utilities',
    },
    description: {
      ko: '정규표현식 파싱과 IQR 이상치 필터링으로 비전 장비 로그를 분석하고, C++ MFC 기반 카메라/ROI 제어 모듈을 개발·유지보수한 프로젝트입니다.',
      en: 'A tooling project for vision-equipment log analysis using regex parsing and IQR filtering, plus C++ MFC camera and ROI control utilities.',
    },
    techs: [
      'C# WPF',
      'Regex Parsing',
      'IQR Filtering',
      'C++ MFC',
      'Data Visualization',
    ],
  },
  {
    id: 5,
    category: 'research',
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: 'LLM Alignment Research',
      en: 'LLM Alignment Research',
    },
    description: {
      ko: 'Gemma 기반 SFT/DPO 및 QLoRA 경량 Fine-tuning을 실험하고 DPO의 효과와 한계를 분석해 KIIT 금상과 은상을 수상한 연구입니다.',
      en: 'Research on Gemma-based SFT/DPO and QLoRA fine-tuning that analyzed DPO limitations and won KIIT Gold and Silver awards.',
    },
    techs: [
      'Gemma',
      'SFT / DPO',
      'QLoRA',
      'LLM-as-a-Judge',
      'KIIT Awards',
    ],
  },
  {
    id: 6,
    category: 'other',
    imgUrl: '/img/tech/jobtalk.png',
    title: {
      ko: 'JobTalk',
      en: 'JobTalk',
    },
    description: {
      ko: 'React/TypeScript, FastAPI, Ollama 기반 다국어 구직 플랫폼으로 비전 솔루션을 확장할 수 있는 풀스택 기반 역량을 보여주는 프로젝트입니다.',
      en: 'A multilingual job platform built with React/TypeScript, FastAPI, and Ollama, showing the full-stack base that can extend vision solutions.',
    },
    techs: ['React', 'TypeScript', 'FastAPI', 'Ollama', 'i18n'],
  },
  {
    id: 7,
    category: 'other',
    imgUrl: '/img/tech/geumpumta.png',
    title: {
      ko: 'Geumpumta',
      en: 'Geumpumta',
    },
    description: {
      ko: 'Flutter 기반 학습 시간 측정 및 랭킹 모바일 앱으로 App Store와 Google Play에 배포한 제품형 모바일 프로젝트입니다.',
      en: 'A Flutter study-time tracking and ranking mobile app released on both the App Store and Google Play.',
    },
    techs: ['Flutter', 'Riverpod', 'MVVM', 'App Store', 'Google Play'],
  },
  {
    id: 8,
    category: 'research',
    imgUrl: '/img/tech/unsloth.png',
    title: {
      ko: 'Research & Awards',
      en: 'Research & Awards',
    },
    description: {
      ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계를 분석한 논문으로 2026 KIIT 금상, 2025 KIIT 은상을 수상했고 LG Aimers AI 과정을 수료했습니다.',
      en: 'Published research on DPO effectiveness and limitations in instruction-tuned language models, winning KIIT Gold and Silver awards and completing LG Aimers AI training.',
    },
    techs: ['KIIT Gold 2026', 'KIIT Silver 2025', 'LG Aimers', 'DPO', 'QLoRA'],
  },
];
