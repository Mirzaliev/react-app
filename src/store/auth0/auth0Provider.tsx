import React, {ReactNode, useCallback, useEffect, useMemo, useReducer} from 'react';
import { AuthService } from '../../services/auth';
import { initialAuthState } from './auth0-state';
import Auth0Reducer from './auth0-reducer';
import Auth0Context from './auth0Context';
import { Actions } from '../actions';
import { loginError } from "./utils";

interface Auth0ProviderProps {
  children: ReactNode;
}

const Auth0Provider = ({ children }: Auth0ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(Auth0Reducer, initialAuthState);

  useEffect(() => {
    console.log('Auth0Provider запускается ', new Date());
  }, []);

  const loginWithJira = useCallback( (opts?: object) => {

      dispatch({ type: Actions.START_LOADING });
      fetch('https://jsonplaceholder.typihgcode.com/photohs').then(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(() => {
          dispatch({
            type: Actions.SET_USER,
            payload: {
              id: 1222,
              fullName: 'Мирзалиев Арсен',
            },
          });
          return Promise.resolve(true);
        });
      }).catch((e) => {
        console.log(loginError(e));
        dispatch(
            { type: Actions.ERROR, payload: loginError({ error: e.message }
            ) });
      });

  }, []);

  const loginWithGitHub = useCallback((opts?: object) => {
    console.log('Это из loginWithGitHub- loginWithJira', opts);
    return Promise.resolve(true);
  }, []);

  const contextValue = useMemo(() => {
    return {
      ...state,
      loginWithJira,
      loginWithGitHub,
    };
  }, [loginWithJira, state, loginWithGitHub]);

  return <Auth0Context.Provider value={contextValue}>{children}</Auth0Context.Provider>;
};

export default Auth0Provider;
