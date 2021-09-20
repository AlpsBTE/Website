import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';

console.log(process.env.REACT_APP_X);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
