import React from 'react';
import * as fromRouter from '@alpsbte/router';
import { Provider as StoreProvider } from 'mobx-react';

// stores
import { languageStore } from '@alpsbte/shared/stores';

const stores = {
  languageStore,
};

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider {...stores}>
        <fromRouter.Router />
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
