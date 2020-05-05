import React from 'react';

import { Container } from './styles';

import {useModal} from '../../../../';

const Home: React.FC = () => {
  const {showModal} = useModal();

  return (
  <Container>
    <h1>React Brave Modal</h1>
    <button type="button" onClick={()=>showModal({ data:null, type:'simple'})}>Show Simple</button>
    <button type="button" onClick={()=>showModal({ data:null, type:'full'})}>Show Full</button>
  </Container>);
};

export default Home;
