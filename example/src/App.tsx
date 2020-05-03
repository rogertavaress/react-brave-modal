import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ModalProvider } from '../../';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ModalProvider>
      <Routes />
    </ModalProvider>
    <GlobalStyle />
  </Router>
);

export default App;
