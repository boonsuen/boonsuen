import { createGlobalStyle } from 'styled-components';

export const fontFaceRules = `
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter.var.woff2") format('woff2 supports variations'),
        url("/fonts/Inter.var.woff2") format('woff2-variations');
    font-weight: 100 900;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .container {
    max-width: 90%;
    width: 800px;
    margin: auto;
  }
`;