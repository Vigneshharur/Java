import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { boolean, select } from '@storybook/addon-knobs';

import InputComponent from './src';

export default {
  title: 'Components/Input',
  component: InputComponent
};

const StyledContainer = styled('div')`
  width: 25rem;
  margin: 2rem 2rem;
`;

export const Input = () => {
  return (
    <StyledContainer>
      <InputComponent
        labelText="Patient name"
        error={boolean('Show error State', false)}
        errorMessage="Patient name can't include numbers"
        isDisabled={boolean('Disable', false)}
        required={select('Required', ['required', 'optional', ''], '')}
        autoFocus={true}
      />
    </StyledContainer>
  );
};
