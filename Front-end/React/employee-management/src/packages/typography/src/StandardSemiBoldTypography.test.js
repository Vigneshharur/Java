import React from 'react';
import { render, cleanup } from '@testing-library/react';

import StandardSemiBoldTypography from './StandardSemiBoldTypography';

afterEach(cleanup);

describe('StandardSemiBoldTypography', () => {
  test('renders at all', () => {
    const { container } = render(<StandardSemiBoldTypography>Some Text</StandardSemiBoldTypography>);
    expect(container).toBeTruthy();
  });
});
