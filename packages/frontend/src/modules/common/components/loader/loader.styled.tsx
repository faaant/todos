import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation-name: ${RotateAnimation};
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

const CentringBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledLoader = () => (
  <CentringBlock>
    <Loader />
  </CentringBlock>
);
