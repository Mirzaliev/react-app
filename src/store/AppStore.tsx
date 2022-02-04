import {ComponentType, createContext, FC, PropsWithChildren, ReactNode, useContext, useReducer} from "react";
import AppReducer, {ActionReducer} from "./AppReducer";

export interface StoreState {
  isAuth: boolean,
  user?: object | null,
}

const initialStoreState: StoreState = {
  isAuth: false,
};

type StoreContextType = [StoreState, React.Dispatch<ActionReducer> ];

const AppContext = createContext<StoreContextType>([initialStoreState, () => null] );

const AppStore = ({ children } : { children: ReactNode } ) => {

  const initialState: StoreState = {
    ...initialStoreState,
     isAuth: Boolean(localStorage.getItem('auth')),
  };


  const defValue: StoreContextType = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={defValue}> {children} </AppContext.Provider>;
};


const useStore = (): StoreContextType => useContext(AppContext);

interface WithAppStoreProps {
  store: StoreContextType;
}

const withAppStoreHOC =
    (Component: ComponentType<WithAppStoreProps>): FC =>
        (props: PropsWithChildren<object>) => {
          return <Component {...props} store={ useStore() } />;
        };


export { AppStore, AppContext, useStore, withAppStoreHOC};