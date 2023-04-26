import React from 'react';
import cn from 'classnames';
import { useStyles } from './styles';
import { Props } from './types';

export const Plate = React.forwardRef(function Plate(
  props: Props,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    className,
    state = 'default',
    directions = [],
    isActive = true,
    isStateTransitioning = true,
    isHoverable = true,
    children,
    ...otherProps
  } = props;

  const styles = useStyles();

  return (
    <div
      {...otherProps}
      ref={ref}
      className={cn(
        styles.main,
        'main',
        `main_state_${state}`,
        directions.map((direction) => `main_direction_${direction}`),
        isActive && 'main_isActive',
        isHoverable && 'main_isHoverable',
        isStateTransitioning && 'main_isStateTransitioning',
        className,
      )}
    >
      <div className="back" />
      <div className="content">
        <div className="contentInner">{children}</div>
      </div>
    </div>
  );
});
