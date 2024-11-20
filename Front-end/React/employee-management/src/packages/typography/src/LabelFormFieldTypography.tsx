import styled from '@emotion/styled';
import LabelTypography from './LabelTypography';
import { colors } from '../../theme/lib/';

const LabelFormFieldTypography = styled(LabelTypography)({
  textTransform: 'capitalize',
  color: colors.charcoal,
  letterSpacing: '0.1px',
  '&.requiredField': {
    '&::before': {
      content: "'* '",
      color: colors.red5
    }
  }
});

export default LabelFormFieldTypography;
