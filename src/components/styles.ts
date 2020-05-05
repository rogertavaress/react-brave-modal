import styled from 'styled-components';
import appearContainer from '../tools/appearContainer';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  div {
    z-index: 1;
  }
`;

export const Fundo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  animation: ${appearContainer} 0.2s;
  border: 0;

  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
