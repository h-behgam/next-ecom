export type Isignup = Record<
  'name' | 'username' | 'password' | 'confirmPassword',
  string
>;

export interface IsignupError {
  name?: string[];
  username?: string[];
  password?: string[];
  confirmPassword?: string[];
  confirm?: string[];
}

export interface IsigninError {
  username?: string[];
  password?: string[];
  CredentialsSignin?: string;
}
