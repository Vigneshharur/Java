import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NavigationTypography from './NavigationTypography';

afterEach(cleanup);

describe('NavigationTypography', () => {
  test('renders at all', () => {
    const { container } = render(<NavigationTypography>Some Text</NavigationTypography>);
    expect(container).toBeTruthy();
  });
});
