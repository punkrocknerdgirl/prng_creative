import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Prefix with the zine-style "// " (true) or plain spaced caps (false) */
  slash?: boolean;
  /** Reserved for dark-panel usage (color stays pink either way) */
  onDark?: boolean;
  children?: React.ReactNode;
}

/** Pink mono kicker label that sits above every section title. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
