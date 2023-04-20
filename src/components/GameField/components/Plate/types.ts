import React from 'react';

export type State =
  | 'default'
  | 'selected'
  | 'success'
  | 'pressed'
  | 'pressedSuccess'
  | 'pressedError';

export type Direction = 'left' | 'right' | 'top' | 'bottom';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  state?: State;
  directions?: Direction[];
  isActive?: boolean;
  isHoverable?: boolean;
  isStateTransitioning?: boolean;
};
