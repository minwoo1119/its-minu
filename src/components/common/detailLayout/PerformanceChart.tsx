import type { Language } from '../../../i18n';
import { getText } from '../../../i18n';
import type { PerformanceComparisonItem } from '../../../data/projectsDetail';
import styles from './performanceChart.module.scss';

interface PerformanceChartProps {
  language: Language;
  items: PerformanceComparisonItem[];
}

const parseFirstNumber = (raw: string): number | null => {
  const match = raw.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : null;
};

export const PerformanceChart = ({ language, items }: PerformanceChartProps) => {
  if (items.length === 0) return null;

  return (
    <div className={styles.grid}>
      {items.map((item, idx) => {
        const metric = getText(language, item.metric);
        const beforeText = getText(language, item.before);
        const afterText = getText(language, item.after);
        const improvement = getText(language, item.improvement);

        const beforeVal = parseFirstNumber(beforeText);
        const afterVal = parseFirstNumber(afterText);
        const canPlot =
          beforeVal !== null &&
          afterVal !== null &&
          Math.max(beforeVal, afterVal) > 0;

        const maxVal = canPlot ? Math.max(beforeVal!, afterVal!) : 1;
        const beforePct = canPlot ? Math.max(8, (beforeVal! / maxVal) * 100) : 100;
        const afterPct = canPlot ? Math.max(8, (afterVal! / maxVal) * 100) : 40;

        return (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <h4 className={styles.metric}>{metric}</h4>
              <span className={styles.badge}>{improvement}</span>
            </div>

            {canPlot ? (
              <div className={styles.bars}>
                <div className={styles.barRow}>
                  <div className={styles.barMeta}>
                    <span className={styles.barLabel}>Before</span>
                    <span className={styles.barValue}>{beforeText}</span>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={styles.fillBefore}
                      style={{ width: `${beforePct}%` }}
                    />
                  </div>
                </div>

                <div className={styles.barRow}>
                  <div className={styles.barMeta}>
                    <span className={styles.barLabel}>After</span>
                    <strong className={styles.barValueAfter}>{afterText}</strong>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={styles.fillAfter}
                      style={{ width: `${afterPct}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.textCompare}>
                <div>
                  <span className={styles.barLabel}>Before</span>
                  <p>{beforeText}</p>
                </div>
                <div>
                  <span className={styles.barLabel}>After</span>
                  <p>
                    <strong>{afterText}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
