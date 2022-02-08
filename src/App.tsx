import React from 'react';

import { ErrorBoundary } from './components';
import PageRoutes from './routes';

import { AuthProvider } from './store/auth';
import { AuthService } from './services/auth';
import Auth0Provider from "./store/auth0/auth0Provider";

const authService = new AuthService({
  clientId: process.env.REACT_APP_CLIENT_ID || 'CHANGEME',
  location: window.location,
  provider: process.env.REACT_APP_PROVIDER || 'https://sandbox.auth.ap-southeast-2.amazoncognito.com/oauth2',
  redirectUri: process.env.REACT_APP_REDIRECT_URI || window.location.origin,
  scopes: ['openid', 'profile']
});

function App() {
  return (
    <ErrorBoundary name="app">
      <Auth0Provider>
        <PageRoutes />
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default App;
