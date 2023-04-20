import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledControls } from '../common/components/forms/creation-form';
import { StyledTitleText } from '../home/components/todo-container/components/block-title';
import { FONTS, COLORS } from '../theme';

export const StyledSignUp = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAuthForm = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.875rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const StyledFormTitle = styled(StyledTitleText)`
  width: 100%;
  padding-bottom: 2.5rem;
  text-align: left;
  margin-top: 1.25rem;
`;

export const StyledAuthControls = styled(StyledControls)`
  padding-top: 1.25rem;
  & > :last-child {
    margin: auto 0 auto auto;
  }
`;

export const StyledIsMemberMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-size: ${FONTS.SIZES.ms};
  color: ${COLORS.darkSilver};
  line-height: 0.9rem;
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.blue};

  &:visited {
    color: ${COLORS.blue};
  }
`;
