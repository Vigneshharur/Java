import React from 'react';
import { render, cleanup } from '@testing-library/react';

import StandardTypography from './StandardTypography';

afterEach(cleanup);

describe('StandardTypography', () => {
  test('renders at all', () => {
    const { container } = render(<StandardTypography>Some Text</StandardTypography>);
    expect(container).toBeTruthy();
  });
});
