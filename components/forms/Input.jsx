import React from 'react';

/**
 * PRNG Input — sharp-cornered text field with a mono uppercase label and
 * pink focus ring. Works on light surfaces.
 */
export function Input({ label, hint, id, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--prng-muted)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          color: 'var(--prng-text)',
          background: '#fff',
          border: `1px solid ${focus ? 'var(--prng-pink)' : 'var(--prng-blush-mid)'}`,
          boxShadow: focus ? '0 0 0 3px rgba(201,83,140,0.15)' : 'none',
          borderRadius: 'var(--radius-sm)',
          padding: '0.6rem 0.75rem',
          outline: 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontSize: '0.72rem', color: 'var(--prng-muted)' }}>{hint}</span>
      )}
    </div>
  );
}
