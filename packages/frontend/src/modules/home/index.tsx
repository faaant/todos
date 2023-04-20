import React from 'react';

import { StyledHomePage } from './home-page.styled';
import { Header } from './components/header';
import { Dashboard } from './components/dashboard';

export const HomePage = () => (
  <StyledHomePage>
    <Header />
    <Dashboard />
  </StyledHomePage>
);
