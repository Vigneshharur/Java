import React from 'react';
import SwitchComponent from './src';

export default {
  title: 'Components/Switch',
  component: SwitchComponent,
  argTypes: {
    onChange: {
      action: 'clicked'
    },
    checked: {
      description: 'checked value',
      defaultValue: false
    },
    label: {
      description: 'label',
      defaultValue: 'Option 1'
    },
    disabled: {
      description: 'disabled',
      defaultValue: false
    },
    tooltipContent: {
      description: 'Tooltip content',
      defaultValue: 'tooltip example'
    }
  }
};

const Template = (args) => <SwitchComponent {...args} />;
export const Switch = Template.bind({});
