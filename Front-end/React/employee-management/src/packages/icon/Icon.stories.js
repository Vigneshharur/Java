import React from 'react';
import styled from '@emotion/styled';
import { optionsKnob as options } from '@storybook/addon-knobs';
import { colors } from '../theme/lib/';

import Icon, { ICONS } from './src';

export default {
  title: 'Components/Icons',
  component: Icon
};

const weightOptions = {
  fal: 'fal',
  far: 'far',
  fas: 'fas'
};

const sizeOptions = {
  '2x': '2x',
  '3x': '3x',
  '4x': '4x'
};

const optionsObj = {
  display: 'select'
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 4rem;
  max-width: 80rem;
  font-size: 1.6rem;
  div {
    margin: 1rem;
    text-align: center;
  }
`;

const InvalidContainer = styled.div`
  border: 1px solid red;
  padding: 20px;
`;

export const Icons = () => (
  <Container>
    {Object.values(ICONS).map((icon) => (
      <div key={icon}>
        <Icon
          iconClass={icon}
          iconSize={options('Size examples', sizeOptions, '2x', optionsObj)}
          color={options('Colors', colors, colors.tertiary2, optionsObj)}
          weight={options('Weight', weightOptions, 'fal', optionsObj)}
        />
        <p>{icon}</p>
      </div>
    ))}

    <InvalidContainer>
      <Icon iconClass={'invalid-icon-name'} iconSize={'2x'} color={colors.tertiary2} weight={'fal'} />
      <p>Invalid iconClass example</p>
    </InvalidContainer>
  </Container>
);
