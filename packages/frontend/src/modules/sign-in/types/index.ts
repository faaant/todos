export interface ISignInForm {
  nameOrEmail: string;
  password: string;
  [key: string]: string | boolean;
}
