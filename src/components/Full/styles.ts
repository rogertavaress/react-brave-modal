import styled from 'styled-components';
import { animated } from 'react-spring';
import appearContentArea from '../../tools/appearContentArea';

export const Content = styled.div`
  padding: 30px;
  color: #000;
  @media (max-width: 250px) {
    padding: 30px 15px;
  }

  h2 {
  }

  p {
    margin: 15px 0;
  }
`;

export const ContentArea = styled(animated.div)`
  position: relative;
  background: white;
  width: 100vw;
  height: 100vh;
  border-radius: 5px;
  box-sizing: border-box;
  animation: ${appearContentArea} 1s;
  overflow: auto;

  & > button {
    display: flex;
    position: absolute;
    top: 10px;
    right: 5px;
    border: 0;
    background: transparent;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
