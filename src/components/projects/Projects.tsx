import { useEffect, useState } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData, ProjectCardInfo } from '../../data/tracks';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import { ProjectCard } from '../common/projectCard/ProjectCard';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import type { SchematicVariant } from '../common/visualDiagram/ProjectSchematic';
import styles from './projects.module.scss';

interface ProjectsProps {
  language: Language;
  trackData: TrackData;
  onProjectClick: (projectId: number) => void;
  onArchiveClick?: () => void;
}

const SELECTED_META: Record<
  number,
  {
    schematic?: SchematicVariant;
    outcome: { ko: string; en: string };
  }
> = {
  1: {
    outcome: {
      ko: 'ONNX Runtime · TensorRT 추론 최적화로 실측 처리 시간 300ms → 80ms (-73.3%)',
      en: 'Measured inference latency cut from 300ms to 80ms (-73.3%) via ONNX Runtime & TensorRT',
    },
  },
  21: {
    schematic: 'anomaly-patchcore',
    outcome: {
      ko: '사전학습 CNN 특징 추출 · Memory Bank · Coreset Sampling 구현 (ONNX/TRT 진행 중)',
      en: 'Pretrained CNN features, Memory Bank & Coreset Sampling built (ONNX/TRT in progress)',
    },
  },
  18: {
    schematic: 'local-rag',
    outcome: {
      ko: 'Windows 런처 · 프로세스 트리 정리 · Docker/SQLite 스토리지 자동 폴백 구현',
      en: 'Windows launcher, process-tree cleanup & adaptive Docker/SQLite storage fallback built',
    },
  },
};

const PREVIEW_ARCHIVE_IDS = [2, 3, 4, 5];

export const Projects = ({
  language,
  trackData,
  onProjectClick,
  onArchiveClick,
}: ProjectsProps) => {
  const { projects } = trackData;
  const isVisionTrack = trackData.id === 'computer-vision';
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('all');

  useEffect(() => {
    setSelectedMainCategory('all');
  }, [trackData.id]);

  const filteredMainProjects =
    selectedMainCategory === 'all'
      ? projects.items
      : projects.items.filter((p) => p.category === selectedMainCategory);

  const otherConfig = projects.otherProjects;
  const otherItems = otherConfig?.items ?? [];

  const previewOtherItems: ProjectCardInfo[] = isVisionTrack
    ? PREVIEW_ARCHIVE_IDS.map((id) => otherItems.find((item) => item.id === id)).filter(
        (item): item is ProjectCardInfo => Boolean(item)
      )
    : otherItems.slice(0, 4);

  const getCategoryLabel = (category: string) => {
    if (category === 'vision') return language === 'ko' ? 'Vision / SW' : 'Vision & SW';
    if (category === 'ai') return language === 'ko' ? 'AI / Research' : 'AI & Research';
    if (category === 'mobile') return 'Mobile';
    if (category === 'web') return 'Web';
    return 'Engineering';
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. Selected / Track Projects */}
      <section className={styles.section} id='selected-projects'>
        <div className={styles.container}>
          <SectionHeading
            eyebrow={isVisionTrack ? 'Selected Projects' : 'Projects'}
            title={
              isVisionTrack
                ? language === 'ko'
                  ? '개인·연구 핵심 프로젝트'
                  : 'Selected Projects'
                : getText(language, projects.titleText)
            }
            description={
              isVisionTrack
                ? language === 'ko'
                  ? '영상 인식·추론 최적화, 비지도 이상 탐지, 로컬 RAG 시스템 구현 역량을 보여주는 핵심 프로젝트입니다.'
                  : 'Core projects spanning computer vision inference optimization, visual anomaly detection, and local RAG systems.'
                : getText(language, projects.subText)
            }
          />

          {projects.categoryOptions.length > 1 && (
            <SelectTabBar
              options={projects.categoryOptions}
              selected={selectedMainCategory}
              getLabel={(category) =>
                projects.categoryLabels[category]
                  ? getText(language, projects.categoryLabels[category])
                  : category
              }
              onSelect={(cat) => setSelectedMainCategory(cat)}
            />
          )}

          <div
            className={`${styles.mainGrid} ${
              isVisionTrack ? styles.threeCol : styles.twoCol
            }`}
          >
            {filteredMainProjects.map((item) => {
              const meta = SELECTED_META[item.id];
              return (
                <ProjectCard
                  key={item.id}
                  language={language}
                  variant='standard'
                  period={item.period ? getText(language, item.period) : undefined}
                  statusBadge={
                    item.statusBadge ? getText(language, item.statusBadge) : undefined
                  }
                  title={getText(language, item.title)}
                  summary={getText(language, item.description)}
                  outcome={meta ? meta.outcome[language] : undefined}
                  techs={item.techs}
                  maxTechsDesktop={5}
                  imgUrl={item.imgUrl || undefined}
                  schematicVariant={meta?.schematic}
                  onClick={() => onProjectClick(item.id)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Compact Other Projects Preview -> Dedicated Archive */}
      {otherConfig && previewOtherItems.length > 0 && (
        <section className={`${styles.section} ${styles.archivePreview}`} id='other-projects'>
          <div className={styles.container}>
            <SectionHeading
              eyebrow='Archive Preview'
              title={language === 'ko' ? '기타 프로젝트' : 'Additional Projects'}
              description={
                language === 'ko'
                  ? '이전 영상처리 유틸리티, LLM 연구, 모바일·웹 프로젝트 중 주요 4건을 미리 보여드립니다.'
                  : 'Selected highlights from earlier image-processing utilities, LLM research, mobile apps, and web systems.'
              }
              action={
                onArchiveClick && (
                  <button
                    type='button'
                    className={styles.archiveBtn}
                    onClick={onArchiveClick}
                  >
                    {language === 'ko'
                      ? `전체 아카이브 보기 (${otherItems.length}) →`
                      : `Open Project Archive (${otherItems.length}) →`}
                  </button>
                )
              }
              compact
            />

            <div className={styles.compactGrid}>
              {previewOtherItems.map((item) => (
                <ProjectCard
                  key={item.id}
                  language={language}
                  variant='compact'
                  eyebrow={getCategoryLabel(item.category)}
                  title={getText(language, item.title)}
                  summary={getText(language, item.description)}
                  techs={item.techs}
                  maxTechsDesktop={4}
                  onClick={() => onProjectClick(item.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
