import { AppContextProps } from './AppContext';
import { Actions } from './actions';

export type ChangeThemeAction = {
  type: Actions.CHANGE_THEME;
  payload: string;
};

export type SetUserType = {
  type: Actions.SET_USER;
  payload: {
    id: number;
    name: string;
  };
};

export type ActionTypes = ChangeThemeAction | SetUserType;

const AppReducer = (state: AppContextProps, action: ActionTypes) => {
  switch (action.type) {
    case Actions.CHANGE_THEME:
      return {
        ...state,
        themeState: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
