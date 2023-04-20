import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { useElementMutations } from '../../state/hooks/elementMutations';

import { CreationForm } from '../../../common/components/forms/creation-form';
import { StyledLoader } from '../../../common/components/loader';
import { QUERY_KEYS } from '../../../common/constants/app-keys.constants';
import { COLORS } from '../../../theme';
import {
  todoContainerDataService,
  todoContainerMutationsService
} from '../../services/todo-container.services';
import { ITodoContainer } from '../../types';
import { TodoContainer } from '../todo-container';
import { StyledAddColumnButton, StyledDashboard } from './dashboard.styled';

export const Dashboard = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [todoContainers, setTodoContainers] = useState<ITodoContainer[]>([]);

  const { isLoading, isError, refetch } = useQuery(
    QUERY_KEYS.CONTAINERS,
    () => todoContainerDataService.getAll(),
    {
      onSuccess: (data) => {
        setTodoContainers(data);
      },
      onError: (err) => {
        alert(err);
      },
      refetchOnMount: 'always'
    }
  );

  const todoContainerMutations = useElementMutations(todoContainerMutationsService, refetch, {
    create: QUERY_KEYS.CREATE_TODO_CONTAINER,
    update: QUERY_KEYS.UPDATE_TODO_CONTAINER,
    remove: QUERY_KEYS.REMOVE_TODO_CONTAINER
  });

  const openForm = () => {
    setFormVisibility(true);
  };

  const closeForm = () => {
    setFormVisibility(false);
  };

  const createTodoContainer = (title: string) => {
    todoContainerMutations.create.mutateAsync(title);
  };

  const updateTodoContainer = (id: string, title: string) => {
    todoContainerMutations.update.mutateAsync({ id, title });
  };

  const removeTodoContainer = (id: string) => {
    todoContainerMutations.remove.mutateAsync(id);
  };

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <StyledLoader />;
  }

  return (
    <StyledDashboard>
      {todoContainers.map((container: ITodoContainer) => (
        <TodoContainer
          {...container}
          update={updateTodoContainer}
          remove={removeTodoContainer}
          key={container.id}
        />
      ))}

      {isFormVisible ? (
        <CreationForm text="Add column" create={createTodoContainer} close={closeForm} />
      ) : (
        <StyledAddColumnButton
          color={COLORS.black}
          backgroundColor={COLORS.white}
          onClick={openForm}
        >
          + Add new column
        </StyledAddColumnButton>
      )}
    </StyledDashboard>
  );
};
