import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
      background: #312E38;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Roboto', sans-serif;
      font-size:16px;
    }

    button {
      cursor: pointer;
    }
`;
