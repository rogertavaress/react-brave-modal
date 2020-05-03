import React from 'react';

// import { Container } from './styles';

import {useModal} from '../../../../';

const Dashboard: React.FC = () => {
  const {showModal} = useModal();

  return (
  <>
    <h1>Dashboard</h1>
    <button type="button" onClick={()=>showModal({ data:null, type:'simple'})}>Show</button>
  </>);
};

export default Dashboard;
