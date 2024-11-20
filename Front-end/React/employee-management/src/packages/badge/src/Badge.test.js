import React from 'react';
import { render } from '@testing-library/react';
import { componentStyle, hexToRGB } from '../../test-utils/lib';
import { colors } from '../../theme/lib/';
import Badge, { badgeTypes } from './Badge';

describe('Badge', () => {
  test('renders with default colors', () => {
    const { queryByText } = render(<Badge>Some Text</Badge>);
    const badge = queryByText(/some text/i);
    const { backgroundColor: computedBackgroundColor, color: computedColor } = componentStyle(badge);
    expect(computedBackgroundColor).toBe(hexToRGB(colors.secondary1));
    expect(computedColor).toBe(hexToRGB(colors.white));
  });
  test('renders with custom colors', () => {
    const textColor = colors.green1;
    const backgroundColor = colors.green5;
    const { queryByText } = render(
      <Badge textColor={textColor} backgroundColor={backgroundColor}>
        Some Text
      </Badge>
    );
    const badge = queryByText(/some text/i);
    const { backgroundColor: computedBackgroundColor, color: computedColor } = componentStyle(badge);
    expect(computedBackgroundColor).toBe(hexToRGB(backgroundColor));
    expect(computedColor).toBe(hexToRGB(textColor));
  });
  test('renders with type preset colors', () => {
    const textColor = colors.white;
    const backgroundColor = colors.yellow4;
    const { queryByText } = render(
      <Badge textColor={textColor} backgroundColor={backgroundColor} type={badgeTypes.WARNING}>
        Some Text
      </Badge>
    );
    const badge = queryByText(/some text/i);
    const { backgroundColor: computedBackgroundColor, color: computedColor } = componentStyle(badge);
    expect(computedBackgroundColor).toBe(hexToRGB(backgroundColor));
    expect(computedColor).toBe(hexToRGB(textColor));
  });
});
