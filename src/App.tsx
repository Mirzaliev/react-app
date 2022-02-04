import React from 'react';

import {ErrorBoundary } from "./components";
import PageRoutes from "./routes";
import { AppStore } from "./store";

function App() {
  return (
      <ErrorBoundary name='app'>
        <AppStore>
          <PageRoutes />
        </AppStore>
      </ErrorBoundary>
  );
}

export default App;
