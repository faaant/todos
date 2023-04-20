import jwt_decode from 'jwt-decode';

import { STORAGE_KEYS } from '../constants/app-keys.constants';
import { ITokenPayload } from '../types/token-payload';

export const tokenService = {
  isValid: (): boolean => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      return false;
    }

    try {
      const data = jwt_decode(token);

      return Boolean(data);
    } catch {
      return false;
    }
  },

  getTokenData: (): ITokenPayload => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      return {
        username: ''
      };
    }

    try {
      const data = jwt_decode<ITokenPayload>(token);

      return data;
    } catch {
      return {
        username: ''
      };
    }
  }
};
