import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-app-polyfill/ie9';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
