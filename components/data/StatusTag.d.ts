import React from 'react';

export interface StatusTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status keyword → color mapping */
  status?: 'active' | 'building' | 'parked' | 'positive' | 'negative' | 'warning' | 'info';
  /** Override label text (defaults to the status word) */
  children?: React.ReactNode;
}

/** Square mono status chip for project logs and report rows. */
export function StatusTag(props: StatusTagProps): JSX.Element;
