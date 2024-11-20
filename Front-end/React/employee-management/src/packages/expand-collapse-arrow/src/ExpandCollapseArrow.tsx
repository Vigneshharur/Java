import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import Icon, { IconSize } from '../../icon/lib/';
import { colors } from '../../theme/lib/';

const ArrowWrapper = styled<'div', { color: string }>('div')`
  display: inline-block;
  color: ${({ color }) => color};
  transform: rotate(0);
  transition-duration: 300ms;
  &.is-open {
    transform: rotate(-90deg);
  }
`;

type ExpandCollapseArrowProps = {
  isOpen?: boolean;
  onClick?: () => void;
  iconSize?: IconSize;
  iconColor?: string;
};

const ExpandCollapseArrow: React.FC<ExpandCollapseArrowProps> = ({
  isOpen,
  onClick,
  iconColor = colors.charcoal,
  iconSize,
  ...otherProps
}) => {
  return (
    <ArrowWrapper color={iconColor} className={isOpen ? 'is-open' : ''} onClick={() => onClick} {...otherProps}>
      <Icon iconClass="angle-down" weight="far" iconSize={iconSize} />
    </ArrowWrapper>
  );
};

export default ExpandCollapseArrow;
