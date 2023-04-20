import React from 'react';
import cn from 'classnames';
import { sprites } from './constants';
import { useStyles } from './styles';
import { Props } from './types';

export const Icon = React.forwardRef(function Icon(
  props: Props,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { className, type, ...otherProps } = props;
  const styles = useStyles();
  const Sprite = sprites[type];

  return (
    <div {...otherProps} ref={ref} className={cn(styles.main, className)}>
      <Sprite />
    </div>
  );
});
