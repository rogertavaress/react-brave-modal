import styled from 'styled-components';
import background from '../../assets/images/baloes.svg';

export const Container = styled.div`
  display: flex;
  height: 600px;
  background: url(${background}) no-repeat top -80px left -35px;
  background-size: 300px;
`;

export const ContentArea = styled.div`
  align-self: flex-end;
  margin: 0 20px 20px;

  svg {
    width: 100%;
    color: green;
    margin-bottom: 20px;
  }

  h2 {
    color: #707070;
    font-weight: 300;
    font-size: 30px;
    padding: 0;
    text-align: center;
  }

  > div{
    display: flex;
    flex-direction: column;
    margin: 25px 0;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-weight: bold;

      h3 {
        color: #04ae67;
        font-size: 30px;
      }

      h3 + h3 {
        color: #d0d0d0;
        text-decoration: line-through;
        margin-left: 5px;
      }

    }

    span {
      display: block;
      text-align: center;
      color: #04ae67;
    }
  }

  button {
    background: #107eb1;
    border: 0;
    border-radius: 30px;
    width: 100%;
    padding: 20px 0;
    color: #fff;
    font-weight: 300;
    font-size: 18px;
  }
`;
