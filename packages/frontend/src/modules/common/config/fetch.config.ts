export const fetchOptions = (token: string): Partial<RequestInit> => ({
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export enum HttpMethods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE'
}

export const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4200/api';
