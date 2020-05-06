import React from 'react';
import {FaCheckCircle} from 'react-icons/fa'

import { Container, ContentArea } from './styles';

const PayHappy: React.FC = () => {
  return (
    <Container>
      <ContentArea>
        <FaCheckCircle size={70} />
        <h2>Parabéns!</h2>
        <h2>Falta pouco para realizar a sua publicação</h2>
        <div>
          <div>
            <h3>R$ 9 /</h3>
            <h3>R$ 15</h3>
          </div>

          <span>Válido por 6 meses</span>
        </div>
        <button>Pague com Paypal</button>
      </ContentArea>
    </Container>
  );
}

export default PayHappy;
