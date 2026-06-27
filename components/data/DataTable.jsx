import React from 'react';

/**
 * PRNG DataTable — financial line-item table used in management reports.
 * Mono right-aligned numbers, plum header row, hairline rules, optional
 * emphasized total row. columns: [{key, label, align, mono}]
 */
export function DataTable({ columns = [], rows = [], totalRow = null, style = {}, ...rest }) {
  const cell = (col, val, isHead, emph) => ({
    padding: '0.6rem 0.9rem',
    textAlign: col.align || (col.mono ? 'right' : 'left'),
    fontFamily: col.mono ? 'var(--font-mono)' : 'var(--font-sans)',
    fontSize: isHead ? '0.62rem' : '0.85rem',
    fontWeight: isHead ? 600 : emph ? 700 : 400,
    letterSpacing: isHead ? '0.1em' : 'normal',
    textTransform: isHead ? 'uppercase' : 'none',
    color: isHead ? 'var(--prng-pink)' : emph ? 'var(--prng-plum)' : 'var(--prng-text)',
    whiteSpace: col.mono ? 'nowrap' : 'normal',
  });

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'var(--surface-card)',
        border: '1px solid var(--prng-rule)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <thead>
        <tr style={{ background: 'var(--prng-blush-light)', borderBottom: '2px solid var(--prng-pink)' }}>
          {columns.map((col) => (
            <th key={col.key} style={cell(col, null, true)}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--prng-rule)' }}>
            {columns.map((col) => (
              <td key={col.key} style={cell(col, row[col.key], false, row.__emph)}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
        {totalRow && (
          <tr style={{ background: 'var(--prng-blush-light)', borderTop: '2px solid var(--prng-plum)' }}>
            {columns.map((col) => (
              <td key={col.key} style={cell(col, totalRow[col.key], false, true)}>{totalRow[col.key]}</td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}
