import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import ProgressIndicatorComponent from './src';

const Container = styled('div')`
  margin: 10rem auto;
`;

export default {
  title: 'Components/Progress Indicator',
  component: ProgressIndicatorComponent,
  parameters: {
    docs: {
      description: {
        component: `This is the Progress Indicator component based on the styleguide. 
                  Visual examples are available here: 
                  https://app.zeplin.io/project/60804d09170a1f177950ed18/screen/5cd5a8f12e4f02039b96d813`
      }
    }
  },
  argTypes: {
    steps: {
      defaultValue: [
        { label: 'Option 1', value: 0 },
        { label: 'Option 2 this one is long', value: 1 },
        { label: 'Option 3', value: 2 },
        { label: 'Option 4', value: 3 }
      ]
    },
    current: {
      defaultValue: 2
    },
    valueAsIcon: {
      defaultValue: false
    },
    handleClick: {
      action: 'clicked'
    },
  },
  decorators: [(Story) => <Container><Story/></Container>]
};

const Template = (args) => <ProgressIndicatorComponent {...args} />;

/**
 * Only use me once per page for the preferred user action.
 */
export const ProgressIndicator = Template.bind({});
