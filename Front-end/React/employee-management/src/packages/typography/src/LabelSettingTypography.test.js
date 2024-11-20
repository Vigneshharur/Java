import React from 'react';
import { render, cleanup } from '@testing-library/react';

import LabelSettingTypography from './LabelSettingTypography';

afterEach(cleanup);

describe('LabelSettingTypography', () => {
  test('renders at all', () => {
    const { container } = render(<LabelSettingTypography>Some Text</LabelSettingTypography>);
    expect(container).toBeTruthy();
  });
});
