import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HeadingTypography from './HeadingTypography';

afterEach(cleanup);

describe('HeadingTypography', () => {
  test('renders at all', () => {
    const { container } = render(<HeadingTypography>Some Text</HeadingTypography>);
    expect(container).toBeTruthy();
  });
});
