import React from 'react';

/**
 * Props for the big-figure stat block.
 * @startingPoint section="Data" subtitle="Big financial figure callout" viewport="700x180"
 */
export interface StatCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small mono label above the figure */
  label?: string;
  /** The headline figure (string so you control formatting, e.g. "-$331,046.92") */
  value: React.ReactNode;
  /** Supporting note under the figure */
  sub?: React.ReactNode;
  /** Color of the figure for financial reads */
  tone?: 'neutral' | 'negative' | 'positive' | 'warning' | 'accent';
}

/**
 * Big-figure stat block for management reports and dashboards.
 */
export function StatCallout(props: StatCalloutProps): JSX.Element;
