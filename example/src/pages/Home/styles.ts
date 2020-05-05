import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    margin-bottom:20px;
  }

  button {
    background: #ff7918;
    border: 0;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    margin-bottom: 10px;
  }
`;
