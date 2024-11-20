import React from 'react';
import { render, cleanup } from '@testing-library/react';

import DisplaySmallTypography from './DisplaySmallTypography';

afterEach(cleanup);

describe('DisplaySmallTypography', () => {
  test('renders at all', () => {
    const { container } = render(<DisplaySmallTypography>Some Text</DisplaySmallTypography>);
    expect(container).toBeTruthy();
  });
});
