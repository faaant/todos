import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { StyledButton } from '../common/components/buttons/button.styled';
import { FormInput } from '../common/components/form-fields/form-input';
import {
  StyledSignIn,
  StyledAuthForm,
  StyledFormTitle,
  InputContainer,
  StyledIsMemberMessage,
  StyledAuthControls,
  StyledLink
} from './sign-in.styled';
import { SIGN_IN_VALIDATION_SCHEME } from './validations/sign-in.validation';
import { StyledError } from '../common/components/forms/creation-form';
import { authService } from '../common/services/auth.service';
import { ROUTER_KEYS } from '../common/constants/app-keys.constants';
import { INPUTS } from './constants/inputs';
import { ISignInForm } from './types';
import { COLORS } from '../theme';

export const SignIn = () => {
  const history = useHistory();

  const formik = useFormik<ISignInForm>({
    initialValues: {
      nameOrEmail: '',
      password: ''
    },
    validationSchema: SIGN_IN_VALIDATION_SCHEME,
    onSubmit: async (values) => {
      try {
        await authService.signIn({ ...values, nameOrEmail: values.nameOrEmail });
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
    <StyledSignIn>
      <StyledAuthForm onSubmit={formik.handleSubmit}>
        <StyledFormTitle>
          <span>Sign In</span>
        </StyledFormTitle>
        {inputs}
        <StyledAuthControls>
          <StyledIsMemberMessage>
            <div>Need an account?</div>
            <div>
              <StyledLink to="sign-up">Sign up</StyledLink>
            </div>
          </StyledIsMemberMessage>
          <StyledButton
            type="submit"
            color={COLORS.white}
            backgroundColor={COLORS.blueViolet}
            width="8.75rem"
            height="2.3125rem"
          >
            LOGIN
          </StyledButton>
        </StyledAuthControls>
      </StyledAuthForm>
    </StyledSignIn>
  );
};
