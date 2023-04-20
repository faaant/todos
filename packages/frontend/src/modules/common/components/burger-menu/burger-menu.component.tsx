import React from 'react';

import { Burger, BurgerLines, Checker, CheckInput, Menu } from './burger-menu.styled';

interface IBurgerMenuProps {
  className?: string;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ className, children }) => (
  <div className={className}>
    <CheckInput type="checkbox" id="checker" />
    <Checker htmlFor="checker">
      <Burger>
        <BurgerLines />
        <BurgerLines />
      </Burger>
    </Checker>
    <Menu>{children}</Menu>
  </div>
);
