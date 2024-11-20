import React from 'react';
import { optionsKnob as options } from '@storybook/addon-knobs';
import { colors } from '../theme/lib/index';

import SpinnerComponent from './src';

export default {
  title: 'Components/Spinner',
  component: SpinnerComponent
};

const sizeOptions = {
  '2x': '2x',
  '3x': '3x',
  '4x': '4x'
};

const optionsObj = {
  display: 'select'
};

export const Spinner = () => (
  <SpinnerComponent
    iconSize={options('Size examples', sizeOptions, '2x', optionsObj)}
    color={options('Colors', colors, colors.green4, optionsObj)}
  />
);
