import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useState } from 'react';
import type { Language } from '../../i18n';

export type TabBarOption = 'frontend' | 'backend' | 'ai' | 'vision';

interface TechStackItem {
  name: string;
  icon: string;
}

interface TechsProps {
  language: Language;
}

export const Techs = ({ language }: TechsProps) => {
  const [selected, setSelected] = useState<TabBarOption>('frontend');
  const options: TabBarOption[] = ['frontend', 'backend', 'ai', 'vision'];
  const labels = {
    frontend: language === 'ko' ? '프론트엔드' : 'Frontend',
    backend: language === 'ko' ? '백엔드' : 'Backend',
    ai: 'AI',
    vision: language === 'ko' ? '비전SW' : 'Computer Vision',
  };

  const techStacks: Record<TabBarOption, TechStackItem[]> = {
    frontend: [
      ['React', 'react'],
      ['HTML5', 'html5'],
      ['CSS3', 'css3'],
      ['JavaScript', 'javascript'],
      ['TypeScript', 'typescript'],
      ['TailwindCSS', 'tailwindcss'],
      ['styled-components', 'styledcomponents'],
      ['CSS Modules', 'cssmodules'],
      ['Zustand', 'zustand'],
      ['TanStack Query', 'tanstack'],
      ['Flutter', 'flutter'],
      ['React Native', 'react'],
      ['Expo', 'expo'],
    ].map(([name, icon]) => ({ name, icon })),
    backend: [
      ['NestJS', 'nestjs'],
      ['MySQL', 'mysql'],
      ['PostgreSQL', 'postgresql'],
      ['Docker', 'docker'],
      ['Ubuntu', 'ubuntu'],
      ['Nginx', 'nginx'],
    ].map(([name, icon]) => ({ name, icon })),
    ai: [
      ['Python', 'python'],
      ['PyTorch', 'pytorch'],
      ['ONNX', 'onnx'],
      ['TensorRT', 'nvidia'],
      ['YOLO', 'ultralytics'],
      ['OCR', 'ocr'],
      ['LLM', 'llm'],
      ['Unsloth', 'unsloth'],
      ['QLoRA', 'qlora'],
      ['LoRA', 'lora'],
      ['LangChain', 'langchain'],
      ['RAG', 'rag'],
    ].map(([name, icon]) => ({ name, icon })),
    vision: [
      ['C++', 'cplusplus'],
      ['MFC', 'microsoft'],
      ['C#', 'csharp'],
      ['WPF', 'dotnet'],
      ['OpenCV', 'opencv'],
      ['HALCON', 'halcon'],
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
          ? '많이 부족하지만 열심히 깊이를 채워나가는 중이에요.'
          : 'Still building depth every day, one layer at a time.'}
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
