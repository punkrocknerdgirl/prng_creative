import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Mono uppercase label above the control */
  label?: string;
  /** String options or {value,label} objects */
  options?: (string | SelectOption)[];
}

/** Native select styled to match PRNG Input. */
export function Select(props: SelectProps): JSX.Element;
