import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/index';
import { LabelTypography, SmallSemiBoldTypography } from '../../typography/lib/index';
import ToolTip from '../../tool-tip/lib/index';
import Spacer from '../../spacer/lib/index';

type SwitchProps = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
  label?: string;
  index?: number;
  disabled?: boolean;
  tooltipContent?: ReactElement | string;
  className?: string;
};

const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const SwitchContainer = styled('label')`
  position: relative;
  display: inline-block;
  width: 5.4rem;
  height: 2.4rem;
`;

const SwitchLabel = LabelTypography.withComponent('label');

const Slider = styled(SmallSemiBoldTypography)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.gray3};
  border-radius: 1.3rem;
  color: ${colors.white};
  font-size: 1.1rem;
  &:before {
    position: absolute;
    content: '';
    height: ${sizes.small};
    width: ${sizes.small};
    left: 0.2rem;
    bottom: 0.2rem;
    background-color: ${colors.white};
    transition: transform 0.12s;
    border-radius: 50%;
  }
  &:after {
    content: 'OFF';
    top: 0.4rem;
    left: 2.6rem;
    position: absolute;
  }
`;

const SwitchInput = styled('input')`
  opacity: 0;
  width: 100%;
  height: 100%;
  &:checked + .slider {
    background-color: ${colors.green4};
  }
  &:checked + .slider:before {
    transform: translateX(${sizes.medium});
  }
  &:checked + .slider:after {
    content: 'ON';
    left: ${sizes.xSmall};
  }
  &:disabled + .slider {
    cursor: not-allowed;
    background-color: ${colors.gray3};
  }
`;

type SwitchComponentProps = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
  index?: number;
  disabled?: boolean;
};

const SwitchComponent: React.FC<SwitchComponentProps> = ({ onChange, checked, index, disabled, ...args }) => (
  <SwitchContainer>
    <SwitchInput
      type="checkbox"
      onChange={onChange}
      checked={checked}
      id={`remedySwitch${index}`}
      disabled={disabled}
      {...args}
    />
    <Slider css="" className="slider" />
  </SwitchContainer>
);

const Switch: React.FC<SwitchProps & React.HTMLProps<HTMLInputElement>> = ({
  onChange,
  checked,
  label = '',
  index = 1,
  disabled,
  tooltipContent,
  className,
  ...args
}) => (
  <FlexContainer className={className}>
    <SwitchLabel css="" htmlFor={`remedySwitch${index}`}>
      {label}
    </SwitchLabel>
    <Spacer itemWidth={sizes.xxSmall} />
    {tooltipContent ? (
      <ToolTip html={tooltipContent}>
        <SwitchComponent onChange={onChange} checked={checked} index={index} disabled={disabled} {...args} />
      </ToolTip>
    ) : (
      <SwitchComponent onChange={onChange} checked={checked} index={index} disabled={disabled} {...args} />
    )}
  </FlexContainer>
);

export default Switch;
