import styled from 'styled-components';

import { COLORS } from '../../../theme';

export const CheckInput = styled.input`
  display: none;
`;

export const Checker = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.375rem;
  width: 2.0625rem;

  ${CheckInput}:checked ~ & {
    height: 2.0625rem;
  }
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const BurgerLines = styled.div`
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: '';
    height: 0.125rem;
    width: 100%;
    background: ${COLORS.white};
    border-radius: 3.125rem;
    left: 0;
  }

  &::after {
    position: absolute;
    display: block;
    content: '';
    height: 0.125rem;
    width: 80%;
    background: ${COLORS.white};
    border-radius: 3.125rem;
    top: 0.40625rem;
    right: 0;
  }

  &:last-child {
    margin-top: 0.8125rem;
  }

  ${CheckInput}:checked ~ ${Checker} ${Burger} & {
    &:last-child {
      margin-top: 0;
      &::before {
        top: 1rem;
        transform: rotate(45deg);
        transition: 0.6s;
      }

      &::after {
        top: 1rem;
        width: 100%;
        transform: rotate(-45deg);
        transition: 0.6s;
      }
    }

    &:first-child {
      visibility: hidden;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: calc(100vh - 5rem);
  width: 100vw;
  background-color: ${COLORS.chineseBlue};
  margin-left: 100vw;
  padding: 7.625rem 0;
  top: 5rem;
  left: 0;
  visibility: hidden;
  transition: ease-in 0.6s;
  z-index: 1000;

  ${CheckInput}:checked ~ & {
    visibility: visible;
    margin-left: 0;
    transition: ease-in 0.6s;
  }
`;
