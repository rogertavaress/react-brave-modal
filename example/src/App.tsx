import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ModalProvider } from '../../';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
