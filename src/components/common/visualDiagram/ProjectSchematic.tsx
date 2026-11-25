import type { Language } from '../../../i18n';
import styles from './projectSchematic.module.scss';

export type SchematicVariant =
  | 'systems-sw'
  | 'platform'
  | 'vision-pipeline'
  | 'anomaly-patchcore'
  | 'local-rag';

interface ProjectSchematicProps {
  variant: SchematicVariant;
  language: Language;
  compact?: boolean;
}

export const ProjectSchematic = ({
  variant,
  language,
  compact = false,
}: ProjectSchematicProps) => {
  const isKo = language === 'ko';

  const renderDiagram = () => {
    switch (variant) {
      case 'systems-sw':
        return (
          <svg
            viewBox='0 0 640 210'
            className={styles.svg}
            role='img'
            aria-label={
              isKo
                ? 'C++/MFC 검사 소프트웨어 처리 및 멀티스레드 저장 흐름도'
                : 'C++/MFC inspection software execution and multi-threaded persistence diagram'
            }
          >
            <defs>
              <marker id='arrow-sw' viewBox='0 0 8 8' refX='7' refY='4' markerWidth='6' markerHeight='6' orient='auto'>
                <path d='M0,1 L7,4 L0,7' fill='none' stroke='#71717a' strokeWidth='1.3' />
              </marker>
            </defs>
            <text x='20' y='24' className={styles.caption}>
              C++ / MFC INSPECTION &amp; THREAD PIPELINE
            </text>

            {/* Nodes */}
            <rect x='20' y='48' width='130' height='66' rx='6' className={styles.node} />
            <text x='85' y='74' textAnchor='middle' className={styles.nodeTitle}>Capture</text>
            <text x='85' y='94' textAnchor='middle' className={styles.nodeSub}>
              {isKo ? '영상 입력·검사' : 'Acquisition'}
            </text>

            <rect x='176' y='48' width='134' height='66' rx='6' className={styles.nodeAccent} />
            <text x='243' y='74' textAnchor='middle' className={styles.nodeTitle}>ROI Decision</text>
            <text x='243' y='94' textAnchor='middle' className={styles.nodeSub}>
              {isKo ? '양품조건 ROI' : 'Good-Cond ROI'}
            </text>

            <rect x='336' y='48' width='134' height='66' rx='6' className={styles.nodeAccent} />
            <text x='403' y='74' textAnchor='middle' className={styles.nodeTitle}>Result Struct</text>
            <text x='403' y='94' textAnchor='middle' className={styles.nodeSub}>
              {isKo ? 'Variation 분리' : 'Variation Split'}
            </text>

            <rect x='496' y='48' width='124' height='66' rx='6' className={styles.nodeDashed} />
            <text x='558' y='74' textAnchor='middle' className={styles.nodeTitle}>Save Thread</text>
            <text x='558' y='94' textAnchor='middle' className={styles.nodeSub}>
              {isKo ? '안정화 분석 중' : 'Reliability WIP'}
            </text>

            {/* Arrows */}
            <line x1='150' y1='81' x2='174' y2='81' className={styles.edge} markerEnd='url(#arrow-sw)' />
            <line x1='310' y1='81' x2='334' y2='81' className={styles.edge} markerEnd='url(#arrow-sw)' />
            <line x1='470' y1='81' x2='494' y2='81' className={styles.edge} markerEnd='url(#arrow-sw)' />

            {/* Lower R&D band */}
            <rect x='176' y='140' width='444' height='46' rx='6' className={styles.band} />
            <text x='194' y='167' className={styles.bandText}>
              {isKo
                ? 'R&D (진행 중): Variation 비교 · EfficientAD / PatchCore 적용성 평가 · 메모리 경계 진단'
                : 'Ongoing R&D: Variation Comparison · EfficientAD / PatchCore Evaluation · Memory Diagnostics'}
            </text>
          </svg>
        );

      case 'platform':
        return (
          <svg
            viewBox='0 0 640 210'
            className={styles.svg}
            role='img'
            aria-label={
              isKo
                ? 'Vision Intelligence Platform 시스템 연동 아키텍처'
                : 'Vision Intelligence Platform system architecture'
            }
          >
            <defs>
              <marker id='arrow-pf' viewBox='0 0 8 8' refX='7' refY='4' markerWidth='6' markerHeight='6' orient='auto'>
                <path d='M0,1 L7,4 L0,7' fill='none' stroke='#71717a' strokeWidth='1.3' />
              </marker>
            </defs>
            <text x='20' y='24' className={styles.caption}>
              VISION INTELLIGENCE PLATFORM ARCHITECTURE
            </text>

            {/* Top platform row */}
            <rect x='20' y='44' width='182' height='54' rx='6' className={styles.nodeAccent} />
            <text x='111' y='67' textAnchor='middle' className={styles.nodeTitle}>Monitoring</text>
            <text x='111' y='84' textAnchor='middle' className={styles.nodeSub}>Web · Q-Log · Deploy</text>

            <rect x='228' y='44' width='182' height='54' rx='6' className={styles.nodeAccent} />
            <text x='319' y='67' textAnchor='middle' className={styles.nodeTitle}>Teaching</text>
            <text x='319' y='84' textAnchor='middle' className={styles.nodeSub}>HDBSCAN · KDE · DLL</text>

            <rect x='436' y='44' width='184' height='54' rx='6' className={styles.nodeAccent} />
            <text x='528' y='67' textAnchor='middle' className={styles.nodeTitle}>Engineering</text>
            <text x='528' y='84' textAnchor='middle' className={styles.nodeSub}>DINOv2/3 · Exp. Lab</text>

            {/* Bottom equipment/worker row */}
            <rect x='20' y='132' width='182' height='56' rx='6' className={styles.node} />
            <text x='111' y='156' textAnchor='middle' className={styles.nodeTitle}>Equipment Client</text>
            <text x='111' y='173' textAnchor='middle' className={styles.nodeSub}>Python TUI · WS · Stream</text>

            <rect x='228' y='132' width='182' height='56' rx='6' className={styles.node} />
            <text x='319' y='156' textAnchor='middle' className={styles.nodeTitle}>Vision SW</text>
            <text x='319' y='173' textAnchor='middle' className={styles.nodeSub}>Named Pipe IPC · DLL</text>

            <rect x='436' y='132' width='184' height='56' rx='6' className={styles.node} />
            <text x='528' y='156' textAnchor='middle' className={styles.nodeTitle}>Server &amp; AI Worker</text>
            <text x='528' y='173' textAnchor='middle' className={styles.nodeSub}>REST API · Embed · Train</text>

            {/* Connectors */}
            <line x1='111' y1='98' x2='111' y2='130' className={styles.edge} markerEnd='url(#arrow-pf)' />
            <line x1='202' y1='160' x2='226' y2='160' className={styles.edge} markerEnd='url(#arrow-pf)' />
            <line x1='319' y1='98' x2='319' y2='130' className={styles.edge} markerEnd='url(#arrow-pf)' />
            <line x1='528' y1='98' x2='528' y2='130' className={styles.edge} markerEnd='url(#arrow-pf)' />
          </svg>
        );

      case 'vision-pipeline':
        return (
          <svg
            viewBox='0 0 640 210'
            className={styles.svg}
            role='img'
            aria-label={
              isKo
                ? 'YOLO, Custom CNN, PaddleOCR 및 TensorRT 추론 파이프라인'
                : 'YOLO, Custom CNN, PaddleOCR, and TensorRT inference pipeline'
            }
          >
            <defs>
              <marker id='arrow-cv' viewBox='0 0 8 8' refX='7' refY='4' markerWidth='6' markerHeight='6' orient='auto'>
                <path d='M0,1 L7,4 L0,7' fill='none' stroke='#71717a' strokeWidth='1.3' />
              </marker>
            </defs>
            <text x='20' y='24' className={styles.caption}>
              VISION DETECTION &amp; INFERENCE OPTIMIZATION PIPELINE
            </text>

            <rect x='20' y='48' width='130' height='64' rx='6' className={styles.node} />
            <text x='85' y='74' textAnchor='middle' className={styles.nodeTitle}>YOLO</text>
            <text x='85' y='92' textAnchor='middle' className={styles.nodeSub}>Scale ROI</text>

            <rect x='176' y='48' width='132' height='64' rx='6' className={styles.node} />
            <text x='242' y='74' textAnchor='middle' className={styles.nodeTitle}>OpenCV</text>
            <text x='242' y='92' textAnchor='middle' className={styles.nodeSub}>Preprocess</text>

            <rect x='334' y='48' width='136' height='64' rx='6' className={styles.nodeAccent} />
            <text x='402' y='74' textAnchor='middle' className={styles.nodeTitle}>CNN + OCR</text>
            <text x='402' y='92' textAnchor='middle' className={styles.nodeSub}>PaddleOCR</text>

            <rect x='496' y='48' width='124' height='64' rx='6' className={styles.nodeAccent} />
            <text x='558' y='74' textAnchor='middle' className={styles.nodeTitle}>ONNX / TRT</text>
            <text x='558' y='92' textAnchor='middle' className={styles.nodeSub}>300ms → 80ms</text>

            <line x1='150' y1='80' x2='174' y2='80' className={styles.edge} markerEnd='url(#arrow-cv)' />
            <line x1='308' y1='80' x2='332' y2='80' className={styles.edge} markerEnd='url(#arrow-cv)' />
            <line x1='470' y1='80' x2='494' y2='80' className={styles.edge} markerEnd='url(#arrow-cv)' />

            <rect x='20' y='138' width='600' height='46' rx='6' className={styles.band} />
            <text x='38' y='166' className={styles.bandText}>
              {isKo
                ? '실측 지연시간 최적화: 300 ms (초기 파이프라인) → 80 ms (ONNX Runtime / TensorRT, 약 73.3% 감소)'
                : 'Measured Latency: 300 ms (Baseline) → 80 ms (ONNX Runtime / TensorRT, ~73.3% Reduction)'}
            </text>
          </svg>
        );

      case 'anomaly-patchcore':
        return (
          <svg
            viewBox='0 0 640 210'
            className={styles.svg}
            role='img'
            aria-label={
              isKo
                ? 'PatchCore 특징 추출, Memory Bank, Coreset Sampling 및 진행 중인 추론 파이프라인'
                : 'PatchCore feature extraction, Memory Bank, Coreset Sampling, and in-progress inference pipeline'
            }
          >
            <defs>
              <marker id='arrow-pc' viewBox='0 0 8 8' refX='7' refY='4' markerWidth='6' markerHeight='6' orient='auto'>
                <path d='M0,1 L7,4 L0,7' fill='none' stroke='#71717a' strokeWidth='1.3' />
              </marker>
            </defs>
            <text x='20' y='24' className={styles.caption}>
              PATCHCORE UNSUPERVISED ANOMALY DETECTION (IN PROGRESS)
            </text>

            <rect x='20' y='48' width='132' height='66' rx='6' className={styles.nodeAccent} />
            <text x='86' y='74' textAnchor='middle' className={styles.nodeTitle}>CNN Features</text>
            <text x='86' y='94' textAnchor='middle' className={styles.nodeSub}>Pretrained Layers</text>

            <rect x='178' y='48' width='132' height='66' rx='6' className={styles.nodeAccent} />
            <text x='244' y='74' textAnchor='middle' className={styles.nodeTitle}>Memory Bank</text>
            <text x='244' y='94' textAnchor='middle' className={styles.nodeSub}>Normal Patches</text>

            <rect x='336' y='48' width='134' height='66' rx='6' className={styles.nodeAccent} />
            <text x='403' y='74' textAnchor='middle' className={styles.nodeTitle}>Coreset</text>
            <text x='403' y='94' textAnchor='middle' className={styles.nodeSub}>Subsampling</text>

            <rect x='496' y='48' width='124' height='66' rx='6' className={styles.nodeDashed} />
            <text x='558' y='74' textAnchor='middle' className={styles.nodeTitle}>ONNX / TRT</text>
            <text x='558' y='94' textAnchor='middle' className={styles.nodeSub}>
              {isKo ? '연동 진행 중' : 'In Progress'}
            </text>

            <line x1='152' y1='81' x2='176' y2='81' className={styles.edge} markerEnd='url(#arrow-pc)' />
            <line x1='310' y1='81' x2='334' y2='81' className={styles.edge} markerEnd='url(#arrow-pc)' />
            <line x1='470' y1='81' x2='494' y2='81' className={styles.edge} markerEnd='url(#arrow-pc)' />

            <rect x='20' y='138' width='600' height='46' rx='6' className={styles.band} />
            <text x='38' y='166' className={styles.bandText}>
              {isKo
                ? '구현 완료: CNN 특징 추출 · Memory Bank · Coreset Sampling  |  진행 중: C++ 추론 파이프라인 및 벤치마크'
                : 'Implemented: CNN Features · Memory Bank · Coreset  |  In Progress: C++ Inference & Benchmarks'}
            </text>
          </svg>
        );

      case 'local-rag':
        return (
          <svg
            viewBox='0 0 640 210'
            className={styles.svg}
            role='img'
            aria-label={
              isKo
                ? '로컬 RAG 검색 파이프라인 및 Docker/SQLite 자동 폴백 아키텍처'
                : 'Local RAG retrieval pipeline and Docker/SQLite storage fallback architecture'
            }
          >
            <defs>
              <marker id='arrow-rag' viewBox='0 0 8 8' refX='7' refY='4' markerWidth='6' markerHeight='6' orient='auto'>
                <path d='M0,1 L7,4 L0,7' fill='none' stroke='#71717a' strokeWidth='1.3' />
              </marker>
            </defs>
            <text x='20' y='24' className={styles.caption}>
              OFFLINE RAG PIPELINE &amp; ADAPTIVE STORAGE FALLBACK
            </text>

            <rect x='20' y='46' width='130' height='62' rx='6' className={styles.node} />
            <text x='85' y='72' textAnchor='middle' className={styles.nodeTitle}>Win Launcher</text>
            <text x='85' y='90' textAnchor='middle' className={styles.nodeSub}>Process Lifecycle</text>

            <rect x='176' y='46' width='134' height='62' rx='6' className={styles.nodeAccent} />
            <text x='243' y='72' textAnchor='middle' className={styles.nodeTitle}>Ingest &amp; Chunk</text>
            <text x='243' y='90' textAnchor='middle' className={styles.nodeSub}>PDF · bge-m3</text>

            <rect x='336' y='46' width='134' height='62' rx='6' className={styles.nodeAccent} />
            <text x='403' y='72' textAnchor='middle' className={styles.nodeTitle}>Vector Search</text>
            <text x='403' y='90' textAnchor='middle' className={styles.nodeSub}>FastAPI · Qdrant</text>

            <rect x='496' y='46' width='124' height='62' rx='6' className={styles.nodeAccent} />
            <text x='558' y='72' textAnchor='middle' className={styles.nodeTitle}>Local LLM</text>
            <text x='558' y='90' textAnchor='middle' className={styles.nodeSub}>Ollama · Trace</text>

            <line x1='150' y1='77' x2='174' y2='77' className={styles.edge} markerEnd='url(#arrow-rag)' />
            <line x1='310' y1='77' x2='334' y2='77' className={styles.edge} markerEnd='url(#arrow-rag)' />
            <line x1='470' y1='77' x2='494' y2='77' className={styles.edge} markerEnd='url(#arrow-rag)' />

            <rect x='20' y='136' width='290' height='48' rx='6' className={styles.band} />
            <text x='165' y='164' textAnchor='middle' className={styles.bandText}>
              Docker Mode: Postgres · Qdrant · MinIO
            </text>

            <rect x='330' y='136' width='290' height='48' rx='6' className={styles.band} />
            <text x='475' y='164' textAnchor='middle' className={styles.bandText}>
              Fallback Mode: SQLite · In-Memory Qdrant · Disk
            </text>
          </svg>
        );
    }
  };

  return (
    <div className={`${styles.wrapper} ${compact ? styles.compact : ''}`}>
      {renderDiagram()}
    </div>
  );
};
