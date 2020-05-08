import React from 'react';

import {Container, Content} from './styles';

import Image from '../../assets/images/background.jpg';
import Logo from '../../assets/images/logo.png';

const Subscribe: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Image} alt="Pessoas programando" />
      </Content>
      <Content>
        <div>
          <img src={Logo} alt="Logo" />
          <p>Sign up for all the latest <img src={Logo} alt="Logo" /> news, offers and <strong>30%</strong> off your first order.</p>
          <input type="text" placeholder="Email Address"/>
          <div>
            <div><input type="radio" /> MAN'S</div>
            <div><input type="radio" /> WOMAN'S</div>
          </div>
          <button>Subscribe</button>
        </div>
      </Content>
    </Container>
  );
}

export default Subscribe;
