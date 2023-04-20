import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { tokenService } from '../../services/token.service';
import { ROUTER_KEYS } from '../../constants/app-keys.constants';

interface IProtectedRouteProps {
  path: string;
  component: React.FC;
  exact: boolean;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ path, component, exact }) => {
  const isLoggedIn = tokenService.isValid();

  return isLoggedIn ? (
    <Route component={component} path={path} exact={exact} />
  ) : (
    <Redirect to={{ pathname: ROUTER_KEYS.SIGN_IN }} />
  );
};
