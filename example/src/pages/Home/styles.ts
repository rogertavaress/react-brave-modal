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

  h2 {
    margin-top: 30px;
    margin-bottom:15px;
  }

  div {
    display: flex;

    button + button {
      margin-left: 10px;
    }

    button {
      background: #Ff9000;
      border: 0;
      border-radius: 5px;
      padding: 10px 20px;
      color: #fff;
  }
  }
`;
