import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import 'reflect-metadata';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
