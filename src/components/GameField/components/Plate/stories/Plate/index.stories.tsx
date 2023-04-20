import { Meta, StoryFn } from '@storybook/react';
import { Plate as PlateComp } from '../..';
import { Props } from '../../types';

export const Plate: StoryFn<Props> = (props) => (
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
    <PlateComp {...props}>А</PlateComp>
  </div>
);

Plate.args = {
  state: 'default',
  directions: [],
  isActive: true,
};

Plate.argTypes = {
  state: {
    control: 'select',
    options: ['default', 'selected', 'success', 'pressed', 'pressedSuccess', 'pressedError'],
  },
};

export default {
  title: 'Game/Plate',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;
