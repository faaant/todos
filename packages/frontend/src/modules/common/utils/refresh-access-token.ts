import { baseURL, fetchOptions } from '../config/fetch.config';
import { API_KEYS, STORAGE_KEYS } from '../constants/app-keys.constants';

export const refreshAccessToken = async (): Promise<boolean> => {
  const response = await fetch(baseURL + API_KEYS.REFRESH, {
    method: 'POST',
    ...fetchOptions('')
  });

  if (response.ok) {
    const token = await response.json();
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token.accessToken);
  }

  return response.ok;
};
