import { fetchOptions, baseURL } from '../config/fetch.config';
import { STORAGE_KEYS } from '../constants/app-keys.constants';
import { HttpExeption } from '../types/http-exeption';
import { refreshAccessToken } from './refresh-access-token';

// Function that make fetch
// When get response status 401 try refresh token and then make refetch

export const commonFetch = async function <T>(
  method: string,
  apiEnpoint: string,
  body?: any
): Promise<T> {
  let token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  let options = {
    method,
    ...fetchOptions(token || '')
  };

  if (body) {
    options = {
      ...options,
      body: JSON.stringify(body)
    };
  }

  let response = await fetch(baseURL + apiEnpoint, options);

  let needRefetch = false;
  if (response.status === 401) {
    needRefetch = await refreshAccessToken();
  }

  if (needRefetch) {
    token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    response = await fetch(baseURL + apiEnpoint, options);
  }

  if (!response.ok) {
    throw new HttpExeption(response.status, response.statusText);
  }

  const data = await response.json();

  return data as T;
};
