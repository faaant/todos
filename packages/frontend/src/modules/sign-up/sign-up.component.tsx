import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { StyledButton } from '../common/components/buttons/button.styled';
import { FormInput } from '../common/components/form-fields/form-input';
import { SIGN_UP_VALIDATION_SCHEME } from './validations/sign-up.validation';
import {
  InputContainer,
  StyledAuthControls,
  StyledAuthForm,
  StyledFormTitle,
  StyledIsMemberMessage,
  StyledLink,
  StyledSignUp
} from './sign-up.styled';
import { StyledError } from '../common/components/forms/creation-form';
import { authService } from '../common/services/auth.service';
import { ROUTER_KEYS } from '../common/constants/app-keys.constants';
import { INPUTS } from './constants/inputs';
import { ISignUpForm } from './types';
import { COLORS } from '../theme';

export const SignUp = () => {
  const history = useHistory();

  const formik = useFormik<ISignUpForm>({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: SIGN_UP_VALIDATION_SCHEME,
    onSubmit: async (values) => {
      try {
        await authService.signUp({ ...values, username: values.name });
        history.push(ROUTER_KEYS.HOME);
      } catch (err) {
        // Temporary solution, need to replace with pop-up
        alert(err);
      }
    }
  });

  const inputs = INPUTS.map((input) => (
    <InputContainer key={input.id}>
      <FormInput
        {...input}
        change={formik.handleChange}
        blur={formik.handleBlur}
        value={formik.values?.[input.name]}
      />
      <StyledError>
        {formik.errors?.[input.name] && formik.touched?.[input.name]
          ? formik.errors?.[input.name]
          : ''}
      </StyledError>
    </InputContainer>
  ));

  return (
    <StyledSignUp>
      <StyledAuthForm onSubmit={formik.handleSubmit}>
        <StyledFormTitle className="title">
          <span>Sign Up</span>
        </StyledFormTitle>
        {inputs}
        <StyledAuthControls className="controls">
          <StyledIsMemberMessage className="member">
            <div>Already a member?</div>
            <div>
              <StyledLink to="sign-in">Sign in</StyledLink>
            </div>
          </StyledIsMemberMessage>
          <StyledButton
            type="submit"
            color={COLORS.white}
            backgroundColor={COLORS.blueViolet}
            width="8.75rem"
            height="2.3125rem"
          >
            CREATE ACCOUNT
          </StyledButton>
        </StyledAuthControls>
      </StyledAuthForm>
    </StyledSignUp>
  );
};
