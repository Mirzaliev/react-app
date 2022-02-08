import { AuthContext } from './AuthContext';
import React, { ReactNode } from 'react';
import { AuthService } from '../../services/auth';

interface AuthProviderProps {
  children: ReactNode;
  authService: AuthService;
}

export const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const { authService, children } = props;

  return <AuthContext.Provider
      value={{ authService }}>{children}</AuthContext.Provider>;
};
