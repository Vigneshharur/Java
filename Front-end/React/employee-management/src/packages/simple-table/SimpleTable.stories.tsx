import React from 'react';

import SimpleTableComponent from './src';

export default {
  title: 'Components/Simple Table',
  component: SimpleTableComponent
};

const events = [
  {
    id: 1,
    date: '2020-03-15T13:15:00.000+0000',
    type: 'Discharged',
    location: 'Sherman Regional Hospital',
    setting: 'Inpatient',
    workingDrg: '293.05',
    finalDrg: '293.05',
    payer: 'Medicare',
    rawInsurances: ['Medicare Advantage']
  },
  {
    id: 2,
    date: '2020-03-03T14:15:00.000+0000',
    type: 'Admitted',
    location: 'Sherman Regional Hospital',
    setting: 'Inpatient',
    workingDrg: '293.05',
    finalDrg: '293.05',
    payer: 'Medicare',
    rawInsurances: ['Medicare Advantage']
  },
  {
    id: 3,
    date: '2020-03-01T14:15:00.000+0000',
    type: 'Presented',
    location: 'Sherman Regional Hospital',
    setting: 'Emergency',
    workingDrg: '293.05',
    finalDrg: '293.05',
    payer: 'Medicare',
    rawInsurances: ['Medicare Advantage']
  }
];

export const SimpleTable = () => {
  return <SimpleTableComponent data={events} header={Object.keys(events[0])} />;
};
