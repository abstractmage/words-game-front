import { Meta, StoryFn } from '@storybook/react';
import { Icon as IconComp } from '../..';
import { Props } from '../../types';

export const Icon: StoryFn<Props> = (props) => (
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
    <IconComp {...props} style={{ width: 100, height: 100 }} />
  </div>
);

Icon.args = {
  type: 'leftCaret',
};

Icon.argTypes = {
  type: {
    control: 'select',
    options: ['leftCaret', 'rightCaret', 'bulb'],
  },
};

export default {
  title: 'Icon',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;
