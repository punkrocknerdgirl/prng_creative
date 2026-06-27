import React from 'react';

/**
 * PRNG StatCallout — the big-number block from the internal ops report.
 * Large mono figure, label above, sub note below. tone colors the figure
 * for financial reads (negative=red, positive=green).
 */
export function StatCallout({ label, value, sub, tone = 'neutral', style = {}, ...rest }) {
  const tones = {
    neutral:  'var(--prng-plum)',
    negative: 'var(--status-negative)',
    positive: 'var(--status-positive)',
    warning:  'var(--status-warning)',
    accent:   'var(--prng-pink)',
  };
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--prng-rule)',
        borderTop: '3px solid var(--prng-pink)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem 1.4rem',
        ...style,
      }}
      {...rest}
    >
      {label && (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--prng-muted)',
            marginBottom: '0.5rem',
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1.85rem',
          fontWeight: 600,
          lineHeight: 1.05,
          color: tones[tone],
          letterSpacing: '-0.01em',
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--prng-muted)',
            marginTop: '0.45rem',
            lineHeight: 1.4,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
