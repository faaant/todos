import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

import { StyledFormInput } from './form-input.styled';

interface IFormInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: any;
  className?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  blur?: (event: FocusEvent) => void;
  keyDown?: (event: KeyboardEvent) => void;
  [key: string]: any;
}

export const FormInput: React.FC<IFormInputProps> = React.forwardRef<any, IFormInputProps>(
  ({ change = () => {}, blur = () => {}, keyDown = () => {}, ...props }, ref) => (
    <StyledFormInput ref={ref} onChange={change} onBlur={blur} onKeyDown={keyDown} {...props} />
  )
);
