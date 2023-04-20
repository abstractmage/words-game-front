import React from 'react';
import cn from 'classnames';
import { useStyles } from './styles';
import { Props } from './types';

export const Button = React.forwardRef(function Button(
  props: Props,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    style,
    className,
    color = '#000000',
    isActive = true,
    isHoverable = true,
    onClick,
    ...otherProps
  } = props;

  const styles = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isActive) onClick?.(e);
  };

  return (
    <div
      {...otherProps}
      ref={ref}
      style={{ ...style, '--color': color } as React.CSSProperties}
      className={cn(
        styles.main,
        isActive && `${styles.main}_isClickable`,
        isHoverable && `${styles.main}_isHoverable`,
        className,
      )}
      onClick={handleClick}
    />
  );
});
