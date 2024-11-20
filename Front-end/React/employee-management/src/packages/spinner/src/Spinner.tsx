import React from 'react';
import Icon from '../../icon/lib/index';
import { colors } from '../../theme/lib/index';

type SpinnerProps = {
  color?: string;
  iconSize?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
};

const Spinner = ({ color = colors.green4, iconSize = 'sm', ...rest }: SpinnerProps) => (
  <Icon iconClass="spinner" color={color} iconSize={iconSize} spin data-testid="spinner-component" {...rest} />
);

export default Spinner;
