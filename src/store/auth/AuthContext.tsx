import { AuthService } from '../../services/auth';
import React, { ComponentType, createContext, FC, useContext } from 'react';

import { AuthServiceProps } from '../../services/auth/AuthService';

export type AuthContextProps = {
  authService: AuthService;
};

export type AuthContextType = AuthContextProps | undefined;

export const AuthContext =
    createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export function withAuth<T>(
  ComponentWrapper: ComponentType<T & AuthServiceProps>
): FC<T & AuthServiceProps> {
  const WrapperComponent = (props: T & AuthServiceProps): JSX.Element => {
    const authProps = useAuth();
    return <ComponentWrapper {...authProps} {...props} />;
  };

  WrapperComponent.displayName =
    'withAuth_' + (ComponentWrapper.displayName || ComponentWrapper.name);
  return WrapperComponent;
}
