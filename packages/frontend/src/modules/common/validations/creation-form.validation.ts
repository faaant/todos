import * as Yup from 'yup';

export const CREATION_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(1, 'Title is too short!')
    .max(9, 'Title is too long!')
    .required('Fill the title field!')
});
