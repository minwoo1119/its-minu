import { useEffect, useState } from 'react';
import { SelectTabBar } from '../common/selectTabBar/SelectTabBar';
import { SectionHeading } from '../common/sectionHeading/SectionHeading';
import styles from './techs.module.scss';
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
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow='Tech Stack'
          title={language === 'ko' ? '트랙 기술 스택' : 'Track Tech Stack'}
          description={getText(language, techs.subText)}
          compact
        />

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

        <ul
          className={styles.stackList}
          aria-label={
            language === 'ko'
              ? `${currentLabel} 기술 스택`
              : `${currentLabel} tech stack`
          }
        >
          {activeStack.map((tech) => (
            <li className={styles.stackItem} key={tech.name}>
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
