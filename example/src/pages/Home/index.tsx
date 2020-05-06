import React from 'react';

import PayHappy from '../../components/PayHappy';

import { Container } from './styles';

import {useModal} from '../../../../';

const Home: React.FC = () => {
  const {showModal} = useModal();

  return (
  <Container>
    <h1>React Brave Modal</h1>
    <h2>Simple</h2>
    <div>
      <button type="button" onClick={()=>showModal({ type:'simple', title: 'Meu Título Bonitão' , text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`})}>Show Simple</button>
      <button type="button" onClick={()=>showModal({ type:'full', title: 'Meu Título Bonitão' , text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`})}>Show Full</button>
    </div>
    <h2>Custom</h2>
    <div>
      <button type="button" onClick={()=>showModal({ data: PayHappy, type:'simple'})}>Show Simple - PayHappy</button>
      <button type="button" onClick={()=>showModal({ type:'full', title: 'Meu Título Bonitão' , text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`})}>Show Full</button>
    </div>
  </Container>);
};

export default Home;
