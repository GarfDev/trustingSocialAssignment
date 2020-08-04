/*eslint max-len: [2, 256, 4]*/ // maximum length of 80 characters

import {createGlobalStyle} from 'styled-components';

const BaseStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&family=Ubuntu+Mono&family=Comic+Neue&display=swap');

  #app {
    width: 100%;
  }

  body {
    align-items: center;
    background: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.color};
    border-color: ${({theme}) => theme.borderColor};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default BaseStyle;
