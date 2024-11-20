import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
  test('it renders a spinner', () => {
    const { queryByTestId } = render(<Spinner />);
    expect(queryByTestId('spinner-component')).toBeTruthy();
  });
});
