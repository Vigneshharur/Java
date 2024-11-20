import React from 'react';

import FileInputComponent from './src';

export default {
  title: 'Components/File Input',
  component: FileInputComponent
};

export const FileInput = (args) => {
  const props = {
    ...args,
    label: 'select a file',
    value: [],
    acceptedFiles: '',
    onChange: () => {
      //eslint-disable-next-line
      console.log('here');
    },
    disabled: false
  };
  return <FileInputComponent {...props} />;
};
