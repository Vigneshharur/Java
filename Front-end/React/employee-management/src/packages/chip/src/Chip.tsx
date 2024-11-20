import React, { ReactNode } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import classNames from 'classnames';
import Icon from '../../icon/lib/index';
import { colors, sizes } from '../../theme/lib/index';
import { SmallTypography } from '../../typography/lib/index';

type ChipStyledProps = {
  negated: boolean;
};

const StyledChip = styled('div')<ChipStyledProps>`
  display: inline-block;
  border-radius: ${sizes.xSmall};
  padding: 0.3rem ${sizes.xSmall};
  cursor: default;
  border: 1px solid ${(props) => (props.negated ? colors.yellow4 : colors.green4)};

  button {
    border: 0;
    padding: 0;
    margin-left: ${sizes.xSmall};
    background-color: transparent;
    outline: none;
  }

  &.solid {
    background-color: ${(props) => (props.negated ? colors.yellow1 : colors.green1)};

    &,
    button {
      color: ${(props) => (props.negated ? colors.yellow5 : colors.green5)};
    }

    &:hover {
      background-color: ${(props) => (props.negated ? colors.yellow4 : colors.green4)};
    }

    &.disabled {
      background-color: ${colors.gray2};
      color: ${colors.gray5};
      border: 1px solid ${colors.gray2};

      &:hover {
        font-weight: inherit;
      }
    }
  }

  &.outline {
    background-color: #ffffff;
    &,
    button {
      color: ${(props) => (props.negated ? colors.yellow5 : colors.green5)};
    }

    &:hover {
      background-color: ${(props) => (props.negated ? colors.yellow1 : colors.green1)};
    }

    &.disabled {
      border: 1px solid ${colors.gray3};
      color: ${colors.gray5};

      &:hover {
        background-color: inherit;
      }
    }
  }

  &.disabled {
    &,
    button {
      cursor: not-allowed;
    }
    button {
      color: ${colors.gray3};
    }
  }
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledSmallTypography = styled(SmallTypography)`
  display: inline-block;
`;

type ChipProps = {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  outline?: boolean;
  negated?: boolean;
  children: ReactNode;
};

const Chip: React.FC<ChipProps> = ({ onClick, disabled = false, outline = false, negated = false, children }) => {
  let body = children;
  if (onClick) {
    body = (
      <BodyContainer>
        <span>{children}</span>
        <button data-testid="remove-button" aria-disabled={disabled} disabled={disabled} onClick={onClick}>
          <Icon weight="fal" iconClass="times" iconSize="lg" />
        </button>
      </BodyContainer>
    );
  }

  return (
    <StyledSmallTypography data-testid="chip">
      <StyledChip negated={negated} className={classNames({ solid: !outline, outline, disabled })}>
        {body}
      </StyledChip>
    </StyledSmallTypography>
  );
};

export default Chip;
