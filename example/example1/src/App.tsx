import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { ModalProvider } from '../../../';

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
