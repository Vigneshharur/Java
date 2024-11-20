import React, { useState } from 'react';

import PaginationComponent from './src';

export default {
  title: 'Components/Pagination',
  component: PaginationComponent
};

const Template = (args) => {
  const [activePageNumber, setActivePageNumber] = useState(1);
  return (
    <PaginationComponent {...args} activePageNumber={activePageNumber} updateActivePageNumber={setActivePageNumber} />
  );
};

export const Pagination = Template.bind({});
Pagination.args = {
  activePageNumber: 1,
  totalPages: 20
};
