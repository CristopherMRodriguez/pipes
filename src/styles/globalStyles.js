import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    background: ${(props) => props.theme.colors.backgrounds.home};
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.font.font1.med};
    color: ${(props) => props.theme.colors.primary.light};
  }
  h1, h2, h3, h4, h5, h6 {
  }
  h1 {
    font-size: 80px;
    transform: scaleY(1.3);
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`

export default GlobalStyles;
