import React from 'react';
import SpacerComponent from './src';
import { sizes } from '../theme/lib/index';
export default {
  title: 'Layout/Spacer',
  component: SpacerComponent,
  parameters: {
    docs: {
      description: {
        component: `This is a layout component to give space where it is not clear which component the margin belongs to`
      }
    }
  },
  argTypes: {
    itemHeight: {
      description: 'Determines the height of the spacer',
      defaultValue: sizes.medium
    },
    itemWidth: {
      description: 'Determines the width of the spacer',
      defaultValue: sizes.medium
    },
    itemDisplay: {
      description: 'Determines the display of the spacer',
      defaultValue: ''
    }
  },
  decorators: [(Story) => <Story />]
};

const Template = (args) => (
  <div>
    <SpacerComponent {...args} />
    Some text <SpacerComponent {...args} /> Some more Text
  </div>
);

export const Spacer = Template.bind({});
Spacer.args = {
  itemHeight: '3rem',
  itemWidth: '3rem',
  itemDisplay: 'block'
};
