import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LinkSmallTypography from './LinkSmallTypography';

afterEach(cleanup);

describe('LinkSmallTypography', () => {
  test('renders at all', () => {
    const { container } = render(<LinkSmallTypography>Some Text</LinkSmallTypography>);
    expect(container).toBeTruthy();
  });
});
