import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../common/components/protected-route';
import { APP_KEYS } from '../common/constants';
import { HomePage } from '../home';
import { NotFound } from '../not-found';
import { SignIn } from '../sign-in';
import { SignUp } from '../sign-up';

export const MainRouter = () => (
  <Router>
    <Switch>
      <ProtectedRoute component={HomePage} exact path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route component={SignUp} path={APP_KEYS.ROUTER_KEYS.SIGN_UP} />
      <Route component={SignIn} path={APP_KEYS.ROUTER_KEYS.SIGN_IN} />
      <Route component={NotFound} path="*" />
    </Switch>
  </Router>
);
