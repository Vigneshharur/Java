import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SmallTypography from './SmallTypography';

afterEach(cleanup);

describe('SmallTypography', () => {
  test('renders at all', () => {
    const { container } = render(<SmallTypography>Some Text</SmallTypography>);
    expect(container).toBeTruthy();
  });
});
