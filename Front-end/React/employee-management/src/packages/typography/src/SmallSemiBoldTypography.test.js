import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SmallSemiBoldTypography from './SmallSemiBoldTypography';

afterEach(cleanup);

describe('SmallSemiBoldTypography', () => {
  test('renders at all', () => {
    const { container } = render(<SmallSemiBoldTypography>Some Text</SmallSemiBoldTypography>);
    expect(container).toBeTruthy();
  });
});
