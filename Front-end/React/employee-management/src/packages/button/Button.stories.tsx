import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import Button, { StyleType } from './src';
import Icon, { ICONS } from '../icon/lib';

export default {
  title: 'Components/Buttons',
  component: Button
};

const Container = styled('div')`
  button {
    margin: 0 1rem;
  }
`;

export const Buttons = () => {
  const disablePrimary = boolean('Disable Primary', false),
    disableSecondary = boolean('Disable Secondary', false),
    disableTertiary = boolean('Disable Tertiary', false);

  return (
    <Container>
      <Button styleType={StyleType.PRIMARY} disabled={disablePrimary} onClick={action('You clicked Primary button')}>
        Primary
      </Button>
      <Button
        styleType={StyleType.SECONDARY}
        disabled={disableSecondary}
        onClick={action('You clicked Secondary button')}>
        Secondary
      </Button>
      <Button styleType={StyleType.TERTIARY} disabled={disableTertiary} onClick={action('You clicked Tertiary button')}>
        Tertiary
      </Button>
      <Button styleType={StyleType.TERTIARY} onClick={action('You clicked an icon button')} iconClass={ICONS.reply}>
        With Icon
      </Button>
    </Container>
  );
};
