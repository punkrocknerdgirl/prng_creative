import React from 'react';

/**
 * PRNG Pill — small square-ish filled chip (blush bg, plum text) used in
 * service-card tag rows. Denser and more "tag"-like than Badge.
 */
export function Pill({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'var(--prng-blush-light)',
        color: 'var(--prng-plum)',
        border: '1px solid var(--prng-blush-mid)',
        padding: '0.18rem 0.55rem',
        borderRadius: 'var(--radius-pill)',
        display: 'inline-block',
        lineHeight: 1.5,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
