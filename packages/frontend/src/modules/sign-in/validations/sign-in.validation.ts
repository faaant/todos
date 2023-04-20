import * as Yup from 'yup';

export const SIGN_IN_VALIDATION_SCHEME = Yup.object().shape({
  nameOrEmail: Yup.string()
    .trim()
    .min(5, 'Name is too short!')
    .max(25, 'Name is too long!')
    .required('Fill the name field!'),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .max(18, 'Password is too long!')
    .required('Fill the password field!')
});
