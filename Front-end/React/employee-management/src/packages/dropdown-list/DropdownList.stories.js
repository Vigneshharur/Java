import React from 'react';
import styled from '@emotion/styled';

import DropdownListComponent from './src';

const StyledContainer = styled('div')`
  width: 25rem;
`;

const ddlItems = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' }
];

export default {
  title: 'Components/Dropdown List',
  component: DropdownListComponent
};

export const DropdownList = (args) => {
  const props = { ...args, items: ddlItems, error: true, errorMessage: 'Required field', label: 'Select a list item' };
  return (
    <StyledContainer>
      <DropdownListComponent {...props} />
    </StyledContainer>
  );
};
