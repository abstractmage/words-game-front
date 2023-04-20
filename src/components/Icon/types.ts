import React from 'react';

export type Type = 'leftCaret' | 'rightCaret' | 'bulb';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  type: Type;
};
