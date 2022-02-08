import { AppContext, AppContextProps, AppContextType, defaultAppContextState } from './AppContext';
import React, { ReactNode, useReducer } from 'react';
import AppReducer from './AppReducer';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = (props: AppProviderProps): JSX.Element => {
  const { children } = props;
  const state: AppContextProps = {
    ...defaultAppContextState,
    //themeState: Boolean(false)
  };

  const value: AppContextType = useReducer(AppReducer, state);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
