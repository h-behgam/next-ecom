export type Isignup = Record<
  'username' | 'password' | 'confirmPassword',
  string
>;

export interface IsignupError {
  username?: string[];
  password?: string[];
  confirmPassword?: string[];
  confirm?: string[];
}

export interface IsigninError {
  username?: string[];
  password?: string[];
  CredentialsSignin?: string
}
