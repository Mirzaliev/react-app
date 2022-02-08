import { Auth0State, initialAuthState, User } from './auth0-state';
import { createContext } from 'react';

export interface Auth0ContextInterface<TUser extends User = User> extends Auth0State<TUser> {

  loginWithJira: (options: object) => Promise<boolean> | void;

  loginWithGitHub: (options: object) => Promise<boolean>;
}

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};

const initialContext = {
  ...initialAuthState,
  loginWithJira: stub,
  loginWithGitHub: stub,
};

const Auth0Context = createContext<Auth0ContextInterface>(initialContext);

export default Auth0Context;
