import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from '../button/lib';
import Icon from '../icon/lib/';
import Switch from '../switch/lib';
import { sizes } from '../theme/lib';
import { StandardTypography } from '../typography/lib/';

import PopoverComponent from './src';

const StyledStandardTypography = styled(StandardTypography)`
  display: block;
  padding: ${sizes.small};
  min-width: 20rem;
  & > ul {
    padding: 0;
    margin: ${sizes.small} 0;
  }
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: ${sizes.xSmall};
`;

const Content = ({ save }) => {
  return (
    <StyledStandardTypography>
      Settings
      <ul>
        <StyledLi>
          <Switch /> Option 1
        </StyledLi>
        <StyledLi>
          <Switch /> Option 2
        </StyledLi>
        <StyledLi>
          <Switch /> Option 3
        </StyledLi>
        <StyledLi>
          <Switch /> Option 4
        </StyledLi>
      </ul>
      <Button onClick={() => save(false)}>Save</Button>
    </StyledStandardTypography>
  );
};

export default {
  title: 'Components/Popover',
  component: PopoverComponent
};
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (value) => {
    setIsOpen(value);
  };

  const props = {
    ...args,
    isOpen,
    toggle: handleToggle,
    content: <Content save={handleToggle} />
  };

  return (
    <PopoverComponent {...props}>
      Edit user settings <Icon iconClass={isOpen ? 'angle-up' : 'angle-down'} />
    </PopoverComponent>
  );
};

export const Popover = Template.bind({});
Popover.args = {
  position: 'bottom',
  triggerTestId: 'call-to-action',
  onShow: () => console.log('do something'),
  onHide: () => console.log('popover closed')
};
