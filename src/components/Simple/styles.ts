import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

const appearContentArea = keyframes`
  from {
    top: -100vh;
  }
  to {
    top: 0px;
  }
  leaves {
    top: 100vh;
  }
`;

export const Content = styled.div`
  padding: 20px;
  color: #000;

  h2 {
  }

  p {
    margin: 15px 0;
  }
`;

export const ContentArea = styled(animated.div)`
  position: relative;
  background: white;
  width: 500px;
  max-height: 80vh;
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
