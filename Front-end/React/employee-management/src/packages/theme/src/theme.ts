import { css } from '@emotion/core';

export const globalStyles = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html button {
    cursor: pointer;
    font-family: 'Libre Franklin', sans-serif;
  }
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export enum colors {
  purple1 = '#EDECF3',
  purple2 = '#D6D4EB',
  purple3 = '#8984BE',
  purple4 = '#5A53AF',
  purple5 = '#201C4F',

  green1 = '#E8F1D8',
  green2 = '#D1E5B1',
  green3 = '#BAD78B',
  green4 = '#8CBD3D',
  green5 = '#32923C',

  orange1 = '#FCE4D8',
  orange2 = '#FAC9B1',
  orange3 = '#F7AE89',
  orange4 = '#F2783B',
  orange5 = '#B55A2C',

  yellow1 = '#FEF5DD',
  yellow2 = '#FEF3C2',
  yellow3 = '#FFE36E',
  yellow4 = '#FFD00D',
  yellow5 = '#C99209',

  blue1 = '#D2E4F9',
  blue2 = '#A6C9F3',
  blue3 = '#79ADEC',
  blue4 = '#2077E0',
  blue5 = '#115293',

  teal1 = '#E3F6F8',
  teal2 = '#AEDEE2',
  teal3 = '#7EC7CC',
  teal4 = '#56B3BA',
  teal5 = '#00848E',

  plum1 = '#ECE0E6',
  plum2 = '#E1C4D2',
  plum3 = '#D4A1BA',
  plum4 = '#B56884',
  plum5 = '#8E3F5C',

  red1 = '#FEE9E7',
  red2 = '#FFDEDC',
  red3 = '#FE847C',
  red4 = '#F44A3E',
  red5 = '#BD1B0F',

  charcoal = '#18181E',
  ash = '#FAFAFA',
  white = '#FFFFFF',

  cream1 = '#FCF6ED',
  cream2 = '#E8D9C4',

  gray1 = '#F2F2F2',
  gray2 = '#E5E5E5',
  gray3 = '#BBBBBB',
  gray4 = '#757575',
  gray5 = '#5C595C',
  primary1 = purple5,
  primary2 = green4,
  secondary1 = orange4,
  secondary2 = yellow4,
  tertiary1 = blue4,
  tertiary2 = purple4
}

// From typography styleguide to use only when a Wrapping components is not an option
export const fontSize = {
  displayLarge: '3.4rem',
  displayMedium: '2.6rem',
  displaySmall: '2.1rem',
  heading: '1.7rem',
  standard: '1.6rem',
  small: '1.3rem',
  hint: '1.2rem'
};

export const sizes = {
  xxSmall: '0.6rem',
  xSmall: '1rem',
  small: '2rem',
  medium: '3rem',
  large: '4rem',
  xLarge: '5rem',
  xxLarge: '6rem'
};

export enum zIndices {
  modal = 7000,
  modalDropdown = modal + 50
}

export const fontFamily = { default: 'Libre Franklin, sans-serif' };
export const boxShadow = '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3)';
export const maxMobileWidth = 991;
