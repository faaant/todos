import React from 'react';

import { StyledButton } from '../../../../../common/components/buttons';
import { ItemTitle, StyledTodoItem, StyledTrashIcon } from './todo-item.styled';

import deleteIcon from '../../../../../../assets/icons/delete.svg';

interface ITodoItemProps {
  id: string;
  title: string;
  update: (id: string, title: string) => void;
  remove: (id: string) => void;
  [key: string]: any;
}

export const TodoItem: React.FC<ITodoItemProps> = React.forwardRef<any, ITodoItemProps>(
  ({ id, title, update = () => {}, remove = () => {}, ...rest }, ref) => {
    const updateItem = (newTitle: string) => {
      update(id, newTitle);
    };
    const removeItem = () => remove.call(this, id);

    return (
      <StyledTodoItem ref={ref} {...rest}>
        <ItemTitle update={updateItem} text={title} />
        <div>
          <StyledButton type="button" onClick={removeItem}>
            <StyledTrashIcon src={deleteIcon} alt="delete" />
          </StyledButton>
        </div>
      </StyledTodoItem>
    );
  }
);
