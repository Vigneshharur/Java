import React from 'react';
import styled from '@emotion/styled';
import Chip from './src';

const Container = styled.div`
  padding: 0.6rem;
  > * {
    margin-right: 1rem;
  }
`;

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `This is the Chip component based on the styleguide. 
                  Visual examples are available here: 
                  https://app.zeplin.io/project/5e973111cb2b6e7c55dc5454/screen/5ee0e89feff401b7f16d82ca`
      }
    }
  },
  argTypes: {
    onClick: {
      action: 'clicked'
    },
    outline: {
      description: 'Determines if  it should have a border',
      defaultValue: false
    },
    negated: {
      description: 'Negated atribute',
      defaultValue: false
    },
    disabled: {
      description: 'Should be disabled',
      defaultValue: false
    }
  },
  decorators: [(Story) => <Container><Story/></Container>]
};

const Template = (args) => <Chip {...args}>Text</Chip>;

/**
 * Only use me once per page for the preferred user action.
 */
export const Default = Template.bind({});

export const Negated = Template.bind({});
Negated.args = { ...Default.args, negated: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Outline = Template.bind({});
Outline.args = { ...Default.args, outline: true };
