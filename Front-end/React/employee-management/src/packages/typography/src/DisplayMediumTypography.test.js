import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DisplayMediumTypography from './DisplayMediumTypography';

afterEach(cleanup);

describe('DisplayMediumTypography', () => {
  test('renders at all', () => {
    const { container } = render(<DisplayMediumTypography>Some Text</DisplayMediumTypography>);
    expect(container).toBeTruthy();
  });
});
