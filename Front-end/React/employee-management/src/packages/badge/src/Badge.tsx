import styled from '@emotion/styled';
import { SmallSemiBoldTypography } from '../../typography/lib/';
import { colors, sizes } from '../../theme/lib/';

const textColor = colors.white;

export const typeConfig = {
  feature: { backgroundColor: colors.secondary1, textColor },
  warning: { backgroundColor: colors.yellow4, textColor },
  event: { backgroundColor: colors.purple3, textColor },
  status: { backgroundColor: colors.teal3, textColor }
};

export enum badgeTypes {
  FEATURE = 'feature',
  WARNING = 'warning',
  EVENT = 'event',
  STATUS = 'status'
}

export interface BadgeProps {
  backgroundColor?: colors;
  textColor?: colors;
  type?: badgeTypes;
}

const defaultBackgroundColor = typeConfig.feature.backgroundColor;
const defaultTextColor = typeConfig.feature.textColor;

const Badge = styled(SmallSemiBoldTypography)<BadgeProps>`
  background-color: ${({ type, backgroundColor = defaultBackgroundColor }) =>
    type ? typeConfig[type].backgroundColor : backgroundColor};
  color: ${({ type, textColor = defaultTextColor }) => (type ? typeConfig[type].textColor : textColor)};
  border-radius: 0.3rem;
  padding: ${sizes.xxSmall} ${sizes.xSmall};
`;

export default Badge;
