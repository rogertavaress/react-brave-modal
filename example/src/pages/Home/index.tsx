import React, { useCallback } from 'react';

import PayHappy from '../../components/PayHappy';
import Subscribe from '../../components/Subscribe';

import { Container } from './styles';

import {useModal} from '../../react-brave-modal';

import logo from '../../assets/images/rbm.png';

const Home: React.FC = () => {
  const {showModal} = useModal();

  const asyncFuction = useCallback(async ()=>{
    await console.log('Async');
  },[]);

  const syncFuction = useCallback(()=>{
    console.log('sync');
  },[]);

  return (
    <>
  <Container>
    <img src={logo} alt="React Brave Modal" />
    <h2>Simple</h2>
    <div>
      <button type="button" onClick={()=>showModal({ type:'simple', closeActionSync: syncFuction, closeAction: asyncFuction, title: 'Meu Título Bonitão' , text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`})}>Show Simple</button>
      <button type="button" onClick={()=>showModal({ type:'full', closeActionSync: syncFuction, closeAction: asyncFuction, title: 'Meu Título Bonitão' , text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`})}>Show Full</button>
    </div>
    <h2>Custom</h2>
    <div>
      <button type="button" onClick={()=>showModal({ data: <PayHappy />, type:'simple', closeActionSync: syncFuction, closeAction: asyncFuction})}>Show Simple - PayHappy</button>
      <button type="button" onClick={()=>showModal({ data: <Subscribe />, type:'full', closeActionSync: syncFuction, closeAction: asyncFuction})}>Show Full - Subscribe</button>
    </div>
    <h2>Type: Custom </h2>
    <div>
      <button type="button" onClick={()=>showModal({ data: <PayHappy />, type:'custom', closeActionSync: syncFuction, closeAction: asyncFuction})}>Show - PayHappy</button>
      <button type="button" onClick={()=>showModal({ data: <Subscribe />, type:'custom', closeActionSync: syncFuction, closeAction: asyncFuction})}>Show - Subscribe</button>
    </div>
  </Container>
   </>);
};

export default Home;
