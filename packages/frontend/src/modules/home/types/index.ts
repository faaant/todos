export interface IComponentMutationsService {
  create: Function;
  update: Function;
  remove: Function;
}

export interface IComponentGetDataService {
  getAll: Function;
}

export interface IMutationKeys {
  create: string;
  update: string;
  remove: string;
}

export interface ITodoContainer {
  id: string;
  title: string;
}

export interface ITodoItem {
  id: string;
  title: string;
}

export type TUpdateTodoItemDto = Pick<ITodoItem, 'id' | 'title'>;

export type TUpdateTodoContainerDto = Pick<ITodoContainer, 'id' | 'title'>;
