import styled from 'styled-components';
import { animated } from 'react-spring';
import appearContentArea from '../../tools/appearContentArea';

export const Content = styled.div`
  color: #000;

  h2 {
    padding: 20px 20px 0;
  }

  p {
    padding: 15px 20px 20px;
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
    z-index: 9999;

    svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
