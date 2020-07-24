import { createGlobalStyle } from 'styled-components';

import './global.css';

import InterRegularWoff2 from '../assets/fonts/Inter-Regular.woff2';
import InterRegularWoff from '../assets/fonts/Inter-Regular.woff';

import InterBoldWoff2 from '../assets/fonts/Inter-Bold.woff2';
import InterBoldWoff from '../assets/fonts/Inter-Bold.woff';

// Why are the @font-face rules extracted to be used on its own? 
// GlobalStyle causes custom fonts to be re-requested when
// it get rerendered, or some other possible behaviors like
// rehyration, component state change.
// This will cause font loading problems like FOIT and FOUT. Bad bad.
export const fontFaceRules = `
  @font-face {
    font-family: "Inter";
    src: url(${InterRegularWoff2}) format('woff2'),
         url(${InterRegularWoff}) format('woff);
    font-weight: 400;
  }

  @font-face {
    font-family: "Inter";
    src: url(${InterBoldWoff2}) format('woff2'),
         url(${InterBoldWoff}) format('woff);
    font-weight: 700;
  }
`;

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;