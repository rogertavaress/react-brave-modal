import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
`;

export const Content = styled.div`
  height: calc(100vh - 20px);
  max-width: 50vw;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 5px 0 0 5px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw;
    height: 100%;
    padding: 40px;

    > img {
      max-width: 150px;
    }

    p {
      font-weight: 300;
      font-size: 25px;
      margin: 40px 0 20px;

      > img {
        height: 20px;
      }

      strong {
        font-weight: bold;
      }
    }

    input {
      border: 0;
      border-bottom: 1px solid gray;
      width: 80%;
      color: #000;
      text-align: center;

      &::placeholder {
        color: #d0d0d0;
      }
    }

    > div {
      display: flex;
      margin: 30px 0 40px;

      > div {
        display: flex;
        min-width: 150px;
        justify-content: center;
        align-items: center;

        > input {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
          margin-right: 5px;
          background: #eee;
          border: 0;
        }
      }
    }

    button {
      border: 2px solid #000;
      background: #fff;
      padding: 5px 10px;
      font-weight: bold;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;
