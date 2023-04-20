import { API_KEYS } from '../../common/constants/app-keys.constants';
import { fetchService } from '../../common/services/fetch.service';
import { IComponentGetDataService, IComponentMutationsService, ITodoContainer } from '../types';

export const todoContainerMutationsService: IComponentMutationsService = {
  create: async (title: string) => fetchService.post(API_KEYS.TODO_CONTAINERS, { title }),

  update: async (id: string, title: string) =>
    fetchService.put(`${API_KEYS.TODO_CONTAINERS}/${id}`, { title }),

  remove: async (id: string) => fetchService.delete(`${API_KEYS.TODO_CONTAINERS}/${id}`)
};

export const todoContainerDataService: IComponentGetDataService = {
  getAll: async (): Promise<ITodoContainer[]> =>
    fetchService.get<ITodoContainer[]>(API_KEYS.TODO_CONTAINERS)
};
