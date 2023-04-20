import { API_KEYS, STORAGE_KEYS } from '../constants/app-keys.constants';
import { IUserSignIn, IUserSignUp } from '../types/auth.types';
import { fetchService } from './fetch.service';

export const authService = {
  signUp: async (user: IUserSignUp) => {
    const token = await fetchService.post<{ accessToken: string }>(API_KEYS.SIGN_UP, user);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token.accessToken);
    alert('Succesfully registered!');
  },

  signIn: async (user: IUserSignIn) => {
    const token = await fetchService.post<{ accessToken: string }>(API_KEYS.SIGN_IN, user);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token.accessToken);
    alert('Succesfully logined!');
  },

  logout: () => {
    fetchService.post<{ accessToken: string }>(API_KEYS.LOGOUT);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    alert('Succesfully logout!');
  }
};
