import { colors } from '../../theme/lib/';

export const hexToRGB = (hexValue: colors) => {
  const r = '0x' + hexValue[1] + hexValue[2];
  const g = '0x' + hexValue[3] + hexValue[4];
  const b = '0x' + hexValue[5] + hexValue[6];
  return 'rgb(' + +r + ', ' + +g + ', ' + +b + ')';
};

export const componentStyle = (component: Element) => window.getComputedStyle(component);
