import { Auth0State, User } from './auth0-state';
import { Actions } from '../actions';

export type ChangeThemeAction = {
  type: Actions.CHANGE_THEME;
  payload: string;
};

export type SetUserType = {
  type: Actions.SET_USER;
  payload: User;
};

export type StartLoading = {
  type: Actions.START_LOADING;
};

export type ErrorType = {
  type: Actions.ERROR;
  payload: Error
};

export type ActionTypes = ChangeThemeAction | SetUserType | StartLoading | ErrorType;

const Auth0Reducer = (state: Auth0State, action: ActionTypes) => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload,
      };
    case Actions.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Auth0Reducer;
