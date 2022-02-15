import React from 'react';

import { ErrorBoundary } from './components';
import PageRoutes from './routes';
import Auth0Provider from "./store/auth0/auth0Provider";


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
