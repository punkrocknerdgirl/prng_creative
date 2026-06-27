import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Outline/text color treatment */
  tone?: 'pink' | 'plum' | 'muted';
  children?: React.ReactNode;
}

/** Rounded mono micro-label for credentials and qualifiers. */
export function Badge(props: BadgeProps): JSX.Element;
