import type { LocalizedText } from '../i18n';

export interface TechChoice {
  name: string;
  reason: LocalizedText;
}

export interface ProjectImage {
  imageUrl: string;
  caption: LocalizedText;
}

export interface FeatureItem {
  title: LocalizedText;
  description: LocalizedText;
  images: ProjectImage[];
}

export interface TroubleShootingItem {
  problem: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
}

export interface ResultMetric {
  label: LocalizedText;
  value: LocalizedText;
  description: LocalizedText;
}

export interface ProjectLinkResource {
  label: LocalizedText;
  url?: string;
  note?: LocalizedText;
}

export interface ProjectDetailInfo {
  id: number;
  category: string;
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

export const projectsDetailData: ProjectDetailInfo[] = [
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
      image('/img/tech/pipet_detection.png', '피펫 눈금 영역 검출', 'Pipette scale area detection'),
      image('/img/tech/pipet_ocr_inference.png', '하이브리드 OCR 추론', 'Hybrid OCR inference flow'),
      image('/img/tech/pipet_tensorrt_benchmark.png', 'TensorRT 엔진 최적화 결과', 'TensorRT engine optimization result'),
    ],
    techChoices: [
      {
        name: 'YOLO & Custom CNN',
        reason: {
          ko: '작은 피펫 눈금 영역을 빠르게 찾고 숫자 인식을 안정화하기 위해 분할 모델 구조를 사용했습니다.',
          en: 'Used a split model architecture to quickly isolate the small scale region and stabilize digit recognition.',
        },
      },
      {
        name: 'TensorRT / ONNX Runtime',
        reason: {
          ko: '추론 지연 시간을 100ms 이하로 낮춰 실시간 비전 검사 파이프라인에 통합하기 위해 엔진을 최적화했습니다.',
          en: 'Optimized engines to reduce inference latency below 100 ms for real-time vision inspection integration.',
        },
      },
      {
        name: 'C++ / CUDA',
        reason: {
          ko: '배포 환경에서의 메모리 효율성과 빠른 이미지 전처리/후처리를 위해 C++ 기반 런타임을 구성했습니다.',
          en: 'Configured a C++ runtime for deployment-time memory efficiency and fast image pre/post-processing.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '마이크로피펫 ROI 자동 검출', en: 'Automatic Micro-pipette ROI Detection' },
        description: {
          ko: '입력 영상에서 피펫 본체와 눈금 영역을 고속으로 분리해 후속 OCR 정확도를 극대화했습니다.',
          en: 'Rapidly isolated the pipette body and scale area from input frames to maximize subsequent OCR accuracy.',
        },
        images: [
          image('/img/tech/pipet_detection.png', '피펫 눈금 영역 검출', 'Pipette scale area detection'),
        ],
      },
      {
        title: { ko: '하이브리드 OCR 및 CTC 디코딩', en: 'Hybrid OCR & CTC Decoding' },
        description: {
          ko: 'Custom CNN과 PaddleOCR 백본을 결합하고 CTC Greedy Decoding으로 연속 숫자를 판독했습니다.',
          en: 'Combined a custom CNN with a PaddleOCR backbone and decoded continuous digits using CTC greedy decoding.',
        },
        images: [
          image('/img/tech/pipet_ocr_inference.png', '하이브리드 OCR 추론', 'Hybrid OCR inference flow'),
        ],
      },
      {
        title: { ko: 'TensorRT FP16/INT8 가속 엔진', en: 'TensorRT FP16/INT8 Acceleration Engine' },
        description: {
          ko: 'ONNX 모델을 TensorRT 엔진으로 빌드하여 300ms였던 추론 시간을 80ms로 73% 단축했습니다.',
          en: 'Built TensorRT engines from ONNX models, reducing inference latency from 300 ms to 80 ms (73% reduction).',
        },
        images: [
          image('/img/tech/pipet_tensorrt_benchmark.png', 'TensorRT 엔진 최적화 결과', 'TensorRT engine optimization result'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '피펫 눈금 데이터셋 레이블링 기준 수립 및 데이터 증강 파이프라인 구축',
        en: 'Established labeling guidelines for pipette scales and built a data augmentation pipeline.',
      },
      {
        ko: 'ONNX Runtime 및 TensorRT FP16/INT8 엔진 최적화로 엣지 장비 지연 시간 73% 감축',
        en: 'Reduced edge inference latency by 73% through ONNX Runtime and TensorRT FP16/INT8 engine optimization.',
      },
      {
        ko: 'C++ CUDA 연동을 통한 실시간 비전 검사 파이프라인 안정화',
        en: 'Stabilized the real-time vision inspection pipeline with C++ CUDA integration.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '실험실 조명 반사와 피펫 표면 굴절로 인해 특정 각도에서 숫자 오인식이 발생했습니다.',
          en: 'Lighting reflections and curved glass distortion caused misreads at certain viewing angles.',
        },
        solution: {
          ko: 'CLAHE 기반 대비 향상과 반사광 마스킹 전처리를 추가하고 조명 변형 데이터를 증강해 재학습했습니다.',
          en: 'Added CLAHE contrast enhancement and specular highlight masking, then retrained with augmented lighting variations.',
        },
        result: {
          ko: '불균일 조명 환경에서도 인식 신뢰도를 96% 이상으로 끌어올렸습니다.',
          en: 'Boosted recognition reliability above 96% even under non-uniform lighting conditions.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '추론 지연 시간', en: 'Inference Latency' },
        value: { ko: '80ms (73% 감소)', en: '80ms (-73%)' },
        description: {
          ko: 'TensorRT 최적화로 300ms에서 80ms로 단축',
          en: 'Reduced from 300ms to 80ms with TensorRT optimization',
        },
      },
      {
        label: { ko: '인식 신뢰도', en: 'Recognition Accuracy' },
        value: { ko: '96.4%', en: '96.4%' },
        description: {
          ko: '다양한 조명과 각도 조건에서의 검증 결과',
          en: 'Validated across varied lighting and angle conditions',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '비전 모델의 정확도뿐만 아니라 실제 배포 파이프라인에서의 추론 속도와 메모리 최적화가 필수적임을 체득했습니다.',
        en: 'Learned that real-time deployment requires as much focus on inference speed and memory footprint as on raw model accuracy.',
      },
    ],
    limitations: [
      {
        ko: '극도로 노후화된 피펫의 마모된 눈금은 추가적인 복원 알고리즘이 필요합니다.',
        en: 'Heavily worn scales on older pipettes require additional image restoration steps.',
      },
    ],
    nextSteps: [
      {
        ko: '초해상화(Super-Resolution) 전처리를 추가하여 저해상도 입력에 대한 강건성을 강화할 계획입니다.',
        en: 'Plan to integrate super-resolution preprocessing to strengthen robustness on low-resolution inputs.',
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
    id: 2,
    category: 'featuredVision',
    title: {
      ko: 'SEM Particle Analyzer',
      en: 'SEM Particle Analyzer',
    },
    oneLiner: {
      ko: 'OpenCvSharp 기반 SEM 미세입자 자동 검출, Watershed 분리, 형상 정량 분석 솔루션',
      en: 'A WPF solution for SEM particle detection, watershed touching separation, and calibrated shape analysis.',
    },
    overview: {
      ko: '전자현미경(SEM) 이미지에서 미세 입자를 자동 검출하고, 뭉쳐진 접촉 입자를 Distance Transform과 Watershed로 정밀 분리한 후 캘리브레이션 기반 면적, 둘레, Feret 직경, Circularity 등 정량 형상 지표를 산출하는 C# WPF 데스크톱 분석 솔루션입니다.',
      en: 'A C# WPF desktop analysis application that automatically detects fine particles in SEM images, separates touching particles using distance transform and watershed algorithms, and computes calibrated quantitative metrics such as area, perimeter, Feret diameter, and circularity.',
    },
    startDate: new Date('2025-08-01'),
    endDate: new Date('2026-01-15'),
    teamInfo: { ko: 'Vision Software Developer', en: 'Vision Software Developer' },
    contribution: {
      ko: 'C# WPF MVVM 아키텍처 설계, OpenCvSharp 분할 파이프라인 구현, 형상 지표 정량화 및 34개 xUnit 단위 테스트 작성을 전담했습니다.',
      en: 'Owned C# WPF MVVM architecture, OpenCvSharp segmentation pipeline, quantitative metric calculation, and 34 xUnit tests.',
    },
    images: [
      image('/img/tech/sem_analyzer_dashboard.png', 'SEM Particle Analyzer 분석 화면', 'SEM Particle Analyzer analysis interface'),
    ],
    techChoices: [
      {
        name: 'C# .NET 8 WPF (MVVM)',
        reason: {
          ko: '산업용 장비 환경에서 안정적인 UI 반응성과 비동기 이미지 처리 구조를 구성하기 위해 선택했습니다.',
          en: 'Chosen for reliable UI responsiveness and asynchronous image processing in industrial software environments.',
        },
      },
      {
        name: 'OpenCvSharp / Distance Transform & Watershed',
        reason: {
          ko: '접촉된 미세 입자의 경계를 정확히 분리하고 형상 기하학적 지표를 고속 계산하기 위해 적용했습니다.',
          en: 'Applied to accurately segment touching particles and quickly compute geometric shape metrics.',
        },
      },
      {
        name: 'xUnit 단위 테스트',
        reason: {
          ko: '알고리즘 산출 지표와 이미지 처리 파이프라인의 수치 정확성을 보증하기 위해 34개 단위 테스트를 작성했습니다.',
          en: 'Authored 34 unit tests to guarantee numerical precision across algorithm outputs and the image pipeline.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'Distance Transform & Watershed 접촉 입자 분리', en: 'Distance Transform & Watershed Particle Separation' },
        description: {
          ko: '붙어 있는 미세 입자를 거리 변환 기반 로컬 최대점과 워터셰드 알고리즘으로 개별 객체로 정밀 분리합니다.',
          en: 'Separates clumped particles into individual objects using distance-transform local maxima and watershed segmentation.',
        },
        images: [
          image('/img/tech/sem_segmentation_result.png', '입자 분할 결과 시각화', 'Particle segmentation visualization'),
        ],
      },
      {
        title: { ko: '스케일바 캘리브레이션 및 형상 정량 분석 대시보드', en: 'Scale-bar Calibration & Quantitative Metrics Dashboard' },
        description: {
          ko: '현미경 스케일바를 픽셀 단위로 보정하여 실제 물리 단위(μm, nm)로 면적, Feret 직경, 원형도(Circularity)를 자동 산출하고 분포 차트 및 통계 테이블로 시각화합니다.',
          en: 'Calibrates microscope scale bars into physical units (μm, nm) to automatically calculate area, Feret diameter, and circularity, visualized in distribution charts and tables.',
        },
        images: [
          image('/img/tech/sem_quantitative_metrics_1.png', '정량 분석 지표 대시보드 1', 'Quantitative metrics dashboard 1'),
          image('/img/tech/sem_quantitative_metrics_2.png', '정량 분석 지표 대시보드 2', 'Quantitative metrics dashboard 2'),
        ],
      },
      {
        title: { ko: '미세 입자 전처리 및 분석 조건 설정', en: 'Particle Preprocessing & Analysis Condition Setup' },
        description: {
          ko: 'CLAHE 명암 대비 보정, 이진화 임계값, 모폴로지 노이즈 제거 필터 등 입자 특성에 맞는 분석 파라미터를 유연하게 설정할 수 있습니다.',
          en: 'Provides flexible configuration of analysis parameters including CLAHE contrast enhancement, binarization thresholds, and morphological noise filtering.',
        },
        images: [
          image('/img/tech/sem_condition_settings.png', '분석 조건 설정', 'Analysis condition settings'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'CLAHE, Adaptive Threshold, Morphology, Watershed로 이어지는 전처리-분할 파이프라인 개발',
        en: 'Developed preprocessing-segmentation pipeline with CLAHE, adaptive thresholding, morphology, and watershed.',
      },
      {
        ko: 'Feret 직경, 둘레, 면적, Circularity 형상 지표 계산 공식 구현 및 xUnit 34개 테스트 통과',
        en: 'Implemented Feret diameter, perimeter, area, and circularity calculations, passing 34 xUnit test suites.',
      },
      {
        ko: 'WPF MVVM 패턴을 적용하여 UI와 비전 엔진의 완전한 책임 분리 달성',
        en: 'Applied WPF MVVM pattern to achieve complete separation of concerns between UI and vision engine.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '미세입자가 심하게 밀집된 영역에서 과분할(Over-segmentation) 현상이 발생해 단일 입자가 여러 개로 쪼개지는 문제가 있었습니다.',
          en: 'Over-segmentation occurred in dense particle clusters, erroneously splitting single particles into multiple pieces.',
        },
        solution: {
          ko: 'Distance Transform 맵에 Gaussian Smoothing을 적용하고 h-minima transform 기반 마커 억제 임계값을 동적으로 조절했습니다.',
          en: 'Applied Gaussian smoothing to the distance-transform map and dynamically adjusted marker suppression thresholds based on h-minima.',
        },
        result: {
          ko: '과분할 오류율을 85% 이상 감소시키고 실제 입자 수와의 오차율을 2% 이내로 안정화했습니다.',
          en: 'Reduced over-segmentation errors by over 85% and brought count error within 2% of ground truth.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '단위 테스트', en: 'Unit Tests' },
        value: { ko: '34개 전원 통과', en: '34 Passed' },
        description: {
          ko: '수치 계산 및 경계 조건에 대한 철저한 테스트 검증',
          en: 'Thorough verification of mathematical logic and boundary conditions',
        },
      },
      {
        label: { ko: '입자 검출 정확도', en: 'Detection Precision' },
        value: { ko: '98%+', en: '98%+' },
        description: {
          ko: '표준 SEM 벤치마크 데이터셋 기준 입자 개수 및 크기 일치도',
          en: 'Particle count and size consistency on standard SEM benchmark datasets',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '전통적 영상처리 파이프라인에서 단계별 파라미터 튜닝과 단위 테스트 기반의 수치 검증이 분석 소프트웨어의 신뢰도를 결정함을 배웠습니다.',
        en: 'Learned that stepwise parameter tuning and unit test-based numerical verification determine the reliability of analytical vision software.',
      },
    ],
    limitations: [
      {
        ko: '입자 내부의 복잡한 텍스처 노이즈가 심한 경우 추가적인 텍스처 필터링이 필요합니다.',
        en: 'Heavy interior texture noise requires additional texture filtering before segmentation.',
      },
    ],
    nextSteps: [
      {
        ko: '딥러닝 기반 세그멘테이션(SAM)과 워터셰드를 결합한 하이브리드 입자 분리 파이프라인으로 확장을 계획 중입니다.',
        en: 'Planning a hybrid particle separation pipeline combining deep learning (SAM) and classical watershed.',
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
    id: 3,
    category: 'featuredVision',
    title: {
      ko: 'Video-based 7-Segment OCR System',
      en: 'Video-based 7-Segment OCR System',
    },
    oneLiner: {
      ko: 'LightSVTR와 ONNX Runtime, 시간축 보정 알고리즘을 적용한 실시간 7-Segment 비전 OCR',
      en: 'A real-time 7-segment vision OCR application with LightSVTR, ONNX Runtime, and time-series calibration.',
    },
    overview: {
      ko: '생산 현장 및 측정 장비의 7-Segment 디스플레이 영상을 분석하여 LED 플리커 현상, 조명 변화, 부분 가림 환경에서도 안정적으로 숫자를 인식하는 WPF 기반 비전 소프트웨어입니다. LightSVTR 경량 모델과 ONNX Runtime, 시간축 연속성 보정 필터를 통합했습니다.',
      en: 'A WPF-based vision application that analyzes 7-segment display video feeds from production and measurement equipment, reliably recognizing numeric values despite LED flicker, lighting changes, and partial occlusions via LightSVTR, ONNX Runtime, and time-series consistency filtering.',
    },
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-11-30'),
    teamInfo: { ko: 'Vision & AI Developer', en: 'Vision & AI Developer' },
    contribution: {
      ko: 'LightSVTR 모델 ONNX 변환 및 추론 파이프라인, 시간축 이상치 보정 알고리즘, Clean Architecture 계층 분리를 구현했습니다.',
      en: 'Implemented LightSVTR ONNX conversion, inference pipeline, time-series outlier calibration, and Clean Architecture layering.',
    },
    images: [
      image('/img/tech/seven_segment_ocr_dashboard.png', '7-Segment OCR 분석 화면', '7-Segment OCR analysis interface'),
    ],
    techChoices: [
      {
        name: 'LightSVTR + ONNX Runtime',
        reason: {
          ko: '경량 텍스트 인식 트랜스포머 모델을 ONNX Runtime으로 구동하여 CPU 환경에서도 30fps 영상 처리를 보장했습니다.',
          en: 'Ran a lightweight text recognition transformer on ONNX Runtime to guarantee 30 fps video processing on CPU.',
        },
      },
      {
        name: 'Time-Series Calibration Filter',
        reason: {
          ko: 'LED 디스플레이의 주기적인 플리커로 인한 순간적 오인식을 인접 프레임 간 연속성 검증으로 완벽히 제거했습니다.',
          en: 'Eliminated momentary misreads caused by LED flicker using inter-frame temporal continuity validation.',
        },
      },
      {
        name: 'Clean Architecture & Factory Pattern',
        reason: {
          ko: '추후 다른 OCR 모델이나 비전 알고리즘으로 손쉽게 교체할 수 있도록 도메인/인프라/UI 계층을 분리했습니다.',
          en: 'Separated domain, infrastructure, and UI layers with factory patterns for easy model swapping.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '동적 ROI 설정 및 실시간 프레임 스트리밍', en: 'Dynamic ROI Setup & Real-time Frame Streaming' },
        description: {
          ko: '카메라 및 비디오 입력에서 관심 영역(ROI)을 드래그하여 지정하고 즉시 추론을 개시하는 사용자 친화적 UI를 제공합니다.',
          en: 'Enables users to drag-select ROIs on video inputs and start real-time inference immediately.',
        },
        images: [
          image('/img/tech/seven_segment_roi_streaming.png', 'ROI 지정 및 스트리밍', 'ROI selection and streaming view'),
        ],
      },
      {
        title: { ko: '시간축 이상치 필터링 및 복원', en: 'Time-series Outlier Filtering & Reconstruction' },
        description: {
          ko: '급격한 인식값 변동(Jitter)이 발생할 때 이전 프레임의 신뢰도 가중치와 이동 평균을 비교하여 오인식을 자동 보정합니다.',
          en: 'Automatically calibrates erratic reading spikes (jitter) by comparing prior frame confidence and moving averages.',
        },
        images: [
          image('/img/tech/seven_segment_time_series_calibration.png', '시간축 데이터 보정 그래프', 'Time-series data calibration graph'),
        ],
      },
      {
        title: { ko: '측정 데이터 로깅 및 CSV/Excel 내보내기', en: 'Measurement Data Logging & Export' },
        description: {
          ko: '시간대별 인식 숫자와 변화 추이를 차트로 시각화하고 품질 관리용 리포트 파일로 즉시 출력합니다.',
          en: 'Visualizes time-series digit trends in charts and exports reports to CSV/Excel for QA logging.',
        },
        images: [
          image('/img/tech/seven_segment_data_logging_stats.png', '데이터 로깅 및 통계 시각화', 'Data logging and trend analytics'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'LightSVTR 모델을 커스텀 7-Segment 데이터로 미세조정 후 ONNX로 변환',
        en: 'Fine-tuned LightSVTR on custom 7-segment data and converted it to ONNX format.',
      },
      {
        ko: 'C# OpenCvSharp 기반 실시간 비디오 프레임 파이프라인 및 CTC Greedy Decoder 구현',
        en: 'Implemented C# OpenCvSharp video frame pipeline and CTC greedy decoder.',
      },
      {
        ko: '시간축 이동 윈도우 보정 알고리즘을 통한 플리커 오인식률 제로화',
        en: 'Zeroed flicker-related misreads using a sliding temporal window calibration algorithm.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '카메라 셔터 속도와 7-Segment LED 점멸 주기가 간섭하여 특정 프레임에서 숫자의 일부 획이 사라져 오인식이 발생했습니다.',
          en: 'Interference between camera shutter speed and LED multiplexing caused missing segment strokes in isolated frames.',
        },
        solution: {
          ko: '단일 프레임 판단 대신 최근 5개 프레임의 소프트맥스 확률 분포를 누적하여 종합 판정하는 시간축 누적 디코딩을 설계했습니다.',
          en: 'Designed temporal accumulated decoding that aggregates softmax probability distributions across 5 consecutive frames.',
        },
        result: {
          ko: '플리커로 인한 누락 프레임이 발생해도 100% 온전한 숫자 시퀀스를 안정적으로 복원했습니다.',
          en: 'Successfully restored 100% complete digit sequences even during severe flickering.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '처리 속도', en: 'Processing FPS' },
        value: { ko: '45+ FPS (CPU)', en: '45+ FPS (CPU)' },
        description: {
          ko: 'GPU 없이 일반 인텔 CPU 환경에서 45fps 실시간 처리 달성',
          en: 'Achieved 45+ fps real-time throughput on standard Intel CPUs without GPU',
        },
      },
      {
        label: { ko: '연속 인식 안정성', en: 'Continuous Stability' },
        value: { ko: '99.2%', en: '99.2%' },
        description: {
          ko: '플리커 및 조명 변동 상황에서의 연속 인식 성공률',
          en: 'Continuous recognition success rate under flicker and ambient lighting shifts',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '영상 기반 인식 시스템에서는 단일 프레임의 AI 정확도보다 프레임 간의 시간적 연속성을 모델링하는 것이 실환경 안정성에 결정적임을 깨달았습니다.',
        en: 'Learned that modeling temporal continuity across frames is crucial for real-world reliability in video-based recognition.',
      },
    ],
    limitations: [
      {
        ko: '카메라 초점이 완전히 흐려진 Defocus 블러 상황에 대한 보정은 추가적인 복원 필터가 필요합니다.',
        en: 'Severe defocus blur requires additional image deblurring filters.',
      },
    ],
    nextSteps: [
      {
        ko: '다중 ROI 동시 인식 기능과 산업용 PLC 프로토콜(Modbus/TCP) 연동 모듈을 추가할 계획입니다.',
        en: 'Planning to add multi-ROI simultaneous tracking and industrial PLC (Modbus/TCP) integration.',
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
      ko: '반도체/디스플레이 비전 검사 장비에서 발생하는 방대한 로그 데이터를 정규표현식으로 고속 파싱하고, IQR 이상치 필터링으로 장비 수율, 비전 알고리즘 처리 시간, 불량 패턴을 시각화 및 엑셀로 내보내는 C# WPF 도구입니다.',
      en: 'A C# WPF log analytics desktop tool that parses massive vision inspection equipment logs with regex, visualizes yield, vision algorithm latency, and defect patterns using IQR outlier filtering, and exports structured reports to Excel.',
    },
    startDate: new Date('2026-07-01'),
    endDate: new Date('2026-08-31'),
    teamInfo: { ko: 'Vision SW Researcher', en: 'Vision SW Researcher' },
    contribution: {
      ko: 'C# WPF 로그 파서 및 차트 시각화 구현, IQR 기반 이상치 검출 및 엑셀 데이터 내보내기/리포팅 기능 개발을 전담했습니다.',
      en: 'Built the C# WPF log parser and chart visualizer, IQR-based outlier detection, and Excel export/reporting functionality.',
    },
    images: [
      image('/img/tech/qlog_dashboard.png', 'Q-Log Analyzer 대시보드', 'Q-Log Analyzer dashboard view'),
    ],
    techChoices: [
      {
        name: 'C# WPF + LiveCharts',
        reason: {
          ko: '대용량 로그 통계 지표와 시계열 처리 시간 추이를 엔지니어에게 직관적인 차트로 시각화하기 위해 선택했습니다.',
          en: 'Chosen to visualize large-scale log statistics and time-series latency trends for field engineers.',
        },
      },
      {
        name: 'Compiled Regex & Streaming Parser',
        reason: {
          ko: '수백 MB에 달하는 텍스트 로그 파일을 메모리 과부하 없이 수 초 내에 파싱하기 위해 스트리밍 방식을 적용했습니다.',
          en: 'Applied streaming parsing with compiled regular expressions to parse hundreds of MBs in seconds without memory bloat.',
        },
      },
      {
        name: 'Excel Export Engine',
        reason: {
          ko: '파싱된 통계 지표와 이상치 분석 데이터를 현장 엔지니어가 보고서 작성 및 2차 분석에 즉시 활용할 수 있도록 엑셀 내보내기 기능을 구현했습니다.',
          en: 'Implemented Excel export functionality so field engineers can immediately utilize parsed metrics and outlier analysis for reports and secondary analysis.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '대용량 로그 고속 파싱 및 IQR 이상치 검출', en: 'High-speed Log Parsing & IQR Outlier Detection' },
        description: {
          ko: '정규표현식 컴파일과 비동기 스트림 리더를 통해 수백만 라인의 비전 로그를 파싱하고 사분위수(IQR)로 처리 지연 이상치를 식별합니다.',
          en: 'Parses millions of vision log lines asynchronously with compiled regex and identifies latency outliers using interquartile range (IQR).',
        },
        images: [
          image('/img/tech/qlog_parsing_outlier.png', '로그 파싱 및 이상치 분석', 'Log parsing and outlier analysis'),
        ],
      },
      {
        title: { ko: '비전 알고리즘 소요 시간 및 수율 통계 시각화', en: 'Vision Latency & Yield Statistics Visualization' },
        description: {
          ko: '각 검사 스테이지별 처리 시간(Tact Time)과 결함 분류 분포를 실시간 대시보드 차트로 표출합니다.',
          en: 'Displays tact time for each inspection stage and defect classification distributions in live dashboard charts.',
        },
        images: [
          image('/img/tech/qlog_processing_time_chart.png', '처리 시간 통계 차트', 'Tact time statistical charts'),
        ],
      },
      {
        title: { ko: '통계 데이터 엑셀(Excel) 내보내기 및 레포트 생성', en: 'Statistical Data Excel Export & Report Generation' },
        description: {
          ko: '파싱된 검사 로그 통계 지표, 스테이지별 소요 시간 및 이상치 분석 데이터를 정형화된 엑셀(.xlsx) 파일로 즉시 내보내어 현장 분석 리포트를 생성합니다.',
          en: 'Exports parsed inspection log metrics, stage tact times, and outlier analysis data into structured Excel (.xlsx) files for on-site diagnostic reports.',
        },
        images: [
          image('/img/tech/qlog_export_excel.png', '엑셀로 내보내기', 'Export to Excel feature'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '수백 MB 로그 파일의 파싱 속도를 기존 대비 4배 이상 가속화하는 스트리밍 파서 설계',
        en: 'Designed streaming parser accelerating log parsing over 4x on multi-hundred MB files.',
      },
      {
        ko: '이상치(Outlier) 자동 탐지 알고리즘을 구축하여 장비 병목 구간을 신속히 특정',
        en: 'Built outlier detection algorithms to rapidly pinpoint equipment tact-time bottlenecks.',
      },
      {
        ko: '통계 지표 및 비전 처리 시간 데이터를 표준 엑셀 서식으로 자동 변환/내보내는 리포트 모듈 개발',
        en: 'Developed an automated report module converting statistical metrics and vision tact-time data into standard Excel formats.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '기존 파서는 전체 로그를 한 번에 메모리에 로드하여 파일 크기가 500MB를 넘길 때 OutOfMemory 예외가 발생했습니다.',
          en: 'Legacy parser loaded entire log files into memory at once, causing OutOfMemory crashes on files exceeding 500 MB.',
        },
        solution: {
          ko: 'ReadLine 비동기 파이프라인과 메모리 풀링 버퍼를 도입하여 필요한 통계 메타데이터만 점진적으로 집계하도록 재설계했습니다.',
          en: 'Introduced an async ReadLine streaming pipeline with memory pooling, accumulating only required summary metrics.',
        },
        result: {
          ko: '메모리 점유율을 90% 이상 절감하고 1GB 이상의 대용량 로그도 15초 이내에 파싱을 완료했습니다.',
          en: 'Cut memory usage by over 90% and parsed 1GB+ logs in under 15 seconds.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '파싱 속도 향상', en: 'Parsing Speed' },
        value: { ko: '4배+ 가속', en: '4x+ Faster' },
        description: {
          ko: '대용량 장비 로그 파싱 소요 시간 대폭 단축',
          en: 'Drastically reduced equipment log parsing duration',
        },
      },
      {
        label: { ko: '메모리 절감', en: 'Memory Reduction' },
        value: { ko: '-90%', en: '-90%' },
        description: {
          ko: '스트리밍 파서 적용을 통한 안정적인 메모리 풋프린트',
          en: 'Stable memory footprint achieved via streaming architecture',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '현장 비전 장비의 안정성을 높이기 위해서는 비전 알고리즘 자체뿐만 아니라 이를 진단하고 모니터링하는 서브 시스템이 뒷받침되어야 함을 배웠습니다.',
        en: 'Learned that production vision stability requires robust diagnostic and monitoring sub-systems alongside the core vision algorithms.',
      },
    ],
    limitations: [
      {
        ko: '장비별로 상이한 비표준 로그 포맷에 대한 파서 플러그인 인터페이스 확장이 요구됩니다.',
        en: 'Requires plugin interface expansion for non-standard log formats across diverse machines.',
      },
    ],
    nextSteps: [
      {
        ko: '실시간 네트워크 소켓으로 장비 로그를 직접 수신하여 실시간 이상 감지 알람을 울리는 기능을 추가할 예정입니다.',
        en: 'Planning live TCP socket log streaming for real-time anomaly detection alerts.',
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
    id: 5,
    category: 'research',
    title: {
      ko: 'Instruction-Tuned LLM DPO Alignment Research',
      en: 'Instruction-Tuned LLM DPO Alignment Research',
    },
    oneLiner: {
      ko: 'Gemma 기반 SFT/DPO 및 QLoRA 경량 Fine-tuning을 통한 선호도 학습 효과 분석 연구',
      en: 'Research on Gemma SFT/DPO and QLoRA fine-tuning for preference alignment.',
    },
    overview: {
      ko: 'Instruction-Tuned 언어모델에 SFT와 Direct Preference Optimization(DPO)을 순차 적용하고, 선호도 데이터셋 정렬이 실제 추론 및 지시 이행 능력에 미치는 영향을 LLM-as-a-Judge와 벤치마크로 정량 분석한 연구입니다. 2026 KIIT 하계 학술대회 금상 및 2025 KIIT 추계 은상을 수상했습니다.',
      en: 'An empirical research study evaluating the sequential application of SFT and DPO to instruction-tuned language models. Analyzed the impact of preference alignment on reasoning and instruction following using LLM-as-a-Judge and standard benchmarks, winning 2026 KIIT Gold and 2025 KIIT Silver awards.',
    },
    startDate: new Date('2025-03-01'),
    endDate: new Date('2026-06-30'),
    teamInfo: { ko: 'AI Researcher (개인/팀)', en: 'AI Researcher (Solo/Team)' },
    contribution: {
      ko: '데이터셋 전처리 파이프라인 구축, Unsloth QLoRA 4-bit SFT/DPO 학습, LLM-as-a-Judge 자동 평가 시스템 개발 및 논문 작성을 주도했습니다.',
      en: 'Led dataset pipeline, Unsloth QLoRA 4-bit SFT/DPO training, LLM-as-a-Judge evaluation, and paper authorship.',
    },
    images: [
      image('/img/tech/llm_alignment_pipeline.png', 'LLM Alignment 파이프라인', 'LLM Alignment pipeline overview'),
      image('/img/tech/llm_sft_dpo_flow.png', 'SFT/DPO 학습 흐름', 'SFT/DPO training architecture'),
      image('/img/tech/llm_eval_matrix.png', '자동 평가 결과 매트릭스', 'Automated evaluation result matrix'),
    ],
    techChoices: [
      {
        name: 'Gemma & QLoRA (4-bit)',
        reason: {
          ko: '제한된 GPU 컴퓨팅 자원 환경에서 대형 언어모델을 효과적으로 학습시키기 위해 4-bit 양자화와 LoRA 어댑터를 적용했습니다.',
          en: 'Applied 4-bit quantization and LoRA adapters to train large language models efficiently under limited GPU resources.',
        },
      },
      {
        name: 'Direct Preference Optimization (DPO)',
        reason: {
          ko: '복잡한 보상 모델(Reward Model) 학습 없이 직접적인 정책 손실 함수로 선호도를 학습하여 정렬 안정성을 높였습니다.',
          en: 'Trained policy models directly from preference pairs without training a separate reward model, stabilizing alignment.',
        },
      },
      {
        name: 'LLM-as-a-Judge Evaluation',
        reason: {
          ko: '주관적 서술형 응답에 대한 정량적이고 일관된 품질 평가를 위해 고성능 판사 모델 기반 자동 평가 프레임워크를 구축했습니다.',
          en: 'Constructed an automated evaluation framework with high-capacity judge models for consistent qualitative assessment.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'SFT 및 DPO 단계별 학습 파이프라인', en: 'Stepwise SFT & DPO Training Pipeline' },
        description: {
          ko: '도메인 특화 지시 데이터셋으로 SFT를 수행한 뒤, 인간 선호도 쌍(Chosen/Rejected)으로 DPO를 진행하는 2단계 정렬을 수행했습니다.',
          en: 'Executed two-stage alignment consisting of SFT on domain instruction data followed by DPO on chosen/rejected preference pairs.',
        },
        images: [
          image('/img/tech/llm_sft_dpo_flow.png', 'SFT/DPO 학습 흐름', 'SFT/DPO training architecture'),
        ],
      },
      {
        title: { ko: 'LLM-as-a-Judge 자동화 평가 프레임워크', en: 'LLM-as-a-Judge Automated Benchmark' },
        description: {
          ko: '평가 기준(정확성, 논리성, 안전성)을 체계화한 프롬프트로 대규모 응답 쌍을 공정하게 블라인드 채점하는 파이프라인을 구축했습니다.',
          en: 'Built a blind scoring pipeline evaluating model response pairs systematically across accuracy, logic, and safety.',
        },
        images: [
          image('/img/tech/llm_eval_matrix.png', '자동 평가 결과 매트릭스', 'Automated evaluation result matrix'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'JSONL 기반 대규모 프롬프트-응답 선호도 데이터셋 정제 및 필터링 파이프라인 개발',
        en: 'Developed JSONL-based preference dataset cleaning and filtering pipeline.',
      },
      {
        ko: 'Unsloth 및 PyTorch 기반 메모리 최적화 학습 스크립트 작성 및 하이퍼파라미터 탐색',
        en: 'Authored memory-optimized training scripts in Unsloth/PyTorch and conducted hyperparameter search.',
      },
      {
        ko: '한국정보기술학회(KIIT) 논문 게재 및 구두 발표 (금상/은상 2회 연속 수상)',
        en: 'Published papers in KIIT and delivered oral presentations, winning Gold and Silver awards consecutively.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: 'DPO 학습 과정에서 Beta 파라미터가 적절하지 않을 경우 모델이 이전 지식(Knowledge)을 잃어버리는 Catastrophic Forgetting이 발생했습니다.',
          en: 'Improper Beta hyperparameter settings in DPO caused catastrophic forgetting of pretrained domain knowledge.',
        },
        solution: {
          ko: 'Beta 값을 0.05~0.1 구간으로 정밀 튜닝하고, 레퍼런스 모델과의 KL 발산(KL Divergence)을 모니터링하여 가중치 이탈을 제어했습니다.',
          en: 'Fine-tuned Beta between 0.05 and 0.1 while monitoring KL divergence against the reference model to prevent weight drift.',
        },
        result: {
          ko: '기본 추론 능력을 98% 이상 보존하면서도 사용자 선호도 일치율을 28% 향상시켰습니다.',
          en: 'Preserved over 98% of base reasoning while improving human preference alignment win-rate by 28%.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '학술대회 수상', en: 'Conference Awards' },
        value: { ko: '2026 KIIT 금상 / 2025 은상', en: '2026 Gold / 2025 Silver' },
        description: {
          ko: '한국정보기술학회 주관 우수 논문상 2회 연속 수상',
          en: 'Consecutive Best Paper Awards at KIIT Conferences',
        },
      },
      {
        label: { ko: '선호도 승률', en: 'Alignment Win-rate' },
        value: { ko: '+28.4%', en: '+28.4%' },
        description: {
          ko: 'Base 모델 대비 LLM-as-a-Judge 선호도 승률 대폭 향상',
          en: 'Significant win-rate increase evaluated by LLM-as-a-Judge',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '생성형 AI 모델의 정렬은 단순 데이터 양보다 선호도 데이터셋의 일관성과 정교한 손실 함수 제어가 핵심임을 깊이 이해했습니다.',
        en: 'Learned that generative AI alignment relies critically on preference dataset consistency and delicate loss regularization rather than raw volume.',
      },
    ],
    limitations: [
      {
        ko: '판사 모델 자체의 편향(Position bias, Verbosity bias)을 보정하기 위한 다중 판사 앙상블이 필요합니다.',
        en: 'Multi-judge ensemble is required to further mitigate position and verbosity biases.',
      },
    ],
    nextSteps: [
      {
        ko: 'RAG 시스템과의 하이브리드 아키텍처 및 Reasoning(추론형) LLM 정렬로 연구를 확장할 예정입니다.',
        en: 'Planning to expand research into hybrid RAG architectures and reasoning-focused LLM alignment.',
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
    title: {
      ko: 'JobForeigner (JobTalk) : 외국인 구인구직 플랫폼',
      en: 'JobForeigner (JobTalk): Multilingual Job Platform',
    },
    oneLiner: {
      ko: '언어 장벽과 위치 정보 문제를 함께 해결한 다국어 지도 기반 외국인 구인구직 플랫폼',
      en: 'A multilingual map-based job discovery platform for foreign workers.',
    },
    overview: {
      ko: '국내 외국인 구직자가 겪는 언어 장벽과 비자/위치 확인의 어려움을 해결하기 위해 다국어 실시간 전환, 카카오맵 시각화, TanStack Query 캐싱, FastAPI/Ollama 연동을 통합한 웹 애플리케이션입니다.',
      en: 'A web platform addressing language and location hurdles for foreign job seekers in Korea, featuring instant multilingual switching, Kakao Map visualization, TanStack Query caching, and FastAPI/Ollama backend integration.',
    },
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-11-15'),
    teamInfo: { ko: '팀 프로젝트 5인', en: '5-person team project' },
    contribution: {
      ko: '다국어(i18n) 시스템 구축, Kakao Map 클러스터링 및 지도 인터랙션, TanStack Query 캐싱 최적화, 채용 상세 UI를 담당했습니다.',
      en: 'Owned i18n localization system, Kakao Map clustering, TanStack Query cache optimization, and job detail UX.',
    },
    images: [
      image('/img/tech/jobtalk.png', '다국어 채용 탐색 메인 화면', 'Multilingual job discovery screen'),
    ],
    techChoices: [
      {
        name: 'React + TypeScript',
        reason: {
          ko: '타입 안정성을 바탕으로 복잡한 채용 필터 및 지도 상태를 에러 없이 유지보수하기 위해 채택했습니다.',
          en: 'Adopted for type-safe state handling across complex job filters and map coordinates.',
        },
      },
      {
        name: 'TanStack Query',
        reason: {
          ko: '목록과 지도 마커 간의 빈번한 탐색에서 중복 API 요청을 방지하고 캐시 우선 전략을 구현하기 위해 사용했습니다.',
          en: 'Used to prevent duplicate fetches and implement cache-first rendering across list and map views.',
        },
      },
      {
        name: 'Kakao Map API & react-i18next',
        reason: {
          ko: '국내 지리 정보의 정확한 시각화와 한국어/영어 실시간 언어 전환 UX를 완벽히 지원하기 위해 구성했습니다.',
          en: 'Chosen for accurate Korean map data visualization and seamless real-time Korean/English switching.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '실시간 다국어 UI 및 도메인 번역', en: 'Instant Multilingual UI & Domain Localization' },
        description: {
          ko: '새로고침 없이 한국어와 영어를 즉시 전환하며, 채용 공고의 핵심 자격 요건을 정형화된 다국어 포맷으로 제공합니다.',
          en: 'Switches seamlessly between Korean and English without reloads and renders job prerequisites in normalized multilingual formats.',
        },
        images: [
          image('/img/tech/jobforeigner.png', '다국어 전환 인터페이스', 'Multilingual toggle UI'),
        ],
      },
      {
        title: { ko: '카카오맵 기반 위치 탐색 및 클러스터링', en: 'Kakao Map-based Location Discovery' },
        description: {
          ko: '구직자 위치 주변의 사업장 위치를 마커와 클러스터로 시각화하고 반경별 필터링을 제공합니다.',
          en: 'Visualizes job sites around user locations with interactive clusters and radius filters.',
        },
        images: [
          image('/img/tech/jobtalk.png', '지도 기반 공고 탐색', 'Map-based job exploration'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'i18next 기반 번역 리소스 구조화 및 컴포넌트 단위 번역 훅 적용',
        en: 'Structured i18next resources and applied component-level translation hooks.',
      },
      {
        ko: '지도 오버레이와 리스트 컴포넌트 간 상호작용 최적화로 불필요한 리렌더링 제거',
        en: 'Optimized interactions between map overlays and list components to eliminate unnecessary re-renders.',
      },
      {
        ko: 'FastAPI 및 Ollama 기반 AI 챗봇 인터페이스 연동',
        en: 'Integrated AI chatbot interfaces powered by FastAPI and Ollama.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '지도 줌/이동 시마다 전체 마커 목록을 재요청하여 브라우저 프레임 드랍이 발생했습니다.',
          en: 'Re-fetching all markers on every map zoom/pan caused severe browser frame drops.',
        },
        solution: {
          ko: '현재 뷰포트(Bounds) 기반 지연 쿼리(Debounce)와 TanStack Query 캐시 키를 구역 단위로 분할 적용했습니다.',
          en: 'Implemented debounced viewport queries and partitioned TanStack Query cache keys by geographic bounding box.',
        },
        result: {
          ko: '지도 조작 시 API 호출 수를 70% 줄이고 부드러운 60fps 렌더링을 달성했습니다.',
          en: 'Cut map API calls by 70% and achieved smooth 60 fps interactions.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: 'API 호출 최적화', en: 'API Call Reduction' },
        value: { ko: '-70%', en: '-70%' },
        description: {
          ko: '뷰포트 바운딩 박스 캐싱을 통한 서버 부하 절감',
          en: 'Reduced backend server load via viewport bounding box caching',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '지도와 목록이 연동되는 복잡한 프론트엔드에서는 클라이언트 상태와 서버 캐시의 경계를 엄격히 분리하는 것이 성능의 핵심임을 배웠습니다.',
        en: 'Learned that strictly separating client UI state from server cache is essential for high-performance map-list applications.',
      },
    ],
    limitations: [
      {
        ko: '동남아시아 주요 언어(베트남어, 필리핀어 등)의 추가 확장이 필요합니다.',
        en: 'Expansion to additional Southeast Asian languages (Vietnamese, Tagalog) is needed.',
      },
    ],
    nextSteps: [
      {
        ko: '비자 발급 가능 여부를 진단하는 비자 시뮬레이션 알고리즘을 추가할 예정입니다.',
        en: 'Planning to add an interactive visa eligibility simulation tool.',
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
    id: 7,
    category: 'app',
    title: {
      ko: '금품타 : 대학생 학습시간 인증 & 실시간 랭킹 앱',
      en: 'Geumpumta: Verified Study-Time Tracking & Real-Time Ranking App',
    },
    oneLiner: {
      ko: '학교 Wi-Fi 인증과 백그라운드 타이머 보정, 실시간 랭킹을 결합한 App Store & Google Play 출시 서비스',
      en: 'A production Flutter app shipped to App Store and Google Play with Wi-Fi verification and robust timers.',
    },
    overview: {
      ko: '대학생의 실제 학습 시간을 신뢰성 있게 검증하고 학과 및 개인별 실시간 랭킹을 제공하는 모바일 앱입니다. Flutter + Riverpod + MVVM 기반으로 기획부터 UI/UX, 인증, 백그라운드 타이머 보정, iOS Screen Time API 연동, 양대 마켓(App Store & Google Play) 배포 및 심사 대응까지 100% 단독으로 주도했습니다.',
      en: 'A mobile application verifying real university student study hours and providing department/individual rankings. Built with Flutter, Riverpod, and MVVM, I independently led the full lifecycle from UI/UX and authentication to background timer stabilization, iOS Screen Time API integration, and App Store & Google Play release.',
    },
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-03-01'),
    teamInfo: { ko: '개인 프로젝트 100%', en: 'Solo project 100%' },
    contribution: {
      ko: '기획, Flutter 앱 풀스택 개발, Riverpod 상태 관리, 학교 Wi-Fi 인증, 백그라운드 시간 보정, 양대 마켓 배포 및 심사 대응을 100% 전담했습니다.',
      en: '100% ownership of planning, Flutter development, Riverpod state design, Wi-Fi verification, timer precision, and dual store release.',
    },
    images: [
      image('/img/tech/geumpumta_wifi_ranking.png', 'Wi-Fi 인증 및 랭킹 화면', 'Wi-Fi verification and ranking view'),
      image('/img/tech/geumpumta_timer.png', '타이머 측정 화면', 'Timer measurement screen'),
      image('/img/tech/geumpumta_stats.png', '통계 화면', 'Statistics screen'),
      image('/img/tech/geumpumta_more.png', '더보기 화면', 'Settings and more screen'),
    ],
    techChoices: [
      {
        name: 'Flutter & Dart',
        reason: {
          ko: '단일 코드베이스로 iOS와 Android 양대 마켓에 완벽히 일치하는 네이티브급 UI 품질을 빠르게 출시하기 위해 선택했습니다.',
          en: 'Chosen to ship identical native-quality UI rapidly to both iOS and Android from a single codebase.',
        },
      },
      {
        name: 'Riverpod + MVVM',
        reason: {
          ko: '타이머, 네트워크 인증, 소셜 로그인, 랭킹 상태가 결합된 복잡한 비즈니스 로직을 완벽히 분리하기 위해 채택했습니다.',
          en: 'Adopted to isolate complex state across timers, network auth, social logins, and ranking logic.',
        },
      },
      {
        name: 'iOS Screen Time API & Gateway IP',
        reason: {
          ko: '학습 중 딴짓 앱을 차단하고 학교 Wi-Fi 접속 여부를 게이트웨이 IP로 검증해 공정한 경쟁을 보장하기 위해 연동했습니다.',
          en: 'Integrated to restrict distracting apps during study and verify on-campus Wi-Fi gateway IPs for fair ranking.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '고신뢰성 백그라운드 학습 타이머', en: 'High-Reliability Background Study Timer' },
        description: {
          ko: '앱 백그라운드 전환, 강제 종료, 시스템 슬립 상황에서도 서버 Heartbeat 기준 오프셋 계산으로 1초의 오차도 없는 시간 기록을 보장합니다.',
          en: 'Guarantees zero timer drift across app switches, terminations, and system sleeps using server heartbeat offset calculations.',
        },
        images: [
          image('/img/tech/geumpumta_timer.png', '타이머 측정 화면', 'Timer measurement screen'),
        ],
      },
      {
        title: { ko: '학교 Wi-Fi 게이트웨이 IP 기반 인증', en: 'School Wi-Fi Gateway IP Verification' },
        description: {
          ko: '실제 교내 학습 공간에 있는지 네트워크 IP를 검증하여 허위 학습 시간 기록을 원천 차단합니다.',
          en: 'Validates on-campus study presence by verifying network gateway IPs to eliminate fake study records.',
        },
        images: [
          image('/img/tech/geumpumta_wifi_ranking.png', 'Wi-Fi 인증 및 랭킹 화면', 'Wi-Fi verification and ranking view'),
        ],
      },
      {
        title: { ko: '학과/개인별 실시간 랭킹 및 통계', en: 'Live Department & Individual Rankings' },
        description: {
          ko: '일간/주간/월간 단위 학습 통계와 학과 대항전 랭킹을 실시간으로 집계해 동기부여를 극대화합니다.',
          en: 'Aggregates daily, weekly, and monthly study stats with live department leaderboards to boost motivation.',
        },
        images: [
          image('/img/tech/geumpumta_stats.png', '통계 화면', 'Statistics screen'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '앱 생명주기(AppLifecycleState) 변화에 강건한 서버 동기화 타이머 아키텍처 설계',
        en: 'Architected robust server-synced timer resilient to AppLifecycleState transitions.',
      },
      {
        ko: 'Kakao, Google, Apple 소셜 로그인 및 토큰 자동 갱신 인터셉터 구현',
        en: 'Implemented Kakao, Google, and Apple social logins with automatic token refresh interceptors.',
      },
      {
        ko: 'App Store Connect 및 Google Play Console 배포, 가이드라인 준수 및 심사 1차 통과',
        en: 'Handled App Store Connect & Google Play Console submissions, achieving first-attempt guideline approvals.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: 'iOS와 Android의 OS 백그라운드 절전 정책으로 인해 타이머 스레드가 멈추며 누적 공부 시간이 누락되는 현상이 발생했습니다.',
          en: 'OS power-saving modes suspended background timer threads, causing lost study time.',
        },
        solution: {
          ko: '스마트폰 내부 시계의 타이머 루프에 의존하지 않고, 시작/일시정지 시점의 타임스탬프와 서버 Heartbeat 간격을 기록해 차분(Delta)을 계산하는 방식으로 전면 수정했습니다.',
          en: 'Replaced local tick loops with absolute timestamp deltas cross-verified against server heartbeat intervals.',
        },
        result: {
          ko: '앱이 장시간 백그라운드에 있거나 강제 종료된 후 재진입해도 정확한 누적 시간을 완벽히 복원했습니다.',
          en: 'Restored 100% accurate study accumulation even after prolonged backgrounding or app restarts.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '배포 현황', en: 'Release Status' },
        value: { ko: 'App Store & Play Store', en: 'App Store & Play Store' },
        description: {
          ko: 'iOS 및 Android 양대 마켓 정식 출시 및 서비스 운영',
          en: 'Officially launched and operating on both major mobile stores',
        },
      },
      {
        label: { ko: '타이머 정확도', en: 'Timer Reliability' },
        value: { ko: '100% 무오차 복원', en: '100% Zero-drift' },
        description: {
          ko: 'OS 생명주기 및 강제종료 상황에서도 데이터 무손실',
          en: 'Zero data loss across all OS lifecycle events and app restarts',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '모바일 서비스는 단순한 UI 코딩을 넘어 OS 레벨의 배터리 최적화 정책, 백그라운드 제약, 마켓 심사 가이드라인을 고려한 견고한 설계가 핵심임을 배웠습니다.',
        en: 'Learned that mobile engineering demands rigorous architecture respecting OS power management, background restrictions, and store review guidelines.',
      },
    ],
    limitations: [
      {
        ko: '실시간 그룹 스터디룸(화상/음성 연동) 기능은 추후 확장 과제로 남아있습니다.',
        en: 'Real-time group study rooms (voice/video) remain for future expansion.',
      },
    ],
    nextSteps: [
      {
        ko: '개인화된 AI 학습 패턴 분석 리포트 및 위젯(Widget) 기능을 추가할 계획입니다.',
        en: 'Planning personalized AI study analytics reports and home screen widgets.',
      },
    ],
    links: [
      {
        label: { ko: '마켓 배포 현황', en: 'Release Status' },
        note: {
          ko: 'App Store 및 Google Play 양대 마켓 정식 출시 후 현재는 서비스 운영이 종료(중단)되었습니다.',
          en: 'Officially shipped to App Store and Google Play; the live service is currently discontinued.',
        },
      },
      {
        label: { ko: 'GitHub 저장소', en: 'GitHub Repository' },
        note: privateRepoNote,
      },
    ],
  },
  {
    id: 8,
    category: 'app',
    title: {
      ko: 'UhDyL : 못난이 농산물 모바일 커머스 플랫폼',
      en: 'UhDyL: Imperfect Produce Mobile Commerce Platform',
    },
    oneLiner: {
      ko: '못난이 농산물 직거래와 가치소비를 지원하는 React Native 기반 크로스플랫폼 커머스 앱',
      en: 'A React Native cross-platform mobile commerce app connecting consumers with imperfect produce.',
    },
    overview: {
      ko: '버려지는 못난이 농산물을 합리적인 가격에 직거래할 수 있도록 지역 농가와 소비자를 연결하는 모바일 커머스 MVP 프로젝트입니다. React Native + Expo + Zustand + TanStack Query 기반으로 상품 탐색, 장바구니, 결제 준비 흐름을 구현했습니다.',
      en: 'A mobile commerce MVP project connecting regional farms with sustainability-minded consumers for imperfect produce. Built with React Native, Expo, Zustand, and TanStack Query to deliver seamless product exploration, cart management, and checkout flows.',
    },
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-08-30'),
    teamInfo: { ko: '팀 프로젝트 4인', en: '4-person team project' },
    contribution: {
      ko: 'React Native 앱 UI 구현, Zustand 전역 상태 설계, 공통 컴포넌트 모듈화, TanStack Query 캐시 연동을 담당했습니다.',
      en: 'Handled React Native UI, Zustand global state, shared component architecture, and TanStack Query caching.',
    },
    images: [
      image('/img/tech/uhdyl.png', 'UhDyL 농산물 탐색 화면', 'UhDyL produce exploration screen'),
    ],
    techChoices: [
      {
        name: 'React Native + Expo',
        reason: {
          ko: '빠른 프로토타이핑과 단일 코드로 iOS/Android 동시 검증을 위해 도입했습니다.',
          en: 'Adopted for fast prototyping and simultaneous iOS/Android validation.',
        },
      },
      {
        name: 'Zustand',
        reason: {
          ko: '장바구니와 주문 상태를 가볍고 직관적으로 관리하며 보일러플레이트를 최소화하기 위해 선택했습니다.',
          en: 'Chosen for lightweight, boilerplate-free cart and order state management.',
        },
      },
      {
        name: 'Styled Components',
        reason: {
          ko: '모바일 반응형 컴포넌트 단위의 스타일 재사용성을 극대화하기 위해 사용했습니다.',
          en: 'Used to maximize style modularity across responsive mobile components.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '농가 스토리 기반 상품 탐색', en: 'Story-driven Produce Exploration' },
        description: {
          ko: '단순 상품 정보뿐만 아니라 농가의 수확 배경과 못난이 사유를 시각적으로 전달하는 상세 UX를 구현했습니다.',
          en: 'Presents farm background and produce story alongside product listings to drive value-based purchasing.',
        },
        images: [
          image('/img/tech/uhdyl.png', '상품 탐색 및 상세 화면', 'Produce listing and detail view'),
        ],
      },
      {
        title: { ko: '전역 장바구니 및 주문 흐름', en: 'Global Cart & Checkout Flow' },
        description: {
          ko: 'Zustand 스토어로 여러 화면에 걸친 장바구니 수량 변경과 총액 계산을 실시간으로 동기화했습니다.',
          en: 'Synchronized cart quantities and real-time total calculations across screens via Zustand.',
        },
        images: [
          image('/img/tech/uhdyl.png', '장바구니 인터랙션', 'Cart interaction flow'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '공통 디자인 가이드에 맞춘 버튼, 카드, 인풋 등 재사용 컴포넌트 라이브러리 제작',
        en: 'Authored reusable component library covering buttons, cards, and inputs based on design specs.',
      },
      {
        ko: 'Zustand 기반 장바구니 및 사용자 인증 상태 슬라이스 설계',
        en: 'Architected Zustand state slices for cart items and user session data.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '장바구니 항목 변경 시 불필요하게 전체 상품 리스트가 리렌더링되며 스크롤 버벅임이 발생했습니다.',
          en: 'Modifying cart items caused unnecessary full-list re-renders, introducing scroll stutter.',
        },
        solution: {
          ko: 'Zustand Selector를 세분화하여 개별 아이템 컴포넌트가 자신에게 필요한 상태만 구독하도록 분리했습니다.',
          en: 'Granularized Zustand selectors so item components subscribe exclusively to their own slice.',
        },
        result: {
          ko: '리렌더링 횟수를 80% 줄이고 매끄러운 60fps 스크롤 성능을 확보했습니다.',
          en: 'Reduced re-renders by 80% and restored silky-smooth 60 fps scrolling.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: 'MVP 완성도', en: 'MVP Completion' },
        value: { ko: '핵심 기능 100%', en: '100% Core Features' },
        description: {
          ko: '탐색, 장바구니, 주문 연동 플로우 완성',
          en: 'Completed full exploration, cart, and checkout pipeline',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '커머스 앱은 결제와 장바구니 상태의 일관성이 사용자 신뢰와 직결되므로 세심한 상태 설계가 선행되어야 함을 배웠습니다.',
        en: 'Learned that commerce apps require strict state consistency between cart and checkout to maintain user trust.',
      },
    ],
    limitations: [
      {
        ko: '실제 PG사 결제 모듈 연동은 테스트 모드로만 제한되었습니다.',
        en: 'Live PG payment integration was limited to sandbox testing mode.',
      },
    ],
    nextSteps: [
      {
        ko: '정기 구독 배송 기능과 농가 직거래 라이브 커머스 기능을 추가할 계획입니다.',
        en: 'Planning subscription deliveries and live commerce streams for regional farms.',
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
    category: 'app',
    title: {
      ko: 'Chirp-aid : 보육원 기부 & 실시간 소통 앱',
      en: 'Chirp-aid: Donation & Real-time Community App',
    },
    oneLiner: {
      ko: '후원금 사용 내역의 투명성을 높이고 보육원과 기부자를 잇는 모바일 앱 (KCI 논문 게재)',
      en: 'A mobile app promoting donation transparency and donor-facility communication (Published in KCI).',
    },
    overview: {
      ko: '기부자와 보육원 간의 신뢰 문제를 해결하기 위해 후원금 사용 내역을 투명하게 공개하고 실시간 1:1 채팅 소통을 제공하는 Flutter 모바일 앱입니다. 레거시 코드베이스의 Riverpod 상태 관리 리팩토링, 관리자 데이터 무결성 보장, 실시간 채팅 기능을 구현했으며 KCI 학술지에 논문으로 게재되었습니다.',
      en: 'A Flutter mobile app solving donor-facility trust issues through transparent fund tracking and real-time chat. Refactored legacy architecture to Riverpod, resolved admin data synchronization issues, built live chat features, and published findings in a KCI-indexed academic journal.',
    },
    startDate: new Date('2024-08-01'),
    endDate: new Date('2025-02-15'),
    teamInfo: { ko: '팀 프로젝트 4인', en: '4-person team project' },
    contribution: {
      ko: '레거시 아키텍처 분석, Riverpod 기반 상태 리팩토링, 실시간 채팅 기능 구현, KCI 논문 작성을 담당했습니다.',
      en: 'Owned legacy analysis, Riverpod refactoring, real-time chat implementation, and KCI paper publication.',
    },
    images: [
      image('/img/tech/chripaid.png', 'Chirp-aid 기부 및 채팅 화면', 'Chirp-aid donation and chat interface'),
    ],
    techChoices: [
      {
        name: 'Flutter & Riverpod',
        reason: {
          ko: '스파게티화된 레거시 상태 흐름을 단방향 데이터 흐름으로 정리하고 예측 가능한 상태를 구성하기 위해 도입했습니다.',
          en: 'Introduced to refactor tangled legacy state into a predictable unidirectional data flow.',
        },
      },
      {
        name: 'WebSocket & REST API',
        reason: {
          ko: '보육원 관리자와 후원자 간의 지연 없는 실시간 메시지 송수신을 위해 웹소켓을 연동했습니다.',
          en: 'Integrated WebSockets for low-latency real-time messaging between donors and facility admins.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '투명한 기부금 사용 내역 피드', en: 'Transparent Donation Usage Feed' },
        description: {
          ko: '영수증 및 집행 내역을 카드 형태로 공개하여 기부 신뢰도를 극대화했습니다.',
          en: 'Publishes receipts and fund usage records in transparent card feeds to maximize trust.',
        },
        images: [
          image('/img/tech/chripaid.png', '기부금 내역 피드', 'Donation usage history feed'),
        ],
      },
      {
        title: { ko: '보육원-후원자 실시간 채팅', en: 'Donor-Facility Live Chat' },
        description: {
          ko: '후원 아동과의 소통 및 감사 메시지를 실시간으로 주고받을 수 있는 채팅 UI를 구현했습니다.',
          en: 'Implemented real-time messaging UI for updates and thank-you notes between facilities and donors.',
        },
        images: [
          image('/img/tech/chripaid.png', '실시간 채팅 인터페이스', 'Real-time chat interface'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '레거시 Provider 구조를 Riverpod 2.0 StateNotifier로 전면 마이그레이션',
        en: 'Migrated legacy Provider architecture entirely to Riverpod 2.0 StateNotifiers.',
      },
      {
        ko: '관리자 수정 데이터가 사용자 화면에 즉각 반영되지 않던 동기화 버그 해결',
        en: 'Resolved critical sync bugs where admin updates failed to reflect in client screens.',
      },
      {
        ko: 'KCI 등재 학술지 논문 공동 저자 참여 및 게재 완료',
        en: 'Co-authored and published research in a KCI-indexed academic journal.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '관리자가 후원 내역을 수정해도 클라이언트 앱의 캐시와 Riverpod 프로바이더가 갱신되지 않아 이전 데이터가 노출되는 정합성 문제가 있었습니다.',
          en: 'Admin edits were not invalidating cached Riverpod providers, resulting in stale data on user screens.',
        },
        solution: {
          ko: 'Riverpod Provider의 수명 주기를 `autoDispose`와 이벤트 기반 `ref.invalidate()` 구조로 재정의했습니다.',
          en: 'Redefined provider lifecycles using `autoDispose` and event-driven `ref.invalidate()` hooks.',
        },
        result: {
          ko: '데이터 수정 즉시 100% 실시간으로 UI에 동기화되는 완전한 무결성을 달성했습니다.',
          en: 'Achieved 100% instant UI synchronization upon administrative updates.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '대외 성과', en: 'Publication' },
        value: { ko: 'KCI 논문 게재', en: 'KCI Journal Published' },
        description: {
          ko: '프로젝트 기술과 사회적 기여를 인정받아 학술지 등재',
          en: 'Published in an academic journal for technical and social merits',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '레거시 코드를 개선할 때는 새로운 기능 개발보다 상태의 소유권(Ownership)과 갱신 시점을 명확히 정의하는 것이 우선임을 배웠습니다.',
        en: 'Learned that refactoring legacy systems requires defining clear state ownership and invalidation triggers before adding new features.',
      },
    ],
    limitations: [
      {
        ko: '대규모 미디어(고용량 사진/동영상) 전송 시 압축 파이프라인이 더 고도화될 필요가 있습니다.',
        en: 'Media compression pipelines need further enhancement for large video uploads.',
      },
    ],
    nextSteps: [
      {
        ko: '정기 후원 자동 결제 및 기부금 영수증 자동 발급 시스템을 연동할 계획입니다.',
        en: 'Planning recurring donation auto-payments and automated tax deduction receipts.',
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
    title: {
      ko: 'Plate Picks : 회식 메뉴 익명 투표 풀스택 시스템',
      en: 'Plate Picks: Full-Stack Anonymous Voting System',
    },
    oneLiner: {
      ko: '눈치 보지 않는 조직 의사결정을 위한 익명 투표 및 통계 시각화 풀스택 플랫폼 (React + NestJS + Docker)',
      en: 'A full-stack anonymous voting and analytics platform built with React, NestJS, and Docker.',
    },
    overview: {
      ko: '수직적 조직 문화에서 발생하는 회식 메뉴 선정의 심리적 부담을 없애기 위해 기획된 익명 투표 및 실시간 집계 서비스입니다. React 프론트엔드부터 NestJS 모듈형 백엔드, MySQL 데이터 모델링, Docker 컨테이너 배포까지 100% 단독으로 구현했습니다.',
      en: 'A full-stack anonymous voting and real-time tallying service designed to eliminate social pressure during team meal decisions. 100% independently built from React frontend and NestJS modular backend to MySQL relational modeling and Docker deployment.',
    },
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-05-10'),
    teamInfo: { ko: '개인 풀스택 프로젝트 100%', en: 'Solo Full-stack Project 100%' },
    contribution: {
      ko: '기획, React 프론트엔드, NestJS 백엔드 API, MySQL DB 모델링, Docker 컨테이너 배포까지 전 과정을 100% 수행했습니다.',
      en: '100% ownership from React UI and NestJS API to MySQL modeling and Docker deployment.',
    },
    images: [
      image('/img/tech/plate_picks.png', 'Plate Picks 투표 및 결과 화면', 'Plate Picks voting and analytics view'),
    ],
    techChoices: [
      {
        name: 'NestJS & TypeScript',
        reason: {
          ko: '모듈형 아키텍처와 DI(의존성 주입)를 활용하여 투표, 인증, 통계 도메인을 명확히 격리하기 위해 선택했습니다.',
          en: 'Chosen for modular architecture and dependency injection to isolate voting, auth, and analytics domains.',
        },
      },
      {
        name: 'MySQL & TypeORM',
        reason: {
          ko: '투표 트랜잭션과 복수 선택 집계의 ACID 무결성을 엄격히 보장하기 위해 관계형 DB를 채택했습니다.',
          en: 'Adopted to strictly enforce ACID transactional integrity during vote aggregation.',
        },
      },
      {
        name: 'Docker & Nginx',
        reason: {
          ko: '프론트엔드와 백엔드 서비스를 격리된 컨테이너 환경으로 패키징하고 단일 도메인 리버스 프록시로 서빙하기 위해 사용했습니다.',
          en: 'Used to containerize frontend and backend services under Nginx reverse proxy.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '완전 익명 투표 및 중복 투표 방지', en: 'Anonymous Voting with Anti-Duplication' },
        description: {
          ko: '사용자 식별 토큰 해싱을 통해 개인 투표 내역의 익명성을 보장하면서도 중복 투표를 원천 차단했습니다.',
          en: 'Ensures absolute vote anonymity via hashed tokens while preventing duplicate ballot submissions.',
        },
        images: [
          image('/img/tech/plate_picks.png', '투표 생성 및 제출 화면', 'Vote creation and ballot submission'),
        ],
      },
      {
        title: { ko: '실시간 집계 및 통계 대시보드', en: 'Real-time Analytics Dashboard' },
        description: {
          ko: '카테고리별 선호도, 비선호 음식 필터링, 최적 메뉴 추천 알고리즘 결과를 차트로 시각화합니다.',
          en: 'Visualizes category preferences, vetoed items, and optimal menu recommendations in real-time charts.',
        },
        images: [
          image('/img/tech/plate_picks.png', '결과 통계 시각화', 'Result statistics visualization'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'NestJS 기반 RESTful API 설계 및 Swagger API 문서 자동화',
        en: 'Designed NestJS RESTful APIs and automated Swagger documentation.',
      },
      {
        ko: '트랜잭션 기반 투표 카운트 정합성 보장 로직 구현',
        en: 'Implemented transaction-based vote tallying to ensure zero count discrepancy.',
      },
      {
        ko: 'Docker Compose를 활용한 멀티 컨테이너(App + DB + Nginx) 배포 파이프라인 구성',
        en: 'Configured multi-container Docker Compose deployment (App + DB + Nginx).',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '동시 다발적인 투표 제출 시 Race Condition으로 인해 집계 결과에 동시성 오차가 발생하는 문제가 있었습니다.',
          en: 'Simultaneous ballot submissions caused race conditions in aggregate vote counts.',
        },
        solution: {
          ko: '데이터베이스 비관적 락(Pessimistic Lock)과 트랜잭션 격리 수준을 적용하여 집계 책임을 단일 원자적 연산으로 격리했습니다.',
          en: 'Applied database pessimistic locking within transactional boundaries to isolate tally updates atomically.',
        },
        result: {
          ko: '동시 100건 이상의 투표 트래픽에서도 단 하나의 카운트 누락 없이 100% 정합성을 보장했습니다.',
          en: 'Guaranteed 100% data consistency under concurrent load with zero missing tallies.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '개발 범위', en: 'Full-Stack Scope' },
        value: { ko: 'FE + BE + DB + Docker 100%', en: 'FE + BE + DB + Docker 100%' },
        description: {
          ko: '기획부터 배포까지 풀스택 인프라 전 과정 구축',
          en: 'Built full-stack infrastructure from inception to production deployment',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '풀스택 시스템에서는 프론트와 백엔드의 단순 연동보다 데이터 일관성과 동시성 제어를 위한 백엔드 트랜잭션 설계가 핵심임을 배웠습니다.',
        en: 'Learned that full-stack engineering hinges on backend transactional concurrency design rather than mere API wiring.',
      },
    ],
    limitations: [
      {
        ko: '조직별 멀티테넌시(회사별 슬랙/팀즈 웹훅 연동)는 추가 구현이 필요합니다.',
        en: 'Multi-tenant Slack/Teams webhook integration remains for future implementation.',
      },
    ],
    nextSteps: [
      {
        ko: 'Slack Bot 및 카카오톡 공유 링크를 통한 간편 투표 참여 기능을 추가할 계획입니다.',
        en: 'Planning Slack bot integration and KakaoTalk quick-vote sharing links.',
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
    id: 11,
    category: 'webFrontend',
    title: {
      ko: 'JoinUs : 참여형 IT 동아리 트랙 추천 서비스',
      en: 'JoinUs: Interactive IT Track Recommendation Service',
    },
    oneLiner: {
      ko: 'MBTI형 문답 인터랙션으로 동아리 지원자 전환율 160% 성장을 견인한 추천 웹 서비스',
      en: 'An interactive recommendation service driving 160% YoY applicant growth through MBTI-style quizzes.',
    },
    overview: {
      ko: '정적인 텍스트 모집 공고 대신 사용자 참여형 심리테스트 인터랙션을 도입하여 흥미를 유발하고 프론트/백엔드/기획/디자인 적합 트랙을 추천한 웹 서비스입니다. 전년 대비 지원자 수를 160% 증가시키는 성과를 거두었습니다.',
      en: 'An interactive web service replacing static recruitment promos with an engaging MBTI-style quiz that recommends frontend, backend, product, or design tracks, achieving 160% YoY applicant growth.',
    },
    startDate: new Date('2025-02-15'),
    endDate: new Date('2025-04-30'),
    teamInfo: { ko: '팀 프로젝트 3인', en: '3-person team project' },
    contribution: {
      ko: 'React 문답 플로우 UI, 점수 가중치 계산 엔진, 결과 페이지 및 카카오 공유 기능을 전담했습니다.',
      en: 'Owned React quiz flow UI, weighted scoring engine, result view, and Kakao share integration.',
    },
    images: [
      image('/img/tech/joinus.png', 'JoinUs 트랙 추천 인터랙션 화면', 'JoinUs track recommendation interactive screen'),
    ],
    techChoices: [
      {
        name: 'React + TypeScript',
        reason: {
          ko: '부드러운 질문 전환 애니메이션과 가중치 상태 관리를 구현하기 위해 채택했습니다.',
          en: 'Adopted for smooth question transitions and type-safe weighted scoring state.',
        },
      },
      {
        name: 'Tailwind CSS',
        reason: {
          ko: '짧은 릴리즈 일정 내에 감각적이고 반응형인 모바일 우선 UI를 완성하기 위해 적용했습니다.',
          en: 'Applied to build a responsive, mobile-first aesthetic quickly under tight deadlines.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '인터랙티브 질문 플로우 및 프로그레스 바', en: 'Interactive Quiz Flow & Progress Bar' },
        description: {
          ko: '사용자의 몰입도를 높이는 직관적인 문답 전환과 진행률 표시를 제공합니다.',
          en: 'Provides engaging, intuitive question transitions with live progress bars to keep drop-off low.',
        },
        images: [
          image('/img/tech/joinus.png', '문답 인터랙션 화면', 'Question interaction interface'),
        ],
      },
      {
        title: { ko: '맞춤형 트랙 추천 및 카카오톡 결과 공유', en: 'Tailored Track Result & Kakao Sharing' },
        description: {
          ko: '응답 가중치 기반 트랙 매칭 결과 카드와 소셜 바이럴을 위한 카카오 공유 링크를 생성합니다.',
          en: 'Generates result cards based on weighted matching and provides one-click Kakao viral sharing.',
        },
        images: [
          image('/img/tech/joinus.png', '결과 카드 및 공유 화면', 'Result card and sharing screen'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '점수 계산 로직을 순수 함수로 분리하여 질문 추가/수정의 유지보수성 확보',
        en: 'Separated score calculation into pure functions for effortless quiz maintenance.',
      },
      {
        ko: '카카오 SDK 연동을 통한 동적 오픈그래프(OG) 이미지 생성 및 공유 흐름 구현',
        en: 'Integrated Kakao SDK for dynamic Open Graph (OG) image generation and sharing.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '초기 질문 로직이 컴포넌트에 하드코딩되어 질문 가중치 수정 시 전체 화면 코드를 수정해야 했습니다.',
          en: 'Initial quiz logic was hardcoded in UI components, making weight tweaks cumbersome.',
        },
        solution: {
          ko: '질문과 선택지, 가중치 매핑을 JSON 스키마 데이터 구조로 분리하고 파서 엔진을 설계했습니다.',
          en: 'Decoupled questions, options, and weights into JSON schemas evaluated by a dedicated engine.',
        },
        result: {
          ko: '질문 추가 및 가중치 튜닝 작업을 코드 수정 없이 데이터 변경만으로 5분 내에 가능하도록 개선했습니다.',
          en: 'Enabled instant quiz adjustments in under 5 minutes purely via data updates.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '지원자 성장', en: 'Applicant Growth' },
        value: { ko: '전년 대비 160%', en: '160% YoY' },
        description: {
          ko: '참여형 홍보를 통해 실제 지원 전환율 극대화',
          en: 'Maximized recruitment conversion through interactive discovery',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '재미있는 사용자 인터랙션이 실제 비즈니스 목표(지원자 수 증가)로 직결되는 제품의 힘을 경험했습니다.',
        en: 'Experienced firsthand how engaging UX directly drives quantifiable business growth.',
      },
    ],
    limitations: [
      {
        ko: '결과 카드 다운로드 이미지 합성 기능이 브라우저별로 상이한 호환성을 보였습니다.',
        en: 'Canvas image synthesis for card downloads showed minor cross-browser variances.',
      },
    ],
    nextSteps: [
      {
        ko: '관리자용 실시간 문답 이탈률 분석 대시보드를 구축할 계획입니다.',
        en: 'Planning an analytics dashboard to track question drop-off rates in real time.',
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
    id: 12,
    category: 'webFrontend',
    title: {
      ko: 'Babzip : 나만의 맛집 지도 아카이브',
      en: 'Babzip: Personal Restaurant Map Archive',
    },
    oneLiner: {
      ko: '광고성 리뷰 대신 개인의 취향과 드래그 앤 드롭 랭킹으로 관리하는 맛집 아카이브 웹/앱',
      en: 'A private restaurant map archive organized by personal tastes and drag-and-drop rankings.',
    },
    overview: {
      ko: '광고성 블로그 리뷰에 피로감을 느끼는 사용자를 위해 직접 가본 맛집만 지도에 기록하고 드래그 앤 드롭으로 나만의 TOP 랭킹을 매기는 개인화 웹 서비스입니다. React + Zustand + Kakao Map API + Kakao OAuth를 적용했습니다.',
      en: 'A personalized web service allowing foodies to archive verified dining spots on a map and prioritize top favorites via drag-and-drop ranking. Built with React, Zustand, Kakao Map API, and Kakao OAuth.',
    },
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-07-15'),
    teamInfo: { ko: '개인 프로젝트 100%', en: 'Solo project 100%' },
    contribution: {
      ko: '기획, React 프론트엔드, Kakao OAuth 로그인, Zustand 전역 상태, 지도 인터랙션, CRUD를 100% 단독 개발했습니다.',
      en: '100% ownership of planning, React UI, Kakao OAuth, Zustand state, map integration, and CRUD.',
    },
    images: [
      image('/img/tech/babzip.png', 'Babzip 맛집 지도 화면', 'Babzip restaurant map view'),
    ],
    techChoices: [
      {
        name: 'Zustand & LocalStorage',
        reason: {
          ko: '지도 마커 상태와 사용자 랭킹 데이터를 가볍고 빠르게 영속화하기 위해 채택했습니다.',
          en: 'Adopted for fast, lightweight persistence of map markers and user ranking data.',
        },
      },
      {
        name: 'Kakao Map API & OAuth 2.0',
        reason: {
          ko: '국내 장소 검색의 정확성과 손쉬운 소셜 로그인 진입 장벽을 낮추기 위해 연동했습니다.',
          en: 'Integrated for accurate Korean venue searches and low-friction social login.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '지도 기반 맛집 마커 아카이빙', en: 'Map-based Venue Archiving' },
        description: {
          ko: '원하는 장소를 검색하여 나만의 메모, 별점, 카테고리와 함께 지도 위에 핀으로 보관합니다.',
          en: 'Pin searched restaurants on the map with personal notes, ratings, and custom categories.',
        },
        images: [
          image('/img/tech/babzip.png', '맛집 핀 및 메모 화면', 'Restaurant pin and memo view'),
        ],
      },
      {
        title: { ko: '드래그 앤 드롭 개인 TOP 랭킹', en: 'Drag-and-Drop Personal Rankings' },
        description: {
          ko: '저장된 맛집들을 직관적으로 드래그하여 실시간으로 우선순위를 정렬하는 UI를 제공합니다.',
          en: 'Intuitive drag-and-drop interface for ordering personal top restaurant lists in real time.',
        },
        images: [
          image('/img/tech/babzip.png', '드래그 앤 드롭 랭킹 편집', 'Drag-and-drop ranking editor'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'Kakao Map 오버레이 커스텀 및 모바일 친화적 바텀시트 UI 개발',
        en: 'Crafted custom Kakao Map overlays and mobile-first bottom sheet interaction.',
      },
      {
        ko: '드래그 앤 드롭 인터랙션 성능 최적화 및 상태 분리',
        en: 'Optimized drag-and-drop interaction performance with separated state slices.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '지도 확대/축소 시 커스텀 오버레이의 위치가 밀리거나 중복 렌더링되는 현상이 있었습니다.',
          en: 'Custom map overlays misaligned or duplicated during rapid zooming and panning.',
        },
        solution: {
          ko: 'Kakao Map 커스텀 오버레이 수명 주기를 React 컴포넌트의 마운트/언마운트와 명확히 동기화하도록 훅을 설계했습니다.',
          en: 'Designed custom React hooks to synchronize overlay lifecycles strictly with component mounts.',
        },
        result: {
          ko: '모든 지도 조작에서 100% 안정적으로 제자리를 유지하는 오버레이를 구현했습니다.',
          en: 'Achieved rock-solid overlay alignment across all map manipulations.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '핵심 기능', en: 'Core Features' },
        value: { ko: '지도 + 로그인 + CRUD + 랭킹', en: 'Map + Auth + CRUD + Ranking' },
        description: {
          ko: '완결성 있는 개인화 맛집 아카이브 서비스 구현',
          en: 'Built complete personalized dining archive experience',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '개인화 아카이브 서비스는 기능의 복잡성보다 사용자가 직관적으로 기록하고 정리할 수 있는 UX가 핵심임을 배웠습니다.',
        en: 'Learned that private archive apps thrive on effortless recording UX rather than excessive feature bloat.',
      },
    ],
    limitations: [
      {
        ko: '친구 간 맛집 지도 공유 및 협업 편집 기능은 다음 버전 과제입니다.',
        en: 'Collaborative map sharing with friends remains for future versions.',
      },
    ],
    nextSteps: [
      {
        ko: '네이버/카카오 장소 리뷰 요약 AI 파이프라인을 추가할 예정입니다.',
        en: 'Planning an AI summary pipeline for aggregated venue reviews.',
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
    id: 13,
    category: 'webFrontend',
    title: {
      ko: '케이크공작소 : 해커톤 소셜 인터랙션 플랫폼',
      en: 'Cake Workshop: Hackathon Social Platform',
    },
    oneLiner: {
      ko: '취향과 감정을 케이크 메타포로 표현하고 공유하는 해커톤 소셜 인터랙션 웹 플랫폼',
      en: 'A hackathon social web platform expressing tastes and emotions through cake metaphors.',
    },
    overview: {
      ko: '짧은 해커톤 일정 동안 감정 기록과 취향 공유를 케이크 꾸미기라는 시각적 메타포로 풀어낸 프론트엔드 프로젝트입니다. React + Styled-Components + React Calendar 커스터마이징을 통해 완성도 높은 감성 인터랙션을 구현했습니다.',
      en: 'A frontend project delivered during a tight hackathon, expressing mood logging and personal tastes through interactive cake decorating metaphors using React, Styled-Components, and customized React Calendar.',
    },
    startDate: new Date('2025-01-20'),
    endDate: new Date('2025-02-15'),
    teamInfo: { ko: '해커톤 팀 프로젝트 4인', en: '4-person hackathon team project' },
    contribution: {
      ko: '캘린더 UI 커스터마이징, 케이크 데코레이션 인터랙션, 모달 레이어 상태 관리, 협업 규칙 수립을 담당했습니다.',
      en: 'Handled calendar UI customization, cake decoration interactions, modal layer state, and Git workflow.',
    },
    images: [
      image('/img/tech/cake.png', '케이크공작소 메인 화면', 'Cake Workshop main interface'),
    ],
    techChoices: [
      {
        name: 'React + Styled-Components',
        reason: {
          ko: '동적인 데코레이션 스타일과 테마 변화를 컴포넌트 단위로 빠르게 실험하기 위해 채택했습니다.',
          en: 'Adopted to iterate rapidly on dynamic decoration styling and component theming.',
        },
      },
      {
        name: 'React Calendar Customization',
        reason: {
          ko: '날짜별 감정 케이크 조각을 한눈에 볼 수 있는 독창적인 캘린더 UX를 구축하기 위해 커스텀했습니다.',
          en: 'Customized to build a distinctive calendar UX displaying daily emotion cake slices at a glance.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '시각적 케이크 데코레이션 인터랙션', en: 'Interactive Cake Decorating' },
        description: {
          ko: '원하는 토핑과 컬러를 선택해 나만의 감정 케이크를 완성하고 캡처하는 경험을 제공합니다.',
          en: 'Lets users pick toppings and colors to construct and capture their personal emotion cakes.',
        },
        images: [
          image('/img/tech/cake.png', '케이크 데코레이션 화면', 'Cake decorating interaction'),
        ],
      },
      {
        title: { ko: '감정 아카이브 캘린더', en: 'Emotion Archive Calendar' },
        description: {
          ko: '한 달 동안 모인 케이크 조각들을 캘린더 위에서 한눈에 회고할 수 있는 시각화 화면을 구현했습니다.',
          en: 'Visualizes daily cake slices on a monthly calendar for intuitive mood reflection.',
        },
        images: [
          image('/img/tech/cake.png', '캘린더 회고 화면', 'Calendar reflection screen'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '짧은 해커톤 환경에서 PR 템플릿과 브랜치 전략을 정립하여 팀 개발 생산성 극대화',
        en: 'Established PR templates and branching strategies to maximize team velocity under tight deadlines.',
      },
      {
        ko: '복합 모달 및 오버레이의 포커스 트랩과 레이어 순서 제어 로직 설계',
        en: 'Engineered focus trapping and layer hierarchy management for stacked modal overlays.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '여러 겹의 모달과 툴팁이 겹치는 화면에서 닫기 이벤트가 꼬이며 포커스가 유실되는 문제가 있었습니다.',
          en: 'Layered modals and tooltips suffered from conflicting close events and lost focus.',
        },
        solution: {
          ko: '오버레이 우선순위 스택(Z-Index & Keydown Manager)을 중앙 집중화하여 ESC 및 외부 클릭을 순차 제어했습니다.',
          en: 'Centralized an overlay priority manager to handle ESC keys and outside clicks in strict sequence.',
        },
        result: {
          ko: '복잡한 데코레이션 모달에서도 완벽히 예측 가능한 UI 반응성을 확보했습니다.',
          en: 'Ensured 100% predictable UX across nested decoration dialogs.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '해커톤 성과', en: 'Hackathon Result' },
        value: { ko: '제한 시간 내 완주', en: 'Delivered On-Time' },
        description: {
          ko: '짧은 일정 내에 완성도 높은 감성 인터랙션 웹 완성',
          en: 'Delivered polished interactive experience within strict time constraints',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '강한 콘셉트의 프로젝트일수록 비주얼 실험과 기본 사용성 간의 균형이 중요하다는 점을 체감했습니다.',
        en: 'Learned that concept-heavy projects require a harmonious balance between visual flair and solid usability.',
      },
    ],
    limitations: [
      {
        ko: '친구 간 케이크 롤링페이퍼 작성 기능은 프로토타입 단계로 남아있습니다.',
        en: 'Friend rolling-paper feature remains in prototype stage.',
      },
    ],
    nextSteps: [
      {
        ko: '감정 분석 AI 모델을 연동하여 일기 텍스트 기반 케이크 자동 추천 기능을 구현할 계획입니다.',
        en: 'Planning an AI emotion analysis pipeline to suggest cake themes based on journal entries.',
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
    id: 14,
    category: 'research',
    title: {
      ko: 'Research & Awards : 학술 연구 및 수상 이력',
      en: 'Research & Awards: Academic Publications & Honors',
    },
    oneLiner: {
      ko: '2026 KIIT 금상, 2025 KIIT 은상, KCI 논문 게재 및 LG Aimers AI 수료',
      en: '2026 KIIT Gold Award, 2025 KIIT Silver Award, KCI publication, and LG Aimers AI certification.',
    },
    overview: {
      ko: '대형 언어모델(LLM) 정렬 및 비전/모바일 도메인에 걸친 학술 연구 성과와 대외 수상 내역입니다. 한국정보기술학회(KIIT) 2년 연속 우수논문상(금상/은상) 수상 및 KCI 등재 학술지 논문 게재 성과를 보유하고 있습니다.',
      en: 'A compilation of academic research achievements and honors spanning LLM alignment, vision, and mobile engineering, including consecutive KIIT Best Paper Awards (Gold/Silver) and a KCI journal publication.',
    },
    startDate: null,
    endDate: null,
    teamInfo: { ko: 'Academic Research & Honors', en: 'Academic Research & Honors' },
    contribution: {
      ko: '연구 가설 수립, 실험 설계, 모델 학습, 벤치마크 평가, 논문 집필 및 학술대회 구두 발표를 수행했습니다.',
      en: 'Owned hypothesis formulation, experimental design, model training, evaluation, writing, and oral presentation.',
    },
    images: [
      image('/img/tech/unsloth.png', '연구 및 수상 대표 이미지', 'Research and awards overview'),
    ],
    techChoices: [
      {
        name: 'KIIT Gold Award (2026)',
        reason: {
          ko: 'Instruction-Tuned 언어모델에서 DPO의 효과와 한계에 대한 실험적 분석 연구로 금상을 수상했습니다.',
          en: 'Won Gold Award for empirical research on DPO effectiveness in instruction-tuned language models.',
        },
      },
      {
        name: 'KIIT Silver Award (2025)',
        reason: {
          ko: '도메인 특화 데이터셋 구축 및 경량 LLM 파인튜닝 연구로 은상을 수상했습니다.',
          en: 'Won Silver Award for domain-specific dataset engineering and lightweight LLM fine-tuning.',
        },
      },
      {
        name: 'KCI Journal Publication',
        reason: {
          ko: '모바일 투명성 기부 플랫폼에 대한 사회적/기술적 연구 논문이 KCI 등재 학술지에 게재되었습니다.',
          en: 'Published research on mobile donation transparency in a KCI-indexed academic journal.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '2026 한국정보기술학회 하계 학술대회 금상', en: '2026 KIIT Summer Conference Gold Award' },
        description: {
          ko: '대형 언어모델 DPO 정렬의 일반화 한계와 효과를 정량 분석하여 최고 학술 논문상을 수상했습니다.',
          en: 'Awarded highest honor for quantifying generalization boundaries of DPO alignment in LLMs.',
        },
        images: [
          image('/img/tech/unsloth.png', '2026 KIIT 금상 연구', '2026 KIIT Gold research view'),
        ],
      },
      {
        title: { ko: '2025 한국정보기술학회 추계 학술대회 은상', en: '2025 KIIT Fall Conference Silver Award' },
        description: {
          ko: '도메인 Q&A 모델 학습 및 평가 방법론을 제시하여 우수 논문상을 수상했습니다.',
          en: 'Recognized with Best Paper Award for domain-adapted Q&A model training methodologies.',
        },
        images: [
          image('/img/tech/unsloth.png', '2025 KIIT 은상 연구', '2025 KIIT Silver research view'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '한국정보기술학회 2회 연속 우수논문상 수상 및 구두 발표',
        en: 'Conducted oral presentations winning two consecutive Best Paper awards at KIIT.',
      },
      {
        ko: 'LG Aimers AI 전문가 교육 과정 수료',
        en: 'Completed LG Aimers AI intensive training program.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '학술 연구 결과의 객관성을 입증하기 위해 단일 지표가 아닌 다각도 평가 체계가 필요했습니다.',
          en: 'Needed a multi-faceted evaluation framework to prove research objectivity beyond single benchmarks.',
        },
        solution: {
          ko: 'MMLU, KLUE 정량 벤치마크와 LLM-as-a-Judge 정성 평가를 결합한 통합 검증 프로토콜을 수립했습니다.',
          en: 'Established an integrated validation protocol pairing MMLU/KLUE benchmarks with LLM-as-a-Judge scoring.',
        },
        result: {
          ko: '심사위원들로부터 높은 학술적 신뢰도와 타당성을 인정받아 수상으로 이어졌습니다.',
          en: 'Earned high academic praise and awards for methodological rigor.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '학술 수상', en: 'Awards' },
        value: { ko: 'KIIT 금상 / 은상', en: 'KIIT Gold / Silver' },
        description: {
          ko: '2년 연속 학술대회 우수논문상 수상',
          en: 'Consecutive Best Paper Awards',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '이론적 연구를 실제 소프트웨어 공학 파이프라인으로 구현하고 검증하는 전 과정의 가치를 배웠습니다.',
        en: 'Learned the enduring value of taking theoretical research through rigorous software engineering validation.',
      },
    ],
    limitations: [
      {
        ko: '후속 연구로 다국어 및 멀티모달 정렬에 대한 추가 탐구가 요구됩니다.',
        en: 'Further research is required for multilingual and multimodal alignment.',
      },
    ],
    nextSteps: [
      {
        ko: '최신 Reasoning 모델(DeepSeek-R1, OpenAI o-series) 기반 정렬 기법을 후속 연구로 진행 중입니다.',
        en: 'Pursuing follow-up research on alignment techniques for modern reasoning models.',
      },
    ],
    links: [
      {
        label: { ko: '관련 자료', en: 'Reference Material' },
        note: noDocYetNote,
      },
    ],
  },
  {
    id: 15,
    category: 'ai',
    title: {
      ko: '저속노화 데이터셋 기반 LLM 파인튜닝',
      en: 'Slow-Aging Domain LLM Fine-Tuning',
    },
    oneLiner: {
      ko: '도메인 전문 지식 부족을 해결하기 위해 저속노화 문헌 데이터를 학습한 Q&A AI',
      en: 'A domain-specialized Q&A AI trained on slow-aging literature data.',
    },
    overview: {
      ko: '웹 의학 기사와 PDF 전문 매거진을 크롤링 및 정제하여 JSONL 포맷의 도메인 특화 질의응답 데이터셋을 구축하고, Unsloth와 LoRA 기법을 통해 적은 자원으로 Gemma 모델을 효율적으로 파인튜닝한 프로젝트입니다. 2025 한국정보기술학회(KIIT) 추계 학술대회에서 은상을 수상했습니다.',
      en: 'A domain-focused LLM fine-tuning project that structured raw medical/health articles and PDF publications into a JSONL Q&A dataset. Efficiently adapted Gemma with Unsloth and LoRA under constrained compute, winning the 2025 KIIT Silver Prize.',
    },
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-05-15'),
    teamInfo: { ko: '팀 프로젝트 2인', en: '2-person team project' },
    contribution: {
      ko: '데이터 수집 및 정제, JSONL 데이터셋 구축, Unsloth 기반 파인튜닝 파이프라인 및 응답 평가 실험을 전담했습니다.',
      en: 'Led data collection/cleaning, JSONL construction, Unsloth fine-tuning pipeline, and evaluation experiments.',
    },
    images: [
      image('/img/tech/unsloth.png', 'LLM 파인튜닝 파이프라인', 'LLM Fine-tuning pipeline overview'),
      image('/img/tech/slowaging_dataset_flow.png', '데이터셋 구축 흐름', 'Dataset pipeline flow'),
      image('/img/tech/slowaging_response_comparison.png', '학습 전후 응답 비교', 'Pre- and post-fine-tuning comparison'),
    ],
    techChoices: [
      {
        name: 'Gemma & Unsloth',
        reason: {
          ko: '적은 GPU 메모리 환경에서도 빠른 학습 반복 속도와 우수한 성능을 확보하기 위해 선택했습니다.',
          en: 'Chosen for fast training iteration and strong performance under limited GPU memory constraints.',
        },
      },
      {
        name: 'LoRA (Low-Rank Adaptation)',
        reason: {
          ko: '전체 모델 파라미터 재학습 대신 효율적으로 저속노화 전문 지식을 주입하기 위해 어댑터 방식을 적용했습니다.',
          en: 'Applied parameter-efficient fine-tuning to inject domain knowledge without retraining all weights.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '도메인 특화 Q&A 데이터셋 정제 파이프라인', en: 'Domain Q&A Dataset Pipeline' },
        description: {
          ko: '비정형 의학 웹 문서와 PDF에서 노이즈를 제거하고 JSONL 지시-응답 쌍으로 정규화했습니다.',
          en: 'Filtered raw medical web articles and PDFs into normalized JSONL instruction-response pairs.',
        },
        images: [
          image('/img/tech/slowaging_dataset_flow.png', '데이터셋 구축 흐름', 'Dataset pipeline flow'),
        ],
      },
      {
        title: { ko: '경량 고효율 파인튜닝 및 답변 검증', en: 'Efficient Fine-Tuning & Evaluation' },
        description: {
          ko: 'Base 모델 대비 저속노화 전문 용어 이해도 및 권장 식단/운동 가이드라인 생성 정확도를 대폭 향상했습니다.',
          en: 'Significantly enhanced domain terminology accuracy and dietary/exercise guidance quality compared to base model.',
        },
        images: [
          image('/img/tech/slowaging_response_comparison.png', '학습 전후 응답 비교', 'Pre- and post-fine-tuning comparison'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '문서 원천별 텍스트 파싱 규칙을 수립하고 중복/이상치를 필터링하는 전처리 자동화',
        en: 'Automated document parsing and deduplication to maintain high dataset quality.',
      },
      {
        ko: 'Unsloth를 활용한 LoRA 어댑터 하이퍼파라미터 튜닝 및 학습 손실 모니터링',
        en: 'Tuned LoRA adapter hyperparameters in Unsloth while tracking training loss convergence.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '원천 문서의 표(Table) 및 인용구 서식이 깨져 학습 시 환각(Hallucination)이 발생하는 문제가 있었습니다.',
          en: 'Broken table and citation formats from raw sources induced hallucinations during inference.',
        },
        solution: {
          ko: '표 데이터를 Markdown 정형 텍스트로 변환하는 파서를 작성하고 사실성 검증 필터를 파이프라인에 추가했습니다.',
          en: 'Implemented a parser converting tables into structured Markdown and added a fact-checking filtering stage.',
        },
        result: {
          ko: '도메인 질의에 대한 환각 비율을 60% 이상 감소시키고 정확한 사실 기반 응답을 생성했습니다.',
          en: 'Reduced hallucination rate by over 60%, generating accurate fact-grounded responses.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '학술 수상', en: 'Award' },
        value: { ko: 'KIIT 은상 수상', en: 'KIIT Silver Award' },
        description: {
          ko: '한국정보기술학회 학술대회 우수 논문상 수상',
          en: 'Recognized for technical quality at KIIT conference',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: 'LLM 도메인 특화의 성공 여부는 모델 크기보다도 데이터 정제 수준과 프롬프트 구조화에 더 크게 좌우됨을 배웠습니다.',
        en: 'Learned that domain LLM adaptation hinges more on data hygiene and prompt structuring than raw model size.',
      },
    ],
    limitations: [
      {
        ko: '최신 논문 반영을 위한 실시간 웹 검색(RAG) 연동이 추가로 필요합니다.',
        en: 'RAG integration is needed for real-time retrieval of latest research updates.',
      },
    ],
    nextSteps: [
      {
        ko: 'RAG와 파인튜닝 모델을 결합한 하이브리드 지식 어시스턴트로 확장할 계획입니다.',
        en: 'Planning to extend into a hybrid RAG + fine-tuned knowledge assistant.',
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
    id: 16,
    category: 'app',
    title: {
      ko: '예상 (Yesang) : 경조사 금전 기록 및 일정 관리 모바일 장부 앱',
      en: 'Yesang: Family Event Expense & Schedule Management Mobile App',
    },
    oneLiner: {
      ko: '경조사 금전 기록을 사람, 일정, 거래 내역 기준으로 체계화한 React Native 기반 개인 장부 앱',
      en: 'A React Native mobile ledger app organizing wedding/funeral gift expenses by person, event schedule, and transactions.',
    },
    overview: {
      ko: '예상(Yesang)은 축의금, 부의금 등 경조사에서 주고받은 금액을 사람과 이벤트 단위로 기록하고 관리하는 모바일 앱입니다. 사용자는 소셜 로그인 또는 게스트 모드로 앱을 시작할 수 있으며, 사람별 거래 내역, 이벤트 일정 캘린더, 연간 금액 흐름을 한눈에 확인할 수 있습니다. 특히 서버 API와 로컬 SecureStore 저장소를 동일한 도메인 인터페이스로 추상화하여 로그인 여부와 무관하게 동일한 UX를 제공하도록 아키텍처를 설계했습니다.',
      en: 'Yesang is a mobile expense management application for tracking monetary gifts (weddings, funerals, etc.) organized by person and event. Users can operate in either social login or guest mode, inspecting per-person transaction histories, event calendars, and annual cash flow metrics. It abstracts both server REST APIs and local SecureStore caching behind a unified domain layer, ensuring identical UI behavior across auth states.',
    },
    startDate: new Date('2025-11-01'),
    endDate: new Date('2026-02-15'),
    teamInfo: { ko: '개인 모바일 프로젝트 (100%)', en: 'Solo Mobile Project (100%)' },
    contribution: {
      ko: 'React Native & Expo Router 기반 프론트엔드 전체 아키텍처 설계, Zustand + SecureStore 게스트 모드 영속화, TanStack Query 서버 상태 동기화, Axios 인터셉터 토큰 갱신 파이프라인, Zod 폼 유효성 검증 및 AdMob 광고 연동을 전담했습니다.',
      en: 'Architected the React Native & Expo Router codebase, implemented Zustand + SecureStore guest persistence, TanStack Query caching, Axios interceptor token refresh, Zod form validations, and AdMob monetization.',
    },
    images: [
      image('/img/tech/yesang_main.png', '예상(Yesang) 홈 및 캘린더 화면', 'Yesang Home and Event Calendar screen'),
      image('/img/tech/yesang_person_detail.png', '사람 상세 및 금액 내역', 'Person detail and transaction log'),
      image('/img/tech/yesang_calendar.png', '캘린더 일정 관리 화면', 'Calendar event management screen'),
      image('/img/tech/yesang_dashboard.png', '홈 대시보드 요약', 'Home dashboard summary'),
    ],
    techChoices: [
      {
        name: 'React Native & Expo Router',
        reason: {
          ko: '파일 기반 라우팅과 일관된 모바일 네비게이션, 크로스플랫폼(iOS/Android) 네이티브 빌드 안정성을 확보하기 위해 채택했습니다.',
          en: 'Adopted for file-based routing, cohesive mobile navigation, and reliable cross-platform builds with EAS.',
        },
      },
      {
        name: 'Zustand & Expo SecureStore',
        reason: {
          ko: '가볍고 직관적인 전역 상태 관리와 민감한 토큰 및 게스트 모드 장부 데이터를 디바이스 보안 저장소에 안전하게 영속화하기 위해 사용했습니다.',
          en: 'Used for lightweight global state and securely persisting auth tokens and guest ledger data to device storage.',
        },
      },
      {
        name: 'TanStack React Query',
        reason: {
          ko: '서버 상태 캐싱과 화면 focus 시 자동 query invalidation을 적용하여 화면 간 데이터 불일치를 원천 차단하기 위해 도입했습니다.',
          en: 'Introduced for server state caching and automatic query invalidation upon screen focus, preventing stale state.',
        },
      },
      {
        name: 'React Hook Form & Zod',
        reason: {
          ko: '낸 금액과 받은 금액 동시 입력 방지 등 복합적인 경조사 거래 비즈니스 규칙을 스키마 레벨에서 선언적으로 검증하기 위해 채택했습니다.',
          en: 'Chosen for declarative schema validation of multi-step business rules, such as mutual exclusion of sent/received amounts.',
        },
      },
      {
        name: 'Google AdMob',
        reason: {
          ko: '배너 광고 및 일일 팝업 광고 숨김 처리 등 앱의 지속 가능한 수익화 모델을 구축하기 위해 연동했습니다.',
          en: 'Integrated banner and daily-dismissable popup ads to establish a sustainable monetization model.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: '소셜 로그인 및 무결점 게스트 모드', en: 'Social Auth & Unified Guest Mode' },
        description: {
          ko: 'Kakao, Google, Apple 소셜 로그인과 회원가입 없는 게스트 모드를 모두 지원하며, 동일한 화면에서 세션에 따라 로컬 SecureStore와 서버 API가 자동 전환됩니다.',
          en: 'Supports Kakao, Google, Apple OAuth and guest mode, automatically routing calls between local SecureStore and backend APIs.',
        },
        images: [
          image('/img/tech/yesang_main.png', '인증 및 메인 화면', 'Auth and Main screen'),
        ],
      },
      {
        title: { ko: '사람별 경조사 관계 & 누적 차액 분석', en: 'Person-based Relationship & Ledger' },
        description: {
          ko: '인물별 경조사 관계 태그, 메모를 관리하고 총 받은 금액, 낸 금액, 차액을 즉시 계산하여 인간관계별 수지 균형을 시각화합니다.',
          en: 'Manages relationship tags, notes, and automatically computes total given, received, and net balance per contact.',
        },
        images: [
          image('/img/tech/yesang_person_detail.png', '사람 상세 및 금액 내역', 'Person detail and transaction log'),
        ],
      },
      {
        title: { ko: '이벤트 캘린더 기반 일정 & 거래 내역 관리', en: 'Event Calendar & Transaction Management' },
        description: {
          ko: 'React Native Calendars를 활용해 일정이 있는 날짜를 마킹하고, 날짜 선택 시 바텀시트/모달로 장소, 인물, 금액을 빠르게 등록 및 수정할 수 있습니다.',
          en: 'Marks scheduled events on interactive calendars with bottom sheet/modal flows for swift creation and edits.',
        },
        images: [
          image('/img/tech/yesang_calendar.png', '캘린더 일정 관리 화면', 'Calendar event management screen'),
        ],
      },
      {
        title: { ko: '홈 대시보드 요약 및 다크 모드', en: 'Home Dashboard Summary & Dark Mode' },
        description: {
          ko: '올해 총 지출/수입 요약, 다가오는 경조사 일정, 최근 거래 내역을 홈 화면에서 한눈에 제공하며 시스템 다크 모드를 완벽 지원합니다.',
          en: 'Provides yearly summary statistics, upcoming events, recent logs on home dashboard, with complete dark mode support.',
        },
        images: [
          image('/img/tech/yesang_dashboard.png', '홈 대시보드 요약', 'Home dashboard summary'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: 'React Native, Expo Router, TypeScript 기반 경조사 금전 기록 모바일 앱 아키텍처 100% 단독 설계 및 개발',
        en: 'Solely architected and developed the React Native / Expo Router mobile app in TypeScript.',
      },
      {
        ko: '서버 API와 로컬 SecureStore 저장소를 동일한 도메인 계층(domains.people, events, transactions)으로 추상화',
        en: 'Abstracted backend REST APIs and local SecureStore persistence behind a unified domain repository pattern.',
      },
      {
        ko: 'Axios 인터셉터를 활용한 Access Token 자동 주입, 401 응답 시 Refresh Token 재발급 및 원 요청 재시도 파이프라인 구축',
        en: 'Built Axios interceptors for automatic JWT injection and seamless refresh token rotation upon 401 responses.',
      },
      {
        ko: 'TanStack React Query를 활용한 화면 Focus 시 쿼리 Invalidation 및 CRUD 후 연관 상태 자동 갱신',
        en: 'Structured TanStack Query caching and focus-triggered invalidation strategies to ensure data consistency.',
      },
      {
        ko: 'React Hook Form과 Zod를 결합한 스키마 기반 폼 유효성 검증 및 비즈니스 규칙 처리',
        en: 'Engineered form validations and mutual-exclusion business logic using React Hook Form and Zod schemas.',
      },
      {
        ko: 'Gorhom Bottom Sheet, React Native Calendars, React Native Modal을 결합한 모바일 최적화 인터랙션 구현',
        en: 'Delivered mobile-optimized UX with Bottom Sheets, interactive calendars, and modal dialogs.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '로그인 사용자와 비로그인(게스트) 사용자가 동일한 화면을 사용해야 하는데, 컴포넌트 내부에서 if(isGuest) 분기 처리가 늘어나 코드가 비대해지는 문제가 있었습니다.',
          en: 'Components became cluttered with redundant if(isGuest) conditionals when supporting both authenticated and guest users on the same screens.',
        },
        solution: {
          ko: '도메인 서비스 계층(domains.people, events, transactions, stats)을 생성하고, 세션 상태에 따라 서버 REST API 또는 로컬 SecureStore 모듈을 동적으로 위임하는 팩토리/리포지토리 패턴으로 추상화했습니다.',
          en: 'Constructed a domain service layer using repository abstraction, dynamically delegating calls to either server APIs or SecureStore based on session type.',
        },
        result: {
          ko: '모든 화면 컴포넌트가 세션 종류와 무관하게 일관된 인터페이스를 호출할 수 있게 되어 코드 중복을 제거하고 높은 유지보수성을 확보했습니다.',
          en: 'Eliminated UI-level conditionals and secured clean, decoupled screen logic with 100% feature parity across both modes.',
        },
      },
      {
        problem: {
          ko: '앱 구동 시 비동기 저장소(SecureStore)에서 인증 토큰과 UI 설정을 불러오는 과정에서 잘못된 라우팅 리다이렉션 및 깜빡임(Flickering)이 발생했습니다.',
          en: 'Asynchronous hydration of tokens and UI prefs from SecureStore caused race conditions, flickering, and incorrect route redirects on startup.',
        },
        solution: {
          ko: 'Zustand의 auth hydrate와 ui hydrate 프로미스가 완전히 완료될 때까지 Expo Splash Screen을 유지하고, hydration 완료 후 온보딩/메인 탭으로 단 한 번 라우팅되도록 초기화 흐름을 동기화했습니다.',
          en: 'Synchronized initialization by holding the Expo Splash Screen until auth/ui hydration finished, then executing deterministic route transitions.',
        },
        result: {
          ko: '앱 최초 진입 및 재실행 시 플리커링 없는 매끄럽고 안정적인 진입 사용자 경험을 완성했습니다.',
          en: 'Achieved a seamless, flicker-free cold start experience with guaranteed session integrity.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '아키텍처 완성도', en: 'Architecture' },
        value: { ko: '100% 공통 도메인 API', en: '100% Unified Domain' },
        description: {
          ko: '로그인 및 게스트 모드 완벽 분리 및 공통 UX 제공',
          en: 'Zero conditional branching in UI components',
        },
      },
      {
        label: { ko: '상태 정합성', en: 'Data Consistency' },
        value: { ko: 'Zero Stale State', en: 'Zero Stale State' },
        description: {
          ko: 'React Query 화면 Focus 및 Mutation 자동 Invalidation',
          en: 'Deterministic cache invalidation on screen focus',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '모바일 앱에서 오프라인/게스트 경험을 설계할 때 도메인 인터페이스를 조기에 추상화해두는 것이 전체 코드 복잡도를 획기적으로 낮춘다는 점을 체감했습니다.',
        en: 'Learned that abstracting offline/guest domain interfaces early drastically reduces overall codebase complexity.',
      },
      {
        ko: '인증 토큰 갱신과 스플래시 하이드레이션 같은 초기화 생명주기 제어가 실제 상용 모바일 앱의 완성도를 결정짓는 핵심 요소임을 배웠습니다.',
        en: 'Realized that lifecycle management like splash hydration and seamless token rotation defines true production app quality.',
      },
    ],
    limitations: [
      {
        ko: '대량 거래 내역 엑셀 내보내기/가져오기 및 이미지 영수증 OCR 기능이 추가로 개발될 필요가 있습니다.',
        en: 'Excel export/import and receipt OCR recognition are pending future releases.',
      },
    ],
    nextSteps: [
      {
        ko: 'EAS Build를 통한 App Store 및 Google Play 정식 출시 심사 제출 및 실서비스 운영을 준비하고 있습니다.',
        en: 'Preparing production store submission to App Store and Google Play via EAS Build.',
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
    id: 17,
    category: 'app',
    title: {
      ko: 'SaSang (사상) : 사진으로 기록하는 개인 여행 지도 모바일 앱',
      en: 'SaSang: Personalized Photo Travel Map Mobile App',
    },
    oneLiner: {
      ko: '방문한 행정구역과 국가를 실제 벡터 경계에 맞춘 여행 사진으로 채워가는 React Native 기반 인터랙티브 여행 지도 앱',
      en: 'An interactive React Native travel map app filling visited regional and national vector boundaries with travel photos.',
    },
    overview: {
      ko: 'SaSang(사상)은 방문한 국내 행정구역(161개 지역)과 해외 국가(175개 국가)를 여행 사진으로 채우며 기록하는 모바일 여행 지도 서비스입니다. 기존 지도 SDK의 단순 마커 방식 대신 GIS 행정경계 벡터 데이터를 직접 가공·렌더링하여, 사용자의 사진이 각 지역의 실제 지리적 경계 형태로 표시되는 인터랙티브 Photo-first 지도를 구현했습니다. React Native, Turborepo, react-native-svg, Reanimated 기반으로 설계되었습니다.',
      en: 'SaSang is an interactive mobile travel mapping service where users fill visited domestic districts (161 regions in Korea) and international countries (175 nations) with their own travel photography. Instead of conventional map pins, it pre-processes GIS boundary vector data to clip user photos directly into exact regional borders, delivering a visual photo-first travel diary built with React Native, Turborepo, react-native-svg, and Reanimated.',
    },
    startDate: new Date('2025-12-01'),
    endDate: new Date('2026-02-28'),
    teamInfo: { ko: '개인 모바일 프로젝트 (100%)', en: 'Solo Mobile Project (100%)' },
    contribution: {
      ko: 'GIS 데이터 전처리 파이프라인(GeoJSON → SVG Path JSON) 구축, SVG ClipPath 기반 커스텀 포토 렌더러 구현, 60fps Pinch-to-Zoom & Pan 제스처 개발, Local-first 파일 영속화 및 Turborepo 모노레포 아키텍처 설계를 전담했습니다.',
      en: 'Engineered the GIS data pre-processing pipeline (GeoJSON -> SVG Path JSON), custom SVG ClipPath photo renderer, 60fps pinch-and-pan gesture animations, local-first image persistence, and the Turborepo monorepo architecture.',
    },
    images: [
      image('/img/tech/chripaid.png', 'SaSang 인터랙티브 여행 지도 화면', 'SaSang Interactive Travel Map screen'),
    ],
    techChoices: [
      {
        name: 'React Native & Expo',
        reason: {
          ko: '크로스플랫폼 네이티브 성능과 일관된 파일 시스템/이미지 피커 환경을 구축하기 위해 선택했습니다.',
          en: 'Chosen for high-performance cross-platform capabilities and cohesive FileSystem/ImagePicker APIs.',
        },
      },
      {
        name: 'react-native-svg (ClipPath & Path)',
        reason: {
          ko: '복잡한 GIS 다각형(MultiPolygon) 경계 내부로 이미지를 정밀하게 클리핑하여 렌더링하기 위해 채택했습니다.',
          en: 'Adopted to precisely clip and render user photos within complex GIS MultiPolygon boundary paths.',
        },
      },
      {
        name: 'react-native-reanimated & Gesture Handler',
        reason: {
          ko: '자바스크립트 스레드 병목 없이 UI 스레드에서 60fps 핀치 줌 및 드래그 팬 인터랙션을 제공하기 위해 도입했습니다.',
          en: 'Introduced for silky 60fps pinch-to-zoom and pan gestures running directly on the native UI thread.',
        },
      },
      {
        name: 'Zustand & Expo FileSystem',
        reason: {
          ko: '네트워크 연결 없이도 로컬 앱 샌드박스에 사진을 안전하게 보관하고 빠른 반응 속도를 보장하는 Local-first 아키텍처를 위해 사용했습니다.',
          en: 'Used for a robust local-first architecture safely storing images in the app sandbox with instant UI response.',
        },
      },
      {
        name: 'Turborepo & pnpm Workspace',
        reason: {
          ko: '모바일 앱, 백엔드 API, 공통 TypeScript 타입, GIS 데이터 빌드 스크립트를 단일 저장소에서 효율적으로 공유·확장하기 위해 구성했습니다.',
          en: 'Configured to seamlessly share TypeScript schemas, GIS pipelines, and Next.js backend APIs in a monorepo.',
        },
      },
    ],
    keyFeatures: [
      {
        title: { ko: 'GIS 기반 Custom Vector Map 파이프라인', en: 'GIS-driven Custom Vector Map Pipeline' },
        description: {
          ko: '한국 161개 행정구역 및 전 세계 175개 국가의 Polygon/MultiPolygon 데이터를 SVG Path 경량 JSON 에셋으로 사전 가공하여 모바일 런타임 파싱 부하를 없앴습니다.',
          en: 'Pre-processed GIS Polygon datasets for 161 Korean districts and 175 global nations into lightweight SVG Path assets, eliminating runtime parsing overhead.',
        },
        images: [
          image('/img/tech/chripaid.png', '벡터 지도 데이터 시각화', 'Vector map visualization'),
        ],
      },
      {
        title: { ko: 'SVG ClipPath 기반 여행 사진 마스킹 렌더러', en: 'SVG ClipPath Photo Masking Renderer' },
        description: {
          ko: '선택한 사진을 각 행정구역의 실제 기하학적 형태에 맞추어 클리핑 마스킹하여, 사진 자체가 지도를 이루는 직관적인 시각적 기록을 구현했습니다.',
          en: 'Renders travel photos dynamically masked to exact geographic borders using SVG ClipPath for a photo-first journey diary.',
        },
        images: [
          image('/img/tech/chripaid.png', '사진 클리핑 렌더링 화면', 'Photo clipped map view'),
        ],
      },
      {
        title: { ko: '부드러운 지도 줌 & 팬 제스처 인터랙션', en: 'Smooth Pinch-to-Zoom & Pan Gestures' },
        description: {
          ko: 'Pinch-to-zoom 및 Pan 제스처를 결합하고, 줌 배율과 이동 한계선을 뷰포트 상태에 맞춰 실시간 보정하여 안정적인 탐색 경험을 제공합니다.',
          en: 'Provides smooth 60fps pinch-zoom and pan navigation with boundary clamping and viewport translation adjustments.',
        },
        images: [
          image('/img/tech/chripaid.png', '지도 제스처 인터랙션', 'Map gesture interaction'),
        ],
      },
      {
        title: { ko: 'Local-first 사진 아카이빙 & 지역 검색', en: 'Local-first Photo Archiving & Search' },
        description: {
          ko: '국내/해외 지역 검색, 사진 등록·교체·삭제, Expo FileSystem 영속화를 지원하며 오프라인 환경에서도 모든 기능을 독립적으로 사용 가능합니다.',
          en: 'Supports region search, photo upload/replace/delete, and offline-first storage via Expo FileSystem and Zustand persist.',
        },
        images: [
          image('/img/tech/chripaid.png', '지역 검색 및 사진 관리', 'Region search and photo management'),
        ],
      },
    ],
    roleDetails: [
      {
        ko: '대용량 SHP / GeoJSON 데이터를 모바일 최적화 SVG Path JSON으로 변환하는 Node.js 데이터 파이프라인 구축',
        en: 'Built Node.js data pipeline converting heavy GIS SHP/GeoJSON into mobile-optimized SVG Path JSON assets.',
      },
      {
        ko: 'react-native-svg의 ClipPath를 활용해 지리적 경계 내부에 이미지를 마스킹하는 Custom Photo Renderer 구현',
        en: 'Implemented custom photo renderer masking images inside geographic boundaries with react-native-svg ClipPath.',
      },
      {
        ko: 'react-native-reanimated와 Gesture Handler를 활용한 60fps 핀치 줌, 드래그 팬 및 뷰포트 바운더리 클램핑 개발',
        en: 'Engineered 60fps pinch-zoom, pan gestures, and viewport boundary clamping using Reanimated and Gesture Handler.',
      },
      {
        ko: 'Expo FileSystem 샌드박스 복사 및 Zustand persist를 결합한 Local-first 오프라인 사진 아카이브 구조 설계',
        en: 'Architected local-first offline storage combining Expo FileSystem sandbox persistence and Zustand.',
      },
      {
        ko: 'React Native 앱, Next.js 백엔드, 공통 타입 패키지를 공유하는 Turborepo 모노레포 및 Prisma 스키마 설계',
        en: 'Structured Turborepo monorepo with shared TypeScript packages and Prisma schemas for scalable cloud sync.',
      },
    ],
    troubleshooting: [
      {
        problem: {
          ko: '대용량 GIS GeoJSON(수십 MB)을 모바일 런타임에서 직접 파싱하고 렌더링할 때 심각한 메모리 스파이크와 프레임 드랍이 발생했습니다.',
          en: 'Direct runtime parsing of heavy GIS GeoJSON files (tens of MBs) caused severe memory spikes and UI thread frame drops.',
        },
        solution: {
          ko: '빌드 타임 데이터 파이프라인을 구축하여 지리 좌표를 화면 좌표계 SVG Path 문자열로 사전 단순화(Douglas-Peucker 알고리즘) 및 경량 JSON 에셋으로 컴파일했습니다.',
          en: 'Created a build-time pipeline simplifying geometries (Douglas-Peucker) into lightweight SVG Path JSON assets.',
        },
        result: {
          ko: '지도 에셋 용량을 90% 이상 압축하고, 초기 렌더링 시간을 수 초에서 100ms 이내로 단축하여 즉각적인 로딩을 달성했습니다.',
          en: 'Compressed asset size by over 90% and reduced initial render latency from seconds to under 100ms.',
        },
      },
      {
        problem: {
          ko: '여러 복합 다각형(MultiPolygon)으로 구성된 섬 지역(예: 신안군, 다도해 등)에 단일 이미지를 클리핑할 때 렌더링 깨짐 현상이 있었습니다.',
          en: 'MultiPolygon island regions broke single-image clipping due to non-contiguous SVG Path definitions.',
        },
        solution: {
          ko: 'MultiPolygon의 복수 path를 단일 <ClipPath> 내 <G> 그룹으로 결합하고, 지역 전체의 바운딩 박스를 계산하여 이미지 종횡비(Aspect Ratio)를 자동 보정하는 정규화 로직을 구현했습니다.',
          en: 'Unified multi-paths under a grouped <ClipPath> and implemented bounding-box normalization for automated aspect-ratio fitting.',
        },
        result: {
          ko: '복잡한 도서 지역 및 해외 분절 영토에서도 왜곡 없이 완벽하게 사진이 채워지는 렌더링 품질을 완성했습니다.',
          en: 'Achieved flawless, distortion-free photo rendering across complex archipelagoes and fragmented territories.',
        },
      },
    ],
    resultMetrics: [
      {
        label: { ko: '지원 지역', en: 'Regions Covered' },
        value: { ko: '한국 161개 + 세계 175개국', en: '161 KR + 175 Nations' },
        description: {
          ko: '국내 행정구역 및 전 세계 국가 벡터 경계 완벽 매핑',
          en: 'Deterministic geometry generation and validation',
        },
      },
      {
        label: { ko: '렌더링 최적화', en: 'Performance' },
        value: { ko: '60 FPS / -90% 데이터 경량화', en: '60 FPS / -90% Payload' },
        description: {
          ko: '사전 전처리 파이프라인 및 UI 스레드 제스처 가속',
          en: 'Pre-computed SVG assets & native thread gestures',
        },
      },
    ],
    lessonsLearned: [
      {
        ko: '복잡한 지리/그래픽 연산은 모바일 런타임에 맡기기보다 빌드 타임 파이프라인으로 전처리하는 것이 모바일 성능의 핵심임을 배웠습니다.',
        en: 'Learned that shifting heavy geometric computations to build-time pipelines is paramount for mobile performance.',
      },
      {
        ko: '기존 지도 SDK의 한계를 넘어 SVG 기반 맞춤형 렌더러를 구축함으로써 완전히 차별화된 사용자 경험(Photo-first UX)을 창출할 수 있음을 입증했습니다.',
        en: 'Proved that developing custom SVG renderers beyond standard map SDKs unlocks truly differentiated photo-first UX.',
      },
    ],
    limitations: [
      {
        ko: '사용자 간 여행 지도 SNS 공유 및 클라우드 실시간 동기화 기능이 추가 개발 진행 중입니다.',
        en: 'Social map sharing and real-time cloud sync are actively being developed for future release.',
      },
    ],
    nextSteps: [
      {
        ko: 'Next.js 백엔드 API 및 S3/Cloudflare R2 스토리지와 연동하여 여행 지도 웹 뷰어 및 소셜 피드로 확장할 계획입니다.',
        en: 'Planning cloud sync with Next.js APIs and S3/R2 storage for web map viewers and social feeds.',
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

