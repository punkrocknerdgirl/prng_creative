import React from 'react';

/**
 * Props for the accent-bar surface card.
 * @startingPoint section="Core" subtitle="Accent-bar card with hover lift" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Where the pink accent bar sits */
  accent?: 'top' | 'left' | 'none';
  /** Enable the hover lift + shadow */
  hover?: boolean;
  children?: React.ReactNode;
}

/**
 * White surface card with the signature pink accent bar and soft plum shadow.
 */
export function Card(props: CardProps): JSX.Element;
