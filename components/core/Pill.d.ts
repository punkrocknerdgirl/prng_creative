import React from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Filled blush tag chip for keyword rows inside cards. */
export function Pill(props: PillProps): JSX.Element;
