import React from 'react';

export interface DataColumn {
  /** Row object key this column reads */
  key: string;
  /** Header label */
  label: string;
  /** Text alignment (defaults: right if mono, else left) */
  align?: 'left' | 'right' | 'center';
  /** Render values in Roboto Mono + right-align (for figures) */
  mono?: boolean;
}

/**
 * Props for the financial line-item table.
 * @startingPoint section="Data" subtitle="Financial line-item table" viewport="700x300"
 */
export interface DataTableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns: DataColumn[];
  /** Row objects keyed by column.key; set __emph: true to bold a row */
  rows: Record<string, React.ReactNode>[];
  /** Optional emphasized total row */
  totalRow?: Record<string, React.ReactNode> | null;
}

/**
 * Financial line-item table for management reports.
 */
export function DataTable(props: DataTableProps): JSX.Element;
