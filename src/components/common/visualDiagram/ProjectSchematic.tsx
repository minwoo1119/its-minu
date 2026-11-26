import type { Language } from '../../../i18n';
import styles from './projectSchematic.module.scss';

export type SchematicVariant = 'platform' | 'local-rag';

interface ProjectSchematicProps {
  variant: SchematicVariant;
  language: Language;
}

export const ProjectSchematic = ({
  variant,
  language,
}: ProjectSchematicProps) => {
  const isKo = language === 'ko';

  if (variant === 'platform') {
    return (
      <figure className={styles.wrapper}>
        <svg
          viewBox='0 0 640 198'
          className={styles.svg}
          role='img'
          aria-label={
            isKo
              ? 'Vision Intelligence Platform 시스템 연동 아키텍처'
              : 'Vision Intelligence Platform system architecture'
          }
        >
          <defs>
            <marker
              id='arrow-pf'
              viewBox='0 0 8 8'
              refX='7'
              refY='4'
              markerWidth='6'
              markerHeight='6'
              orient='auto'
            >
              <path
                d='M0,1 L7,4 L0,7'
                fill='none'
                stroke='#71717a'
                strokeWidth='1.3'
              />
            </marker>
          </defs>

          <rect x='16' y='16' width='186' height='58' rx='2' className={styles.nodeAccent} />
          <text x='109' y='40' textAnchor='middle' className={styles.nodeTitle}>Monitoring</text>
          <text x='109' y='58' textAnchor='middle' className={styles.nodeSub}>Web · Q-Log · Deploy</text>

          <rect x='227' y='16' width='186' height='58' rx='2' className={styles.nodeAccent} />
          <text x='320' y='40' textAnchor='middle' className={styles.nodeTitle}>Teaching</text>
          <text x='320' y='58' textAnchor='middle' className={styles.nodeSub}>HDBSCAN · KDE · DLL</text>

          <rect x='438' y='16' width='186' height='58' rx='2' className={styles.nodeAccent} />
          <text x='531' y='40' textAnchor='middle' className={styles.nodeTitle}>Engineering</text>
          <text x='531' y='58' textAnchor='middle' className={styles.nodeSub}>DINOv2/3 · Exp. Lab</text>

          <rect x='16' y='118' width='186' height='60' rx='2' className={styles.node} />
          <text x='109' y='143' textAnchor='middle' className={styles.nodeTitle}>Equipment Client</text>
          <text x='109' y='161' textAnchor='middle' className={styles.nodeSub}>Python TUI · WS · Stream</text>

          <rect x='227' y='118' width='186' height='60' rx='2' className={styles.node} />
          <text x='320' y='143' textAnchor='middle' className={styles.nodeTitle}>Vision SW</text>
          <text x='320' y='161' textAnchor='middle' className={styles.nodeSub}>Named Pipe IPC · DLL</text>

          <rect x='438' y='118' width='186' height='60' rx='2' className={styles.node} />
          <text x='531' y='143' textAnchor='middle' className={styles.nodeTitle}>Server &amp; AI Worker</text>
          <text x='531' y='161' textAnchor='middle' className={styles.nodeSub}>REST API · Embed · Train</text>

          <line x1='109' y1='74' x2='109' y2='116' className={styles.edge} markerEnd='url(#arrow-pf)' />
          <line x1='202' y1='148' x2='225' y2='148' className={styles.edge} markerEnd='url(#arrow-pf)' />
          <line x1='320' y1='74' x2='320' y2='116' className={styles.edge} markerEnd='url(#arrow-pf)' />
          <line x1='531' y1='74' x2='531' y2='116' className={styles.edge} markerEnd='url(#arrow-pf)' />
        </svg>
        <figcaption className={styles.figcaption}>
          {isKo
            ? 'Monitoring · Teaching · Engineering 상위 모듈과 설비 Client · Vision SW · AI Worker 간 연동 구조'
            : 'Module topology connecting Monitoring, Teaching, and Engineering to Equipment Client, Vision SW, and AI Worker'}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={styles.wrapper}>
      <svg
        viewBox='0 0 640 198'
        className={styles.svg}
        role='img'
        aria-label={
          isKo
            ? '로컬 RAG 검색 파이프라인 및 Docker/SQLite 자동 폴백 아키텍처'
            : 'Local RAG retrieval pipeline and Docker/SQLite storage fallback architecture'
        }
      >
        <defs>
          <marker
            id='arrow-rag'
            viewBox='0 0 8 8'
            refX='7'
            refY='4'
            markerWidth='6'
            markerHeight='6'
            orient='auto'
          >
            <path
              d='M0,1 L7,4 L0,7'
              fill='none'
              stroke='#71717a'
              strokeWidth='1.3'
            />
          </marker>
        </defs>

        <rect x='16' y='18' width='132' height='60' rx='2' className={styles.node} />
        <text x='82' y='43' textAnchor='middle' className={styles.nodeTitle}>Win Launcher</text>
        <text x='82' y='61' textAnchor='middle' className={styles.nodeSub}>Process Lifecycle</text>

        <rect x='174' y='18' width='136' height='60' rx='2' className={styles.nodeAccent} />
        <text x='242' y='43' textAnchor='middle' className={styles.nodeTitle}>Ingest &amp; Chunk</text>
        <text x='242' y='61' textAnchor='middle' className={styles.nodeSub}>PDF · bge-m3</text>

        <rect x='336' y='18' width='136' height='60' rx='2' className={styles.nodeAccent} />
        <text x='404' y='43' textAnchor='middle' className={styles.nodeTitle}>Vector Search</text>
        <text x='404' y='61' textAnchor='middle' className={styles.nodeSub}>FastAPI · Qdrant</text>

        <rect x='498' y='18' width='126' height='60' rx='2' className={styles.nodeAccent} />
        <text x='561' y='43' textAnchor='middle' className={styles.nodeTitle}>Local LLM</text>
        <text x='561' y='61' textAnchor='middle' className={styles.nodeSub}>Ollama · Trace</text>

        <line x1='148' y1='48' x2='172' y2='48' className={styles.edge} markerEnd='url(#arrow-rag)' />
        <line x1='310' y1='48' x2='334' y2='48' className={styles.edge} markerEnd='url(#arrow-rag)' />
        <line x1='472' y1='48' x2='496' y2='48' className={styles.edge} markerEnd='url(#arrow-rag)' />

        <rect x='16' y='118' width='294' height='54' rx='2' className={styles.band} />
        <text x='163' y='149' textAnchor='middle' className={styles.bandText}>
          Docker Mode: Postgres · Qdrant · MinIO
        </text>

        <rect x='330' y='118' width='294' height='54' rx='2' className={styles.band} />
        <text x='477' y='149' textAnchor='middle' className={styles.bandText}>
          Fallback Mode: SQLite · In-Memory Qdrant · Disk
        </text>

        <line x1='242' y1='78' x2='163' y2='116' className={styles.edge} markerEnd='url(#arrow-rag)' />
        <line x1='404' y1='78' x2='477' y2='116' className={styles.edge} markerEnd='url(#arrow-rag)' />
      </svg>
      <figcaption className={styles.figcaption}>
        {isKo
          ? '로컬 실행 런처 기반 RAG 처리 흐름과 Docker 미실행 환경 자동 스토리지 폴백 구조'
          : 'Local launcher RAG execution flow with automatic Docker-to-SQLite storage fallback'}
      </figcaption>
    </figure>
  );
};
