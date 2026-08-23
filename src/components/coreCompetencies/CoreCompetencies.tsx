import { BoxContent } from '../common/boxContent/BoxContent';
import styles from './coreCompetencies.module.scss';
import type { Language } from '../../i18n';

interface CoreCompetenciesProps {
  language: Language;
}

export const CoreCompetencies = ({ language }: CoreCompetenciesProps) => {
  const content =
    language === 'ko'
      ? {
          mini: 'About Me',
          title: '비전 알고리즘을 실시간 제품 소프트웨어로 구현합니다.',
          items: [
            {
              title: '실시간 비전 SW 아키텍처',
              description:
                'C++ MFC와 C# .NET WPF(MVVM) 기반으로 카메라, ROI, 비동기 분석, CancellationToken, OpenCV Mat 수명 관리가 포함된 실시간 비전 시스템을 설계합니다.',
              icon: '⚙️',
            },
            {
              title: '정밀 분할과 정량 분석',
              description:
                'CLAHE, Adaptive Threshold, Morphology, Distance Transform, Watershed 기반의 이미지 분할 파이프라인과 면적, Feret 직경, Circularity 등 형상 지표 산출을 구현합니다.',
              icon: '📐',
            },
            {
              title: 'AI 모델 최적화와 확장 역량',
              description:
                'YOLO, Custom CNN, LightSVTR 모델 학습 및 ONNX Runtime/TensorRT 변환을 수행했고, TensorRT 최적화로 추론 지연 시간을 300ms에서 80ms로 줄였습니다. 웹/앱/LLM 경험은 비전 솔루션을 확장하는 소프트웨어 기반 역량으로 활용합니다.',
              icon: '🧠',
            },
          ],
        }
      : {
          mini: 'About Me',
          title: 'I turn vision algorithms into real-time product software.',
          items: [
            {
              title: 'Real-Time Vision Software Architecture',
              description:
                'I design C++ MFC and C# .NET WPF(MVVM) vision systems with camera control, ROI workflows, asynchronous analysis, CancellationToken support, and explicit OpenCV Mat lifecycle management.',
              icon: '⚙️',
            },
            {
              title: 'Precise Segmentation and Quantitative Analysis',
              description:
                'I implement CLAHE, adaptive thresholding, morphology, distance transform, and watershed pipelines, then convert segmented objects into calibrated metrics such as area, Feret diameter, and circularity.',
              icon: '📐',
            },
            {
              title: 'AI Optimization and Software Range',
              description:
                'I train and deploy YOLO, custom CNN, and LightSVTR models through ONNX Runtime and TensorRT, reducing inference latency from 300ms to 80ms. My web, app, and LLM experience supports the full software foundation around vision solutions.',
              icon: '🧠',
            },
          ],
        };

  return (
    <div className={styles.container}>
      <div className={styles.mini}>{content.mini}</div>
      <div className={styles.title}>{content.title}</div>

      <div className={styles.boxesWrapper}>
        {content.items.map((item) => (
          <BoxContent
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
