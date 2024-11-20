import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ExpandCollapseArrowComponent from './src';

export default {
  title: 'Components/Expand Collapse Arrow',
  component: ExpandCollapseArrowComponent
};

export const ExpandCollapseArrow = () => (
  <ExpandCollapseArrowComponent onClick={action('You clicked the arrow')} isOpen={boolean('isOpen', false)} iconSize="2x"/>
);
