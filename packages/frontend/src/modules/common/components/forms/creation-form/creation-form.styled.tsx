import styled from 'styled-components';

import { COLORS, FONTS, SCREEN_SIZES } from '../../../../theme';
import { StyledButton } from '../../buttons/button.styled';

export const StyledError = styled.div`
  padding: 0.125rem 0.25rem 0 0.25rem;
  color: ${COLORS.red};
  font-size: ${FONTS.SIZES.ms};
  height: 1.25rem;
`;

export const StyledCreationForm = styled.form`
  background-color: ${COLORS.white};
  padding: 0.625rem;
  height: 7.5rem;
  width: 100%;

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    order: -1;
  }
`;

export const StyledControls = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0.625rem;
`;

export const StyledCloseButton = styled(StyledButton)`
  margin: auto 0;
  padding: 0;
  padding-left: 1.15rem;
  font-size: ${FONTS.SIZES.lm};
`;
