import * as Yup from 'yup';

export const SIGN_UP_VALIDATION_SCHEME = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, 'Name is too short!')
    .max(14, 'Name is too long!')
    .required('Fill the name field!'),
  email: Yup.string().email('Invalid email!').required('Fill the email field!'),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .max(18, 'Password is too long!')
    .required('Fill the password field!')
});
