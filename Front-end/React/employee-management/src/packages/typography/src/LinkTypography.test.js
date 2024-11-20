import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LinkTypography from './LinkTypography';

afterEach(cleanup);

describe('LinkTypography', () => {
  test('renders at all', () => {
    const { container } = render(<LinkTypography>Some Text</LinkTypography>);
    expect(container).toBeTruthy();
  });
});
