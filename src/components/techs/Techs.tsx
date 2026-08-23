import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';

export type TabBarOption = 'visionAi' | 'visionSw' | 'supplementary';

interface TechStackItem {
  name: string;
  icon: string;
}

interface TechsProps {
  language: Language;
}

export const Techs = ({ language }: TechsProps) => {
  const [selected, setSelected] = useState<TabBarOption>('visionAi');
  const options: TabBarOption[] = ['visionAi', 'visionSw', 'supplementary'];
  const labels = {
    visionAi: language === 'ko' ? 'Computer Vision & AI' : 'Computer Vision & AI',
    visionSw: language === 'ko' ? 'Vision SW Engineering' : 'Vision SW Engineering',
    supplementary:
      language === 'ko'
        ? 'Supplementary Engineering'
        : 'Supplementary Engineering',
  };

  const techStacks: Record<TabBarOption, TechStackItem[]> = {
    visionAi: [
      ['OpenCV', 'opencv'],
      ['OpenCvSharp', 'opencv'],
      ['HALCON', 'halcon'],
      ['TensorRT', 'nvidia'],
      ['ONNX Runtime', 'onnx'],
      ['YOLO', 'ultralytics'],
      ['PyTorch', 'pytorch'],
      ['C++ CUDA', 'nvidia'],
    ].map(([name, icon]) => ({ name, icon })),
    visionSw: [
      ['C++', 'cplusplus'],
      ['MFC', 'microsoft'],
      ['C#', 'csharp'],
      ['.NET 8 WPF', 'dotnet'],
      ['MVVM', 'dotnet'],
      ['Async / CancellationToken', 'dotnet'],
      ['Clean Architecture', 'dotnet'],
      ['Memory Management', 'cplusplus'],
    ].map(([name, icon]) => ({ name, icon })),
    supplementary: [
      ['Python', 'python'],
      ['FastAPI', 'fastapi'],
      ['Docker', 'docker'],
      ['React', 'react'],
      ['TypeScript', 'typescript'],
      ['Flutter', 'flutter'],
    ].map(([name, icon]) => ({ name, icon })),
  };

  return (
    <div className={styles.container}>
      <SelectTabBar
        options={options}
        onSelect={(op: TabBarOption) => setSelected(op)}
        selected={selected}
        getLabel={(option) => labels[option]}
      />
      <div className={styles.text}>
        {language === 'ko'
          ? '비전 검사, 영상 정량 분석, AI 추론 최적화에 바로 연결되는 기술을 우선합니다.'
          : 'Prioritizing skills that directly support vision inspection, quantitative image analysis, and optimized AI inference.'}
      </div>
      <div className={styles.techStacks}>
        <div
          className={styles.stackGrid}
          aria-label={language === 'ko' ? `${labels[selected]} 기술 스택` : `${labels[selected]} tech stack`}
        >
          {techStacks[selected].map((tech) => (
            <div className={styles.stackItem} key={tech.name}>
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}`}
                alt=""
                loading="lazy"
                onError={(event) => {
                  const image = event.currentTarget;
                  if (image.dataset.fallback === 'true') return;

                  image.dataset.fallback = 'true';
                  image.src = `https://img.shields.io/badge/${encodeURIComponent(tech.name)}-334155?style=flat-square`;
                }}
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
