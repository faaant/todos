import styled from 'styled-components';

import { COLORS, FONTS } from '../../../../theme';

export const StyledFormInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 15px;
  text-indent: 1rem;
  height: 2.31rem;
  border: none;
  background-color: ${COLORS.lightSilver};
  &::placeholder {
    color: ${COLORS.darkSilver};
    font-size: ${FONTS.SIZES.ms};
  }
`;
