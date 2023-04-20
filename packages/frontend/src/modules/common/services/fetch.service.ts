import { HttpMethods } from '../config/fetch.config';
import { commonFetch } from '../utils';

export const fetchService = {
  async get<T>(apiEndpoint: string): Promise<T> {
    return commonFetch<T>(HttpMethods.get, apiEndpoint);
  },

  async post<T>(apiEndpoint: string, payload?: any): Promise<T> {
    return commonFetch<T>(HttpMethods.post, apiEndpoint, payload);
  },

  async put<T>(apiEndpoint: string, payload?: any): Promise<T> {
    return commonFetch<T>(HttpMethods.put, apiEndpoint, payload);
  },

  async delete<T>(apiEndpoint: string, payload?: any): Promise<T> {
    return commonFetch<T>(HttpMethods.delete, apiEndpoint, payload);
  }
};
