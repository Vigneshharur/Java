import React, { useState } from 'react';
import styled from '@emotion/styled';

import DropdownMultiGroupSelect from './src';

const StyledContainer = styled('div')`
  max-width: 40rem;
`;

const groupItems = new Array(15).fill('').map((group, index) => {
  const options = new Array(10).fill('').map((hospital, hosIndex) => {
    return {
      id: `option${index}${hosIndex}`,
      value: `option${index}${hosIndex}`,
      label: `option${index}${hosIndex}`,
      group: `mock hospital${index}`
    };
  });
  return {
    label: `mock hospital${index}`,
    options
  };
});

const items = new Array(45).fill('').map((group, index) => {
  return { id: `test${index}`, label: `test${index}`, value: `test${index}` };
});

export default {
  title: 'Components/Dropdown Multi-Group Select ',
  component: DropdownMultiGroupSelect,
  parameters: {
    docs: {
      description: {
        component: `This is a multiselect dropdown that allows for grouping of the options, with select/deselect all for the whole list and per group.
                  It's based on [react-select](https://react-select.com/)`
      }
    }
  }
};

const Template = args => {
  const [value, setValue] = useState([]);

  const handleChange = e => {
    setValue(e ? e : []);
  };
  return (
    <StyledContainer>
      <DropdownMultiGroupSelect {...args} value={value} handleChange={handleChange}/>
    </StyledContainer>
  );
};

export const WithGroups = Template.bind({});
WithGroups.args = {
  options: groupItems,
  label: 'Select multi-group-options',
  secondaryLabel: 'chose an option to continue',
  isRequiredField: true
};

export const WithoutGroups = Template.bind({});
WithoutGroups.args = {
  options: items,
  label: 'Select multi-options'
};
