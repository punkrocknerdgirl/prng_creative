import React from 'react';

/**
 * PRNG Card — white surface with the signature pink accent bar.
 * accent="top" (services) or "left" (contact/info). Lifts on hover.
 */
export function Card({ accent = 'top', hover = true, children, style = {}, ...rest }) {
  const [lift, setLift] = React.useState(false);
  const accentBorder =
    accent === 'left'
      ? { borderLeft: '3px solid var(--prng-pink)' }
      : accent === 'none'
      ? {}
      : { borderTop: '3px solid var(--prng-pink)' };

  return (
    <div
      onMouseEnter={() => hover && setLift(true)}
      onMouseLeave={() => setLift(false)}
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding: '1.6rem',
        boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: lift ? 'var(--lift)' : 'none',
        transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
        ...accentBorder,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
