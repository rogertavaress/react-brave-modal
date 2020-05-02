import styled, { keyframes } from 'styled-components';

const appearContainer = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  animation: ${appearContainer} 1s;
`;

export const Content = styled.div`
  color: #000;
`;

export const ContentArea = styled.div`
  position: relative;
  background: white;
  max-width: 500px;
  max-height: 80vh;
  border-radius: 5px;
  box-sizing: border-box;
  animation: ${appearContentArea} 2s;
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
