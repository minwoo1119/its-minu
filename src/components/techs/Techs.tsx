import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import styles from './techs.module.scss';
import { useEffect, useState } from 'react';
import type { Language } from '../../i18n';
import { getText } from '../../i18n';
import type { TrackData } from '../../data/tracks';

interface TechsProps {
  language: Language;
  trackData: TrackData;
}

export const Techs = ({ language, trackData }: TechsProps) => {
  const { techs } = trackData;
  const [selected, setSelected] = useState<string>(techs.options[0]);

  useEffect(() => {
    if (!techs.options.includes(selected)) {
      setSelected(techs.options[0]);
    }
  }, [techs.options, selected]);

  const activeStack = techs.stacks[selected] || [];
  const currentLabel = techs.labels[selected]
    ? getText(language, techs.labels[selected])
    : selected;

  return (
    <div className={styles.container}>
      <SelectTabBar
        options={techs.options}
        onSelect={(op: string) => setSelected(op)}
        selected={selected}
        getLabel={(option) =>
          techs.labels[option]
            ? getText(language, techs.labels[option])
            : option
        }
      />
      <div className={styles.text}>{getText(language, techs.subText)}</div>
      <div className={styles.techStacks}>
        <div
          className={styles.stackGrid}
          aria-label={
            language === 'ko'
              ? `${currentLabel} 기술 스택`
              : `${currentLabel} tech stack`
          }
        >
          {activeStack.map((tech) => (
            <div className={styles.stackItem} key={tech.name}>
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}`}
                alt=''
                loading='lazy'
                onError={(event) => {
                  const image = event.currentTarget;
                  if (image.dataset.fallback === 'true') return;

                  image.dataset.fallback = 'true';
                  image.src = `https://img.shields.io/badge/${encodeURIComponent(
                    tech.name
                  )}-334155?style=flat-square`;
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
