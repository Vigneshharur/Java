import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LabelTypography from './LabelTypography';

afterEach(cleanup);

describe('LabelTypography', () => {
  test('renders at all', () => {
    const { container } = render(<LabelTypography>Some Text</LabelTypography>);
    expect(container).toBeTruthy();
  });
});
