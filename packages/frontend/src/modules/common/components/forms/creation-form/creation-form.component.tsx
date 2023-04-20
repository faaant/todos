import React from 'react';
import { useFormik } from 'formik';

import { StyledButton } from '../../buttons/button.styled';
import { COLORS } from '../../../../theme';
import { FormInput } from '../../form-fields/form-input';
import { CREATION_FORM_VALIDATION_SCHEMA } from '../../../validations/creation-form.validation';
import {
  StyledCloseButton,
  StyledControls,
  StyledCreationForm,
  StyledError
} from './creation-form.styled';

interface ICreationFormProps {
  className?: string;
  text: string;
  create: (title: string) => void;
  close: () => void;
}

export const CreationForm: React.FC<ICreationFormProps> = ({
  className,
  text,
  create = () => {},
  close = () => {}
}) => {
  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: CREATION_FORM_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      create(values.title.trim());
      close();
    }
  });

  return (
    <StyledCreationForm className={className} onSubmit={formik.handleSubmit}>
      <FormInput
        id="title"
        name="title"
        type="text"
        placeholder="Enter title"
        change={formik.handleChange}
        blur={formik.handleBlur}
        value={formik.values.title}
        autoFocus
      />
      <StyledError>
        {formik.errors.title && formik.touched.title ? formik.errors.title : ''}
      </StyledError>

      <StyledControls>
        <StyledButton
          type="submit"
          color={COLORS.white}
          backgroundColor={COLORS.darkBlue}
          width="9.5rem"
          height="2.3125rem"
        >
          {text}
        </StyledButton>
        <StyledCloseButton color={COLORS.darkGrey} backgroundColor={COLORS.white} onClick={close}>
          ╳
        </StyledCloseButton>
      </StyledControls>
    </StyledCreationForm>
  );
};
