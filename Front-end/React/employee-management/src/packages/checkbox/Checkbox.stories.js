import React, { useState } from 'react';
import styled from '@emotion/styled';
import CheckboxComponent from './src';

const Container = styled('div')`
  display: flex;
  height: 100%;
  align-items: center;
  & > div {
    margin: 30px;
  }
`;

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  parameters: {
    docs: {
      description: {
        component: `This is a styled checkbox for selected options`
      }
    }
  },
  argTypes: {
    value: {
      description: 'Value of the checkbox'
    },
    disabled: {
      description: 'Whether the checkbox is disabled'
    },
    onChange: {
      description: 'Function to call when checkbox is clicked'
    },
    label: {
      description: 'Text to display next to the checkbox'
    }
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return <CheckboxComponent value={isChecked} onChange={() => setIsChecked(!isChecked)} {...args} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  value: true,
  disabled: false,
  label: 'label 1',
  onChange: () => console.log('clicked')
};
