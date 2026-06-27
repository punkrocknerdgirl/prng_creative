import React from 'react';

/**
 * PRNG Button — sharp-cornered, uppercase, mono-tracked.
 * Primary = pink fill; secondary = plum fill; ghost = outline (for dark bg).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.72rem' },
    md: { padding: '0.7rem 1.4rem', fontSize: '0.78rem' },
    lg: { padding: '1rem 2.25rem', fontSize: '0.9rem' },
  };

  const variants = {
    primary: { background: 'var(--prng-pink)', color: '#fff', border: '1px solid var(--prng-pink)' },
    secondary: { background: 'var(--prng-plum)', color: '#fff', border: '1px solid var(--prng-plum)' },
    ghost: { background: 'transparent', color: 'rgba(250,234,243,0.75)', border: '1px solid rgba(250,234,243,0.3)' },
    quiet: { background: 'transparent', color: 'var(--prng-plum)', border: '1px solid var(--prng-rule)' },
  };

  const base = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    lineHeight: 1,
    transition: 'background var(--dur-base), border-color var(--dur-base), color var(--dur-base), transform var(--dur-fast)',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const Tag = as;
  return (
    <Tag style={base} {...rest}>
      {children}
    </Tag>
  );
}
