import React from 'react';
import * as fromRouter from '@alpsbte/router';
import { Provider as StoreProvider } from 'mobx-react';
import 'reflect-metadata';

// stores
import { languageStore } from '@alpsbte/shared/stores';

const stores = {
  languageStore,
};

export const App = () => {
  return (
    <React.StrictMode>
      <StoreProvider {...stores}>
        <fromRouter.Router />
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
