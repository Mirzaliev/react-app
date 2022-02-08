export interface User {
  id: number;
  fullName: string;
}

export interface Auth0State<TUser extends User = User> {
  error?: Error;
  isAuth: boolean;
  isLoading: boolean;
  user?: TUser;
}

export const initialAuthState: Auth0State = {
  isAuth: false,
  isLoading: false,
};
