import {StoreState} from "./AppStore";

export interface ActionReducer {
  [key: string]: string | object
}

const AppReducer = (state: StoreState, action: ActionReducer) => {

  switch (action.type || action.action) {
    case 'CURRENT_USER':

      return {
        ...state,
        currentUser: action?.currentUser || action?.payload,
      };
    case 'LOG_IN':
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default AppReducer;