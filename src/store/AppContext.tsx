import React, { createContext, Dispatch, useContext } from 'react';
import { ActionTypes } from './AppReducer';

export type AppContextProps = {
  themeState: string;
};

export const defaultAppContextState: AppContextProps = {
  themeState: 'default--theme',
};

export type AppContextType = [AppContextProps, Dispatch<ActionTypes>];

export const AppContext = createContext<AppContextType>([defaultAppContextState, () => null]);

export const useStore = (): AppContextType => useContext(AppContext);
