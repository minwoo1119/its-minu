import { useEffect, useState } from 'react';
import type { Language } from '../../../i18n';
import styles from './stickyToc.module.scss';

export interface TocItem {
  id: string;
  label: string;
}

interface StickyTocProps {
  language: Language;
  items: TocItem[];
}

export const StickyToc = ({ language, items }: StickyTocProps) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    if (items.length === 0) return;
    setActiveId(items[0].id);

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-88px 0px -65% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <aside
      className={styles.toc}
      aria-label={language === 'ko' ? '목차' : 'Table of contents'}
    >
      <p className={styles.heading}>
        {language === 'ko' ? 'On This Page' : 'On This Page'}
      </p>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button
                type='button'
                className={`${styles.link} ${
                  activeId === item.id ? styles.active : ''
                }`}
                onClick={() => handleJump(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
