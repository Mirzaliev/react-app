import React, { useState } from 'react';

import { ErrorBoundary } from './components';
import PageRoutes from './routes';
import Auth0Provider from "./store/auth0/auth0Provider";
import { ThemeProvider } from "./components/ui/theme/Theme";
import { ThemeModes } from "./components/ui/theme/types";



function App() {
  const [themeMode, setThemeMode] = useState<ThemeModes>('light');
  const toggleMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };
  return (
    <ErrorBoundary name="app">
      <Auth0Provider>
        <ThemeProvider mode={themeMode}>
          <button onClick={() => toggleMode()}>Поменять тему</button>
          <PageRoutes />
        </ThemeProvider>
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default App;
