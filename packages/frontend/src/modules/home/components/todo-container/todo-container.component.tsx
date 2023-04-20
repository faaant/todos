import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import { useElementMutations } from '../../state/hooks/elementMutations';

import { StyledButton } from '../../../common/components/buttons';
import { QUERY_KEYS } from '../../../common/constants/app-keys.constants';
import { todoItemDataService, todoItemMutationService } from '../../services/todo-item.service';
import { BlockTitle } from './components/block-title';
import { TodoItem } from './components/todo-item';
import {
  StyledTodoContainer,
  StyledItemsContainer,
  StyledAddCardButton,
  StyledContainerHeader,
  StyledCreationForm
} from './todo-container.styled';
import { StyledLoader } from '../../../common/components/loader';
import { ITodoItem } from '../../types';
import { reorder } from '../../utils/reorder';

import deleteIcon from '../../../../assets/icons/delete.svg';

interface ITodoContainerProps {
  id: string;
  title: string;
  remove: (id: string) => void;
  update: (id: string, title: string) => void;
  [key: string]: any;
}

export const TodoContainer: React.FC<ITodoContainerProps> = ({
  id,
  title,
  update = () => {},
  remove = () => {}
}) => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  const { isLoading, refetch } = useQuery(
    `container/${id}/${QUERY_KEYS.TODO_ITEMS}`,
    () => todoItemDataService.getAll(id),
    {
      onSuccess: (data) => {
        setTodoItems(data);
      },
      onError: (err) => {
        alert(err);
      },
      refetchOnMount: 'always'
    }
  );

  const todoItemMutations = useElementMutations(todoItemMutationService, refetch, {
    create: QUERY_KEYS.CREATE_TODO_ITEM,
    update: QUERY_KEYS.UPDATE_TODO_ITEM,
    remove: QUERY_KEYS.REMOVE_TODO_ITEM
  });

  const createTodoItem = (todoItemTitle: string) => {
    todoItemMutations.create.mutateAsync({ title: todoItemTitle, containerId: id });
  };

  const updateTodoItem = (todoItemId: string, todoItemTitle: string) => {
    todoItemMutations.update.mutateAsync({ id: todoItemId, title: todoItemTitle });
  };

  const removeTodoItem = (todoItemId: string) => {
    todoItemMutations.remove.mutateAsync(todoItemId);
  };

  const openForm = () => {
    setFormVisibility(true);
  };

  const closeForm = () => {
    setFormVisibility(false);
  };

  const updateTodoContainer = (newTitle: string) => update(id, newTitle);
  const removeTodoContainer = () => remove.call(this, id);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = reorder<ITodoItem>(todoItems, result.source.index, result.destination.index);
    setTodoItems(items);
  };

  if (isLoading) {
    return <StyledLoader />;
  }

  const draggableTodoItems = todoItems.map((todo: ITodoItem, index: number) => (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(draggableProvided) => (
        <TodoItem
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          {...todo}
          update={updateTodoItem}
          remove={removeTodoItem}
          key={todo.id}
        />
      )}
    </Draggable>
  ));

  return (
    <StyledTodoContainer>
      <StyledContainerHeader>
        <BlockTitle text={title} update={updateTodoContainer} />
        <StyledButton type="button" onClick={removeTodoContainer}>
          <img src={deleteIcon} alt="delete" />
        </StyledButton>
      </StyledContainerHeader>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="vertical">
          {(dropableProvided) => (
            <StyledItemsContainer
              {...dropableProvided.droppableProps}
              ref={dropableProvided.innerRef}
            >
              {draggableTodoItems}
              {dropableProvided.placeholder}
            </StyledItemsContainer>
          )}
        </Droppable>
      </DragDropContext>

      {isFormVisible ? (
        <StyledCreationForm text="Add card" create={createTodoItem} close={closeForm} />
      ) : (
        <StyledAddCardButton onClick={openForm}>+ Add new card</StyledAddCardButton>
      )}
    </StyledTodoContainer>
  );
};
