import { User } from './auth0-state';
import Auth0Context, { Auth0ContextInterface } from './auth0Context';
import { useContext } from 'react';

const useAuth0 = <TUser extends User = User>(): Auth0ContextInterface<TUser> =>
  useContext(Auth0Context) as Auth0ContextInterface<TUser>;

export default useAuth0;
