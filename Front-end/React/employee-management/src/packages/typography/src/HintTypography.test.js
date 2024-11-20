import React from 'react';
import { render, cleanup } from '@testing-library/react';

import HintTypography from './HintTypography';

afterEach(cleanup);

describe('HintTypography', () => {
  test('renders at all', () => {
    const { container } = render(<HintTypography>Some Text</HintTypography>);
    expect(container).toBeTruthy();
  });
});
