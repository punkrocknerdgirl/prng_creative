import React from 'react';

/**
 * PRNG Select — matches Input styling; native select with a mono label.
 */
export function Select({ label, options = [], id, style = {}, children, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', ...style }}>
      {label && (
        <label
          htmlFor={selId}
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
      <select
        id={selId}
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
          appearance: 'none',
          cursor: 'pointer',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}
        {...rest}
      >
        {children || options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lbl = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{lbl}</option>;
        })}
      </select>
    </div>
  );
}
