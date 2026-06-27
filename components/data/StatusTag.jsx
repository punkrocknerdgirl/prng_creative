import React from 'react';

/**
 * PRNG StatusTag — small square status chip for projects/reports.
 * Maps a status word to a working-palette color. Sharp 2px corners.
 */
export function StatusTag({ status = 'active', children, style = {}, ...rest }) {
  const map = {
    active:   { bg: 'rgba(201,83,140,0.15)', fg: 'var(--prng-pink)' },
    building: { bg: 'rgba(92,31,59,0.10)',   fg: 'var(--prng-plum)' },
    parked:   { bg: '#ececec',               fg: '#888' },
    positive: { bg: 'rgba(39,174,96,0.14)',  fg: 'var(--wp-green)' },
    negative: { bg: 'rgba(192,57,43,0.12)',  fg: 'var(--wp-red)' },
    warning:  { bg: 'rgba(243,156,18,0.15)', fg: 'var(--wp-amber)' },
    info:     { bg: 'rgba(47,117,181,0.12)', fg: 'var(--wp-blue)' },
  };
  const c = map[status] || map.active;
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '0.25rem 0.6rem',
        borderRadius: 'var(--radius-sm)',
        background: c.bg,
        color: c.fg,
        display: 'inline-block',
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children || status}
    </span>
  );
}
