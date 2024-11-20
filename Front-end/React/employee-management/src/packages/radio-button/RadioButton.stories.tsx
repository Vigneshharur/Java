import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import RadioButtonComponent from './src';

export default {
  title: 'Components/Radio Buttons',
  component: RadioButtonComponent
};

const Container = styled('div')`
  margin: 2rem;
`;

export const RadioButtons = () => {
  const disableSecond = boolean('Disable Option 2', false);

  return (
    <Container>
      <RadioButtonComponent label="Option 1" name="options" value="1" onChange={action('You clicked Option1')} />
      <RadioButtonComponent
        disabled={disableSecond}
        label="Option 2"
        checked
        value="2"
        name="options"
        onChange={action('You clicked Option2')}
      />
      <RadioButtonComponent label="Option 3" name="options" value="3" onChange={action('You clicked Option3')} />
    </Container>
  );
};
