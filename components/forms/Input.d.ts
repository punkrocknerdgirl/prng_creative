import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label above the field */
  label?: string;
  /** Helper text below the field */
  hint?: string;
}

/** Sharp text input with mono label and pink focus ring. */
export function Input(props: InputProps): JSX.Element;
