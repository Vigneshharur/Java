import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import TextField from '../labeled-text/lib/';

import TableAccordionComponent from './src';

export default {
  title: 'Components/Table Accordion',
  component: TableAccordionComponent
};

const sampleData = [
  { label: 'Patient', text: 'Patricia Sanchez 05/21/1971 (48yrs), F' },
  { label: 'RPID', text: '42519498' },
  { label: 'Identity Scheme', text: 'ADCND, 9000' },
  { label: 'IdentityValue', text: '2430219-8608109' },
  { label: 'Date Created', text: '12/30/2019 09:15AM' }
];

const sampleDataNodes = sampleData.map((item) => <TextField label={item.label} value={item.text} />);

export const TableAccordion = () => {
  const isOpen = boolean('isOpen', false);
  const hasClickHandler = boolean('Add handleClick', false);

  return (
    <TableAccordionComponent
      isOpen={isOpen}
      headerItems={sampleDataNodes}
      handleClick={hasClickHandler ? action('You triggered an external event!') : undefined}>
      <span>Hi, I am a child component</span>
    </TableAccordionComponent>
  );
};
