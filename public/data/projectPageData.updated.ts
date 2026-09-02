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
  ko: '관련 자료는 포트폴리오 공개 범위에 맞춰 정리 중입니다.',
  en: 'Related materials are being organized for the portfolio release scope.',
};

const image = (imageUrl: string, ko: string, en: string): ProjectImage => ({
  imageUrl,
  caption: { ko, en },
});

export const projectPageData: ProjectPageInfo[] = [
  {
    id: 1,
    category: 'featuredVision',
    title: {
      ko: 'Micro-pipette Detection & Hybrid OCR System',
      en: 'Micro-pipette Detection & Hybrid OCR System',
    },
    oneLiner: {
      ko: 'YOLO, Custom CNN, PaddleOCR, TensorRT를 결합한 마이크로피펫 객체 탐지 및 OCR 시스템',
      en: 'A micro-pipette detection and OCR system combining YOLO, custom CNN, PaddleOCR, and TensorRT.',
    },
    overview: {
      ko: '마이크로피펫 객체 탐지와 분주량 OCR을 위해 데이터 수집, 모델 학습, ONNX 변환, TensorRT FP16/INT8 엔진 변환까지 전체 파이프라인을 수행했습니다. TensorRT 최적화를 통해 추론 지연 시간을 300ms에서 80ms로 줄여 실시간 처리 가능성을 확보했습니다.',
      en: 'Built the full pipeline for micro-pipette object detection and dispensing-value OCR, from data collection and training to ONNX conversion and TensorRT FP16/INT8 engine generation. TensorRT optimization reduced inference latency from 300ms to 80ms for real-time use.',
    },
    startDate: new Date('2025-05-01'),
    endDate: new Date('2026-02-28'),
    teamInfo: { ko: 'AI & Vision Engineer', en: 'AI & Vision Engineer' },
    contribution: {
      ko: 'YOLO 객체 탐지, Custom CNN OCR, PaddleOCR/CTC 후처리, ONNX Runtime 및 TensorRT 최적화 파이프라인을 담당했습니다.',
      en: 'Owned YOLO detection, custom CNN OCR, PaddleOCR/CTC post-processing, and the ONNX Runtime/TensorRT optimization pipeline.',
    },
    images: [
      image('/img/tech/pipet.jpg', '마이크로피펫 비전 OCR 대표 이미지', 'Micro-pipette vision OCR representative image'),
    ],
    techChoices: [
      {
        name: 'YOLO & Custom CNN',
        reason: {
          ko: '피펫 표시부 위치를 먼저 검출하고, 숫자 인식은 데이터 특성에 맞춘 경량 CNN으로 처리하기 위해 선택했습니다.',
          en: 'Used YOLO for locating the display area and a lightweight custom CNN for OCR tuned to the digit domain.',
        },
      },
      {
        name: 'TensorRT',
        reason: {
          ko: '엣지 환경에서 실시간 처리에 필요한 latency를 확보하기 위해 FP16/INT8 엔진 최적화를 적용했습니다.',
          en: 'Applied FP16/INT8 engine optimization to meet real-time latency requirements on edge hardware.',
        },
      },
      {
        name: 'ONNX Runtime',
        reason: {
          ko: '학습 프레임워크와 제품 애플리케이션 사이의 추론 인터페이스를 안정적으로 분리하기 위해 사용했습니다.',
          en: 'Used as a stable inference boundary between training frameworks and product applications.',
        },
      },
      {
        name: 'PaddleOCR / CTC Decoding',
        reason: {
          ko: 'Custom OCR의 취약 케이스를 보완하고 sequence 출력 후처리를 직접 제어하기 위해 도입했습니다.',
          en: 'Introduced to cover weak cases from custom OCR and directly control sequence post-processing.',
        },
      },
      {
        name: 'C++ / CUDA',
        reason: {
          ko: '고성능 추론 및 전처리 최적화 가능성을 고려해 제품화 단계의 실행 환경으로 설계했습니다.',
          en: 'Selected for product-stage runtime performance and preprocessing optimization.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '객체 탐지와 OCR 하이브리드 파이프라인', en: 'Hybrid detection and OCR pipeline' },
        description: {
          ko: 'YOLO로 마이크로피펫 표시부를 검출한 뒤 Custom CNN과 PaddleOCR을 조합해 숫자 인식 안정성을 높였습니다.',
          en: 'Detected the display area with YOLO, then combined custom CNN OCR with PaddleOCR to improve recognition robustness.',
        },
        images: [],
      },
      {
        title: { ko: 'ONNX 및 TensorRT 변환 자동화', en: 'ONNX and TensorRT conversion workflow' },
        description: {
          ko: '학습 모델을 ONNX로 내보내고 TensorRT FP16/INT8 엔진으로 변환하는 배포 파이프라인을 구성했습니다.',
          en: 'Built a deployment workflow that exports trained models to ONNX and converts them into TensorRT FP16/INT8 engines.',
        },
        images: [],
      },
    ],
    roleDetails: [
      {
        ko: '데이터 수집부터 모델 학습, 추론 엔진 변환, latency 측정까지 AI 비전 파이프라인 전 과정을 수행했습니다.',
        en: 'Handled the full AI vision pipeline from data collection and training to inference-engine conversion and latency measurement.',
      },
      {
        ko: '실시간 처리 요구에 맞춰 정확도뿐 아니라 추론 속도와 배포 구조를 함께 최적화했습니다.',
        en: 'Optimized not only accuracy but also inference speed and deployment structure for real-time requirements.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '초기 모델은 평균 300ms 수준의 추론 지연으로 실시간 제어 루프에 적용하기 어려웠습니다.',
          en: 'The initial model had around 300ms inference latency, making it hard to use in a real-time control loop.',
        },
        solution: {
          ko: 'ONNX 변환 후 TensorRT FP16/INT8 엔진을 구성하고 입력 전처리와 후처리 흐름을 정리했습니다.',
          en: 'Converted the model to ONNX, built TensorRT FP16/INT8 engines, and streamlined preprocessing and post-processing.',
        },
        result: {
          ko: '추론 지연 시간을 300ms에서 80ms로 73% 줄여 실시간 처리 기반을 확보했습니다.',
          en: 'Reduced inference latency by 73%, from 300ms to 80ms, enabling a real-time processing path.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: 'Latency 개선', en: 'Latency reduction' },
        value: { ko: '300ms → 80ms', en: '300ms → 80ms' },
        description: {
          ko: 'TensorRT 최적화로 실시간 추론 가능성을 확보했습니다.',
          en: 'TensorRT optimization made real-time inference practical.',
        },
      },
      {
        label: { ko: '역할', en: 'Role' },
        value: { ko: 'AI & Vision Engineer', en: 'AI & Vision Engineer' },
        description: {
          ko: '탐지, OCR, 최적화, 배포 변환을 end-to-end로 수행했습니다.',
          en: 'Owned detection, OCR, optimization, and deployment conversion end to end.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '비전 AI 모델은 정확도와 함께 전처리, 후처리, 런타임 최적화가 하나의 제품 성능을 결정한다는 점을 체득했습니다.',
        en: 'Learned that product-grade vision AI depends on preprocessing, post-processing, and runtime optimization as much as model accuracy.',
      },
    ],
    limitations: [
      {
        ko: '조명, 피펫 모델, 카메라 배치가 다양해질수록 추가 데이터와 도메인 보정이 필요합니다.',
        en: 'More lighting conditions, pipette models, and camera positions require additional data and domain calibration.',
      },
    ],
    nextSteps: [
      {
        ko: '다양한 장비 조건을 반영한 데이터셋 확장과 자동 calibration 흐름을 고도화할 계획입니다.',
        en: 'Plan to expand datasets for more equipment conditions and improve automatic calibration.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
      { label: { ko: '기술 문서', en: 'Technical Notes' }, note: noDocYetNote },
    ],
  },
  {
    id: 2,
    category: 'featuredVision',
    title: { ko: 'SEM Particle Analyzer', en: 'SEM Particle Analyzer' },
    oneLiner: {
      ko: 'SEM 미세입자 검출, 분리, 형상 정량 분석을 수행하는 C# WPF 비전 분석 솔루션',
      en: 'A C# WPF vision analysis solution for SEM particle detection, separation, and quantitative shape analysis.',
    },
    overview: {
      ko: 'OpenCvSharp 기반으로 SEM 이미지의 미세입자를 자동 검출하고, CLAHE, adaptive threshold, Distance Transform, Watershed를 조합해 접촉 입자를 분리했습니다. 픽셀-실길이 Calibration을 통해 면적, 둘레, Feret 직경, Circularity 등 형상 지표를 산출하고 34개 단위 테스트로 검증했습니다.',
      en: 'Built an OpenCvSharp-based desktop application that detects SEM particles and separates touching particles using CLAHE, adaptive thresholding, distance transform, and watershed. It computes calibrated metrics such as area, perimeter, Feret diameter, and circularity, verified with 34 unit tests.',
    },
    startDate: new Date('2026-07-24'),
    endDate: new Date('2026-08-09'),
    teamInfo: { ko: 'Vision Software Developer', en: 'Vision Software Developer' },
    contribution: {
      ko: 'WPF MVVM 구조, 비동기 분석 파이프라인, OpenCV Mat 자원 해제, Nullable 예외 처리, 단위 테스트를 담당했습니다.',
      en: 'Owned WPF MVVM architecture, async analysis pipelines, OpenCV Mat resource disposal, nullable exception handling, and unit tests.',
    },
    images: [
      image('/img/tech/plate_picks.png', 'SEM 미세입자 정량 분석 대표 이미지', 'SEM particle analysis representative image'),
    ],
    techChoices: [
      {
        name: 'OpenCvSharp / OpenCV',
        reason: {
          ko: '상용 비전 SDK 없이 정밀 이미지 처리 파이프라인을 C# 데스크톱 환경에 직접 탑재하기 위해 선택했습니다.',
          en: 'Chosen to implement precise image-processing pipelines directly in a C# desktop app without a commercial vision SDK.',
        },
      },
      {
        name: 'C# .NET 8 WPF (MVVM)',
        reason: {
          ko: '분석 설정, 결과 테이블, 오버레이, 비동기 작업 상태를 유지보수 가능한 데스크톱 구조로 분리하기 위해 적용했습니다.',
          en: 'Applied to separate analysis settings, result tables, overlays, and async task state in a maintainable desktop architecture.',
        },
      },
      {
        name: 'Distance Transform & Watershed',
        reason: {
          ko: '서로 붙어 있는 미세입자를 분리하고 개별 객체의 형상 지표를 안정적으로 산출하기 위해 사용했습니다.',
          en: 'Used to separate touching particles and compute per-object shape metrics reliably.',
        },
      },
      {
        name: 'Quantitative Analysis',
        reason: {
          ko: '픽셀 측정값을 실제 길이 단위로 변환해 분석 결과를 검사/연구 지표로 활용하기 위해 구현했습니다.',
          en: 'Implemented to convert pixel measurements into real-world units for inspection and research metrics.',
        },
      },
      {
        name: 'xUnit',
        reason: {
          ko: '형상 공식, calibration, watershed 분리, nullable 예외 처리를 합성 이미지 기반 테스트로 검증했습니다.',
          en: 'Used to verify geometry formulas, calibration, watershed separation, and nullable edge cases with synthetic images.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '접촉 입자 분리 파이프라인', en: 'Touching-particle separation pipeline' },
        description: {
          ko: 'CLAHE와 adaptive threshold로 대비와 이진화를 안정화하고, Distance Transform과 Watershed로 붙어 있는 입자를 개별 객체로 분리했습니다.',
          en: 'Stabilized contrast and binarization with CLAHE and adaptive thresholding, then separated touching particles with distance transform and watershed.',
        },
        images: [],
      },
      {
        title: { ko: 'Calibration 기반 형상 정량 분석', en: 'Calibration-based quantitative shape analysis' },
        description: {
          ko: '면적, 둘레, Feret 직경, Circularity 등 객체별 지표를 산출하고 pixel-to-real-length 보정을 적용했습니다.',
          en: 'Computed object-level metrics such as area, perimeter, Feret diameter, and circularity with pixel-to-real-length calibration.',
        },
        images: [],
      },
    ],
    roleDetails: [
      {
        ko: '비전 알고리즘과 WPF UI, 비동기 작업, OpenCV 리소스 수명 관리를 하나의 분석 애플리케이션으로 통합했습니다.',
        en: 'Integrated vision algorithms, WPF UI, async work, and OpenCV resource lifecycle management into one analysis application.',
      },
      {
        ko: '34개 단위 테스트로 핵심 분석 로직과 예외 케이스를 검증했습니다.',
        en: 'Verified core analysis logic and edge cases with 34 unit tests.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '입자가 접촉하거나 배경 대비가 낮으면 단순 threshold만으로는 객체가 하나로 병합되는 문제가 있었습니다.',
          en: 'When particles touched or background contrast was low, simple thresholding merged multiple objects into one.',
        },
        solution: {
          ko: 'CLAHE, morphology, Distance Transform, Watershed를 단계적으로 결합하고 파라미터를 분석 설정으로 분리했습니다.',
          en: 'Combined CLAHE, morphology, distance transform, and watershed step by step, separating parameters into analysis settings.',
        },
        result: {
          ko: '접촉 입자 분리와 반복 분석 재현성을 함께 개선했습니다.',
          en: 'Improved touching-particle separation and repeat-analysis reproducibility.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '검증', en: 'Validation' },
        value: { ko: '34 Unit Tests', en: '34 Unit Tests' },
        description: {
          ko: '분석 공식, calibration, watershed, nullable 예외 처리를 테스트로 검증했습니다.',
          en: 'Validated formulas, calibration, watershed behavior, and nullable exceptions through tests.',
        },
      },
      {
        label: { ko: '아키텍처', en: 'Architecture' },
        value: { ko: 'WPF MVVM + Async Pipeline', en: 'WPF MVVM + Async Pipeline' },
        description: {
          ko: 'UI 응답성과 OpenCV 자원 안정성을 고려한 데스크톱 구조를 설계했습니다.',
          en: 'Designed a desktop structure around UI responsiveness and OpenCV resource stability.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '정량 분석 소프트웨어는 알고리즘 성능뿐 아니라 보정, 예외 처리, 검증 가능성이 신뢰도를 결정한다는 점을 배웠습니다.',
        en: 'Learned that quantitative analysis software relies on calibration, exception handling, and verifiability as much as algorithm quality.',
      },
    ],
    limitations: [
      {
        ko: '입자 재질과 촬영 조건이 더 다양해지면 threshold 및 segmentation preset 관리가 필요합니다.',
        en: 'More material and imaging variations will require stronger threshold and segmentation preset management.',
      },
    ],
    nextSteps: [
      {
        ko: '분석 preset 추천, 배치 처리, 보고서 자동화를 확장할 계획입니다.',
        en: 'Plan to expand preset recommendation, batch processing, and report automation.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 3,
    category: 'featuredVision',
    title: {
      ko: 'Video-based 7-Segment OCR System',
      en: 'Video-based 7-Segment OCR System',
    },
    oneLiner: {
      ko: 'LightSVTR와 ONNX Runtime을 활용한 영상 기반 계기판 OCR 애플리케이션',
      en: 'A video-based instrument-panel OCR application using LightSVTR and ONNX Runtime.',
    },
    overview: {
      ko: '영상에서 사용자가 지정한 ROI를 일정 간격으로 추출하고 LightSVTR 모델을 ONNX Runtime으로 실행해 7-Segment 숫자를 인식했습니다. CTC Greedy Decoding을 직접 구현하고, 인접 프레임 재분석 기반 시간축 이상치 보정으로 LED 플리커 및 조명 변화에 따른 오인식을 줄였습니다.',
      en: 'Extracted user-defined ROI frames from video at intervals and recognized seven-segment digits by running LightSVTR through ONNX Runtime. Implemented CTC greedy decoding and a neighboring-frame recalibration algorithm to reduce misreads from LED flicker and lighting changes.',
    },
    startDate: new Date('2026-08-01'),
    endDate: null,
    teamInfo: { ko: 'Vision & AI Developer', en: 'Vision & AI Developer' },
    contribution: {
      ko: 'LightSVTR 모델 연동, ONNX Runtime 추론, ROI 영상 프레임 처리, CTC 후처리, Clean Architecture 및 Factory 패턴 설계를 담당했습니다.',
      en: 'Owned LightSVTR integration, ONNX Runtime inference, ROI frame processing, CTC post-processing, Clean Architecture, and factory-pattern design.',
    },
    images: [
      image('/img/tech/cake.png', '영상 기반 7-Segment OCR 대표 이미지', 'Video-based seven-segment OCR representative image'),
    ],
    techChoices: [
      {
        name: 'LightSVTR',
        reason: {
          ko: '7-Segment 숫자와 같은 제한된 문자 영역에서 경량 OCR 추론을 수행하기 위해 선택했습니다.',
          en: 'Chosen for lightweight OCR inference on constrained seven-segment digit domains.',
        },
      },
      {
        name: 'ONNX Runtime',
        reason: {
          ko: 'Python 서버 없이 C# 데스크톱 애플리케이션 내부에서 모델 추론을 완결하기 위해 사용했습니다.',
          en: 'Used to run inference fully inside the C# desktop application without a Python server.',
        },
      },
      {
        name: 'OpenCvSharp',
        reason: {
          ko: '영상 로드, ROI 지정, 프레임 샘플링, 전처리 파이프라인을 WPF와 통합하기 위해 적용했습니다.',
          en: 'Applied for video loading, ROI selection, frame sampling, and preprocessing inside WPF.',
        },
      },
      {
        name: 'Time-Series Calibration',
        reason: {
          ko: '단일 프레임 오인식을 인접 프레임 맥락으로 보정해 결과 안정성을 높이기 위해 설계했습니다.',
          en: 'Designed to correct single-frame misreads using neighboring-frame context.',
        },
      },
      {
        name: 'Clean Architecture',
        reason: {
          ko: 'Domain, Application, Infrastructure, UI 계층을 분리해 모델 교체와 테스트 가능성을 높였습니다.',
          en: 'Separated Domain, Application, Infrastructure, and UI layers for model replacement and testability.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'ROI 기반 영상 프레임 OCR', en: 'ROI-based video frame OCR' },
        description: {
          ko: '사용자가 지정한 ROI를 기준으로 영상 프레임을 샘플링하고 LightSVTR 입력 형식에 맞춰 전처리했습니다.',
          en: 'Sampled video frames from a user-defined ROI and preprocessed them for LightSVTR input.',
        },
        images: [],
      },
      {
        title: { ko: '시간축 이상치 보정', en: 'Time-series outlier calibration' },
        description: {
          ko: '인접 프레임 재분석을 통해 LED 플리커, 조명 변화, 순간 블러로 발생하는 비정상 OCR 값을 보정했습니다.',
          en: 'Corrected abnormal OCR values caused by LED flicker, lighting changes, or transient blur using neighboring-frame reanalysis.',
        },
        images: [],
      },
    ],
    roleDetails: [
      {
        ko: '모델 추론과 영상 처리, 후처리 보정, WPF 애플리케이션 구조를 함께 설계했습니다.',
        en: 'Designed model inference, video processing, post-processing calibration, and WPF application structure together.',
      },
      {
        ko: '모델 파일과 전처리 메타데이터를 분리해 향후 OCR 모델 교체가 가능한 구조를 만들었습니다.',
        en: 'Separated model files and preprocessing metadata to support future OCR model replacement.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: 'LED 플리커와 조명 변화로 특정 프레임에서 숫자가 순간적으로 잘못 인식되는 문제가 있었습니다.',
          en: 'LED flicker and lighting changes caused transient wrong predictions on specific frames.',
        },
        solution: {
          ko: '인접 프레임을 재분석하고 시간축 변화량을 기준으로 이상치를 보정하는 알고리즘을 구현했습니다.',
          en: 'Implemented an algorithm that reanalyzes neighboring frames and corrects outliers based on time-series changes.',
        },
        result: {
          ko: '단일 프레임 오인식이 최종 계측 결과에 반영되는 빈도를 줄였습니다.',
          en: 'Reduced the chance that single-frame OCR errors affect final measurement results.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '구조', en: 'Structure' },
        value: { ko: 'Clean Architecture', en: 'Clean Architecture' },
        description: {
          ko: '모델 교체형 Factory 패턴과 계층 분리 구조를 적용했습니다.',
          en: 'Applied replaceable model factories and layered architecture.',
        },
      },
      {
        label: { ko: '후처리', en: 'Post-processing' },
        value: { ko: 'CTC Greedy Decoding', en: 'CTC Greedy Decoding' },
        description: {
          ko: 'OCR sequence 출력을 애플리케이션 내부에서 직접 디코딩했습니다.',
          en: 'Decoded OCR sequence outputs directly inside the application.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '영상 OCR은 단일 프레임 정확도보다 시간축 안정성과 도메인 후처리가 실제 사용성을 크게 좌우한다는 점을 배웠습니다.',
        en: 'Learned that video OCR usability depends heavily on time-series stability and domain post-processing, not only single-frame accuracy.',
      },
    ],
    limitations: [
      {
        ko: '다양한 계기판 폰트와 촬영 각도에 대응하려면 추가 데이터와 augmentation이 필요합니다.',
        en: 'More instrument fonts and camera angles require additional data and augmentation.',
      },
    ],
    nextSteps: [
      {
        ko: '계기판 종류별 preset, batch video 분석, 결과 리포트 자동화를 확장할 계획입니다.',
        en: 'Plan to add instrument presets, batch video analysis, and report automation.',
      },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 4,
    category: 'featuredVision',
    title: {
      ko: 'Q-Log Analyzer & Vision System Utilities',
      en: 'Q-Log Analyzer & Vision System Utilities',
    },
    oneLiner: {
      ko: '정규표현식과 IQR 필터링을 활용한 비전 장비 로그 분석 및 엑셀 리포트 생성 유틸리티',
      en: 'Vision equipment log analytics and Excel report generation utility using regex and IQR filtering.',
    },
    overview: {
      ko: '정규표현식 파싱과 IQR 이상치 제거를 활용해 장비 수율, 불량 패턴, 알고리즘 처리 시간을 분석하고 결과를 엑셀로 내보내는 C# WPF 도구를 개발했습니다.',
      en: 'Developed a C# WPF tool that analyzes equipment yield, defect patterns, and algorithm processing time through regex parsing and IQR outlier filtering, and exports structured reports to Excel.',
    },
    startDate: new Date('2026-07-01'),
    endDate: new Date('2026-08-31'),
    teamInfo: { ko: 'Vision SW Researcher', en: 'Vision SW Researcher' },
    contribution: {
      ko: '로그 파서, 통계 필터링, 데이터 시각화, 이상치 분석 및 엑셀 데이터 내보내기/리포팅을 담당했습니다.',
      en: 'Owned log parsing, statistical filtering, visualization, outlier analysis, and Excel export/reporting.',
    },
    images: [
      image('/img/tech/qlog_dashboard.png', 'Q-Log Analyzer 대시보드', 'Q-Log Analyzer dashboard view'),
    ],
    techChoices: [
      {
        name: 'C# WPF (MVVM)',
        reason: {
          ko: '로그 파일 로드, 파싱 결과, 통계 필터, 시각화를 데스크톱 분석 워크플로우로 구성하기 위해 사용했습니다.',
          en: 'Used to build a desktop analysis workflow for log loading, parsed results, statistical filters, and visualization.',
        },
      },
      {
        name: 'Regex Parsing',
        reason: {
          ko: '장비 로그에서 수율, 불량, 처리 시간 등 핵심 필드를 안정적으로 추출하기 위해 적용했습니다.',
          en: 'Applied to extract yield, defect, and processing-time fields from equipment logs reliably.',
        },
      },
      {
        name: 'IQR Statistical Filtering',
        reason: {
          ko: '알고리즘 처리 시간과 장비 로그 데이터에서 극단값을 제거하고 경향을 분석하기 위해 사용했습니다.',
          en: 'Used to remove outliers and analyze trends in algorithm processing time and equipment data.',
        },
      },
      {
        name: 'Excel Export Engine',
        reason: {
          ko: '파싱된 통계 지표와 이상치 분석 데이터를 현장 엔지니어가 보고서 작성 및 2차 분석에 즉시 활용할 수 있도록 엑셀 내보내기 기능을 구현했습니다.',
          en: 'Implemented Excel export functionality so field engineers can immediately utilize parsed metrics and outlier analysis for reports and secondary analysis.',
        },
      },
      {
        name: 'Data Visualization',
        reason: {
          ko: '수율, 불량 패턴, 처리 시간 분포를 빠르게 판단할 수 있도록 시각화했습니다.',
          en: 'Visualized yield, defect patterns, and processing-time distributions for quick diagnosis.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '장비 로그 파싱 및 통계 분석', en: 'Equipment-log parsing and statistical analysis' },
        description: {
          ko: '정규표현식으로 로그를 구조화하고 IQR 필터링으로 이상치를 제거해 장비 상태와 알고리즘 처리 시간의 경향을 확인했습니다.',
          en: 'Structured logs with regex and used IQR filtering to remove outliers and inspect equipment status and algorithm latency trends.',
        },
        images: [
          image('/img/tech/qlog_parsing_outlier.png', '로그 파싱 및 이상치 분석', 'Log parsing and outlier analysis'),
        ],
      },
      {
        title: { ko: '비전 처리 시간 및 수율 차트 시각화', en: 'Vision Latency & Yield Chart Visualization' },
        description: {
          ko: '검사 스테이지별 처리 시간과 불량 분류 통계를 대시보드 차트로 시각화했습니다.',
          en: 'Visualized stage tact times and defect classification distributions in dashboard charts.',
        },
        images: [
          image('/img/tech/qlog_processing_time_chart.png', '처리 시간 통계 차트', 'Tact time statistical charts'),
        ],
      },
      {
        title: { ko: '통계 데이터 엑셀 내보내기 및 리포트 생성', en: 'Statistical Data Excel Export & Report Generation' },
        description: {
          ko: '파싱된 검사 통계 및 이상치 분석 데이터를 엑셀 파일(.xlsx)로 즉시 내보내어 현장 분석 리포트를 생성합니다.',
          en: 'Exports parsed inspection statistics and outlier analysis data to structured Excel (.xlsx) files.',
        },
        images: [
          image('/img/tech/qlog_export_excel.png', '엑셀로 내보내기', 'Export to Excel feature'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '비전 장비 운영 중 발생하는 로그를 분석 가능한 데이터로 바꾸고, 현장 진단에 필요한 지표를 시각화했습니다.',
        en: 'Converted operational vision-equipment logs into analyzable data and visualized metrics needed for field diagnosis.',
      },
      {
        ko: '통계 지표 및 비전 처리 시간 데이터를 표준 엑셀 서식으로 자동 변환/내보내는 리포트 모듈을 개발했습니다.',
        en: 'Developed an automated report module converting statistical metrics and vision tact-time data into standard Excel formats.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '원본 장비 로그는 포맷이 길고 반복적이어서 불량 패턴과 처리 시간 병목을 빠르게 파악하기 어려웠습니다.',
          en: 'Raw equipment logs were long and repetitive, making it difficult to identify defect patterns and processing-time bottlenecks quickly.',
        },
        solution: {
          ko: '로그 라인을 정규표현식으로 구조화하고 IQR 기반 이상치 제거와 시각화를 적용했습니다.',
          en: 'Structured log lines with regex and applied IQR outlier filtering with visualization.',
        },
        result: {
          ko: '장비 수율, 불량 패턴, 알고리즘 처리 시간을 빠르게 비교할 수 있는 분석 흐름을 만들었습니다.',
          en: 'Built an analysis flow for quickly comparing yield, defect patterns, and algorithm processing time.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '분석 대상', en: 'Analysis target' },
        value: { ko: 'Yield / Defect / Latency', en: 'Yield / Defect / Latency' },
        description: {
          ko: '장비 운영 로그를 검사 성능과 처리 시간 관점에서 구조화했습니다.',
          en: 'Structured equipment logs around inspection performance and processing time.',
        },
      },
      {
        label: { ko: '장비 SW', en: 'Equipment SW' },
        value: { ko: 'C++ MFC Camera / ROI', en: 'C++ MFC Camera / ROI' },
        description: {
          ko: '실시간 카메라 제어와 ROI 설정 모듈을 다뤘습니다.',
          en: 'Worked on real-time camera control and ROI setup modules.',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '비전 시스템의 품질은 알고리즘뿐 아니라 로그, 진단 도구, 장비 제어 모듈의 관측 가능성에 크게 좌우된다는 점을 배웠습니다.',
        en: 'Learned that vision-system quality depends heavily on logs, diagnostic tools, and observability in equipment-control modules.',
      },
    ],
    limitations: [
      {
        ko: '장비별 로그 포맷이 달라질 경우 parser preset과 schema 관리가 필요합니다.',
        en: 'Different equipment log formats require parser presets and schema management.',
      },
    ],
    nextSteps: [
      {
        ko: '로그 포맷별 parser plugin과 자동 리포트 생성을 확장할 계획입니다.',
        en: 'Plan to expand parser plugins by log format and automated report generation.',
      },
    ],
    links: [
      { label: { ko: '기술 문서', en: 'Technical Notes' }, note: noDocYetNote },
    ],
  },
  {
    id: 5,
    category: 'research',
    title: { ko: 'LLM Alignment Research', en: 'LLM Alignment Research' },
    oneLiner: {
      ko: 'Gemma 기반 SFT/DPO 및 QLoRA 경량 Fine-tuning 실험',
      en: 'Gemma-based SFT/DPO and lightweight QLoRA fine-tuning experiments.',
    },
    overview: {
      ko: 'Instruction-Tuned 언어모델에서 SFT와 DPO를 순차 적용하고, 자동 평가와 LLM-as-a-Judge로 추가 선호도 학습의 효과와 한계를 분석했습니다. 연구 성과로 2026 한국정보기술학회 금상과 2025 한국정보기술학회 은상을 수상했습니다.',
      en: 'Sequentially applied SFT and DPO to an instruction-tuned language model, then analyzed the effectiveness and limits of additional preference training through automatic evaluation and LLM-as-a-Judge. The work won KIIT Gold in 2026 and KIIT Silver in 2025.',
    },
    startDate: null,
    endDate: null,
    teamInfo: { ko: 'Research Project', en: 'Research Project' },
    contribution: {
      ko: '데이터 전처리, QLoRA 학습, SFT/DPO 실험, 평가 프레임워크 구성, 논문 작성을 수행했습니다.',
      en: 'Handled preprocessing, QLoRA training, SFT/DPO experiments, evaluation framework setup, and paper writing.',
    },
    images: [
      image('/img/tech/unsloth.png', 'LLM 정렬 연구 대표 이미지', 'LLM alignment research representative image'),
    ],
    techChoices: [
      {
        name: 'Gemma',
        reason: { ko: 'Instruction-Tuned 모델의 추가 정렬 효과를 검증하기 위한 기반 모델로 사용했습니다.', en: 'Used as the base model for validating additional alignment effects on an instruction-tuned model.' },
      },
      {
        name: 'SFT / DPO',
        reason: { ko: '지도 미세조정과 선호도 최적화의 성능 차이를 실험적으로 비교하기 위해 적용했습니다.', en: 'Applied to compare supervised fine-tuning and preference optimization empirically.' },
      },
      {
        name: 'QLoRA',
        reason: { ko: '제한된 GPU 환경에서 경량 fine-tuning을 수행하기 위해 사용했습니다.', en: 'Used for lightweight fine-tuning under limited GPU resources.' },
      },
      {
        name: 'LLM-as-a-Judge',
        reason: { ko: '정확성뿐 아니라 자연스러움, 유용성, 종합 품질을 다면 평가하기 위해 구성했습니다.', en: 'Built to evaluate fluency, usefulness, and overall quality beyond simple correctness.' },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'SFT/DPO 정렬 실험', en: 'SFT/DPO alignment experiments' },
        description: {
          ko: 'SFT 이후 DPO를 추가했을 때 성능이 항상 향상되는지 검증하고, 선호도 데이터 품질과 평가 분포 차이의 영향을 분석했습니다.',
          en: 'Tested whether adding DPO after SFT always improves performance and analyzed the impact of preference quality and evaluation distribution mismatch.',
        },
        images: [],
      },
    ],
    roleDetails: [
      { ko: '논문 실험 설계, 모델 학습, 평가, 결과 분석을 수행했습니다.', en: 'Handled experiment design, model training, evaluation, and result analysis.' },
    ],
    troubleshooting: [
      {
        problem: { ko: 'DPO를 추가해도 일부 평가에서는 SFT 대비 유의미한 향상이 나타나지 않았습니다.', en: 'Adding DPO did not produce meaningful gains over SFT in some evaluations.' },
        solution: { ko: '모델별 응답을 평가 유형별로 분리하고 자동 평가와 LLM-as-a-Judge 결과를 교차 분석했습니다.', en: 'Separated outputs by evaluation type and cross-analyzed automatic metrics with LLM-as-a-Judge results.' },
        result: { ko: '초기 정렬 수준과 preference pair 품질이 DPO 효과를 크게 좌우한다는 결론을 도출했습니다.', en: 'Concluded that initial alignment and preference-pair quality heavily affect DPO outcomes.' },
      },
    ],
    resultMetrics: [
      { label: { ko: '수상', en: 'Awards' }, value: { ko: 'KIIT 금상 / 은상', en: 'KIIT Gold / Silver' }, description: { ko: '하계 학술대회 금상, 추계 학술대회 은상을 수상했습니다.', en: 'Won Gold at the summer conference and Silver at the fall conference.' } },
    ],
    lessonsLearned: [
      { ko: '최신 AI 기법도 데이터 품질, 평가셋 분포, 운영 목적에 맞춰 검증해야 실제 가치가 생긴다는 점을 배웠습니다.', en: 'Learned that modern AI methods need validation against data quality, evaluation distribution, and operational goals.' },
    ],
    limitations: [
      { ko: '더 큰 모델과 ORPO, SimPO 등 다른 정렬 기법과의 비교가 후속 과제입니다.', en: 'Comparison with larger models and other alignment methods such as ORPO and SimPO remains future work.' },
    ],
    nextSteps: [
      { ko: '도메인 특화 preference 데이터 생성과 정렬 기법 비교 연구로 확장할 계획입니다.', en: 'Plan to expand into domain-specific preference-data generation and alignment-method comparisons.' },
    ],
    links: [
      { label: { ko: '논문', en: 'Paper' }, note: noDocYetNote },
    ],
  },
  {
    id: 6,
    category: 'other',
    title: { ko: 'JobTalk', en: 'JobTalk' },
    oneLiner: {
      ko: 'React/TypeScript와 FastAPI, Ollama 기반 다국어 구직 플랫폼',
      en: 'A multilingual job platform built with React/TypeScript, FastAPI, and Ollama.',
    },
    overview: {
      ko: '채용 공고, 기업 정보, 커뮤니티 기능을 통합하고 다국어 및 지도 기반 접근성을 강화한 웹 플랫폼입니다. 비전 솔루션을 지탱하고 확장하는 풀스택 소프트웨어 역량을 보여주는 보조 프로젝트로 정리했습니다.',
      en: 'A web platform integrating job posts, company information, community features, multilingual support, and map-based access. Listed as supplementary full-stack software experience that can support and extend vision solutions.',
    },
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-11-30'),
    teamInfo: { ko: 'Other Project', en: 'Other Project' },
    contribution: {
      ko: 'React/TypeScript 프론트엔드, 다국어 UI, FastAPI/Ollama 번역 흐름 연동을 담당했습니다.',
      en: 'Worked on the React/TypeScript frontend, multilingual UI, and FastAPI/Ollama translation flow integration.',
    },
    images: [
      image('/img/tech/jobtalk.png', 'JobTalk 대표 이미지', 'JobTalk representative image'),
    ],
    techChoices: [
      { name: 'React / TypeScript', reason: { ko: '복수 페이지 웹 플랫폼의 UI와 상태를 구조화하기 위해 사용했습니다.', en: 'Used to structure UI and state for a multi-page web platform.' } },
      { name: 'FastAPI / Ollama', reason: { ko: '동적 콘텐츠 번역과 AI 기능 연동을 위해 활용했습니다.', en: 'Used for dynamic content translation and AI integration.' } },
    ],
    keyFeatures: [
      { title: { ko: '다국어 구직 플랫폼', en: 'Multilingual job platform' }, description: { ko: '채용, 기업, 커뮤니티, 지도 기반 정보를 하나의 서비스 흐름으로 구성했습니다.', en: 'Connected jobs, companies, community, and map-based information into one service flow.' }, images: [] },
    ],
    roleDetails: [
      { ko: '비전 프로젝트 외 영역의 웹/백엔드/AI 연동 기반 역량으로 포지셔닝했습니다.', en: 'Positioned as supporting web/backend/AI integration experience beyond vision projects.' },
    ],
    troubleshooting: [
      { problem: { ko: '정적 UI 번역만으로는 동적 콘텐츠까지 다국어로 제공하기 어려웠습니다.', en: 'Static UI translation alone could not cover dynamic content.' }, solution: { ko: 'FastAPI와 Ollama 기반 번역 흐름을 연동했습니다.', en: 'Integrated a FastAPI and Ollama translation flow.' }, result: { ko: 'UI와 콘텐츠가 함께 다국어로 제공되는 구조를 만들었습니다.', en: 'Built a structure for multilingual UI and content.' } },
    ],
    resultMetrics: [
      { label: { ko: '역량', en: 'Capability' }, value: { ko: 'Full-stack foundation', en: 'Full-stack foundation' }, description: { ko: '비전 솔루션 확장에 필요한 웹/서버/AI 연동 경험입니다.', en: 'Web/server/AI integration experience useful for extending vision solutions.' } },
    ],
    lessonsLearned: [
      { ko: 'AI 기능은 모델만이 아니라 사용자 흐름과 서버 구조 안에 자연스럽게 연결되어야 한다는 점을 배웠습니다.', en: 'Learned that AI features need to fit naturally into user flows and server architecture.' },
    ],
    limitations: [
      { ko: '운영 자동화와 관리자 도구는 더 확장할 수 있습니다.', en: 'Operational automation and admin tools can be expanded.' },
    ],
    nextSteps: [
      { ko: '다국어 콘텐츠 검수와 운영 도구를 고도화할 계획입니다.', en: 'Plan to improve multilingual content review and operations tooling.' },
    ],
    links: [
      { label: { ko: 'GitHub 저장소', en: 'GitHub Repository' }, note: privateRepoNote },
    ],
  },
  {
    id: 7,
    category: 'other',
    title: { ko: 'Geumpumta', en: 'Geumpumta' },
    oneLiner: {
      ko: 'Flutter 기반 학습 시간 측정 및 랭킹 모바일 앱',
      en: 'A Flutter mobile app for study-time tracking and ranking.',
    },
    overview: {
      ko: '학교 Wi-Fi 인증, 실시간 랭킹, 정밀 타이머 로직을 결합한 모바일 앱으로 App Store와 Google Play에 배포했습니다. 비전 포지션에서는 제품형 소프트웨어 설계와 배포 경험을 보여주는 보조 프로젝트로 정리했습니다.',
      en: 'A mobile app combining campus Wi-Fi verification, live rankings, and precise timer logic, released on both App Store and Google Play. Listed as supplementary product-software and release experience for the vision position.',
    },
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-12-31'),
    teamInfo: { ko: 'Other Project', en: 'Other Project' },
    contribution: {
      ko: 'Flutter 앱 구조, Riverpod 상태 관리, 타이머, 인증, 양대 마켓 배포를 담당했습니다.',
      en: 'Owned Flutter architecture, Riverpod state management, timer logic, authentication, and app-store releases.',
    },
    images: [
      image('/img/tech/geumpumta.png', 'Geumpumta 대표 이미지', 'Geumpumta representative image'),
    ],
    techChoices: [
      { name: 'Flutter', reason: { ko: 'iOS/Android 동시 배포를 위해 사용했습니다.', en: 'Used for iOS/Android release from one codebase.' } },
      { name: 'Riverpod / MVVM', reason: { ko: '타이머, 인증, 랭킹 상태를 분리하기 위해 적용했습니다.', en: 'Applied to separate timer, auth, and ranking state.' } },
    ],
    keyFeatures: [
      { title: { ko: '학습 시간 측정 및 랭킹', en: 'Study-time tracking and ranking' }, description: { ko: '정밀 타이머와 실시간 랭킹, 학교 Wi-Fi 인증을 결합했습니다.', en: 'Combined precise timer logic, live rankings, and campus Wi-Fi verification.' }, images: [] },
    ],
    roleDetails: [
      { ko: '모바일 제품을 실제 마켓에 배포하며 end-to-end 운영 경험을 확보했습니다.', en: 'Gained end-to-end release experience by shipping a mobile product to real app markets.' },
    ],
    troubleshooting: [
      { problem: { ko: '앱 재시작 시 타이머 오차가 발생할 수 있었습니다.', en: 'Timer drift could occur after app restarts.' }, solution: { ko: '시작 시각과 현재 시각 차이 기반 계산으로 구조를 바꿨습니다.', en: 'Changed the timer to calculate elapsed time from start and current timestamps.' }, result: { ko: '앱 상태 변화 이후에도 실제 경과 시간이 반영되도록 개선했습니다.', en: 'Improved elapsed-time reliability after app state changes.' } },
    ],
    resultMetrics: [
      { label: { ko: '배포', en: 'Release' }, value: { ko: 'App Store / Google Play', en: 'App Store / Google Play' }, description: { ko: '양대 마켓에 직접 배포했습니다.', en: 'Released directly to both major app stores.' } },
    ],
    lessonsLearned: [
      { ko: '제품형 앱은 기능 구현뿐 아니라 인증, OS 제약, 배포 품질까지 함께 설계해야 한다는 점을 배웠습니다.', en: 'Learned that product apps require authentication, OS constraints, and release quality alongside features.' },
    ],
    limitations: [
      { ko: '개인화 리포트와 리텐션 기능은 후속 확장 영역입니다.', en: 'Personalized reports and retention features remain future expansion areas.' },
    ],
    nextSteps: [
      { ko: '학습 패턴 분석과 알림 기능을 확장할 계획입니다.', en: 'Plan to expand study-pattern analysis and notifications.' },
    ],
    links: [
      { label: { ko: 'App Store', en: 'App Store' }, url: 'https://apps.apple.com/kr/app/%EA%B8%88%ED%92%88%ED%83%80/id6755481890' },
      { label: { ko: 'Google Play', en: 'Google Play' }, url: 'https://play.google.com/store/apps/details?id=com.geumpumgalchwi.geumpumta&hl=ko' },
    ],
  },
  {
    id: 8,
    category: 'research',
    title: { ko: 'Research & Awards', en: 'Research & Awards' },
    oneLiner: {
      ko: 'DPO 연구 논문, KIIT 금상/은상, LG Aimers AI 과정 수료',
      en: 'DPO research paper, KIIT Gold/Silver awards, and LG Aimers AI training.',
    },
    overview: {
      ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계에 대한 실험적 분석을 수행해 하계 학술대회 금상과 추계 학술대회 은상을 수상했습니다. LG Aimers AI 과정을 수료하며 머신러닝 문제 정의, 모델링, 평가 흐름에 대한 실무형 학습도 병행했습니다.',
      en: 'Conducted an empirical analysis of DPO effectiveness and limitations in instruction-tuned language models, winning Gold at a summer conference and Silver at a fall conference. Also completed LG Aimers AI training, covering practical ML problem definition, modeling, and evaluation.',
    },
    startDate: null,
    endDate: null,
    teamInfo: { ko: 'Research & Awards', en: 'Research & Awards' },
    contribution: {
      ko: '연구 실험, 결과 분석, 논문 작성, AI 과정 학습을 수행했습니다.',
      en: 'Worked on research experiments, result analysis, paper writing, and AI training.',
    },
    images: [
      image('/img/tech/unsloth.png', '연구 및 수상 대표 이미지', 'Research and awards representative image'),
    ],
    techChoices: [
      { name: 'DPO / SFT', reason: { ko: '선호도 기반 정렬 학습의 효과를 검증하기 위해 사용했습니다.', en: 'Used to validate preference-based alignment learning.' } },
      { name: 'LG Aimers', reason: { ko: 'AI 문제 해결 및 모델링 역량을 보완하기 위해 수료했습니다.', en: 'Completed to strengthen AI problem-solving and modeling skills.' } },
    ],
    keyFeatures: [
      { title: { ko: '논문 및 수상', en: 'Paper and awards' }, description: { ko: '2026 한국정보기술학회 금상, 2025 한국정보기술학회 은상을 수상했습니다.', en: 'Won 2026 KIIT Gold and 2025 KIIT Silver awards.' }, images: [] },
    ],
    roleDetails: [
      { ko: 'AI 모델 학습과 평가 경험을 비전 AI 모델 최적화 역량으로 연결하고 있습니다.', en: 'Connecting AI model training and evaluation experience to vision-AI model optimization.' },
    ],
    troubleshooting: [
      { problem: { ko: '추가 정렬 학습의 효과가 평가 방식에 따라 다르게 나타났습니다.', en: 'Additional alignment effects varied by evaluation method.' }, solution: { ko: '자동 평가와 LLM-as-a-Judge를 함께 사용해 다면적으로 분석했습니다.', en: 'Used both automatic metrics and LLM-as-a-Judge for multidimensional analysis.' }, result: { ko: 'DPO 적용 조건과 한계를 논문으로 정리했습니다.', en: 'Documented DPO conditions and limitations in the paper.' } },
    ],
    resultMetrics: [
      { label: { ko: '수상', en: 'Awards' }, value: { ko: '2026 금상 / 2025 은상', en: '2026 Gold / 2025 Silver' }, description: { ko: '한국정보기술학회 대학생 논문경진대회 수상 이력입니다.', en: 'Awards from KIIT undergraduate paper competitions.' } },
      { label: { ko: '교육', en: 'Training' }, value: { ko: 'LG Aimers 수료', en: 'LG Aimers Completed' }, description: { ko: 'AI 실무형 문제 해결 과정을 수료했습니다.', en: 'Completed practical AI problem-solving training.' } },
    ],
    lessonsLearned: [
      { ko: '모델 성능 평가는 단일 지표보다 데이터 분포, 평가 목적, 운영 맥락을 함께 봐야 한다는 점을 배웠습니다.', en: 'Learned that model evaluation needs data distribution, evaluation goals, and operational context beyond a single metric.' },
    ],
    limitations: [
      { ko: '비전 도메인 데이터에 직접 적용한 정렬 연구는 후속 확장 과제입니다.', en: 'Applying alignment research directly to vision-domain data remains future work.' },
    ],
    nextSteps: [
      { ko: '비전 검사 결과 설명, 자동 리포트, LLM 기반 분석 보조 도구로 연구 경험을 확장할 계획입니다.', en: 'Plan to extend this experience into vision-inspection explanations, auto reports, and LLM-assisted analysis tools.' },
    ],
    links: [
      { label: { ko: '논문', en: 'Paper' }, note: noDocYetNote },
    ],
  },
];
