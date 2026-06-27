import React from 'react';

/**
 * PRNG Badge — pill-shaped mono micro-label, pink outline on dark or light.
 * Used for credentials / qualifiers (e.g. "QBO ProAdvisor Level 2").
 */
export function Badge({ tone = 'pink', children, style = {}, ...rest }) {
  const tones = {
    pink:  { color: 'var(--prng-pink)', border: '1px solid rgba(201,83,140,0.35)' },
    plum:  { color: 'var(--prng-plum)', border: '1px solid var(--prng-blush-mid)' },
    muted: { color: 'var(--prng-muted)', border: '1px solid var(--prng-rule)' },
  };
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '0.25rem 0.65rem',
        borderRadius: 'var(--radius-pill)',
        display: 'inline-block',
        lineHeight: 1.4,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
