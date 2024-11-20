import React from 'react';

import LabeledText from './src';

export default {
  title: 'Components/Labeled Text',
  component: LabeledText
};

export const BasicLabeledText = (): React.ReactElement => (
  <LabeledText value={'Patricia Sanchez 05/21/1971 (48yrs), F'} label={'Patient'} />
);
