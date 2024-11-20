import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../theme/lib/';

import {
  DisplayLargeTypography,
  DisplayMediumTypography,
  DisplaySmallTypography,
  HeadingTypography,
  SmallSemiBoldTypography,
  SmallTypography,
  HintTypography,
  LinkTypography,
  LinkSmallTypography,
  LabelTypography,
  LabelFormFieldTypography,
  LabelSettingTypography,
  NavigationTypography,
  FlagTypography,
  StandardTypography,
  StandardSemiBoldTypography
} from './src';

const Background = styled.div(({ isReversed }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: isReversed ? colors.gray5 : colors.white
}));

const TypographyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > span {
    margin: 10px 0;
    display: block;
  }
`;

const TypographyWrapper = ({ isReversed, isDisabled }) => {
  const exampleText = (typography) => `${typography} : This is example text with styles`;

  const classes = [];
  isReversed && classes.push('reverse');
  isDisabled && classes.push('disabled');
  const classNames = classes.join(' ');

  return (
    <Background isReversed={isReversed}>
      <TypographyContainer>
        <DisplayLargeTypography className={classNames}>{exampleText('DisplayLargeTypography')}</DisplayLargeTypography>
        <DisplayMediumTypography className={classNames}>
          {exampleText('DisplayMediumTypography')}
        </DisplayMediumTypography>
        <DisplaySmallTypography className={classNames}>{exampleText('DisplaySmallTypography')}</DisplaySmallTypography>
        <HeadingTypography className={classNames}>{exampleText('HeadingTypography')}</HeadingTypography>
        <SmallSemiBoldTypography className={classNames}>
          {exampleText('SmallSemiBoldTypography')}
        </SmallSemiBoldTypography>
        <SmallTypography className={classNames}>{exampleText('SmallTypography')}</SmallTypography>
        <SmallTypography className={classNames} color={colors.red5}>
          {exampleText('SmallTypography')}
        </SmallTypography>
        <HintTypography className={classNames}>{exampleText('HintTypography')}</HintTypography>
        <LinkTypography className={classNames}>{exampleText('LinkTypography')}</LinkTypography>
        <LinkSmallTypography className={classNames}>{exampleText('LinkSmallTypography')}</LinkSmallTypography>
        <LabelTypography className={classNames}>{exampleText('LabelTypography')}</LabelTypography>
        <LabelSettingTypography className={classNames}>{exampleText('LabelSettingTypography')}</LabelSettingTypography>
        <LabelFormFieldTypography className={classNames}>
          {exampleText('LabelFormFieldTypography')}
        </LabelFormFieldTypography>
        <NavigationTypography className={classNames}>{exampleText('NavigationTypography')}</NavigationTypography>
        <FlagTypography className={classNames}>{exampleText('FlagTypography')}</FlagTypography>
        <StandardTypography className={classNames}>{exampleText('StandardTypography')}</StandardTypography>
        <StandardSemiBoldTypography className={classNames}>
          {exampleText('StandardSemiBoldTypography')}
        </StandardSemiBoldTypography>
      </TypographyContainer>
    </Background>
  );
};

export default {
  title: 'Theme/Typography',
  component: Typography
};

export const Typography = (args) => <TypographyWrapper {...args} />;
Typography.args = {
  isReversed: false,
  isDisabled: false
};
