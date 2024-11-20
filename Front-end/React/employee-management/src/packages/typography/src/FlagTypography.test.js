import React from 'react';
import { render, cleanup } from '@testing-library/react';

import FlagTypography from './FlagTypography';

afterEach(cleanup);

describe('FlagTypography', () => {
  test('renders at all', () => {
    const { container } = render(<FlagTypography>Some Text</FlagTypography>);
    expect(container).toBeTruthy();
  });
});
