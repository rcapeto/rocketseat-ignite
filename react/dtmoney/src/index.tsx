import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AppCtxProvider } from './context';
import { startServer } from './server';
import GlobalStyle from './styles/global';

startServer();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppCtxProvider>
      <App />
    </AppCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);