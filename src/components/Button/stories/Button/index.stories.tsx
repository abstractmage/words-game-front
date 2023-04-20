import { Meta, StoryFn } from '@storybook/react';
import { Icon } from 'src/components/Icon';
import { Button as ButtonComp } from '../..';
import { Props } from './types';

export const Button: StoryFn<Props> = (props) => {
  const { color, isClickable, onClick } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ButtonComp
        style={{ width: 100, height: 100 }}
        color={color}
        isActive={isClickable}
        onClick={onClick}
      >
        <Icon type="bulb" />
      </ButtonComp>
    </div>
  );
};

Button.args = {
  color: '#000000',
  isClickable: true,
};

Button.argTypes = {
  onClick: { action: 'clicked' },
};

export default {
  title: 'Button',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;
