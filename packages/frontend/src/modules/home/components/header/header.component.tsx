import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  StlyedBackgroundIcon,
  StyledBurgerMenu,
  StyledHeader,
  StyledIcon,
  StyledLogout,
  StyledMenu,
  StyledUserBlock
} from './header.styled';
import { authService } from '../../../common/services/auth.service';
import { tokenService } from '../../../common/services/token.service';
import { ROUTER_KEYS } from '../../../common/constants/app-keys.constants';
import { COLORS } from '../../../theme';

import logo from '../../../../assets/icons/logo.svg';
import changeBgImage from '../../../../assets/icons/image.svg';

export const Header = () => {
  const history = useHistory();

  const logout = () => {
    authService.logout();
    history.push(ROUTER_KEYS.SIGN_IN);
  };

  const user = tokenService.getTokenData();

  const MenuItems = (
    <>
      <StlyedBackgroundIcon height="2.56rem" src={changeBgImage} alt="change background icon" />
      <StyledUserBlock>{user.username}</StyledUserBlock>
      <StyledUserBlock>
        <StyledLogout type="submit" color={COLORS.white} onClick={logout}>
          LOGOUT
        </StyledLogout>
      </StyledUserBlock>
    </>
  );

  return (
    <StyledHeader>
      <div>
        <StyledIcon height="2.75rem" src={logo} alt="logo" />
      </div>
      <StyledBurgerMenu>{MenuItems}</StyledBurgerMenu>
      <StyledMenu>{MenuItems}</StyledMenu>
    </StyledHeader>
  );
};
