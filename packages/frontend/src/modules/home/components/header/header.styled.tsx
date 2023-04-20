import styled from 'styled-components';

import { BurgerMenu } from '../../../common/components/burger-menu';
import { StyledButton } from '../../../common/components/buttons';
import { COLORS, FONTS, SCREEN_SIZES } from '../../../theme';

export const StyledHeader = styled.div`
  display: flex;
  height: 5rem;
  background-color: ${COLORS.lightBlue};
  padding: 0.9375rem 3.125rem;
  @media (max-width: ${SCREEN_SIZES.mobile}) {
    top: 0;
    position: sticky;
    padding: 1.25rem 1.125rem;
  }
`;

export const StyledIcon = styled.img`
  height: ${(props) => props?.height || 'unset'};
`;

export const StlyedBackgroundIcon = styled(StyledIcon)`
  margin-right: 1.25rem;

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    margin-right: 0;
    margin-bottom: 0.9375rem;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    display: none;
  }
`;

export const StyledUserBlock = styled.div`
  display: flex;
  color: ${COLORS.white};
  min-width: 9.375rem;
  min-height: 3.125rem;
  width: 9.375rem;
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.darkBlue};
  margin-left: 0.9375rem;
  border-radius: 3px;

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    min-width: 7.5rem;
    width: 7.5rem;
    padding: 0 0.625rem;
    margin: 0 0 1.25rem 0;
  }
`;

export const StyledLogout = styled(StyledButton)`
  display: block;
  height: 100%;
  width: 100%;
  font-size: ${FONTS.SIZES.m};
`;

export const StyledBurgerMenu = styled(BurgerMenu)`
  display: none;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.mobile}) {
    display: flex;
  }
`;
