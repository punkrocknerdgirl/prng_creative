import React from 'react';

/**
 * Props for the PRNG action button.
 * @startingPoint section="Core" subtitle="Sharp pink/plum action buttons" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. primary=pink, secondary=plum, ghost=outline-on-dark, quiet=outline-on-light */
  variant?: 'primary' | 'secondary' | 'ghost' | 'quiet';
  /** Size token */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element, e.g. 'a' for a link button */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * The PRNG action button: sharp 2px corners, uppercase Roboto Mono, pink primary.
 */
export function Button(props: ButtonProps): JSX.Element;
