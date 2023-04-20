import { API_KEYS } from '../../common/constants/app-keys.constants';
import { fetchService } from '../../common/services/fetch.service';
import { IComponentGetDataService, IComponentMutationsService, ITodoItem } from '../types';

export const todoItemMutationService: IComponentMutationsService = {
  create: async (title: string, id: string) =>
    fetchService.post(API_KEYS.TODOS, { title, containerId: id }),

  update: async (id: string, title: string) =>
    fetchService.put(`${API_KEYS.TODOS}/${id}`, { title }),

  remove: async (id: string) => fetchService.delete(`${API_KEYS.TODOS}/${id}`)
};

export const todoItemDataService: IComponentGetDataService = {
  getAll: async (containerId?: string): Promise<ITodoItem[]> =>
    fetchService.get<ITodoItem[]>(`${API_KEYS.TODOS}/${containerId}`)
};
