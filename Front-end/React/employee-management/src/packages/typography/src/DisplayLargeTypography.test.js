import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DisplayLargeTypography from './DisplayLargeTypography';

afterEach(cleanup);

describe('DisplayLargeTypography', () => {
  test('renders at all', () => {
    const { container } = render(<DisplayLargeTypography>Some Text</DisplayLargeTypography>);
    expect(container).toBeTruthy();
  });
});
