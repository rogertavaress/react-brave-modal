import React from 'react';

// import { Container } from './styles';

import {useModal} from '../../../../';

const Home: React.FC = () => {
  const {showModal} = useModal();

  return (
  <>
    <h1>Home</h1>
    <button type="button" onClick={()=>showModal({ data:null, type:'simple'})}>Show</button>
  </>);
};

export default Home;
