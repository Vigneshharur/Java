import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import ButtonBarComponent from './src';

export default {
  title: 'Components/Button Bar',
  component: ButtonBarComponent
};

const Template = (args) => <ButtonBarComponent {...args} />;

const Option1 = boolean('Option1', false);
const Option2 = boolean('Option2', true);
const Option3 = boolean('Option3', false);
const disabled3 = boolean('Option3 Disabled', true);

const buttonItems = [
  { name: 'Option1', selected: Option1 },
  { name: 'Option2', selected: Option2 },
  { name: 'Option3', selected: Option3, disabled: disabled3 }
];

export const ButtonBar = Template.bind({});
ButtonBar.args = {
  buttonItems
};
