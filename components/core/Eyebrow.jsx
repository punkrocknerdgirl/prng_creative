import React from 'react';

/**
 * PRNG Eyebrow — the mono "// label" kicker above section titles.
 * Set slash={false} for the marketing-site style (no slashes, wider track).
 */
export function Eyebrow({ children, slash = true, onDark = false, style = {}, ...rest }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: slash ? '0.14em' : '0.2em',
        textTransform: 'uppercase',
        color: 'var(--prng-pink)',
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {slash ? '// ' : ''}{children}
    </p>
  );
}
