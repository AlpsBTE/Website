import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '../../../../.env' });

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
