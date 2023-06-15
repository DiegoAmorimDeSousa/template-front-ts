import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--background-general);
  }
  
  html, body, #root {
    height: 100%;
  }

  *, button, input, select {
    border: 0;
    outline: 0;
    font-family: 'Archivo', -apple-system, sans-serif;
  }

  a {
    text-decoration: none;
    background: transparent;
    text-transform: none;
    color: inherit
  }
`;
