import { IUser } from '../models/database/user';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
      JWT_REFRESH_SECRET: string;
      JWT_REFRESH_EXPIRATION: string;
      ROOT_ROUTE: string;
    }
  }

  namespace Express {
    export interface Request {
      user: IUser;
    }
  }

  interface Crypto {
    randomUUID: () => string;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
