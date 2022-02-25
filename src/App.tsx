import React, { useContext, useState } from 'react';

import { ErrorBoundary } from './components';
import PageRoutes from './routes';
import Auth0Provider from "./store/auth0/auth0Provider";
import { ThemeProvider } from "./components/ui/theme/Theme";





function App() {
  return (
    <ErrorBoundary name="app">
      <Auth0Provider>
        <ThemeProvider forcedTheme="light" enableSystem={false}>
          <PageRoutes />
        </ThemeProvider>
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default App;
