import styled from 'styled-components';

import { FormInput } from '../../../../../common/components/form-fields/form-input';
import { COLORS, FONTS } from '../../../../../theme';

export const StyledBlockTitle = styled.div`
  font-size: ${FONTS.SIZES.l};
  font-weight: ${FONTS.WEIGHTS.normal};
  line-height: 1.2em;
`;

export const StyledTitleText = styled.div`
  font-size: ${FONTS.SIZES.l};
  font-weight: ${FONTS.WEIGHTS.normal};
  line-height: 1.2em;
`;

export const StyledEditInput = styled(FormInput)`
  text-indent: 0.5rem;
  width: 95%;

  &:focus {
    border: solid ${COLORS.darkSilver} 1px;
  }
`;
