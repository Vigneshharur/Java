import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../theme/lib/';
import { componentStyle, hexToRGB } from './index';

describe('index.test.js', () => {
  test('it should return rbga from hex', () => {
    expect(hexToRGB(colors.white)).toBe('rgb(255, 255, 255)');
  });
  test('it should return styles', () => {
    const styles = { padding: '10px', margin: '10px', fontSize: '16px' };
    const { queryByText } = render(<div style={styles}>cool styled component</div>);
    const component = queryByText('cool styled component');
    const { padding, margin, fontSize } = componentStyle(component);
    expect(padding).toBe(styles.padding);
    expect(margin).toBe(styles.margin);
    expect(fontSize).toBe(styles.fontSize);
  });
});
