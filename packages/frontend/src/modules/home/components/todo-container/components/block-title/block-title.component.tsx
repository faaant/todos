import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import { StyledBlockTitle, StyledEditInput } from './block-title.styled';

interface IBlockTitleProps {
  className?: string;
  text: string;
  update?: (title: string) => void;
}

export const BlockTitle: React.FC<IBlockTitleProps> = ({ className, text, update = () => {} }) => {
  const [isInputVisible, setInputVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const titleInput = useRef<HTMLInputElement>(null);

  const openEdit = () => {
    setInputVisibility(true);
    titleInput.current?.focus();
  };

  const closeEdit = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (titleInput.current?.value) {
        if (titleInput.current.value.length === 0 || titleInput.current.value.length > 9) {
          // Temporary solution, needs to be replaced with a popup when it will be created
          alert('Title length must be in range from 1 to 9!');
          return;
        }
      }
      update(titleInput.current?.value ?? text);
      setInputVisibility(false);
    }
  };

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledBlockTitle className={className} onDoubleClick={openEdit}>
      {isInputVisible ? (
        <StyledEditInput
          ref={titleInput}
          id="title"
          name="title"
          type="text"
          placeholder="Enter new title"
          value={inputValue}
          keyDown={closeEdit}
          change={change}
          autoFocus
        />
      ) : (
        text
      )}
    </StyledBlockTitle>
  );
};
